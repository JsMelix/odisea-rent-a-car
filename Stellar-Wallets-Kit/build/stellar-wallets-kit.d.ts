import * as lit from 'lit';
import { ReactiveController, ReactiveControllerHost, LitElement } from 'lit';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

interface IModalTheme {
    bgColor: string;
    textColor: string;
    solidTextColor: string;
    headerButtonColor: string;
    dividerColor: string;
    helpBgColor: string;
    notAvailableTextColor: string;
    notAvailableBgColor: string;
    notAvailableBorderColor: string;
}
/**
 * @deprecated - This type is deprecated, use `IModalTheme` instead
 */
type ITheme = IModalTheme;
interface IButtonTheme {
    bgColor: string;
    textColor: string;
    solidTextColor: string;
    dividerColor: string;
    buttonPadding: string;
    buttonBorderRadius: string;
}
declare enum WalletNetwork {
    PUBLIC = "Public Global Stellar Network ; September 2015",
    TESTNET = "Test SDF Network ; September 2015",
    FUTURENET = "Test SDF Future Network ; October 2022",
    SANDBOX = "Local Sandbox Stellar Network ; September 2022",
    STANDALONE = "Standalone Network ; February 2017"
}
declare enum ModuleType {
    HW_WALLET = "HW_WALLET",
    HOT_WALLET = "HOT_WALLET",
    BRIDGE_WALLET = "BRIDGE_WALLET",
    AIR_GAPED_WALLET = "AIR_GAPED_WALLET"
}
interface ISupportedWallet {
    id: string;
    name: string;
    type: string;
    isAvailable: boolean;
    isPlatformWrapper: boolean;
    icon: string;
    url: string;
}
/**
 * The Kit Actions are the methods the kit use to interact with the Wallet/Service
 */
interface KitActions {
    /**
     * Function used to request the public key from the active account or
     * specific path on a wallet.
     *
     * @param params
     * @param params.path - The path to tell the wallet which position to ask. This is commonly used in hardware wallets.
     * @param params.skipRequestAccess - Freighter separates the access request from the logic of getting the address, if this is set to true we will avoid requesting the access
     *
     * @return Promise<{ address: string }>
     */
    getAddress(params?: {
        path?: string;
        skipRequestAccess?: boolean;
    }): Promise<{
        address: string;
    }>;
    /**
     * A function to request a wallet to sign a built transaction in its XDR mode
     *
     * @param xdr - A Transaction or a FeeBumpTransaction
     * @param opts - Options compatible with https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0043.md#signtransaction
     * @param opts.networkPassphrase - The Stellar network to use when signing
     * @param opts.address - The public key of the account that should be used to sign
     * @param opts.path - This options is added for special cases like Hardware wallets
     *
     * @return Promise<{ signedTxXdr: string; signerAddress: string }>
     */
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    /**
     * A function to request a wallet to sign an AuthEntry XDR.
     *
     * @param authEntry - An XDR string version of `HashIdPreimageSorobanAuthorization`
     * @param opts - Options compatible with https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0043.md#signauthentry
     * @param opts.networkPassphrase - The Stellar network to use when signing
     * @param opts.address - The public key of the account that should be used to sign
     * @param opts.path - This options is added for special cases like Hardware wallets
     *
     * @return - Promise<{ signedAuthEntry: string; signerAddress: string }>
     */
    signAuthEntry(authEntry: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    /**
     * A function to request a wallet to sign an AuthEntry XDR.
     *
     * @param message - An arbitrary string rather than a transaction or auth entry
     * @param opts - Options compatible with https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0043.md#signmessage
     * @param opts.networkPassphrase - The Stellar network to use when signing
     * @param opts.address - The public key of the account that should be used to sign
     * @param opts.path - This options is added for special cases like Hardware wallets
     *
     * @return - Promise<{ signedMessage: string; signerAddress: string }>
     */
    signMessage(message: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    /**
     * A function to request the current selected network in the wallet. This comes
     * handy when you are dealing with a wallet that doesn't allow you to specify which network to use (For example Lobstr and Rabet)
     *
     * @return - Promise<{ network: string; networkPassphrase: string }>
     */
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
    /**
     * This method should be included if your wallet have some sort of async connection, for example WalletConnect
     * Once this method is called, the module should clear all connections
     */
    disconnect?(): Promise<void>;
}
/**
 * A module is a "plugin" we can use within the kit so is able to handle a
 * specific type of wallet/service. There are some modules that are already
 * in the kit but any wallet developer can create their own plugins
 */
interface ModuleInterface extends KitActions {
    /**
     * The Module type is used for filtering purposes, define the correct one in
     * your module so we display it accordingly
     */
    moduleType: ModuleType;
    /**
     * This ID of the module, you should expose this ID as a constant variable
     * so developers can use it to show/filter this module if they need to.
     */
    productId: string;
    /**
     * This is the name the kit will show in the builtin Modal.
     */
    productName: string;
    /**
     * This is the URL where users can either download, buy and just know how to
     * get the product.
     */
    productUrl: string;
    /**
     * This icon will be displayed in the builtin Modal along with the product name.
     */
    productIcon: string;
    /**
     * This function should return true is the wallet is installed and/or available.
     * If for example this wallet/service doesn't need to be installed to be used,
     * return `true`.
     *
     * Important:
     * Your wallet/library needs to be able to answer this function in less than 500ms.
     * Otherwise, the kit will show it as unavailable
     *
     */
    isAvailable(): Promise<boolean>;
    /**
     * This method will take care of letting the kit know if the user is currently using this wallet to open the dapp.
     * An example will be how Freighter, xBull, Lobstr, etc have in-app browsers in their mobile versions
     *
     * Important:
     * Your wallet/library needs to be able to answer this request in less than 500ms.
     * Otherwise, the kit will assume is not wrapping the site
     */
    isPlatformWrapper?(): Promise<boolean>;
}

interface StellarWalletsKitParams {
    selectedWalletId?: string;
    network: WalletNetwork;
    modules: ModuleInterface[];
    /**
     * @deprecated - This parameter will be removed in a future release, use `modalTheme` instead
     */
    theme?: IModalTheme;
    modalTheme?: IModalTheme;
    buttonTheme?: IButtonTheme;
}
declare class StellarWalletsKit implements KitActions {
    private buttonElement?;
    private modalElement?;
    private readonly modules;
    private get selectedModule();
    constructor(params: StellarWalletsKitParams);
    /**
     * This method will return an array with all wallets supported by this kit but will let you know those the user have already installed/has access to
     * There are wallets that are by default available since they either don't need to be installed or have a fallback
     */
    getSupportedWallets(): Promise<ISupportedWallet[]>;
    setWallet(id: string): void;
    getAddress(params?: {
        path?: string;
        skipRequestAccess?: boolean;
    }): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(authEntry: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(message: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
    disconnect(): Promise<void>;
    isButtonCreated(): boolean;
    /**
     * This method allows developers to set their own buttons (for connection and disconnection) on their website
     * while letting the kit handle the logic behind opening the modal, setting and removing the address from the storage, etc
     */
    assignButtons(params: {
        connectEl: HTMLElement | string;
        disconnectEl?: HTMLElement | string;
        onConnect: (response: {
            address: string;
        }) => void;
        onDisconnect: () => void;
    }): void;
    /**
     *
     * @param params {Object}
     * @param params.container {HTMLElement} - The container where the button should be rendered.
     * @param params.onConnect {Function} - This callback is called after the user has clicked the button and selected a wallet
     * @param params.onClosed {Function} - This callback is called if the user closes the modal without selecting any wallet.
     * @param params.onError {Function} - This callback is called if there is an error while trying to get the address once the user has selected the wallet from the modal.
     * @param params.onDisconnect {Function} - This callback is called once the user disconnects from the dropdown modal
     * @param params.horizonUrl {String} - If this url is set, the dropdown modal will show the current XLM balance of the address fetched from the wallet
     * @param params.buttonText {String} - A custom text to set inside the button.
     */
    createButton(params: {
        container: HTMLElement;
        onConnect: (response: {
            address: string;
        }) => void;
        onClosed?: (err: Error) => void;
        onError?: (err: Error) => void;
        onDisconnect: () => void;
        horizonUrl?: string;
        buttonText?: string;
    }): Promise<void>;
    /**
     * Removes the button elements from the HTML and from the kit's instance.
     *
     * @param params.skipDisconnect - Set this to `true` if you want to prevent that we disconnect (for example, disconnecting WalletConnect or removing the address)
     */
    removeButton(params?: {
        skipDisconnect?: boolean;
    }): Promise<void>;
    openModal(params: {
        onWalletSelected: (option: ISupportedWallet) => void;
        onClosed?: (err: Error) => void;
        modalTitle?: string;
        notAvailableText?: string;
    }): Promise<void>;
}

declare class ReactiveState<T> implements ReactiveController {
    private host;
    private source;
    value?: T | undefined;
    sub: Subscription | null;
    value$: BehaviorSubject<T | undefined>;
    constructor(host: ReactiveControllerHost, source: Observable<T>, value?: T | undefined);
    hostConnected(): void;
    hostDisconnected(): void;
}

declare enum ModalThemeType {
    DARK = "DARK",
    LIGHT = "LIGHT"
}
declare const ModalThemes: {
    [key in ModalThemeType]: IModalTheme;
};
declare class StellarWalletsModal extends LitElement {
    static styles: lit.CSSResult[];
    /**
     * This value is used to tell the modal that it should not update the value
     * `showModal` at any moment, this comes handy when the state wants to be handled by another source
     */
    ignoreShowStatus: boolean;
    showModal: boolean;
    closingModal: boolean;
    modalTitle: string;
    notAvailableText: string;
    allowedWallets: ReactiveState<ISupportedWallet[]>;
    theme: ReactiveState<IModalTheme | undefined>;
    connectedCallback(): void;
    closeModal(): Promise<void>;
    pickWalletOption(option: ISupportedWallet): Promise<void>;
    /**
     * This function gets the list of the wallets following the logic from this task https://github.com/Creit-Tech/Stellar-Wallets-Kit/issues/28
     * It follows this order:
     * 1- Wallet last used by wallet selector
     * 2- If not wallet last use, wallets detected in the browser
     * 3- Wallet ordering as defined by the developer
     *
     */
    private getSortedList;
    private getPlatformWrapper;
    private getThemeStyles;
    render(): lit.TemplateResult<1>;
}

declare enum ButtonThemeType {
    DARK = "DARK",
    LIGHT = "LIGHT"
}
declare const ButtonThemes: {
    [key in ButtonThemeType]: IButtonTheme;
};
declare class StellarWalletsButton extends LitElement {
    static styles: lit.CSSResult[];
    buttonText: string;
    showDropdown: boolean;
    accountBalance?: string;
    showCopiedMessage: boolean;
    activeAddress: ReactiveState<string | undefined>;
    theme: ReactiveState<IButtonTheme | undefined>;
    fetchAddressSubscription: Subscription | undefined;
    private get getThemeStyles();
    onButtonClicked(): void;
    closeDropdown(): void;
    disconnect(): void;
    copyPublicKey(): Promise<void>;
    startBalanceFetcher(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): lit.TemplateResult<1>;
}

declare class StellarSelectorModal extends LitElement {
    static styles: lit.CSSResult[];
    showModal: boolean;
    loadingAccounts: boolean;
    closingModal: boolean;
    modalTitle: string;
    accounts: {
        index: number;
        publicKey: string;
    }[];
    connectedCallback(): void;
    pickAccount(option: {
        publicKey: string;
        index: number;
    }): Promise<void>;
    closeModal(): Promise<void>;
    render(): lit.TemplateResult<1>;
}

/**
 * This method returns all modules that don't require extra configuration before they can be loaded
 * You can provide a filter function if needed
 */
declare function allowAllModules(opts?: {
    filterBy: (module: ModuleInterface) => boolean;
}): ModuleInterface[];
/**
 * This method only returns those modules from wallet that follow exactly the SEP-43 standard and don't require extra configuration before they can be loaded
 * You can provide a filter function if needed
 */
declare function sep43Modules(opts?: {
    filterBy: (module: ModuleInterface) => boolean;
}): ModuleInterface[];
declare function parseError(e: any): {
    code: any;
    message: any;
    ext: any;
};

declare const XBULL_ID = "xbull";
declare class xBullModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    isAvailable(): Promise<boolean>;
    getAddress(): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(message: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
}

declare const FREIGHTER_ID = "freighter";
declare class FreighterModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    runChecks(): Promise<void>;
    isAvailable(): Promise<boolean>;
    getAddress(params: {
        skipRequestAccess?: boolean;
    }): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(authEntry: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(message: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
}

declare const ALBEDO_ID = "albedo";
declare class AlbedoModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    isAvailable(): Promise<boolean>;
    getAddress(): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    /**
     * We understand that Albedo has a method to sign a message, but that method is not compatible with SEP-0043
     */
    signMessage(): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
}
declare enum AlbedoNetwork {
    PUBLIC = "public",
    TESTNET = "testnet"
}

declare const RABET_ID = "rabet";
declare class RabetModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    isAvailable(): Promise<boolean>;
    getAddress(): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
}
declare enum RabetNetwork {
    PUBLIC = "mainnet",
    TESTNET = "testnet"
}

declare const LOBSTR_ID = "lobstr";
declare class LobstrModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    isAvailable(): Promise<boolean>;
    getAddress(): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
}

declare const HANA_ID = "hana";
declare class HanaModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    runChecks(): Promise<void>;
    isAvailable(): Promise<boolean>;
    getAddress(): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(authEntry: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(message: string, opts?: {
        address?: string;
    }): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
}

declare const HOTWALLET_ID = "hot-wallet";
declare class HotWalletModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    constructor();
    isAvailable(): Promise<boolean>;
    getAddress(): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        address?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(authEntry: string, opts?: {
        address?: string;
    }): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(message: string, opts?: {
        address?: string;
    }): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: WalletNetwork;
    }>;
}

declare const KLEVER_ID = "klever";
declare class KleverModule implements ModuleInterface {
    moduleType: ModuleType;
    productId: string;
    productName: string;
    productUrl: string;
    productIcon: string;
    runChecks(): Promise<void>;
    isAvailable(): Promise<boolean>;
    getAddress(): Promise<{
        address: string;
    }>;
    signTransaction(xdr: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
        submit?: boolean;
        submitUrl?: string;
    }): Promise<{
        signedTxXdr: string;
        signerAddress?: string;
    }>;
    signAuthEntry(authEntry: string, opts?: {
        networkPassphrase?: string;
        address?: string;
        path?: string;
    }): Promise<{
        signedAuthEntry: string;
        signerAddress?: string;
    }>;
    signMessage(message: string, opts?: {
        address?: string;
    }): Promise<{
        signedMessage: string;
        signerAddress?: string;
    }>;
    getNetwork(): Promise<{
        network: string;
        networkPassphrase: string;
    }>;
}

export { ALBEDO_ID, AlbedoModule, AlbedoNetwork, ButtonThemes, FREIGHTER_ID, FreighterModule, HANA_ID, HOTWALLET_ID, HanaModule, HotWalletModule, KLEVER_ID, KleverModule, LOBSTR_ID, LobstrModule, ModalThemes, ModuleType, RABET_ID, RabetModule, RabetNetwork, StellarSelectorModal, StellarWalletsButton, StellarWalletsKit, StellarWalletsModal, WalletNetwork, XBULL_ID, allowAllModules, parseError, sep43Modules, xBullModule };
export type { IButtonTheme, IModalTheme, ISupportedWallet, ITheme, KitActions, ModuleInterface, StellarWalletsKitParams };
