'use strict';

var require$$1 = require('buffer');
var require$$0$3 = require('crypto');
var require$$0$4 = require('path');
var require$$0$5 = require('fs');
var require$$2 = require('os');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function isFunction$1(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction$1(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction$1(value.remove) && isFunction$1(value.add) && isFunction$1(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction$1(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    Promise: undefined,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        return (clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

function errorContext(cb) {
    {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends$1(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends$1(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction$1(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction$1(value.next) && isFunction$1(value.error) && isFunction$1(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

function hasLift(source) {
    return isFunction$1(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends$1(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends$1(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends$1(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

var BehaviorSubject = (function (_super) {
    __extends$1(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject));

var dateTimestampProvider = {
    now: function () {
        return (Date).now();
    }};

var Action = (function (_super) {
    __extends$1(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        return this;
    };
    return Action;
}(Subscription));

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        return (clearInterval)(handle);
    },
    delegate: undefined,
};

var AsyncAction = (function (_super) {
    __extends$1(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

var AsyncScheduler = (function (_super) {
    __extends$1(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

var EMPTY = new Observable(function (subscriber) { return subscriber.complete(); });

function isScheduler(value) {
    return value && isFunction$1(value.schedule);
}

function last(arr) {
    return arr[arr.length - 1];
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : undefined;
}

var isArrayLike$1 = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

function isPromise(value) {
    return isFunction$1(value === null || value === void 0 ? void 0 : value.then);
}

function isInteropObservable(input) {
    return isFunction$1(input[observable]);
}

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction$1(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();

function isIterable(input) {
    return isFunction$1(input === null || input === void 0 ? void 0 : input[iterator]);
}

function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction$1(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

function innerFrom(input) {
    if (input instanceof Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike$1(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction$1(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
        process$1(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process$1(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}

function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}

function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}

function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}

function scheduleIterable(input, scheduler) {
    return new Observable(function (subscriber) {
        var iterator$1;
        executeSchedule(subscriber, scheduler, function () {
            iterator$1 = input[iterator]();
            executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator$1.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction$1(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return(); };
    });
}

function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable(function (subscriber) {
        executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}

function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (isArrayLike$1(input)) {
            return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw createInvalidObservableTypeError(input);
}

function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    return from(args, scheduler);
}

function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction$1(errorOrErrorFactory) ? errorOrErrorFactory : function () { return errorOrErrorFactory; };
    var init = function (subscriber) { return subscriber.error(errorFactory()); };
    return new Observable(init);
}

var EmptyError = createErrorClass(function (_super) { return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
}; });

function firstValueFrom(source, config) {
    return new Promise(function (resolve, reject) {
        var subscriber = new SafeSubscriber({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                {
                    reject(new EmptyError());
                }
            },
        });
        source.subscribe(subscriber);
    });
}

function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

function timer(dueTime, intervalOrScheduler, scheduler) {
    if (scheduler === void 0) { scheduler = async; }
    var intervalDuration = -1;
    {
        if (isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable(function (subscriber) {
        var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}

function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}

function take(count) {
    return count <= 0
        ?
            function () { return EMPTY; }
        : operate(function (source, subscriber) {
            var seen = 0;
            source.subscribe(createOperatorSubscriber(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}

function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = identity; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return operate(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
function defaultCompare(a, b) {
    return a === b;
}

function switchMap(project, resultSelector) {
    return operate(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            innerFrom(project(value, outerIndex)).subscribe((innerSubscriber = createOperatorSubscriber(subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                innerSubscriber = null;
                checkComplete();
            })));
        }, function () {
            isComplete = true;
            checkComplete();
        }));
    });
}

function takeUntil(notifier) {
    return operate(function (source, subscriber) {
        innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function () { return subscriber.complete(); }, noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}

function createState(...propsFactories) {
  const result = {
    config: {},
    state: {}
  };
  for (const {
    config,
    props
  } of propsFactories) {
    Object.assign(result.config, config);
    Object.assign(result.state, props);
  }
  return result;
}
const batchInProgress = new BehaviorSubject(false);
const batchDone$ = batchInProgress.asObservable().pipe(filter(inProgress => !inProgress), take(1));

// this is internal object that's not exported to public API
const elfHooksRegistry = {};

const registry = new Map();
const registryActions = new Subject();
registryActions.asObservable();

// @internal
function addStore(store) {
  registry.set(store.name, store);
  registryActions.next({
    type: 'add',
    store
  });
}

// @internal
function removeStore(store) {
  registry.delete(store.name);
  registryActions.next({
    type: 'remove',
    store
  });
}

let events = [];

/**
 *
 * @private function don't use
 *
 */
function _setEvent(e) {
  events.push(e);
}
function emitEvents(source) {
  if (events.length) {
    events.forEach(e => source.next(e));
  }
  events = [];
}

class Store extends BehaviorSubject {
  constructor(storeDef) {
    super(storeDef.state);
    this.storeDef = storeDef;
    this.initialState = void 0;
    this.state = void 0;
    this.batchInProgress = false;
    this.events = new Subject();
    this.context = {
      config: this.getConfig(),
      setEvent: action => {
        _setEvent(action);
      }
    };
    this.events$ = this.events.asObservable();
    this.state = this.getInitialState(storeDef.state);
    this.initialState = this.getValue();
    addStore(this);
  }
  get name() {
    return this.storeDef.name;
  }
  getInitialState(state) {
    if (elfHooksRegistry.preStateInit) {
      return elfHooksRegistry.preStateInit(state, this.name);
    }
    return state;
  }
  getConfig() {
    return this.storeDef.config;
  }
  query(selector) {
    return selector(this.getValue());
  }
  update(...reducers) {
    const currentState = this.getValue();
    let nextState = reducers.reduce((value, reducer) => {
      value = reducer(value, this.context);
      return value;
    }, currentState);
    if (elfHooksRegistry.preStoreUpdate) {
      nextState = elfHooksRegistry.preStoreUpdate(currentState, nextState, this.name);
    }
    if (nextState !== currentState) {
      this.state = nextState;
      if (batchInProgress.getValue()) {
        if (!this.batchInProgress) {
          this.batchInProgress = true;
          batchDone$.subscribe(() => {
            super.next(this.state);
            emitEvents(this.events);
            this.batchInProgress = false;
          });
        }
      } else {
        super.next(this.state);
        emitEvents(this.events);
      }
    }
  }
  getValue() {
    return this.state;
  }
  reset() {
    this.update(() => this.initialState);
  }
  combine(observables) {
    let hasChange = true;
    const buffer = {};
    return new Observable(observer => {
      for (const [key, query] of Object.entries(observables)) {
        observer.add(query.subscribe(value => {
          buffer[key] = value;
          hasChange = true;
        }));
      }
      return this.subscribe({
        next() {
          if (hasChange) {
            observer.next({
              ...buffer
            });
            hasChange = false;
          }
        },
        error(e) {
          observer.error(e);
        },
        complete() {
          observer.complete();
        }
      });
    });
  }
  destroy() {
    removeStore(this);
    this.reset();
  }
  next(value) {
    this.update(() => value);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  error() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  complete() {}
}

function createStore(storeConfig, ...propsFactories) {
  const {
    state,
    config
  } = createState(...propsFactories);
  const {
    name
  } = storeConfig;
  return new Store({
    name,
    state,
    config
  });
}
function isFunction(value) {
  return typeof value === 'function';
}

/**
 *
 * Update a root property of the state
 *
 * @example
 *
 * store.update(setProp('foo', 'bar'))
 *
 * @example
 *
 * store.update(setProp('count', count => count + 1))
 *
 */
function setProp(key, value) {
  return function (state) {
    return {
      ...state,
      [key]: isFunction(value) ? value(state[key]) : value
    };
  };
}

function select(mapFn) {
  return pipe(map(mapFn), distinctUntilChanged());
}

function withProps(props) {
  return {
    props,
    config: undefined
  };
}

var WalletNetwork = /* @__PURE__ */ ((WalletNetwork2) => {
  WalletNetwork2["PUBLIC"] = "Public Global Stellar Network ; September 2015";
  WalletNetwork2["TESTNET"] = "Test SDF Network ; September 2015";
  WalletNetwork2["FUTURENET"] = "Test SDF Future Network ; October 2022";
  WalletNetwork2["SANDBOX"] = "Local Sandbox Stellar Network ; September 2022";
  WalletNetwork2["STANDALONE"] = "Standalone Network ; February 2017";
  return WalletNetwork2;
})(WalletNetwork || {});
var ModuleType = /* @__PURE__ */ ((ModuleType2) => {
  ModuleType2["HW_WALLET"] = "HW_WALLET";
  ModuleType2["HOT_WALLET"] = "HOT_WALLET";
  ModuleType2["BRIDGE_WALLET"] = "BRIDGE_WALLET";
  ModuleType2["AIR_GAPED_WALLET"] = "AIR_GAPED_WALLET";
  return ModuleType2;
})(ModuleType || {});

const store = createStore(
  { name: "state" },
  withProps({
    allowedWallets: [],
    hardwareWalletPaths: []
  })
);
const allowedWallets$ = store.pipe(
  select((state) => state.allowedWallets)
);
store.pipe(
  select((state) => state.selectedNetwork)
);
const modalTheme$ = store.pipe(
  select((state) => state.modalTheme)
);
const buttonTheme$ = store.pipe(
  select((state) => state.buttonTheme)
);
const activeAddress$ = store.pipe(
  select((state) => state.activeAddress)
);
const horizonUrl$ = store.pipe(select((state) => state.horizonUrl));
store.pipe(
  select((state) => state.mnemonicPath)
);
store.pipe(
  select((state) => state.hardwareWalletPaths)
);
function setSelectedModuleId(moduleId) {
  store.update(setProp("selectedModuleId", moduleId));
}
function setNetwork(network) {
  if (!Object.values(WalletNetwork).includes(network)) {
    throw new Error(`Wallet network "${network}" is not supported`);
  }
  store.update(setProp("selectedNetwork", network));
}
function setModalTheme(theme) {
  store.update(setProp("modalTheme", theme));
}
function seButtonTheme(theme) {
  store.update(setProp("buttonTheme", theme));
}
function setAllowedWallets(data) {
  store.update(setProp("allowedWallets", data));
}
function setAddress(address) {
  store.update(setProp("activeAddress", address));
}
function removeAddress() {
  store.update(setProp("activeAddress", void 0));
}
function setHorizonUrl(url) {
  store.update(setProp("horizonUrl", url));
}

class StellarWalletsKit {
  get selectedModule() {
    const { selectedModuleId } = store.getValue();
    if (!selectedModuleId) {
      throw { code: -3, message: "Please set the wallet first" };
    }
    const target = this.modules.find(
      (mod) => mod.productId === selectedModuleId
    );
    if (!target) {
      throw { code: -3, message: "Please set the wallet first" };
    }
    return target;
  }
  constructor(params) {
    this.modules = params.modules;
    if (params.selectedWalletId) this.setWallet(params.selectedWalletId);
    setNetwork(params.network);
    const modalTheme = params.theme || params.modalTheme;
    if (modalTheme) {
      setModalTheme(modalTheme);
    }
    if (params.buttonTheme) {
      seButtonTheme(params.buttonTheme);
    }
    this.getSupportedWallets().then((value) => {
      setAllowedWallets(value);
    });
  }
  /**
   * This method will return an array with all wallets supported by this kit but will let you know those the user have already installed/has access to
   * There are wallets that are by default available since they either don't need to be installed or have a fallback
   */
  async getSupportedWallets() {
    return Promise.all(
      this.modules.map(async (mod) => {
        const timer = new Promise((r) => setTimeout(() => r(false), 500));
        return {
          id: mod.productId,
          name: mod.productName,
          type: mod.moduleType,
          icon: mod.productIcon,
          isAvailable: await Promise.race([timer, mod.isAvailable()]),
          isPlatformWrapper: await Promise.race([
            timer,
            mod.isPlatformWrapper ? mod.isPlatformWrapper() : Promise.resolve(false)
          ]),
          url: mod.productUrl
        };
      })
    );
  }
  setWallet(id) {
    const target = this.modules.find(
      (mod) => mod.productId === id
    );
    if (!target) {
      throw new Error(`Wallet id "${id}" is not supported`);
    }
    setSelectedModuleId(target.productId);
  }
  async getAddress(params) {
    const { address } = await this.selectedModule.getAddress(params);
    setAddress(address);
    return { address };
  }
  async signTransaction(xdr, opts) {
    return this.selectedModule.signTransaction(xdr, {
      ...opts,
      networkPassphrase: opts?.networkPassphrase || store.getValue().selectedNetwork
    });
  }
  async signAuthEntry(authEntry, opts) {
    return this.selectedModule.signAuthEntry(authEntry, {
      ...opts,
      networkPassphrase: opts?.networkPassphrase || store.getValue().selectedNetwork
    });
  }
  async signMessage(message, opts) {
    return this.selectedModule.signMessage(message, {
      ...opts,
      networkPassphrase: opts?.networkPassphrase || store.getValue().selectedNetwork
    });
  }
  async getNetwork() {
    return this.selectedModule.getNetwork();
  }
  async disconnect() {
    removeAddress();
  }
  // ---- Button methods
  isButtonCreated() {
    return !!this.buttonElement;
  }
  /**
   * This method allows developers to set their own buttons (for connection and disconnection) on their website
   * while letting the kit handle the logic behind opening the modal, setting and removing the address from the storage, etc
   */
  assignButtons(params) {
    const connectEl = typeof params.connectEl === "string" ? document.querySelector(params.connectEl) : params.connectEl;
    if (!connectEl) throw new Error("connectEl is not available");
    connectEl.addEventListener(
      "click",
      () => {
        this.openModal({
          onWalletSelected: (option) => {
            setSelectedModuleId(option.id);
            this.getAddress().then((r) => params.onConnect(r));
          }
        }).then();
      },
      false
    );
    if (!params.disconnectEl) return;
    const disconnectEl = typeof params.disconnectEl === "string" ? document.querySelector(params.disconnectEl) : params.disconnectEl;
    if (!disconnectEl) throw new Error("disconnectEl is not available");
    disconnectEl.addEventListener(
      "click",
      () => {
        params.onDisconnect();
        removeAddress();
        if (this.selectedModule.disconnect) {
          this.selectedModule.disconnect().then();
        }
      },
      false
    );
  }
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
  async createButton(params) {
    if (this.buttonElement) {
      throw new Error(`Stellar Wallets Kit button is already created`);
    }
    this.buttonElement = document.createElement("stellar-wallets-button");
    if (params.buttonText) {
      this.buttonElement.setAttribute("buttonText", params.buttonText);
    }
    if (params.horizonUrl) {
      setHorizonUrl(params.horizonUrl);
    }
    params.container.appendChild(this.buttonElement);
    this.buttonElement.addEventListener(
      "button-clicked",
      () => {
        this.openModal({
          onWalletSelected: (option) => {
            setSelectedModuleId(option.id);
            this.getAddress().then((r) => params.onConnect(r)).catch((err) => {
              if (params.onError) params.onError(err);
            });
          },
          onClosed: (err) => {
            if (params.onClosed) params.onClosed(err);
          }
        });
      },
      false
    );
    this.buttonElement.addEventListener(
      "disconnect-wallet",
      () => {
        params.onDisconnect();
        if (this.selectedModule.disconnect) {
          this.selectedModule.disconnect();
        }
      },
      false
    );
  }
  /**
   * Removes the button elements from the HTML and from the kit's instance.
   *
   * @param params.skipDisconnect - Set this to `true` if you want to prevent that we disconnect (for example, disconnecting WalletConnect or removing the address)
   */
  async removeButton(params) {
    if (!this.buttonElement) {
      throw new Error(`Stellar Wallets Kit button hasn't been created yet`);
    }
    if (params?.skipDisconnect !== true) {
      this.buttonElement.disconnect();
    }
    this.buttonElement.remove();
    delete this.buttonElement;
  }
  // ---- END Button methods
  // ---- Modal methods
  async openModal(params) {
    if (this.modalElement && !this.buttonElement) {
      throw new Error(`Stellar Wallets Kit modal is already open`);
    } else {
      this.modalElement = document.createElement("stellar-wallets-modal");
    }
    const supportedWallets = await this.getSupportedWallets();
    setAllowedWallets(supportedWallets);
    this.modalElement.setAttribute("showModal", "");
    if (params.modalTitle) {
      this.modalElement.setAttribute("modalTitle", params.modalTitle);
    }
    if (params.notAvailableText) {
      this.modalElement.setAttribute("notAvailableText", params.notAvailableText);
    }
    document.body.appendChild(this.modalElement);
    const listener = (event) => {
      params.onWalletSelected(event.detail);
      this.modalElement.removeEventListener("wallet-selected", listener, false);
      document.body.removeChild(this.modalElement);
      this.modalElement = void 0;
    };
    this.modalElement.addEventListener("wallet-selected", listener, false);
    const errorListener = (event) => {
      if (params.onClosed) {
        params.onClosed(event.detail);
      }
      this.modalElement.removeEventListener("wallet-selected", listener, false);
      this.modalElement.removeEventListener("modal-closed", errorListener, false);
      document.body.removeChild(this.modalElement);
      this.modalElement = void 0;
    };
    this.modalElement.addEventListener("modal-closed", errorListener, false);
  }
  // ---- END Modal methods
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$3=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$4 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$4("string"==typeof t?t:t+"",void 0,s$2),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$4(o,t,s$2)},S$1=(s,o)=>{if(e$3)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$2,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$4,getOwnPropertySymbols:o$4,getPrototypeOf:n$3}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$4(t,s),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$2(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$3(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$4(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$3=t$2.trustedTypes,s$1=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$3="?"+h,n$2=`<${o$3}>`,r$3=document,l=()=>r$3.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_$1=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$3.createTreeWalker(r$3,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_$1:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_$1?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$2:d>=0?(o.push(a),s.slice(0,d)+e$1+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$1)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L$1:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$3)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$3).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$3,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$3.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}let L$1 = class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$2.litHtmlPolyfillSupport;j?.(N,R),(t$2.litHtmlVersions??=[]).push("3.3.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$2 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}};i$2._$litElement$=!0,i$2["finalized"]=!0,s.litElementHydrateSupport?.({LitElement:i$2});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$2});(s.litElementVersions??=[]).push("4.2.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1={ATTRIBUTE:1},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$1="important",i=" !"+n$1,o$1=e(class extends i$1{constructor(t){if(super(t),t.type!==t$1.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n$1:""):s[t]=e;}}return T}});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$2=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return n({...r,state:!0,attribute:!1})}

class ReactiveState {
  constructor(host, source, value) {
    this.host = host;
    this.source = source;
    this.value = value;
    this.sub = null;
    this.value$ = new BehaviorSubject(void 0);
    this.host.addController(this);
  }
  hostConnected() {
    this.sub = this.source.subscribe((value) => {
      this.value = value;
      this.value$.next(value);
      this.host.requestUpdate();
    });
  }
  hostDisconnected() {
    this.sub?.unsubscribe();
  }
}

const modalDialogStyles$1 = i$5`
  .dialog-modal {
    max-height: 90vh;
    position: fixed;
    z-index: 990;
    font-family: 'Open Sans', arial, sans-serif;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    border-width: 0;
    box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.25);
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @media screen and (min-width: 768px) {
    .dialog-modal {
      z-index: 990;
      bottom: auto;
      top: 5rem;
      max-width: 45rem;
      border-radius: 1rem;
    }
  }
`;
const modalDialogBodyStyles$1 = i$5`
  .dialog-modal-body {
    display: flex;
    flex-direction: column-reverse;
  }

  .dialog-modal-body__help,
  .dialog-modal-body__wallets {
    width: 100%;
    flex-basis: 100%;
  }

  .dialog-modal-body__help {
    padding: 1.5rem;
  }

  .dialog-modal-body__wallets {
    padding: 1.5rem;
  }

  .dialog-text-solid {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .dialog-text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  @media (prefers-color-scheme: light) {
    .dialog-modal-body__help {
      background-color: var(--modal-help-bg-color, #f8f8f8);
      border-top: 1px solid var(--modal-divider-color, rgba(0, 0, 0, 0.15));
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid var(--modal-divider-color, rgba(0, 0, 0, 0.15));
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background-color: var(--modal-bg-color, #fcfcfc);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #000000);
    }

    .dialog-text {
      color: var(--modal-text-color, #181818);
    }
  }

  @media (prefers-color-scheme: dark) {
    .dialog-modal-body__help {
      background-color: var(--modal-help-bg-color, #1c1c1c);
      border-top: 1px solid var(--modal-divider-color, rgba(255, 255, 255, 0.15));
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid var(--modal-divider-color, rgba(255, 255, 255, 0.15));
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background-color: var(--modal-bg-color, #161616);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #ededed);
    }

    .dialog-text {
      color: var(--modal-text-color, #a0a0a0);
    }
  }

  @media screen and (min-width: 768px) {
    .dialog-modal-body {
      flex-direction: row;
    }

    .dialog-modal-body__help,
    .dialog-modal-body__wallets {
      padding: 2rem;
    }
  }
`;
const modalHelpSection$1 = i$5`
  .help-container {
    width: 100%;
  }

  .help-header {
    display: none;
    margin: 0 0 2rem 0;
  }

  .help-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .help__title,
  .help__text {
    text-align: center;
  }

  .help__title {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .help__text {
    max-width: 21rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    margin-top: 0;
  }

  .help__whats_stellar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .help-header {
      display: block;
    }

    .help__title,
    .help__text {
      text-align: left;
      margin-left: 0;
    }

    .help__whats_a_wallet {
      margin-bottom: 2rem;
    }

    .help__whats_stellar {
      display: block;
    }
  }
`;
const modalWalletsSection$1 = i$5`
  .wallets-container {
    width: 100%;
    height: 100%;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
  }

  .wallets-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .wallets-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .wallets-header__button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #8f8f8f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #707070);
    }
  }

  .wallets-body {
    margin: 0;
    width: 100%;
    list-style: none;
    padding: 0 !important;
  }

  .wallets-body__item {
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .wallets-body__item img {
    margin-right: 1rem;
    width: 2rem;
    border-radius: 100%;
    overflow: hidden;
  }

  .wallets-body__item.not-available {
    cursor: alias;
  }

  .wallets-body__item .not-available {
    margin-left: auto;
    font-size: 10px;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }

  @media (prefers-color-scheme: light) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #e2e2e2) 1px;
      background-color: var(--modal-not-available-bg-color, #f3f3f3);
      color: var(--modal-not-available-text-color, #6f6f6f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #343434) 1px;
      background-color: var(--modal-not-available-bg-color, #232323);
      color: var(--modal-not-available-text-color, #a0a0a0);
    }
  }

  @media screen and (min-width: 768px) {
  }
`;
const backdropStyles$1 = i$5`
  .dialog-modal[open] + .backdrop {
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const modalAnimations$1 = i$5`
  .dialog-modal[open] {
    -webkit-animation: showModal 0.3s ease normal;
  }
  @-webkit-keyframes showModal {
    from {
      transform: translateY(25%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .dialog-modal.closing {
    -webkit-animation: hideModal 0.3s ease normal !important;
  }
  @-webkit-keyframes hideModal {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(25%);
      opacity: 0;
    }
  }

  .backdrop.closing {
    -webkit-animation: hideBackdrop 0.3s ease normal !important;
  }
  @-webkit-keyframes hideBackdrop {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
};
const ModalThemes = {
  DARK: {
    bgColor: "#161616",
    textColor: "#a0a0a0",
    solidTextColor: "#ededed",
    headerButtonColor: "#707070",
    dividerColor: "rgba(255, 255, 255, 0.15)",
    helpBgColor: "#1c1c1c",
    notAvailableTextColor: "#a0a0a0",
    notAvailableBgColor: "#232323",
    notAvailableBorderColor: "#343434"
  },
  LIGHT: {
    bgColor: "#fcfcfc",
    textColor: "#181818",
    solidTextColor: "#000000",
    headerButtonColor: "#8f8f8f",
    dividerColor: "rgba(0, 0, 0, 0.15)",
    helpBgColor: "#f8f8f8",
    notAvailableTextColor: "#6f6f6f",
    notAvailableBgColor: "#f3f3f3",
    notAvailableBorderColor: "#e2e2e2"
  }
};
exports.StellarWalletsModal = class StellarWalletsModal extends i$2 {
  constructor() {
    super(...arguments);
    this.ignoreShowStatus = false;
    this.showModal = false;
    this.closingModal = false;
    this.modalTitle = "Connect a Wallet";
    this.notAvailableText = "Not available";
    this.allowedWallets = new ReactiveState(this, allowedWallets$);
    this.theme = new ReactiveState(this, modalTheme$);
  }
  connectedCallback() {
    super.connectedCallback();
    const platformWrapper = this.getPlatformWrapper();
    if (platformWrapper) {
      setTimeout(() => {
        this.pickWalletOption(platformWrapper);
      }, 10);
    }
  }
  async closeModal() {
    this.closingModal = true;
    await new Promise((r) => setTimeout(r, 280));
    if (!this.ignoreShowStatus) {
      this.showModal = false;
    }
    this.dispatchEvent(
      new CustomEvent("modal-closed", {
        detail: new Error("Modal closed"),
        bubbles: true,
        composed: true
      })
    );
    this.closingModal = false;
  }
  async pickWalletOption(option) {
    if (!option.isAvailable) {
      window.open(option.url, "_blank");
      return;
    }
    this.closingModal = true;
    await new Promise((r) => setTimeout(r, 280));
    try {
      const record = window.localStorage.getItem("@StellarWalletsKit/usedWalletsIds");
      let usedWalletsIds = record ? JSON.parse(record) : [];
      usedWalletsIds = [option.id, ...usedWalletsIds.filter((id) => id !== option.id)];
      window.localStorage.setItem("@StellarWalletsKit/usedWalletsIds", JSON.stringify(usedWalletsIds));
    } catch (e) {
      console.error(e);
    }
    this.dispatchEvent(
      new CustomEvent("wallet-selected", {
        detail: option,
        bubbles: true,
        composed: true
      })
    );
    this.closingModal = false;
  }
  /**
   * This function gets the list of the wallets following the logic from this task https://github.com/Creit-Tech/Stellar-Wallets-Kit/issues/28
   * It follows this order:
   * 1- Wallet last used by wallet selector
   * 2- If not wallet last use, wallets detected in the browser
   * 3- Wallet ordering as defined by the developer
   *
   */
  getSortedList() {
    const sortedWallets = this.allowedWallets.value.reduce(
      (all, current) => {
        return {
          available: current.isAvailable ? [...all.available, current] : all.available,
          unavailable: !current.isAvailable ? [...all.unavailable, current] : all.unavailable
        };
      },
      { available: [], unavailable: [] }
    );
    let usedWalletsIds;
    try {
      const record = window.localStorage.getItem("@StellarWalletsKit/usedWalletsIds");
      usedWalletsIds = record ? JSON.parse(record) : [];
    } catch (e) {
      console.error(e);
      usedWalletsIds = [];
    }
    if (usedWalletsIds.length === 0) {
      return [...sortedWallets.available, ...sortedWallets.unavailable];
    }
    const usedWallets = [];
    const nonUsedWallets = [];
    for (const availableWallet of sortedWallets.available) {
      if (usedWalletsIds.find((id) => id === availableWallet.id)) {
        usedWallets.push(availableWallet);
      } else {
        nonUsedWallets.push(availableWallet);
      }
    }
    return [
      ...usedWallets.sort((a, b) => {
        return usedWalletsIds.indexOf(a.id) - usedWalletsIds.indexOf(b.id);
      }),
      ...nonUsedWallets,
      ...sortedWallets.unavailable
    ];
  }
  getPlatformWrapper() {
    return this.getSortedList().find((w) => w.isPlatformWrapper);
  }
  getThemeStyles() {
    if (!this.theme.value) return {};
    return {
      "--modal-bg-color": this.theme.value.bgColor,
      "--modal-text-color": this.theme.value.textColor,
      "--modal-solid-text-color": this.theme.value.solidTextColor,
      "--modal-header-button-color": this.theme.value.headerButtonColor,
      "--modal-divider-color": this.theme.value.dividerColor,
      "--modal-help-bg-color": this.theme.value.helpBgColor,
      "--modal-not-available-text-color": this.theme.value.notAvailableTextColor,
      "--modal-not-available-bg-color": this.theme.value.notAvailableBgColor,
      "--modal-not-available-border-color": this.theme.value.notAvailableBorderColor
    };
  }
  render() {
    if (this.getPlatformWrapper()) {
      return x``;
    }
    const helpSection = x`
      <section class="help-container">
        <header class="help-header">
          <h2 class="help-header__modal-title dialog-text-solid">Learn more</h2>
        </header>

        <div class="help__whats_a_wallet">
          <h2 class="dialog-text-solid help__title">What is a Wallet?</h2>
          <p class="dialog-text help__text">
            Wallets are used to send, receive, and store the keys you use to sign blockchain transactions.
          </p>
        </div>

        <div class="help__whats_stellar">
          <h2 class="dialog-text-solid help__title">What is Stellar?</h2>
          <p class="dialog-text help__text">
            Stellar is a decentralized, public blockchain that gives developers the tools to create experiences that are
            more like cash than crypto.
          </p>
        </div>
      </section>
    `;
    const walletsSection = x`
      <section class="wallets-container">
        <header class="wallets-header">
          <h2 class="wallets-header__modal-title dialog-text-solid">${this.modalTitle}</h2>

          <button @click=${() => this.closeModal()} class="wallets-header__button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="20px" width="20px" viewBox="0 0 490 490">
              <polygon
                points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
            </svg>
          </button>
        </header>

        <ul class="wallets-body">
          ${this.getSortedList().map(
      (item, i) => x`
                <li
                  @click=${() => this.pickWalletOption(item)}
                  class=" wallets-body__item ${!item.isAvailable ? "not-available" : ""} ${i === this.allowedWallets.value.length - 1 ? "mb-0" : ""}">
                  <img src=${item.icon} alt=${item.name} />
                  <span class="dialog-text-solid">${item.name}</span>
                  ${!item.isAvailable ? x`<small class="not-available">${this.notAvailableText}</small>` : ""}
                </li>
              `
    )}
        </ul>
      </section>
    `;
    return x`
      <dialog
        style=${o$1(this.getThemeStyles())}
        class="dialog-modal ${this.closingModal ? "closing" : ""}"
        .open=${this.showModal}>
        <section class="dialog-modal-body">
          <div class="dialog-modal-body__help">${helpSection}</div>
          <div class="dialog-modal-body__wallets">${walletsSection}</div>
        </section>
      </dialog>

      <div
        style="position: fixed; z-index: 950"
        class="backdrop ${this.closingModal ? "closing" : ""}"
        @click=${() => this.closeModal()}></div>
    `;
  }
};
exports.StellarWalletsModal.styles = [
  i$5`
      :host * {
        box-sizing: border-box;
      }

      .mb-0 {
        margin-bottom: 0 !important;
      }
    `,
  modalDialogStyles$1,
  modalDialogBodyStyles$1,
  modalHelpSection$1,
  backdropStyles$1,
  modalAnimations$1,
  modalWalletsSection$1
];
__decorateClass$2([
  n({ type: Boolean, reflect: true })
], exports.StellarWalletsModal.prototype, "ignoreShowStatus", 2);
__decorateClass$2([
  n({ type: Boolean, reflect: true })
], exports.StellarWalletsModal.prototype, "showModal", 2);
__decorateClass$2([
  r$1()
], exports.StellarWalletsModal.prototype, "closingModal", 2);
__decorateClass$2([
  n({ type: String, reflect: true })
], exports.StellarWalletsModal.prototype, "modalTitle", 2);
__decorateClass$2([
  n({ type: String, reflect: true })
], exports.StellarWalletsModal.prototype, "notAvailableText", 2);
exports.StellarWalletsModal = __decorateClass$2([
  t("stellar-wallets-modal")
], exports.StellarWalletsModal);

async function fetchAccountBalance(pk) {
  const horizonUrl = await firstValueFrom(horizonUrl$);
  if (!horizonUrl) {
    throw new Error("There is no Horizon URL set");
  }
  const url = new URL(horizonUrl);
  url.pathname = `/accounts/${pk}`;
  const response = await fetch(url);
  const data = await response.json();
  const nativeBalance = data.balances.find((b) => b.asset_type === "native");
  return nativeBalance.balance;
}

async function copyToClipboard(textToCopy) {
  if (!textToCopy) {
    throw new Error(`Text to copy to the clipboard can't be undefined`);
  }
  await navigator.clipboard.writeText(textToCopy);
}

const buttonContainer = i$5`
  .btn-container {
    position: relative;
  }
`;
const buttonStyles = i$5`
  .btn {
    background: none;
    border: none;
    border-radius: var(--button-border-radius, 0.5rem);
    cursor: pointer;
    padding: var(--button-padding, 0.5rem 1.25rem);
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    line-height: 100%;
    margin: 0;
    font-family: 'Open Sans', arial, sans-serif;
  }

  .btn svg {
    width: 1rem;
    height: auto;
    margin-left: 0.5rem;
  }

  @media (prefers-color-scheme: light) {
    .btn {
      background-color: var(--button-bg-color, #fcfcfc);
      color: var(--button-text-color, #181818);
      border: solid var(--button-text-color, #181818) 1px;
    }

    .btn svg circle,
    .btn svg path {
      stroke: var(--button-text-color, #181818);
    }
  }

  @media (prefers-color-scheme: dark) {
    .btn {
      background-color: var(--button-bg-color, #161616);
      color: var(--button-text-color, #fcfcfc);
      border: solid var(--button-text-color, #fcfcfc) 1px;
    }

    .btn svg circle,
    .btn svg path {
      stroke: var(--button-text-color, #fcfcfc);
    }
  }
`;
const dropdownWrapper = i$5`
  .dropdown-wrapper {
    position: absolute;
    top: 110%;
    right: 0;
    box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.25);
    z-index: 900;
    border-radius: 0.75rem;
    padding: 2rem;
    width: 18rem;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', arial, sans-serif;
  }

  .dropdown-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .dropdown-text-solid {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .dropdown-text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  .dropdown-action-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .dropdown-action-button {
    padding: 0.4rem;
    border-radius: 0.25rem;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .dropdown-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    .dropdown-wrapper {
      background-color: var(--button-bg-color, #fcfcfc);
      border: solid 1px var(--button-solid-text-color, #000000);
    }

    .dropdown-text-solid,
    .dropdown-action-button,
    .dropdown-close {
      color: var(--button-solid-text-color, #000000);
    }

    .dropdown-text {
      color: var(--button-text-color, #181818);
    }

    svg circle,
    svg path {
      stroke: var(--button-text-color, #181818);
    }

    .dropdown-action-button {
      border: 1px solid var(--button-text-color, #181818);
    }
  }

  @media (prefers-color-scheme: dark) {
    .dropdown-wrapper {
      background-color: var(--button-bg-color, #161616);
      border: solid 1px var(--button-solid-text-color, #ededed);
    }

    .dropdown-text-solid,
    .dropdown-action-button,
    .dropdown-close {
      color: var(--button-solid-text-color, #ededed);
    }

    .dropdown-text {
      color: var(--button-text-color, #a0a0a0);
    }

    svg circle,
    svg path {
      stroke: var(--button-text-color, #fcfcfc);
    }

    .dropdown-action-button {
      border: 1px solid var(--button-text-color, #a0a0a0);
    }
  }
`;

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
const ButtonThemes = {
  DARK: {
    bgColor: "#161616",
    textColor: "#a0a0a0",
    solidTextColor: "#ededed",
    dividerColor: "rgba(255, 255, 255, 0.15)",
    buttonPadding: "0.5rem 1.25rem",
    buttonBorderRadius: "0.5rem"
  },
  LIGHT: {
    bgColor: "#fcfcfc",
    textColor: "#181818",
    solidTextColor: "#000000",
    dividerColor: "rgba(0, 0, 0, 0.15)",
    buttonPadding: "0.5rem 1.25rem",
    buttonBorderRadius: "0.5rem"
  }
};
exports.StellarWalletsButton = class StellarWalletsButton extends i$2 {
  constructor() {
    super(...arguments);
    this.buttonText = "Connect";
    this.showDropdown = false;
    this.showCopiedMessage = false;
    this.activeAddress = new ReactiveState(this, activeAddress$);
    this.theme = new ReactiveState(this, buttonTheme$);
  }
  get getThemeStyles() {
    if (!this.theme.value) return {};
    return {
      "--button-bg-color": this.theme.value.bgColor,
      "--button-text-color": this.theme.value.textColor,
      "--button-solid-text-color": this.theme.value.solidTextColor,
      "--button-divider-color": this.theme.value.dividerColor,
      "--button-padding": this.theme.value.buttonPadding,
      "--button-border-radius": this.theme.value.buttonBorderRadius
    };
  }
  onButtonClicked() {
    if (this.activeAddress.value) {
      this.showDropdown = !this.showDropdown;
    } else {
      this.dispatchEvent(
        new CustomEvent("button-clicked", {
          bubbles: true,
          composed: true
        })
      );
    }
  }
  closeDropdown() {
    this.showDropdown = false;
  }
  disconnect() {
    removeAddress();
    this.closeDropdown();
    this.dispatchEvent(
      new CustomEvent("disconnect-wallet", {
        bubbles: true,
        composed: true
      })
    );
  }
  async copyPublicKey() {
    await copyToClipboard(this.activeAddress.value);
    this.showCopiedMessage = true;
    await new Promise((r) => setTimeout(r, 3e3));
    this.showCopiedMessage = false;
  }
  async startBalanceFetcher() {
    const horizonUrl = await firstValueFrom(horizonUrl$);
    if (horizonUrl) {
      this.fetchAddressSubscription = this.activeAddress.value$.pipe(
        switchMap(async (value) => {
          return value ? fetchAccountBalance(value).catch(() => "0") : "0";
        })
      ).subscribe((balance) => {
        this.accountBalance = balance;
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.startBalanceFetcher().then();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.fetchAddressSubscription?.unsubscribe();
  }
  render() {
    const button = x`
      <button @click=${this.onButtonClicked} class="btn">
        ${this.activeAddress.value ? this.activeAddress.value.slice(0, 4) + "...." + this.activeAddress.value.slice(-6) : this.buttonText}

        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M20.8333 9H18.2308C16.4465 9 15 10.3431 15 12C15 13.6569 16.4465 15 18.2308 15H20.8333C20.9167 15 20.9583 15 20.9935 14.9979C21.5328 14.965 21.9623 14.5662 21.9977 14.0654C22 14.0327 22 13.994 22 13.9167V10.0833C22 10.006 22 9.96726 21.9977 9.9346C21.9623 9.43384 21.5328 9.03496 20.9935 9.00214C20.9583 9 20.9167 9 20.8333 9Z"
            stroke-width="1.5" />
          <path
            d="M20.965 9C20.8873 7.1277 20.6366 5.97975 19.8284 5.17157C18.6569 4 16.7712 4 13 4L10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.6366 18.0203 20.8873 16.8723 20.965 15"
            stroke-width="1.5" />
          <path d="M17.9912 12H18.0002" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    `;
    const dropdown = this.showDropdown ? x`
          <section class="dropdown-wrapper">
            <button @click=${this.closeDropdown} class="dropdown-close">x</button>

            <div class="dropdown-profile">
              <svg
                style="margin-bottom: 1rem"
                width="36px"
                height="36px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5" />
                <path
                  d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round" />
              </svg>

              <h2 style="margin: 0 0 0.25rem" class="dropdown-text-solid">
                ${this.activeAddress.value?.slice(0, 4)}....${this.activeAddress.value?.slice(-6)}
              </h2>

              ${this.accountBalance ? x`<h3 style="margin: 0" class="dropdown-text">${this.accountBalance} XLM</h3>` : ""}
            </div>

            <div class="dropdown-action-wrapper">
              <button @click=${this.copyPublicKey} class="dropdown-action-button">
                ${!this.showCopiedMessage ? x`Copy address

                      <svg
                        width="0.75rem"
                        height="0.75rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1.25H10.9436C9.10583 1.24998 7.65019 1.24997 6.51098 1.40314C5.33856 1.56076 4.38961 1.89288 3.64124 2.64124C2.89288 3.38961 2.56076 4.33856 2.40314 5.51098C2.24997 6.65019 2.24998 8.10582 2.25 9.94357V16C2.25 17.8722 3.62205 19.424 5.41551 19.7047C5.55348 20.4687 5.81753 21.1208 6.34835 21.6517C6.95027 22.2536 7.70814 22.5125 8.60825 22.6335C9.47522 22.75 10.5775 22.75 11.9451 22.75H15.0549C16.4225 22.75 17.5248 22.75 18.3918 22.6335C19.2919 22.5125 20.0497 22.2536 20.6517 21.6517C21.2536 21.0497 21.5125 20.2919 21.6335 19.3918C21.75 18.5248 21.75 17.4225 21.75 16.0549V10.9451C21.75 9.57754 21.75 8.47522 21.6335 7.60825C21.5125 6.70814 21.2536 5.95027 20.6517 5.34835C20.1208 4.81753 19.4687 4.55348 18.7047 4.41551C18.424 2.62205 16.8722 1.25 15 1.25ZM17.1293 4.27117C16.8265 3.38623 15.9876 2.75 15 2.75H11C9.09318 2.75 7.73851 2.75159 6.71085 2.88976C5.70476 3.02502 5.12511 3.27869 4.7019 3.7019C4.27869 4.12511 4.02502 4.70476 3.88976 5.71085C3.75159 6.73851 3.75 8.09318 3.75 10V16C3.75 16.9876 4.38624 17.8265 5.27117 18.1293C5.24998 17.5194 5.24999 16.8297 5.25 16.0549V10.9451C5.24998 9.57754 5.24996 8.47522 5.36652 7.60825C5.48754 6.70814 5.74643 5.95027 6.34835 5.34835C6.95027 4.74643 7.70814 4.48754 8.60825 4.36652C9.47522 4.24996 10.5775 4.24998 11.9451 4.25H15.0549C15.8297 4.24999 16.5194 4.24998 17.1293 4.27117ZM7.40901 6.40901C7.68577 6.13225 8.07435 5.9518 8.80812 5.85315C9.56347 5.75159 10.5646 5.75 12 5.75H15C16.4354 5.75 17.4365 5.75159 18.1919 5.85315C18.9257 5.9518 19.3142 6.13225 19.591 6.40901C19.8678 6.68577 20.0482 7.07435 20.1469 7.80812C20.2484 8.56347 20.25 9.56458 20.25 11V16C20.25 17.4354 20.2484 18.4365 20.1469 19.1919C20.0482 19.9257 19.8678 20.3142 19.591 20.591C19.3142 20.8678 18.9257 21.0482 18.1919 21.1469C17.4365 21.2484 16.4354 21.25 15 21.25H12C10.5646 21.25 9.56347 21.2484 8.80812 21.1469C8.07435 21.0482 7.68577 20.8678 7.40901 20.591C7.13225 20.3142 6.9518 19.9257 6.85315 19.1919C6.75159 18.4365 6.75 17.4354 6.75 16V11C6.75 9.56458 6.75159 8.56347 6.85315 7.80812C6.9518 7.07435 7.13225 6.68577 7.40901 6.40901Z" />
                      </svg>` : "Copied!!"}
              </button>

              <button @click=${this.disconnect} class="dropdown-action-button">
                Disconnect

                <svg
                  width="0.75rem"
                  height="0.75rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </section>
        ` : "";
    return x`
      <section style=${o$1(this.getThemeStyles)} class="btn-container">${button} ${dropdown}</section>
    `;
  }
};
exports.StellarWalletsButton.styles = [
  i$5`
      :host * {
        box-sizing: border-box;
      }
    `,
  buttonStyles,
  buttonContainer,
  dropdownWrapper
];
__decorateClass$1([
  n({ type: String, reflect: true })
], exports.StellarWalletsButton.prototype, "buttonText", 2);
__decorateClass$1([
  r$1()
], exports.StellarWalletsButton.prototype, "showDropdown", 2);
__decorateClass$1([
  r$1()
], exports.StellarWalletsButton.prototype, "accountBalance", 2);
__decorateClass$1([
  r$1()
], exports.StellarWalletsButton.prototype, "showCopiedMessage", 2);
exports.StellarWalletsButton = __decorateClass$1([
  t("stellar-wallets-button")
], exports.StellarWalletsButton);

const modalDialogStyles = i$5`
  .dialog-modal {
    max-height: 90vh;
    position: fixed;
    z-index: 990;
    font-family: 'Open Sans', arial, sans-serif;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    border-radius: 1rem 1rem 0 0;
    border-width: 0;
    box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.25);
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @media screen and (min-width: 768px) {
    .dialog-modal {
      z-index: 990;
      bottom: auto;
      top: 5rem;
      max-width: 25rem;
      border-radius: 1rem;
    }
  }
`;
const modalDialogBodyStyles = i$5`
  .dialog-modal-body {
    display: flex;
    flex-direction: column-reverse;
  }

  .dialog-modal-body__help,
  .dialog-modal-body__wallets {
    width: 100%;
    flex-basis: 100%;
  }

  .dialog-modal-body__help {
    padding: 1.5rem;
  }

  .dialog-modal-body__wallets {
    padding: 1.5rem;
  }

  .dialog-text-solid {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  .dialog-text {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  @media (prefers-color-scheme: light) {
    .dialog-modal-body__help {
      background-color: var(--modal-help-bg-color, #f8f8f8);
      border-top: 1px solid var(--modal-divider-color, rgba(0, 0, 0, 0.15));
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid var(--modal-divider-color, rgba(0, 0, 0, 0.15));
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background-color: var(--modal-bg-color, #fcfcfc);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #000000);
    }

    .dialog-text {
      color: var(--modal-text-color, #181818);
    }
  }

  @media (prefers-color-scheme: dark) {
    .dialog-modal-body__help {
      background-color: var(--modal-help-bg-color, #1c1c1c);
      border-top: 1px solid var(--modal-divider-color, rgba(255, 255, 255, 0.15));
    }

    @media screen and (min-width: 768px) {
      .dialog-modal-body__help {
        border-top: none;
        border-right: 1px solid var(--modal-divider-color, rgba(255, 255, 255, 0.15));
      }
    }

    .dialog-modal-body__wallets,
    .dialog-modal-body {
      background-color: var(--modal-bg-color, #161616);
    }

    .dialog-text-solid {
      color: var(--modal-solid-text-color, #ededed);
    }

    .dialog-text {
      color: var(--modal-text-color, #a0a0a0);
    }
  }

  @media screen and (min-width: 768px) {
    .dialog-modal-body {
      flex-direction: row;
    }

    .dialog-modal-body__help,
    .dialog-modal-body__wallets {
      padding: 2rem;
    }
  }
`;
const modalHelpSection = i$5`
  .help-container {
    width: 100%;
  }

  .help-header {
    display: none;
    margin: 0 0 2rem 0;
  }

  .help-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .help__title,
  .help__text {
    text-align: center;
  }

  .help__title {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .help__text {
    max-width: 21rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    margin-top: 0;
  }

  .help__whats_stellar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .help-header {
      display: block;
    }

    .help__title,
    .help__text {
      text-align: left;
      margin-left: 0;
    }

    .help__whats_a_wallet {
      margin-bottom: 2rem;
    }

    .help__whats_stellar {
      display: block;
    }
  }
`;
const modalWalletsSection = i$5`
  .wallets-container {
    width: 100%;
    height: 100%;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
  }

  .wallets-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .wallets-header__modal-title {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }

  .wallets-header__button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (prefers-color-scheme: light) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #8f8f8f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-header__button svg {
      fill: var(--modal-header-button-color, #707070);
    }
  }

  .wallets-body {
    margin: 0;
    width: 100%;
    list-style: none;
    padding: 1rem 0 0 !important;
  }

  .wallets-body__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 2rem;
    cursor: pointer;
    padding: 0 0 1rem 0;
  }

  .wallets-body__item:last-child {
    margin-bottom: 0;
  }

  @media (prefers-color-scheme: light) {
    .wallets-body__item {
      border-bottom: 1px var(--modal-divider-color, rgba(0, 0, 0, 0.15)) solid;
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-body__item {
      border-bottom: 1px var(--modal-divider-color, rgba(255, 255, 255, 0.15)) solid;
    }
  }

  .wallets-body__item img {
    margin-right: 1rem;
    width: 2rem;
    border-radius: 100%;
    overflow: hidden;
  }

  .wallets-body__item.not-available {
    cursor: alias;
  }

  .wallets-body__item .not-available {
    margin-left: auto;
    font-size: 10px;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }

  @media (prefers-color-scheme: light) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #e2e2e2) 1px;
      background-color: var(--modal-not-available-bg-color, #f3f3f3);
      color: var(--modal-not-available-text-color, #6f6f6f);
    }
  }

  @media (prefers-color-scheme: dark) {
    .wallets-body__item .not-available {
      border: solid var(--modal-not-available-border-color, #343434) 1px;
      background-color: var(--modal-not-available-bg-color, #232323);
      color: var(--modal-not-available-text-color, #a0a0a0);
    }
  }

  @media screen and (min-width: 768px) {
  }
`;
const backdropStyles = i$5`
  .dialog-modal[open] + .backdrop {
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const modalAnimations = i$5`
  .dialog-modal[open] {
    -webkit-animation: showModal 0.3s ease normal;
  }
  @-webkit-keyframes showModal {
    from {
      transform: translateY(25%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .dialog-modal.closing {
    -webkit-animation: hideModal 0.3s ease normal !important;
  }
  @-webkit-keyframes hideModal {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(25%);
      opacity: 0;
    }
  }

  .backdrop.closing {
    -webkit-animation: hideBackdrop 0.3s ease normal !important;
  }
  @-webkit-keyframes hideBackdrop {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
exports.StellarSelectorModal = class StellarSelectorModal extends i$2 {
  constructor() {
    super(...arguments);
    this.showModal = false;
    this.loadingAccounts = false;
    this.closingModal = false;
    this.modalTitle = "Pick your account";
    this.accounts = [];
  }
  connectedCallback() {
    super.connectedCallback();
  }
  async pickAccount(option) {
    this.closingModal = true;
    await new Promise((r) => setTimeout(r, 280));
    this.dispatchEvent(
      new CustomEvent("account-selected", {
        detail: option,
        bubbles: true,
        composed: true
      })
    );
    this.closingModal = false;
  }
  async closeModal() {
    this.closingModal = true;
    await new Promise((r) => setTimeout(r, 280));
    this.showModal = false;
    this.dispatchEvent(
      new CustomEvent("account-selector-closed", {
        detail: new Error("Account selector closed"),
        bubbles: true,
        composed: true
      })
    );
    this.closingModal = false;
  }
  render() {
    const loadingIcon = x`
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <style>
          .spinner_qM83 {
            animation: spinner_8HQG 1.05s infinite;
            fill: white;
          }
          .spinner_oXPr {
            animation-delay: 0.1s;
          }
          .spinner_ZTLf {
            animation-delay: 0.2s;
          }
          @keyframes spinner_8HQG {
            0%,
            57.14% {
              animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
              transform: translate(0);
            }
            28.57% {
              animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
              transform: translateY(-6px);
            }
            100% {
              transform: translate(0);
            }
          }
        </style>
        <circle class="spinner_qM83" cx="4" cy="12" r="3" />
        <circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3" />
        <circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3" />
      </svg>
    `;
    const accountsList = x`
      <ul class="wallets-body">
        ${this.accounts.map(
      ({ publicKey, index }) => x`
            <li @click="${() => this.pickAccount({ publicKey, index })}" class="wallets-body__item">
              <span style="margin-right: 1rem;" class="dialog-text-solid">
                ${publicKey.slice(0, 4)}....${publicKey.slice(-6)}
              </span>
              <span class="dialog-text">(44'/148'/${index}')</span>
            </li>
          `
    )}
      </ul>
    `;
    return x`
      <dialog style="" class="dialog-modal ${this.closingModal ? "closing" : ""}" .open=${this.showModal}>
        <section class="dialog-modal-body">
          <div class="dialog-modal-body__wallets">
            <section class="wallets-container">
              <header class="wallets-header">
                <h2 class="wallets-header__modal-title dialog-text-solid">${this.modalTitle}</h2>

                <button @click=${() => this.closeModal()} class="wallets-header__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="20px"
                    width="20px"
                    viewBox="0 0 490 490">
                    <polygon
                      points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
                  </svg>
                </button>
              </header>

              ${this.loadingAccounts ? loadingIcon : accountsList}
            </section>
          </div>
        </section>
      </dialog>

      <div
        style="position: fixed; z-index: 950"
        class="backdrop ${this.closingModal ? "closing" : ""}"
        @click=${() => this.closeModal()}></div>
    `;
  }
};
exports.StellarSelectorModal.styles = [
  i$5`
      :host * {
        box-sizing: border-box;
      }

      .mb-0 {
        margin-bottom: 0 !important;
      }
    `,
  modalDialogStyles,
  modalDialogBodyStyles,
  modalHelpSection,
  backdropStyles,
  modalAnimations,
  modalWalletsSection
];
__decorateClass([
  n({ type: Boolean, reflect: true })
], exports.StellarSelectorModal.prototype, "showModal", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], exports.StellarSelectorModal.prototype, "loadingAccounts", 2);
__decorateClass([
  r$1()
], exports.StellarSelectorModal.prototype, "closingModal", 2);
__decorateClass([
  n({ type: String, reflect: true })
], exports.StellarSelectorModal.prototype, "modalTitle", 2);
__decorateClass([
  n({ type: String, reflect: true, converter: (value) => value ? JSON.parse(value) : [] })
], exports.StellarSelectorModal.prototype, "accounts", 2);
exports.StellarSelectorModal = __decorateClass([
  t("stellar-accounts-selector")
], exports.StellarSelectorModal);

function generateRandomToken() {
    const rn = new Uint32Array(4);
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        crypto.getRandomValues(rn);
    } else {
        for (let i = 0; i < rn.length; i++) {
            rn[i] = Math.floor(Math.random() * 4294967295);
        }
    }
    return Array.from(rn).map(n => n.toString(36)).join('')
}

const intentInterface = {
    public_key: {
        title: 'View public key',
        description: 'Requests account public key. It\'s a simple way of authentication for Stellar-based applications. The response ensures that a user owns the corresponding secret key.',
        implicitFlow: false,
        params: {
            token: {
                description: 'Verification token generated by the application (should be unique or random).',
                type: 'string',
                required: false
            },
            callback: {
                description: 'Optional URL callback where Albedo will POST a signed token and public key.',
                type: 'string',
                required: false
            },
            require_existing: {
                description: 'Allow existing Albedo accounts only.',
                type: 'boolean',
                required: false
            }
        },
        returns: {
            pubkey: {
                description: 'User-selected public key.',
                type: 'string'
            },
            signed_message: {
                description: 'HEX-encoded authentication message derived from the public key and verification token.',
                type: 'string'
            },
            signature: {
                description: 'HEX-encoded ED25519 signature of the authentication message that can be further used to verify user\'s keypair ownership.',
                type: 'string'
            }
        }
    },
    sign_message: {
        title: 'Sign text message',
        description: 'Requests arbitrary message signing. Can be used to implement identity/ownership verification.',
        implicitFlow: true,
        params: {
            message: {
                description: 'Text message to sign.',
                type: 'string',
                required: true
            },
            pubkey: {
                description: 'Specific public key requested by the application.',
                type: 'string',
                required: false
            },
            callback: {
                description: 'Optional URL callback where Albedo will POST a signed message.',
                type: 'string',
                required: false
            }
        },
        returns: {
            pubkey: {
                description: 'User-selected public key.',
                type: 'string'
            },
            original_message: {
                description: 'Text message to sign from request.',
                type: 'string'
            },
            signed_message: {
                description: 'HEX-encoded message derived from the public key and original message.',
                type: 'string'
            },
            message_signature: {
                description: 'HEX-encoded ED25519 signature of the signed message.',
                type: 'string'
            }
        }
    },
    tx: {
        title: 'Sign transaction',
        description: 'Requests a signature for the transaction. Returns the signed transaction envelope that can be submitted to the network or used for multi-sig coordination.',
        implicitFlow: true,
        params: {
            xdr: {
                description: 'XDR-encoded transaction envelope to sign.',
                type: 'string',
                required: true
            },
            pubkey: {
                description: 'Specific public key requested by the application.',
                type: 'string',
                required: false
            },
            network: {
                description: 'Stellar network identifier.',
                type: 'string',
                required: false
            },
            callback: {
                description: 'Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon.',
                type: 'string',
                required: false
            },
            description: {
                description: 'Optional human-friendly short transaction description provided by developers.',
                type: 'string',
                required: false
            },
            submit: {
                description: 'If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.',
                type: 'boolean',
                required: false
            }
        },
        returns: {
            xdr: {
                description: 'XDR-encoded transaction envelope from request.',
                type: 'string'
            },
            tx_hash: {
                description: 'HEX-encoded transaction hash.',
                type: 'string'
            },
            signed_envelope_xdr: {
                description: 'XDR-encoded transaction envelope with new signatures.',
                type: 'string'
            },
            network: {
                description: 'Stellar network identifier.',
                type: 'string'
            },
            result: {
                description: 'Optional response from Horizon if the transaction has been submitted automatically.',
                type: 'object'
            }
        }
    },
    pay: {
        title: 'Make payment',
        description: 'Requests a payment from a user. Works with any Stellar asset, supports transaction memo.',
        implicitFlow: true,
        params: {
            amount: {
                description: 'Requested payment amount.',
                type: 'string',
                required: true
            },
            destination: {
                description: 'Payment destination address.',
                type: 'string',
                required: true
            },
            asset_code: {
                description: 'Asset code (skip for XLM).',
                type: 'string',
                required: false
            },
            asset_issuer: {
                description: 'Asset issuer (skip for XLM).',
                type: 'string',
                required: false
            },
            memo: {
                description: 'Transaction memo (required for exchanges and some anchors).',
                type: 'string',
                required: false
            },
            memo_type: {
                description: 'Transaction memo type.',
                type: 'string',
                required: false
            },
            pubkey: {
                description: 'Specific public key requested by the application.',
                type: 'string',
                required: false
            },
            network: {
                description: 'Stellar network identifier or private network passphrase.',
                type: 'string',
                required: false
            },
            callback: {
                description: 'Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon. ',
                type: 'string',
                required: false
            },
            submit: {
                description: 'If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.',
                type: 'boolean',
                required: false
            }
        },
        returns: {
            amount: {
                description: 'Payment amount from request.',
                type: 'string'
            },
            destination: {
                description: 'Payment destination address from request.',
                type: 'string'
            },
            asset_code: {
                description: 'Asset code from request.',
                type: 'string'
            },
            asset_issuer: {
                description: 'Asset issuer from request.',
                type: 'string'
            },
            memo: {
                description: 'Transaction memo from request.',
                type: 'string'
            },
            memo_type: {
                description: 'Transaction memo type from request.',
                type: 'string'
            },
            tx_hash: {
                description: 'HEX-encoded transaction hash.',
                type: 'string'
            },
            signed_envelope_xdr: {
                description: 'XDR-encoded transaction envelope with new signatures.',
                type: 'string'
            },
            pubkey: {
                description: 'User-selected public key.',
                type: 'string'
            },
            network: {
                description: 'Stellar network identifier.',
                type: 'string'
            },
            result: {
                description: 'Optional response from Horizon if the transaction has been submitted automatically.',
                type: 'object'
            }
        }
    },
    trust: {
        title: 'Establish trustline',
        description: 'Requests permission to create a trustline to a given Stellar asset. Gradually simplifies the process of creating trustlines for anchors, ICOs, and airdrops.',
        implicitFlow: true,
        params: {
            asset_code: {
                description: 'Trustline asset code.',
                type: 'string',
                required: true
            },
            asset_issuer: {
                description: 'Trustline asset issuer address.',
                type: 'string',
                required: true
            },
            limit: {
                description: 'Trust limit.',
                type: 'string',
                required: false
            },
            memo: {
                description: 'Transaction memo (required for exchanges and some anchors).',
                type: 'string',
                required: false
            },
            memo_type: {
                description: 'Transaction memo type.',
                type: 'string',
                required: false
            },
            pubkey: {
                description: 'Specific public key requested by the application.',
                type: 'string',
                required: false
            },
            network: {
                description: 'Stellar network identifier or private network passphrase.',
                type: 'string',
                required: false
            },
            callback: {
                description: 'Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon. ',
                type: 'string',
                required: false
            },
            submit: {
                description: 'If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.',
                type: 'boolean',
                required: false
            }
        },
        returns: {
            asset_code: {
                description: 'Trustline asset code from request.',
                type: 'string'
            },
            asset_issuer: {
                description: 'Trustline asset issuer address from request.',
                type: 'string'
            },
            limit: {
                description: 'Trust limit from request.',
                type: 'string'
            },
            tx_hash: {
                description: 'HEX-encoded transaction hash.',
                type: 'string'
            },
            signed_envelope_xdr: {
                description: 'XDR-encoded transaction envelope with new signatures.',
                type: 'string'
            },
            pubkey: {
                description: 'User-selected public key.',
                type: 'string'
            },
            network: {
                description: 'Stellar network identifier.',
                type: 'string'
            },
            result: {
                description: 'Optional response from Horizon if the transaction has been submitted automatically.',
                type: 'object'
            }
        }
    },
    exchange: {
        title: 'Swap tokens',
        description: 'Requests permission to buy tokens on Stellar DEX at market price.',
        implicitFlow: false,
        params: {
            amount: {
                description: 'The amount of asset to buy.',
                type: 'string',
                required: true
            },
            max_price: {
                description: 'Maximum price the user willing to pay.',
                type: 'string',
                required: true
            },
            sell_asset_code: {
                description: 'Asset code of the asset to sell.',
                type: 'string',
                required: false
            },
            sell_asset_issuer: {
                description: 'Issuer account of the asset to sell.',
                type: 'string',
                required: false
            },
            buy_asset_code: {
                description: 'Asset code of the asset to buy.',
                type: 'string',
                required: false
            },
            buy_asset_issuer: {
                description: 'Issuer account of the asset to buy.',
                type: 'string',
                required: false
            },
            memo: {
                description: 'Transaction memo (required for exchanges and some anchors).',
                type: 'string',
                required: false
            },
            memo_type: {
                description: 'Transaction memo type.',
                type: 'string',
                required: false
            },
            pubkey: {
                description: 'Specific public key requested by the application.',
                type: 'string',
                required: false
            },
            network: {
                description: 'Stellar network identifier or private network passphrase.',
                type: 'string',
                required: false
            },
            callback: {
                description: 'Optional URL callback where Albedo will POST the signed transaction XDR instead of submitting it to Horizon.',
                type: 'string',
                required: false
            },
            submit: {
                description: 'If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.',
                type: 'boolean',
                required: false
            }
        },
        returns: {
            amount: {
                description: 'The amount of asset to buy from request.',
                type: 'string'
            },
            max_price: {
                description: 'Maximum price the user willing to pay from request.',
                type: 'string'
            },
            sell_asset_code: {
                description: 'Asset code of the asset to sell from request.',
                type: 'string'
            },
            sell_asset_issuer: {
                description: 'Issuer account of the asset to sell from request.',
                type: 'string'
            },
            buy_asset_code: {
                description: 'Asset code of the asset to buy from request.',
                type: 'string'
            },
            buy_asset_issuer: {
                description: 'Issuer account of the asset to buy from request.',
                type: 'string'
            },
            tx_hash: {
                description: 'HEX-encoded transaction hash.',
                type: 'string'
            },
            signed_envelope_xdr: {
                description: 'XDR-encoded transaction envelope with new signatures.',
                type: 'string'
            },
            pubkey: {
                description: 'User-selected public key.',
                type: 'string'
            },
            network: {
                description: 'Stellar network identifier.',
                type: 'string'
            },
            result: {
                description: 'Optional response from Horizon if the transaction has been submitted automatically.',
                type: 'object'
            }
        }
    },
    implicit_flow: {
        title: 'Implicit permissions',
        description: 'Requests temporary access token for one or more intents that can be used to execute actions without explicit confirmation from the user. In order to be executed implicitly, an implicit flow permissions for a given intent should be granted and "pubkey" parameter set.',
        implicitFlow: false,
        params: {
            intents: {
                description: 'Requested implicit flow intents.',
                type: 'string|string[]',
                required: true
            },
            network: {
                description: 'Stellar network identifier or private network passphrase.',
                type: 'string',
                required: false
            }
        },
        returns: {
            granted: {
                description: 'Whether a user granted permissions or not.',
                type: 'boolean'
            },
            intents: {
                description: 'Requested implicit flow intents.',
                type: 'string[]'
            },
            grants: {
                description: 'Implicit flow intents that have been granted.',
                type: 'string[]'
            },
            session: {
                description: 'Unique implicit session id.',
                type: 'string'
            },
            valid_until: {
                description: 'Session expiration timestamp.',
                type: 'number'
            },
            pubkey: {
                description: 'User-selected public key.',
                type: 'string'
            },
            network: {
                description: 'Stellar network identifier.',
                type: 'string'
            }
        }
    },
    manage_account: {
        title: 'Open account settings',
        description: 'Opens account settings window for a given account.',
        implicitFlow: false,
        params: {
            pubkey: {
                description: 'Specific public key requested by the application.',
                type: 'string',
                required: true
            },
            network: {
                description: 'Stellar network identifier or private network passphrase.',
                type: 'string',
                required: false
            }
        },
        returns: {
            pubkey: {
                description: 'Public key from intent request.',
                type: 'string'
            }
        }
    },
    batch: {
        title: 'Intents batch',
        description: 'Requests execution of several tx intents bundled together. This intent is atomic – a user confirms or rejects all bundled requests at once, with the same account and the same Stellar network.',
        implicitFlow: true,
        params: {
            intents: {
                description: 'Requested tx intents that should be executed together.',
                type: 'object[]',
                required: true
            },
            pubkey: {
                description: 'Specific public key requested by the application.',
                type: 'string',
                required: false
            },
            network: {
                description: 'Stellar network identifier or private network passphrase.',
                type: 'string',
                required: false
            }
        },
        returns: {
            intents: {
                description: 'Requested tx intents.',
                type: 'object[]'
            },
            results: {
                description: 'Array of results for each requested intent.',
                type: 'object[]'
            },
            pubkey: {
                description: 'User-selected public key.',
                type: 'string'
            },
            network: {
                description: 'Stellar network identifier.',
                type: 'string'
            }
        }
    }
};

const intentErrors = {
    unhandledError: {
        message: 'Unhandled error occurred. If this error persists, please contact Albedo support.',
        code: -1
    },
    externalError: {
        message: 'External error occurred.',
        code: -2
    },
    invalidIntentRequest: {
        message: 'Intent request is invalid.',
        code: -3
    },
    actionRejectedByUser: {
        message: 'Action request was rejected by the user.',
        code: -4
    },
    horizonError: {
        message: 'Transaction failed when submitted to Stellar network.',
        code: -5
    },
    callbackError: {
        message: 'Callback redirect failed.',
        code: -6
    }
};

/**
 * Create transport handler for a given window|iframe and establish communication channel.
 * @param {Window} targetWindow - Transport window|iframe reference.
 * @param {Boolean} ephemeral - If set to true, automatically closes the window opened after receiving the response.
 */
function TransportHandler(targetWindow, ephemeral = false) {
    this.windowHandler = targetWindow;
    this.ephemeral = !!ephemeral;
    this.isLoaded = false;
    this.pendingRequests = {};
    this.preprocessRequestParams = null;
    this.onLoaded = new Promise((resolve, reject) => this.onLoadedCallback = resolve).then(() => this);
    this.messageHandler = this.messageHandler.bind(this);
    window.addEventListener('message', this.messageHandler, false);
}

TransportHandler.prototype = {

    isLoaded: false,

    protocolVersion: 3,

    markLoaded() {
        const {onLoadedCallback} = this;
        if (onLoadedCallback) {
            this.onLoadedCallback = null;
            this.isLoaded = true;
            onLoadedCallback();
        }
    },

    /**
     * Handler for incoming communication messages processing.
     * @param {Object} data - Received data.
     */
    messageHandler({data}) {
        if (data.albedo) {
            this.matchProtocolVersion(data.albedo.protocol);
            return this.markLoaded()
        }
        if (data.albedoIntentResult) {
            const {__reqid, ...result} = data.albedoIntentResult,
                pending = this.pendingRequests[__reqid];
            if (pending) {
                delete this.pendingRequests[__reqid];
                pending(result);
                if (this.ephemeral) {
                    window.removeEventListener('message', this.messageHandler, false);
                    this.windowHandler.close();
                }
            }
        }
    },

    /**
     * Handler for the transport window close event.
     */
    transportCloseHandler() {
        for (let key in this.pendingRequests)
            if (this.pendingRequests.hasOwnProperty(key)) {
                const pending = this.pendingRequests[key];
                delete this.pendingRequests[key];
                pending(intentErrors.actionRejectedByUser);
            }
    },

    /**
     * Request intent confirmation using current transport.
     * @param {Object} params - Intent request params.
     * @return {Promise}
     */
    postMessage(params) {
        const nonce = generateRandomToken();
        return new Promise((resolve, reject) => {
            this.onLoaded.then(() => {
                this.pendingRequests[nonce] = handleIntentResponsePromise.bind(this, resolve, reject);
                params = Object.assign({__reqid: nonce, __albedo_intent_version: this.protocolVersion}, params);
                if (this.preprocessRequestParams) {
                    params = this.preprocessRequestParams(params);
                }
                this.windowHandler.postMessage(params, '*');
            });
        })
    },

    /**
     * Check protocol version compatibility.
     * @param {Number} albedoProtocolVersion
     */
    matchProtocolVersion(albedoProtocolVersion) {
        const versionDif = albedoProtocolVersion - this.protocolVersion;
        if (versionDif === 0) return //everything is good
        const error = `@albedo-link/intent module protocol version (${this.protocolVersion}) is incompatible with current Albedo protocol version ${albedoProtocolVersion}.`;
        if (versionDif > 0) {
            console.warn(error + ' Please update @albedo-link/intent module to avoid possible connection problems.');
        } else if (versionDif < 0) {
            this.windowHandler.close();
            throw new Error(error)
        }
    }
};

function handleIntentResponsePromise(resolve, reject, res) {
    if (res.error) {
        reject(res);
    } else {
        resolve(res);
    }
}

/**
 * Create explicit dialog window transport.
 * @param {String} frontendUrl - URL of the Albedo frontend.
 * @return {TransportHandler}
 */
function createDialogTransport(frontendUrl) {
    const url = `${frontendUrl}/confirm`,
        w = 480,
        h = 600,
        // Fixes dual-screen position                         Most browsers      Firefox
        dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX,
        dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY,
        currentWindowWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
        currentWindowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
        left = ((currentWindowWidth / 2) - (w / 2)) + dualScreenLeft,
        top = ((currentWindowHeight / 2) - (h / 2)) + dualScreenTop;

    const dialogWindow = window.open(url, 'auth.albedo.link', `height=${h},width=${w},top=${top},left=${left},menubar=0,toolbar=0,location=0,status=0,personalbar=0,scrollbars=0,dependent=1`);
    return new TransportHandler(dialogWindow, true).onLoaded
}

let sharedIframeTransport = null;

/**
 * Create implicit transport based on hidden iframe.
 * @param {String} frontendUrl - URL of the Albedo frontend.
 * @return {TransportHandler}
 */
function createIframeTransport(frontendUrl) {
    //check if already initialized
    if (!sharedIframeTransport) {
        const iframe = document.createElement('iframe');
        iframe.style.border = 'none';
        Object.assign(iframe, {
            width: '0',
            height: '0',
            frameBorder: '0',
            referrerPolicy: 'origin',
            src: `${frontendUrl}`
        });
        document.body.appendChild(iframe);
        sharedIframeTransport = new TransportHandler(iframe.contentWindow);
    }
    return sharedIframeTransport.onLoaded
}

function ImplicitSession({session, pubkey, grants, valid_until}) {
    this.key = session;
    this.pubkey = pubkey;
    this.grants = grants.slice();
    this.validUntil = valid_until;
    //prevent accidental changes
    Object.freeze(this);
    Object.freeze(this.grants);
}

ImplicitSession.prototype = {
    /**
     * Unique session key.
     * @type {String}
     */
    key: '',

    /**
     * Public key of the key pair used to authorize the session.
     * @type {String}
     */
    pubkey: '',

    /**
     * Granted permissions.
     * @type {Array<String>}
     */
    grants: [],

    /**
     * Time-to-live.
     * @type {Number}
     */
    validUntil: 0,

    /**
     * Check whether the session is expired or not.
     * @return {boolean}
     */
    get isExpired() {
        //2 seconds reserve
        return this.validUntil - 2000 < new Date().getTime()
    },

    toJSON() {
        return {
            session: this.key,
            pubkey: this.pubkey,
            grants: this.grants.slice(),
            valid_until: this.validUntil
        }
    }
};

const storagePrefix = 'albedo_session_';

function getStorage() {
    return window.sessionStorage
}

function saveImplicitSession(intentResult) {
    const session = new ImplicitSession(intentResult);
    {
        getStorage().setItem(storagePrefix + session.pubkey, JSON.stringify(session));
    }
}

function retrieveSessionFromStorage(pubkey) {
    let session;
    {
        const restored = getStorage().getItem(storagePrefix + pubkey);
        if (restored) {
            session = new ImplicitSession(JSON.parse(restored));
        }
    }
    if (!session) return null
    if (session.isExpired) {
        forgetSession(pubkey);
        return null
    }
    return session
}

/**
 * Find active implicit session by intent and pubkey.
 * @param {String} intent - Intent code.
 * @param {String} pubkey - Public key associated with the session.
 * @return {ImplicitSession|null}
 */
function getImplicitSession(intent, pubkey) {
    const session = retrieveSessionFromStorage(pubkey);
    if (!session || !session.grants.includes(intent)) return null
    return session
}

/**
 * Retrieve all active sessions.
 * @return {Array<ImplicitSession>}
 */
function getAllImplicitSessions() {
    const storage = getStorage();
    return Object.keys(storage)
        .filter(key => key.indexOf(storagePrefix) === 0)
        .map(key => retrieveSessionFromStorage(key.substr(storagePrefix.length)))
        .filter(session => !!session)
}

/**
 * Remove an explicit session handler from the storage.
 * @param {String} pubkey - Public key associated with the session.
 */
function forgetSession(pubkey) {
    {
        getStorage().removeItem(storagePrefix + pubkey);
    }
}

function intentError(msg) {
    return Object.assign(new Error(), intentErrors.invalidIntentRequest, {ext: msg})
}

/**
 * Request user's confirmation for the specified action.
 * @param {Object} params - Intent parameters.
 * @param {String} frontendUrl - URL of the Albedo frontend.
 * @return {Promise}
 */
function requestIntentConfirmation(params, frontendUrl) {
    try {
        const {intent} = params;
        //intent should be present
        if (!intent)
            throw intentError('Parameter "intent" is required.')
        const intentDescriptor = intentInterface[intent];
        //check interface compliance
        if (!intentDescriptor)
            throw intentError(`Unknown intent: "${intent}".`)
        //build request data
        const requestParams = prepareRequestParams(intentDescriptor, params);
        //create transport and dispatch request
        return prepareTransport(requestParams, frontendUrl)
            //dispatch intent request
            .then(transport => sendRequest(requestParams, transport))
    } catch (e) {
        const {code = -1, message, ext} = e,
            res = {message, code};
        if (ext) {
            res.ext = ext;
        }
        return Promise.reject(res)
    }
}

/**
 * Create/retrieve an appropriate window transport for given intent params.
 * @param {Object} params - Intent params provided by the third-party app.
 * @param {String} frontendUrl - URL of the Albedo website.
 * @return {TransportHandler}
 */
function prepareTransport(params, frontendUrl) {
    //check if intent supports implicit flow and the permission was granted to the app
    if (params.pubkey) {
        const session = getImplicitSession(params.intent, params.pubkey);
        if (session) {
            params.session = session.key;
            //implicit session can be executed without a dialog window
            return createIframeTransport(frontendUrl)
        }
    }
    //create iframe transport in advance if the implicit flow has been requested
    setTimeout(() => {
        if (params.intent === 'implicit_flow') {
            createIframeTransport(frontendUrl);
        }
    }, 200);
    //create dialog window transport if only interactive authorization flow is available
    return createDialogTransport(frontendUrl)
}

/**
 * Send confirmation request for a specific intent using a suitable transport.
 * @param {Object} params - Intent params provided by the third-party app.
 * @param {TransportHandler} transport - PostMessage transport window handler.
 * @return {Promise<Object>}
 */
function sendRequest(params, transport) {
    return transport.postMessage(params)
        .then(result => {
            //handle implicit session grant response if any
            if (result.intent === 'implicit_flow' && result.granted) {
                //save implicit session to the internal session storage
                saveImplicitSession(result);
            }
            return result
        })
}

/**
 * Pre-process request params provided by the third-party app.
 * @param {Object} intentDescriptor - Requested intent descriptor - contains the list of available params.
 * @param {Object} params - Intent params provided by the third-party app.
 * @return {Object}
 */
function prepareRequestParams(intentDescriptor, params) {
    //validate parameters
    if (typeof params !== 'object')
        throw intentError('Intent parameters expected.')
    const {intent, pubkey} = params,
        requestParams = {intent};
    //basic account public key validation
    if (pubkey && !/^G[0-9A-Z]{55}$/.test(pubkey))
        throw intentError('Invalid "pubkey" parameter. Stellar account public key expected.')
    //check required params
    for (const key in intentDescriptor.params) {
        const props = intentDescriptor.params[key],
            value = params[key];
        if (value) {
            requestParams[key] = value;
        } else if (props.required) {
            throw intentError(`Parameter "${key}" is required for intent "${intent}".`)
        }
    }
    return requestParams
}

function parseQuery(query = null) {
    if (query === null) {
        query = window.location.search;
    }
    if (query[0] === '?') query = query.substr(1);
    const dest = {};
    for (let kv of query.split('&')) {
        const [key, value] = kv.split('=').map(v => decodeURIComponent(v));
        dest[key] = value;
    }
    return dest
}

function bindWebStellarLinkHandler(albedoIntent) {
    if (typeof (document) === 'undefined' || !document.addEventListener) return
    document.addEventListener('click', function sep0007Handler(e) {
        //we are only interested in links with "web+stellar" protocol
        if (e.target.tagName !== 'A' || (e.target.href || '').indexOf('web+stellar:') !== 0) return
        e.preventDefault();
        e.stopImmediatePropagation();
        const {pathname: intentName, search} = new URL(e.target.href);
        if (!['tx', 'pay'].includes(intentName)) {
            alert(`Invalid operation requested: ${intentName}. It's likely an external application error. Please contact support team of ${window.location.origin}.`);
            return
        }

        const params = parseQuery(search);
        albedoIntent.request(intentName, params);
    }, false);
}

if (typeof window === 'object' && typeof window.fetch !== 'function') {
    throw new Error('Browser FetchAPI is not available. For legacy browsers support use polyfills such as whatwg-fetch.')
}

/**
 * Albedo API external interface implementation.
 */
function AlbedoIntent() {
}

AlbedoIntent.prototype = {
    frontendUrl: 'https://albedo.link',
    intentInterface,
    intentErrors,
    /**
     * Initiate external intent request.
     * @param {String} intent - Intent name.
     * @param {Object} [params] - Request parameters.
     * @returns {Promise<Object>}
     */
    request(intent, params) {
        return requestIntentConfirmation(Object.assign(params || {}, {intent}), this.frontendUrl)
    },

    /**
     * Requests temporary permissions to execute the specific intents without calling confirmation dialog.
     * @param {Object} params - Intent parameters.
     * @param {Array<String>} params.intents - Requested intents.
     * @returns {Promise<ImplicitFlowIntentResult>}
     */
    implicitFlow(params) {
        return this.request('implicit_flow', params)
    },

    /**
     * Request secure third-party application authentication.
     * @param {Object} params - Intent parameters.
     * @param {String} [params.token] - Verification token generated by the application (should be unique or random).
     * @param {String} [params.require_existing] - Allow existing Albedo accounts only.
     * @returns {Promise<PublicKeyIntentResult>}
     */
    publicKey(params) {
        params = Object.assign({}, params);
        if (!params.token) {
            params.token = generateRandomToken();
        }
        return this.request('public_key', params)
    },

    /**
     * Request transaction signing, returns the signed transaction envelope.
     * @param {Object} params - Intent parameters.
     * @param {String} params.xdr - A Stellar transaction in XDR format encoded in base64.
     * @param {String} [params.pubkey] - Specific public key requested by the application.
     * @param {String} [params.network] - Stellar network identifier or private network passphrase.
     * @param {Boolean} [params.submit] - If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.
     * @returns {Promise<TxIntentResult>}
     */
    tx(params) {
        //TODO: check if txXdr is a Transaction instance and serialize it
        return this.request('tx', params)
    },

    /**
     * Requests execution of several tx intents bundled together. This intent is atomic – a user confirms or rejects all bundled requests at once, with the same account and the same Stellar network.
     * @param {Object} params - Intent parameters.
     * @param {String} params.intents - Requested tx intents.
     * @param {String} [params.pubkey] - Specific public key requested by the application.
     * @param {String} [params.network] - Stellar network identifier or private network passphrase.
     * @returns {Promise<BatchIntentResult>}
     */
    batch(params) {
        return this.request('batch', params)
    },

    /**
     * Request an asset trustline creation.
     * @param {Object} params - Intent parameters.
     * @param {String} params.destination - Payment destination address.
     * @param {String} params.amount - Amount to pay.
     * @param {String} [params.asset_code] - [Optional] Asset code (if not set XLM is implied).
     * @param {String} [params.asset_issuer] - [Optional] Asset issuer (if not set XLM is implied).
     * @param {String} [params.memo] - [Optional] Memo to be included in the payment.
     * @param {('MEMO_TEXT' | 'MEMO_ID' | 'MEMO_HASH' | 'MEMO_RETURN')} [params.memo_type] - [Optional] Memo type to be included in the payment.
     * @param {String} [params.pubkey] - Specific public key requested by the application.
     * @param {String} [params.network] - Stellar network identifier or private network passphrase.
     * @param {Boolean} [params.submit] - If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.
     * @returns {Promise<PayIntentResult>}
     */
    pay(params) {
        return this.request('pay', params)
    },

    /**
     * Request an asset trustline creation.
     * @param {Object} params - Intent parameters.
     * @param {String} params.asset_code - Asset code.
     * @param {String} params.asset_issuer - Asset account issuer.
     * @param {String} [params.limit] - [Optional] Trustline limit.
     * @param {String} [params.pubkey] - Specific public key requested by the application.
     * @param {String} [params.network] - Stellar network identifier or private network passphrase.
     * @param {Boolean} [params.submit] - If set, the signed transaction will be submitted to the Horizon server instead of returning it to the application.
     * @returns {Promise<TrustIntentResult>}
     */
    trust(params) {
        return this.request('trust', params)
    },

    /**
     * Request token exchange on Stellar DEX.
     * @param {Object} params - Intent parameters.
     * @param {String} params.destination - Payment destination address.
     * @param {String} params.amount - Amount to pay.
     * @param {String} params.max_price - Maximum price to pay.
     * @param {String} [params.sell_asset_code] - [Optional] Selling asset code (if not set XLM is implied).
     * @param {String} [params.sell_asset_issuer] - [Optional] Selling asset issuer (if not set XLM is implied).
     * @param {String} [params.buy_asset_code] - [Optional] Selling asset code (if not set XLM is implied).
     * @param {String} [params.buy_asset_issuer] - [Optional] Selling asset issuer (if not set XLM is implied).
     * @return {Promise<ExchangeIntentResult>}
     */
    exchange(params) {
        return this.request('exchange', params)
    },

    /**
     * Request arbitrary data signing.
     * @param {Object} params - Intent parameters.
     * @param {String} params.message - Text message to sign.
     * @param {String} [params.pubkey] - Specific public key requested by the application.
     * @returns {Promise<SignMessageIntentResult>}
     */
    signMessage(params) {
        params = Object.assign({}, params, {message: normalizeMessageToSign(params.message)});
        return this.request('sign_message', params)
    },

    /**
     * Open account settings window for a given account.
     * @param {Object} params - Intent parameters.
     * @param {String} params.pubkey - Specific public key requested by the application.
     * @param {String} [params.network] - Stellar network identifier or private network passphrase.
     * @returns {Promise<ManageAccountIntentResult>}
     */
    manageAccount(params) {
        return this.request('manage_account', params)
    },

    /**
     * Generate random token that can be used for authentication or encryption
     * @return {String}
     */
    generateRandomToken() {
        return generateRandomToken()
    },

    /**
     * Check whether an implicit session exists for a given intent and pubkey.
     * @param {String} intent
     * @param {String} pubkey
     * @return {boolean}
     */
    isImplicitSessionAllowed(intent, pubkey) {
        return !!getImplicitSession(intent, pubkey)
    },

    /**
     * Enumerate all currently active implicit sessions.
     * @returns {Array<{pubkey: String, session: String, valid_until: Number, grants: Array<String>}>}
     */
    listImplicitSessions() {
        return getAllImplicitSessions()
    },

    /**
     * Revoke session permission granted for an account.
     * @param {String} pubkey
     */
    forgetImplicitSession(pubkey) {
        forgetSession(pubkey);
    }
};

/**
 * Normalize a message before sending it to the signing endpoint.
 * @param {String} message - Message to normalize.
 * @returns {String}
 */
function normalizeMessageToSign(message) {
    switch (typeof message) {
        case 'string':
            return message
        case 'undefined':
            return ''
    }
    return JSON.stringify(message)
}

const albedo = new AlbedoIntent();
albedo.default = albedo;

bindWebStellarLinkHandler(albedo);

const ALBEDO_ID = "albedo";
class AlbedoModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = ALBEDO_ID;
    this.productName = "Albedo";
    this.productUrl = "https://albedo.link/";
    this.productIcon = "https://stellar.creit.tech/wallet-icons/albedo.png";
  }
  async isAvailable() {
    return true;
  }
  async getAddress() {
    return albedo.publicKey({}).then((result) => ({ address: result.pubkey })).catch((e) => {
      throw parseError(e);
    });
  }
  async signTransaction(xdr, opts) {
    return albedo.tx({
      xdr,
      pubkey: opts?.address,
      network: opts?.networkPassphrase ? opts.networkPassphrase === WalletNetwork.PUBLIC ? "public" /* PUBLIC */ : "testnet" /* TESTNET */ : void 0
    }).then(({ signed_envelope_xdr }) => ({
      signedTxXdr: signed_envelope_xdr,
      signerAddress: opts?.address
    })).catch((e) => {
      throw parseError(e);
    });
  }
  async signAuthEntry() {
    throw {
      code: -3,
      message: 'Albedo does not support the "signAuthEntry" function'
    };
  }
  /**
   * We understand that Albedo has a method to sign a message, but that method is not compatible with SEP-0043
   */
  async signMessage() {
    throw {
      code: -3,
      message: 'Albedo does not support the "signMessage" function'
    };
  }
  async getNetwork() {
    throw {
      code: -3,
      message: 'Albedo does not support the "getNetwork" function'
    };
  }
}
var AlbedoNetwork = /* @__PURE__ */ ((AlbedoNetwork2) => {
  AlbedoNetwork2["PUBLIC"] = "public";
  AlbedoNetwork2["TESTNET"] = "testnet";
  return AlbedoNetwork2;
})(AlbedoNetwork || {});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var index_min$1 = {exports: {}};

(function (module, exports) {
	!function(r,e){module.exports=e();}(commonjsGlobal,(()=>(()=>{var r,e,s={d:(r,e)=>{for(var t in e)s.o(e,t)&&!s.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]});},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0});}},t={};s.r(t),s.d(t,{WatchWalletChanges:()=>u,addToken:()=>S,default:()=>D,getAddress:()=>_,getNetwork:()=>C,getNetworkDetails:()=>O,isAllowed:()=>R,isBrowser:()=>U,isConnected:()=>N,requestAccess:()=>w,setAllowed:()=>I,signAuthEntry:()=>l,signMessage:()=>c,signTransaction:()=>d}),function(r){r.CREATE_ACCOUNT="CREATE_ACCOUNT",r.FUND_ACCOUNT="FUND_ACCOUNT",r.ADD_ACCOUNT="ADD_ACCOUNT",r.IMPORT_ACCOUNT="IMPORT_ACCOUNT",r.IMPORT_HARDWARE_WALLET="IMPORT_HARDWARE_WALLET",r.LOAD_ACCOUNT="LOAD_ACCOUNT",r.MAKE_ACCOUNT_ACTIVE="MAKE_ACCOUNT_ACTIVE",r.UPDATE_ACCOUNT_NAME="UPDATE_ACCOUNT_NAME",r.GET_MNEMONIC_PHRASE="GET_MNEMONIC_PHRASE",r.CONFIRM_MNEMONIC_PHRASE="CONFIRM_MNEMONIC_PHRASE",r.CONFIRM_MIGRATED_MNEMONIC_PHRASE="CONFIRM_MIGRATED_MNEMONIC_PHRASE",r.RECOVER_ACCOUNT="RECOVER_ACCOUNT",r.CONFIRM_PASSWORD="CONFIRM_PASSWORD",r.REJECT_ACCESS="REJECT_ACCESS",r.GRANT_ACCESS="GRANT_ACCESS",r.ADD_TOKEN="ADD_TOKEN",r.SIGN_TRANSACTION="SIGN_TRANSACTION",r.SIGN_BLOB="SIGN_BLOB",r.SIGN_AUTH_ENTRY="SIGN_AUTH_ENTRY",r.HANDLE_SIGNED_HW_PAYLOAD="HANDLE_SIGNED_HW_PAYLOAD",r.REJECT_TRANSACTION="REJECT_TRANSACTION",r.SIGN_FREIGHTER_TRANSACTION="SIGN_FREIGHTER_TRANSACTION",r.SIGN_FREIGHTER_SOROBAN_TRANSACTION="SIGN_FREIGHTER_SOROBAN_TRANSACTION",r.ADD_RECENT_ADDRESS="ADD_RECENT_ADDRESS",r.LOAD_RECENT_ADDRESSES="LOAD_RECENT_ADDRESSES",r.LOAD_LAST_USED_ACCOUNT="LOAD_LAST_USED_ACCOUNT",r.SIGN_OUT="SIGN_OUT",r.SHOW_BACKUP_PHRASE="SHOW_BACKUP_PHRASE",r.SAVE_ALLOWLIST="SAVE_ALLOWLIST",r.SAVE_SETTINGS="SAVE_SETTINGS",r.SAVE_EXPERIMENTAL_FEATURES="SAVE_EXPERIMENTAL_FEATURES",r.LOAD_SETTINGS="LOAD_SETTINGS",r.GET_CACHED_ASSET_ICON="GET_CACHED_ASSET_ICON",r.CACHE_ASSET_ICON="CACHE_ASSET_ICON",r.GET_CACHED_ASSET_DOMAIN="GET_CACHED_ASSET_DOMAIN",r.CACHE_ASSET_DOMAIN="CACHE_ASSET_DOMAIN",r.GET_MEMO_REQUIRED_ACCOUNTS="GET_MEMO_REQUIRED_ACCOUNTS",r.ADD_CUSTOM_NETWORK="ADD_CUSTOM_NETWORK",r.CHANGE_NETWORK="CHANGE_NETWORK",r.REMOVE_CUSTOM_NETWORK="REMOVE_CUSTOM_NETWORK",r.EDIT_CUSTOM_NETWORK="EDIT_CUSTOM_NETWORK",r.RESET_EXP_DATA="RESET_EXP_DATA",r.ADD_TOKEN_ID="ADD_TOKEN_ID",r.GET_TOKEN_IDS="GET_TOKEN_IDS",r.REMOVE_TOKEN_ID="REMOVE_TOKEN_ID",r.GET_MIGRATABLE_ACCOUNTS="GET_MIGRATABLE_ACCOUNTS",r.GET_MIGRATED_MNEMONIC_PHRASE="GET_MIGRATED_MNEMONIC_PHRASE",r.MIGRATE_ACCOUNTS="MIGRATE_ACCOUNTS",r.ADD_ASSETS_LIST="ADD_ASSETS_LIST",r.MODIFY_ASSETS_LIST="MODIFY_ASSETS_LIST",r.CHANGE_ASSET_VISIBILITY="CHANGE_ASSET_VISIBILITY",r.GET_HIDDEN_ASSETS="GET_HIDDEN_ASSETS",r.GET_IS_ACCOUNT_MISMATCH="GET_IS_ACCOUNT_MISMATCH";}(r||(r={})),function(r){r.REQUEST_ACCESS="REQUEST_ACCESS",r.REQUEST_PUBLIC_KEY="REQUEST_PUBLIC_KEY",r.SUBMIT_TOKEN="SUBMIT_TOKEN",r.SUBMIT_TRANSACTION="SUBMIT_TRANSACTION",r.SUBMIT_BLOB="SUBMIT_BLOB",r.SUBMIT_AUTH_ENTRY="SUBMIT_AUTH_ENTRY",r.REQUEST_NETWORK="REQUEST_NETWORK",r.REQUEST_NETWORK_DETAILS="REQUEST_NETWORK_DETAILS",r.REQUEST_CONNECTION_STATUS="REQUEST_CONNECTION_STATUS",r.REQUEST_ALLOWED_STATUS="REQUEST_ALLOWED_STATUS",r.SET_ALLOWED_STATUS="SET_ALLOWED_STATUS",r.REQUEST_USER_INFO="REQUEST_USER_INFO";}(e||(e={}));const n=r=>{const s=Date.now()+Math.random();return window.postMessage({source:"FREIGHTER_EXTERNAL_MSG_REQUEST",messageId:s,...r},window.location.origin),new Promise((t=>{let n=0;r.type!==e.REQUEST_CONNECTION_STATUS&&r.type!==e.REQUEST_PUBLIC_KEY||(n=setTimeout((()=>{t({isConnected:!1,publicKey:""}),window.removeEventListener("message",o);}),2e3));const o=r=>{var e,E;r.source===window&&"FREIGHTER_EXTERNAL_MSG_RESPONSE"===(null===(e=null==r?void 0:r.data)||void 0===e?void 0:e.source)&&(null===(E=null==r?void 0:r.data)||void 0===E?void 0:E.messagedId)===s&&(t(r.data),window.removeEventListener("message",o),clearTimeout(n));};window.addEventListener("message",o,!1);}))},o={code:-1,message:"Node environment is not supported"},E={code:-1,message:"The wallet encountered an internal error. Please try again or contact the wallet if the problem persists."},T=async()=>{let r;try{r=await n({type:e.REQUEST_ACCESS});}catch(r){console.error(r);}const{publicKey:s}=r||{publicKey:""};return {publicKey:s,error:null==r?void 0:r.apiError}},A=async()=>{let r;try{r=await n({type:e.REQUEST_PUBLIC_KEY});}catch(r){console.error(r);}return {publicKey:(null==r?void 0:r.publicKey)||"",error:null==r?void 0:r.apiError}},a=async()=>{let r;try{r=await n({type:e.REQUEST_NETWORK_DETAILS});}catch(r){console.error(r);}const{networkDetails:s,apiError:t}=r||{networkDetails:{network:"",networkUrl:"",networkPassphrase:"",sorobanRpcUrl:void 0}},{network:o,networkUrl:E,networkPassphrase:T,sorobanRpcUrl:A}=s;return {network:o,networkUrl:E,networkPassphrase:T,sorobanRpcUrl:A,error:t}},i=async()=>{let r;try{r=await n({type:e.REQUEST_ALLOWED_STATUS});}catch(r){console.error(r);}const{isAllowed:s}=r||{isAllowed:!1};return {isAllowed:s,error:null==r?void 0:r.apiError}},_=async()=>{let r="";if(U){const e=await A();return r=e.publicKey,e.error?{address:r,error:e.error}:{address:r}}return {address:r,error:o}},S=async r=>{if(U){const s=await(async r=>{let s;try{s=await n({contractId:r.contractId,networkPassphrase:r.networkPassphrase,type:e.SUBMIT_TOKEN});}catch(r){return {error:E}}return {contractId:s.contractId,error:null==s?void 0:s.apiError}})(r);return s.error?{contractId:"",error:s.error}:{contractId:s.contractId||""}}return {contractId:"",error:o}},d=async(r,s)=>{if(U){const t=await(async(r,s)=>{let t,o,T,A;"object"==typeof s?(o=s.accountToSign,T=s.networkPassphrase):(t=s,o=void 0);try{A=await n({transactionXdr:r,network:t,networkPassphrase:T,accountToSign:o,type:e.SUBMIT_TRANSACTION});}catch(r){return {signedTransaction:"",signerAddress:"",error:E}}const{signedTransaction:a,signerAddress:i}=A;return {signedTransaction:a,signerAddress:i,error:null==A?void 0:A.apiError}})(r,s);return t.error?{signedTxXdr:"",signerAddress:"",error:t.error}:{signedTxXdr:t.signedTransaction,signerAddress:t.signerAddress}}return {signedTxXdr:"",signerAddress:"",error:o}},c=async(r,s)=>{if(U){const{isAllowed:t}=await i();if(!t){const r=await T();if(r.error)return {signedMessage:null,signerAddress:"",error:r.error}}const o=await(async(r,s,t)=>{let o;const T=(t||{}).address;try{o=await n({blob:r,accountToSign:T,apiVersion:"5.0.0",networkPassphrase:null==t?void 0:t.networkPassphrase,type:e.SUBMIT_BLOB});}catch(r){return {signedMessage:null,signerAddress:"",error:E}}const{signedBlob:A,signerAddress:a}=o;return {signedMessage:A||null,signerAddress:a,error:null==o?void 0:o.apiError}})(r,0,s);return o.error?{signedMessage:null,signerAddress:"",error:o.error}:{signedMessage:o.signedMessage,signerAddress:o.signerAddress}}return {signedMessage:null,signerAddress:"",error:o}},l=async(r,s)=>{if(U){const{isAllowed:t}=await i();if(!t){const r=await T();if(r.error)return {signedAuthEntry:null,signerAddress:"",error:r.error}}const o=await(async(r,s,t)=>{const o=(t||{}).address;let T;try{T=await n({entryXdr:r,accountToSign:o,apiVersion:"5.0.0",networkPassphrase:null==t?void 0:t.networkPassphrase,type:e.SUBMIT_AUTH_ENTRY});}catch(r){return console.error(r),{signedAuthEntry:null,signerAddress:"",error:E}}const{signedAuthEntry:A,signerAddress:a}=T;return {signedAuthEntry:A||null,signerAddress:a,error:null==T?void 0:T.apiError}})(r,0,s);return o.error?{signedAuthEntry:null,signerAddress:"",error:o.error}:{signedAuthEntry:o.signedAuthEntry,signerAddress:o.signerAddress}}return {signedAuthEntry:null,signerAddress:"",error:o}},N=async()=>U?window.freighter?Promise.resolve({isConnected:window.freighter}):(async()=>{let r={isConnected:!1};try{r=await n({type:e.REQUEST_CONNECTION_STATUS});}catch(r){console.error(r);}return {isConnected:r.isConnected}})():{isConnected:!1,error:o},C=async()=>{if(U){const r=await(async()=>{let r;try{r=await n({type:e.REQUEST_NETWORK_DETAILS});}catch(r){console.error(r);}const{networkDetails:s}=r||{networkDetails:{network:"",networkPassphrase:""}};return {network:null==s?void 0:s.network,networkPassphrase:null==s?void 0:s.networkPassphrase,error:null==r?void 0:r.apiError}})();return r.error?{network:"",networkPassphrase:"",error:r.error}:{network:r.network,networkPassphrase:r.networkPassphrase}}return {network:"",networkPassphrase:"",error:o}},O=async()=>{if(U){const r=await a();return r.error?{network:"",networkUrl:"",networkPassphrase:"",error:r.error}:{network:r.network,networkUrl:r.networkUrl,networkPassphrase:r.networkPassphrase,sorobanRpcUrl:r.sorobanRpcUrl}}return {network:"",networkUrl:"",networkPassphrase:"",error:o}},R=async()=>{let r=!1;if(U){const e=await i();return r=e.isAllowed,e.error?{isAllowed:r,error:e.error}:{isAllowed:r}}return {isAllowed:r,error:o}},I=async()=>{let r=!1;if(U){const s=await(async()=>{let r;try{r=await n({type:e.SET_ALLOWED_STATUS});}catch(r){console.error(r);}const{isAllowed:s}=r||{isAllowed:!1};return {isAllowed:s,error:null==r?void 0:r.apiError}})();return r=s.isAllowed,s.error?{isAllowed:r,error:s.error}:{isAllowed:r}}return {isAllowed:r,error:o}},w=async()=>{let r="";if(U){const e=await T();return r=e.publicKey,e.error?{address:r,error:e.error}:{address:r}}return {address:r,error:o}};class u{constructor(r=3e3){this.fetchInfo=async r=>{if(!this.isRunning)return;const e=await A(),s=await a();(e.error||s.error)&&r({address:"",network:"",networkPassphrase:"",error:e.error||s.error}),this.currentAddress===e.publicKey&&this.currentNetwork===s.network&&this.currentNetworkPassphrase===s.networkPassphrase||(this.currentAddress=e.publicKey,this.currentNetwork=s.network,this.currentNetworkPassphrase=s.networkPassphrase,r({address:e.publicKey,network:s.network,networkPassphrase:s.networkPassphrase})),setTimeout((()=>this.fetchInfo(r)),this.timeout);},this.timeout=r,this.currentAddress="",this.currentNetwork="",this.currentNetworkPassphrase="",this.isRunning=!1;}watch(r){return U?(this.isRunning=!0,this.fetchInfo(r),{}):{error:o}}stop(){this.isRunning=!1;}}const U="undefined"!=typeof window,D={getAddress:_,addToken:S,signTransaction:d,signMessage:c,signAuthEntry:l,isConnected:N,getNetwork:C,getNetworkDetails:O,isAllowed:R,setAllowed:I,requestAccess:w,WatchWalletChanges:u};return t})()));
	
} (index_min$1));

var index_minExports$1 = index_min$1.exports;

const FREIGHTER_ID = "freighter";
class FreighterModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = FREIGHTER_ID;
    this.productName = "Freighter";
    this.productUrl = "https://freighter.app";
    this.productIcon = "https://stellar.creit.tech/wallet-icons/freighter.png";
  }
  async runChecks() {
    if (!await this.isAvailable()) {
      throw new Error("Freighter is not connected");
    }
  }
  async isAvailable() {
    if (window.stellar?.provider === "freighter" && window.stellar?.platform === "mobile") return false;
    return index_minExports$1.isConnected().then(({ isConnected: isConnected2, error }) => !error && isConnected2).catch(() => false);
  }
  async getAddress(params) {
    return this.runChecks().then(async () => {
      if (params?.skipRequestAccess) return true;
      return index_minExports$1.requestAccess();
    }).then(() => index_minExports$1.getAddress()).then(({ address, error }) => {
      if (error) throw error;
      if (!address) throw {
        code: -3,
        message: "Getting the address is not allowed, please request access first."
      };
      return { address };
    }).catch((e) => {
      throw parseError(e);
    });
  }
  async signTransaction(xdr, opts) {
    return this.runChecks().then(async () => {
      const { signedTxXdr, signerAddress, error } = await index_minExports$1.signTransaction(xdr, {
        address: opts?.address,
        networkPassphrase: opts?.networkPassphrase
      });
      if (error) throw error;
      return { signedTxXdr, signerAddress };
    }).catch((e) => {
      throw parseError(e);
    });
  }
  async signAuthEntry(authEntry, opts) {
    return this.runChecks().then(async () => {
      const { signedAuthEntry, signerAddress, error } = await index_minExports$1.signAuthEntry(authEntry, {
        address: opts?.address,
        networkPassphrase: opts?.networkPassphrase
      });
      if (error || !signedAuthEntry) throw error;
      return { signedAuthEntry: require$$1.Buffer.from(signedAuthEntry).toString("base64"), signerAddress };
    }).catch((e) => {
      throw parseError(e);
    });
  }
  async signMessage(message, opts) {
    return this.runChecks().then(async () => {
      const { signedMessage, signerAddress, error } = await index_minExports$1.signMessage(message, {
        address: opts?.address,
        networkPassphrase: opts?.networkPassphrase
      });
      if (error || !signedMessage) throw error;
      return {
        signedMessage: typeof signedMessage === "string" ? signedMessage : require$$1.Buffer.from(signedMessage).toString("base64"),
        signerAddress
      };
    }).catch((e) => {
      throw parseError(e);
    });
  }
  async getNetwork() {
    return this.runChecks().then(async () => {
      const { network, networkPassphrase, error } = await index_minExports$1.getNetwork();
      if (error) throw error;
      return { network, networkPassphrase };
    }).catch((e) => {
      throw parseError(e);
    });
  }
}

var index_min = {exports: {}};

(function (module, exports) {
	!function(e,n){module.exports=n();}(commonjsGlobal,(()=>(()=>{var e,n,o,t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]});},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});}},i={};t.r(i),t.d(i,{default:()=>S,getPublicKey:()=>c,isBrowser:()=>T,isConnected:()=>a,signTransaction:()=>d}),function(e){e.LOAD_STATE="LOAD_STATE",e.LOGIN="LOGIN",e.LOGOUT="LOGOUT",e.SIGN_TRANSACTION="SIGN_TRANSACTION",e.REJECT_TRANSACTION="REJECT_TRANSACTION",e.GRANT_ACCESS="GRANT_ACCESS",e.REJECT_ACCESS="REJECT_ACCESS";}(e||(e={})),function(e){e.REQUEST_ACCESS="REQUEST_ACCESS",e.SIGN_TRANSACTION="SUBMIT_TRANSACTION",e.REQUEST_CONNECTION_STATUS="REQUEST_CONNECTION_STATUS";}(n||(n={})),function(e){e.pending="pending",e.signed="signed",e.rejected="rejected";}(o||(o={}));const r="LOBSTR_CONNECTION_KEY",s=e=>{const o=Date.now()+Math.random();return window.postMessage({source:"LOBSTR_EXTERNAL_MSG_REQUEST",messageId:o,...e},window.location.origin),new Promise((t=>{let i=0;e.type===n.REQUEST_CONNECTION_STATUS&&(i=setTimeout((()=>{t({isConnected:!1}),window.removeEventListener("message",r);}),2e3));const r=e=>{var n,s;e.source===window&&"LOBSTR_EXTERNAL_MSG_RESPONSE"===(null===(n=null==e?void 0:e.data)||void 0===n?void 0:n.source)&&(null===(s=null==e?void 0:e.data)||void 0===s?void 0:s.messagedId)===o&&(t(e.data),window.removeEventListener("message",r),clearTimeout(i));};window.addEventListener("message",r,!1);}))},c=async()=>{if(!T)return "";const{publicKey:e,connectionKey:o}=await(async()=>{let e={publicKey:"",error:"",connectionKey:""};try{e=await s({type:n.REQUEST_ACCESS});}catch(e){console.error(e);}const{publicKey:o,connectionKey:t,error:i}=e;if(i)throw i;return {publicKey:o,connectionKey:t}})();return (e=>{var n;null===(n=null===window||void 0===window?void 0:window.sessionStorage)||void 0===n||n.setItem(r,e);})(o),e},d=async e=>{if(!T)return "";const o=(null===(t=null===window||void 0===window?void 0:window.sessionStorage)||void 0===t?void 0:t.getItem(r))||"";var t;return await(async(e,o)=>{let t={signedTransaction:"",error:""};try{t=await s({transactionXdr:e,connectionKey:o,type:n.SIGN_TRANSACTION});}catch(e){throw console.error(e),e}const{signedTransaction:i,error:r}=t;if(r)throw r;return i})(e,o)},a=async()=>!!T&&(window.lobstrSignerExtension?window.lobstrSignerExtension:await(async()=>{let e={isConnected:!1};try{e=await s({type:n.REQUEST_CONNECTION_STATUS});}catch(e){console.error(e);}return e.isConnected})()),T="undefined"!=typeof window,S={getPublicKey:c,signTransaction:d,isConnected:a};return i})()));
	
} (index_min));

var index_minExports = index_min.exports;

const LOBSTR_ID = "lobstr";
class LobstrModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = LOBSTR_ID;
    this.productName = "LOBSTR";
    this.productUrl = "https://lobstr.co";
    this.productIcon = "https://stellar.creit.tech/wallet-icons/lobstr.png";
  }
  async isAvailable() {
    return index_minExports.isConnected();
  }
  async getAddress() {
    const runChecks = async () => {
      if (!await index_minExports.isConnected()) {
        throw new Error(`Lobstr is not connected`);
      }
    };
    return runChecks().then(() => index_minExports.getPublicKey()).then((address) => ({ address })).catch((e) => {
      throw parseError(e);
    });
  }
  async signTransaction(xdr, opts) {
    const runChecks = async () => {
      if (!await index_minExports.isConnected()) {
        throw new Error(`Lobstr is not connected`);
      }
      if (opts?.address) {
        console.warn(`Lobstr doesn't allow specifying what public key should sign the transaction, we skip the value`);
      }
      if (opts?.networkPassphrase) {
        console.warn(`Lobstr doesn't allow specifying the network that should be used, we skip the value`);
      }
    };
    return runChecks().then(() => index_minExports.signTransaction(xdr)).then((signedTxXdr) => ({ signedTxXdr })).catch((e) => {
      throw parseError(e);
    });
  }
  async signAuthEntry() {
    throw {
      code: -3,
      message: 'Lobstr does not support the "signAuthEntry" function'
    };
  }
  async signMessage() {
    throw {
      code: -3,
      message: 'Lobstr does not support the "signMessage" function'
    };
  }
  async getNetwork() {
    throw {
      code: -3,
      message: 'Lobstr does not support the "getNetwork" function'
    };
  }
}

const RABET_ID = "rabet";
class RabetModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = RABET_ID;
    this.productName = "Rabet";
    this.productUrl = "https://rabet.io/";
    this.productIcon = "https://stellar.creit.tech/wallet-icons/rabet.png";
  }
  isAvailable() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(typeof window !== "undefined" && !!window.rabet);
      }, 100);
    });
  }
  async getAddress() {
    const runChecks = async () => {
      if (!await this.isAvailable()) {
        throw new Error("Rabet is not installed");
      }
    };
    return runChecks().then(() => window.rabet.connect()).then(({ publicKey }) => ({ address: publicKey })).catch((e) => {
      throw parseError(e);
    });
  }
  async signTransaction(xdr, opts) {
    const runChecks = async () => {
      if (!await this.isAvailable()) {
        throw new Error("Rabet is not installed");
      }
      if (opts?.address && opts.networkPassphrase !== WalletNetwork.PUBLIC && opts.networkPassphrase !== WalletNetwork.TESTNET) {
        throw new Error(`Rabet doesn't support the network: ${opts.networkPassphrase}`);
      }
      if (opts?.address) {
        console.warn(`Rabet doesn't allow specifying the network that should be used, we skip the value`);
      }
    };
    const sign = async () => window.rabet.sign(
      xdr,
      opts?.networkPassphrase === WalletNetwork.PUBLIC ? "mainnet" /* PUBLIC */ : "testnet" /* TESTNET */
    );
    return runChecks().then(sign).then((result) => ({ signedTxXdr: result?.xdr })).catch((e) => {
      throw parseError(e);
    });
  }
  async signAuthEntry() {
    throw {
      code: -3,
      message: 'Rabet does not support the "signAuthEntry" function'
    };
  }
  async signMessage() {
    throw {
      code: -3,
      message: 'Rabet does not support the "signMessage" function'
    };
  }
  async getNetwork() {
    throw {
      code: -3,
      message: 'Rabet does not support the "getNetwork" function'
    };
  }
}
var RabetNetwork = /* @__PURE__ */ ((RabetNetwork2) => {
  RabetNetwork2["PUBLIC"] = "mainnet";
  RabetNetwork2["TESTNET"] = "testnet";
  return RabetNetwork2;
})(RabetNetwork || {});

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var naclFast = {exports: {}};

(function (module) {
	(function(nacl) {

	// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
	// Public domain.
	//
	// Implementation derived from TweetNaCl version 20140427.
	// See for details: http://tweetnacl.cr.yp.to/

	var gf = function(init) {
	  var i, r = new Float64Array(16);
	  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
	  return r;
	};

	//  Pluggable, initialized in high-level API below.
	var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

	var _0 = new Uint8Array(16);
	var _9 = new Uint8Array(32); _9[0] = 9;

	var gf0 = gf(),
	    gf1 = gf([1]),
	    _121665 = gf([0xdb41, 1]),
	    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
	    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
	    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
	    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
	    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

	function ts64(x, i, h, l) {
	  x[i]   = (h >> 24) & 0xff;
	  x[i+1] = (h >> 16) & 0xff;
	  x[i+2] = (h >>  8) & 0xff;
	  x[i+3] = h & 0xff;
	  x[i+4] = (l >> 24)  & 0xff;
	  x[i+5] = (l >> 16)  & 0xff;
	  x[i+6] = (l >>  8)  & 0xff;
	  x[i+7] = l & 0xff;
	}

	function vn(x, xi, y, yi, n) {
	  var i,d = 0;
	  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
	  return (1 & ((d - 1) >>> 8)) - 1;
	}

	function crypto_verify_16(x, xi, y, yi) {
	  return vn(x,xi,y,yi,16);
	}

	function crypto_verify_32(x, xi, y, yi) {
	  return vn(x,xi,y,yi,32);
	}

	function core_salsa20(o, p, k, c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }
	   x0 =  x0 +  j0 | 0;
	   x1 =  x1 +  j1 | 0;
	   x2 =  x2 +  j2 | 0;
	   x3 =  x3 +  j3 | 0;
	   x4 =  x4 +  j4 | 0;
	   x5 =  x5 +  j5 | 0;
	   x6 =  x6 +  j6 | 0;
	   x7 =  x7 +  j7 | 0;
	   x8 =  x8 +  j8 | 0;
	   x9 =  x9 +  j9 | 0;
	  x10 = x10 + j10 | 0;
	  x11 = x11 + j11 | 0;
	  x12 = x12 + j12 | 0;
	  x13 = x13 + j13 | 0;
	  x14 = x14 + j14 | 0;
	  x15 = x15 + j15 | 0;

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x1 >>>  0 & 0xff;
	  o[ 5] = x1 >>>  8 & 0xff;
	  o[ 6] = x1 >>> 16 & 0xff;
	  o[ 7] = x1 >>> 24 & 0xff;

	  o[ 8] = x2 >>>  0 & 0xff;
	  o[ 9] = x2 >>>  8 & 0xff;
	  o[10] = x2 >>> 16 & 0xff;
	  o[11] = x2 >>> 24 & 0xff;

	  o[12] = x3 >>>  0 & 0xff;
	  o[13] = x3 >>>  8 & 0xff;
	  o[14] = x3 >>> 16 & 0xff;
	  o[15] = x3 >>> 24 & 0xff;

	  o[16] = x4 >>>  0 & 0xff;
	  o[17] = x4 >>>  8 & 0xff;
	  o[18] = x4 >>> 16 & 0xff;
	  o[19] = x4 >>> 24 & 0xff;

	  o[20] = x5 >>>  0 & 0xff;
	  o[21] = x5 >>>  8 & 0xff;
	  o[22] = x5 >>> 16 & 0xff;
	  o[23] = x5 >>> 24 & 0xff;

	  o[24] = x6 >>>  0 & 0xff;
	  o[25] = x6 >>>  8 & 0xff;
	  o[26] = x6 >>> 16 & 0xff;
	  o[27] = x6 >>> 24 & 0xff;

	  o[28] = x7 >>>  0 & 0xff;
	  o[29] = x7 >>>  8 & 0xff;
	  o[30] = x7 >>> 16 & 0xff;
	  o[31] = x7 >>> 24 & 0xff;

	  o[32] = x8 >>>  0 & 0xff;
	  o[33] = x8 >>>  8 & 0xff;
	  o[34] = x8 >>> 16 & 0xff;
	  o[35] = x8 >>> 24 & 0xff;

	  o[36] = x9 >>>  0 & 0xff;
	  o[37] = x9 >>>  8 & 0xff;
	  o[38] = x9 >>> 16 & 0xff;
	  o[39] = x9 >>> 24 & 0xff;

	  o[40] = x10 >>>  0 & 0xff;
	  o[41] = x10 >>>  8 & 0xff;
	  o[42] = x10 >>> 16 & 0xff;
	  o[43] = x10 >>> 24 & 0xff;

	  o[44] = x11 >>>  0 & 0xff;
	  o[45] = x11 >>>  8 & 0xff;
	  o[46] = x11 >>> 16 & 0xff;
	  o[47] = x11 >>> 24 & 0xff;

	  o[48] = x12 >>>  0 & 0xff;
	  o[49] = x12 >>>  8 & 0xff;
	  o[50] = x12 >>> 16 & 0xff;
	  o[51] = x12 >>> 24 & 0xff;

	  o[52] = x13 >>>  0 & 0xff;
	  o[53] = x13 >>>  8 & 0xff;
	  o[54] = x13 >>> 16 & 0xff;
	  o[55] = x13 >>> 24 & 0xff;

	  o[56] = x14 >>>  0 & 0xff;
	  o[57] = x14 >>>  8 & 0xff;
	  o[58] = x14 >>> 16 & 0xff;
	  o[59] = x14 >>> 24 & 0xff;

	  o[60] = x15 >>>  0 & 0xff;
	  o[61] = x15 >>>  8 & 0xff;
	  o[62] = x15 >>> 16 & 0xff;
	  o[63] = x15 >>> 24 & 0xff;
	}

	function core_hsalsa20(o,p,k,c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x5 >>>  0 & 0xff;
	  o[ 5] = x5 >>>  8 & 0xff;
	  o[ 6] = x5 >>> 16 & 0xff;
	  o[ 7] = x5 >>> 24 & 0xff;

	  o[ 8] = x10 >>>  0 & 0xff;
	  o[ 9] = x10 >>>  8 & 0xff;
	  o[10] = x10 >>> 16 & 0xff;
	  o[11] = x10 >>> 24 & 0xff;

	  o[12] = x15 >>>  0 & 0xff;
	  o[13] = x15 >>>  8 & 0xff;
	  o[14] = x15 >>> 16 & 0xff;
	  o[15] = x15 >>> 24 & 0xff;

	  o[16] = x6 >>>  0 & 0xff;
	  o[17] = x6 >>>  8 & 0xff;
	  o[18] = x6 >>> 16 & 0xff;
	  o[19] = x6 >>> 24 & 0xff;

	  o[20] = x7 >>>  0 & 0xff;
	  o[21] = x7 >>>  8 & 0xff;
	  o[22] = x7 >>> 16 & 0xff;
	  o[23] = x7 >>> 24 & 0xff;

	  o[24] = x8 >>>  0 & 0xff;
	  o[25] = x8 >>>  8 & 0xff;
	  o[26] = x8 >>> 16 & 0xff;
	  o[27] = x8 >>> 24 & 0xff;

	  o[28] = x9 >>>  0 & 0xff;
	  o[29] = x9 >>>  8 & 0xff;
	  o[30] = x9 >>> 16 & 0xff;
	  o[31] = x9 >>> 24 & 0xff;
	}

	function crypto_core_salsa20(out,inp,k,c) {
	  core_salsa20(out,inp,k,c);
	}

	function crypto_core_hsalsa20(out,inp,k,c) {
	  core_hsalsa20(out,inp,k,c);
	}

	var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
	            // "expand 32-byte k"

	function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	    mpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	  }
	  return 0;
	}

	function crypto_stream_salsa20(c,cpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = x[i];
	  }
	  return 0;
	}

	function crypto_stream(c,cpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20(c,cpos,d,sn,s);
	}

	function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
	}

	/*
	* Port of Andrew Moon's Poly1305-donna-16. Public domain.
	* https://github.com/floodyberry/poly1305-donna
	*/

	var poly1305 = function(key) {
	  this.buffer = new Uint8Array(16);
	  this.r = new Uint16Array(10);
	  this.h = new Uint16Array(10);
	  this.pad = new Uint16Array(8);
	  this.leftover = 0;
	  this.fin = 0;

	  var t0, t1, t2, t3, t4, t5, t6, t7;

	  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
	  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
	  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
	  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
	  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
	  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	  this.r[9] = ((t7 >>>  5)) & 0x007f;

	  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
	  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
	  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
	  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
	  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
	  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
	  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
	  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
	};

	poly1305.prototype.blocks = function(m, mpos, bytes) {
	  var hibit = this.fin ? 0 : (1 << 11);
	  var t0, t1, t2, t3, t4, t5, t6, t7, c;
	  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

	  var h0 = this.h[0],
	      h1 = this.h[1],
	      h2 = this.h[2],
	      h3 = this.h[3],
	      h4 = this.h[4],
	      h5 = this.h[5],
	      h6 = this.h[6],
	      h7 = this.h[7],
	      h8 = this.h[8],
	      h9 = this.h[9];

	  var r0 = this.r[0],
	      r1 = this.r[1],
	      r2 = this.r[2],
	      r3 = this.r[3],
	      r4 = this.r[4],
	      r5 = this.r[5],
	      r6 = this.r[6],
	      r7 = this.r[7],
	      r8 = this.r[8],
	      r9 = this.r[9];

	  while (bytes >= 16) {
	    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
	    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
	    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
	    h5 += ((t4 >>>  1)) & 0x1fff;
	    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
	    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	    h9 += ((t7 >>> 5)) | hibit;

	    c = 0;

	    d0 = c;
	    d0 += h0 * r0;
	    d0 += h1 * (5 * r9);
	    d0 += h2 * (5 * r8);
	    d0 += h3 * (5 * r7);
	    d0 += h4 * (5 * r6);
	    c = (d0 >>> 13); d0 &= 0x1fff;
	    d0 += h5 * (5 * r5);
	    d0 += h6 * (5 * r4);
	    d0 += h7 * (5 * r3);
	    d0 += h8 * (5 * r2);
	    d0 += h9 * (5 * r1);
	    c += (d0 >>> 13); d0 &= 0x1fff;

	    d1 = c;
	    d1 += h0 * r1;
	    d1 += h1 * r0;
	    d1 += h2 * (5 * r9);
	    d1 += h3 * (5 * r8);
	    d1 += h4 * (5 * r7);
	    c = (d1 >>> 13); d1 &= 0x1fff;
	    d1 += h5 * (5 * r6);
	    d1 += h6 * (5 * r5);
	    d1 += h7 * (5 * r4);
	    d1 += h8 * (5 * r3);
	    d1 += h9 * (5 * r2);
	    c += (d1 >>> 13); d1 &= 0x1fff;

	    d2 = c;
	    d2 += h0 * r2;
	    d2 += h1 * r1;
	    d2 += h2 * r0;
	    d2 += h3 * (5 * r9);
	    d2 += h4 * (5 * r8);
	    c = (d2 >>> 13); d2 &= 0x1fff;
	    d2 += h5 * (5 * r7);
	    d2 += h6 * (5 * r6);
	    d2 += h7 * (5 * r5);
	    d2 += h8 * (5 * r4);
	    d2 += h9 * (5 * r3);
	    c += (d2 >>> 13); d2 &= 0x1fff;

	    d3 = c;
	    d3 += h0 * r3;
	    d3 += h1 * r2;
	    d3 += h2 * r1;
	    d3 += h3 * r0;
	    d3 += h4 * (5 * r9);
	    c = (d3 >>> 13); d3 &= 0x1fff;
	    d3 += h5 * (5 * r8);
	    d3 += h6 * (5 * r7);
	    d3 += h7 * (5 * r6);
	    d3 += h8 * (5 * r5);
	    d3 += h9 * (5 * r4);
	    c += (d3 >>> 13); d3 &= 0x1fff;

	    d4 = c;
	    d4 += h0 * r4;
	    d4 += h1 * r3;
	    d4 += h2 * r2;
	    d4 += h3 * r1;
	    d4 += h4 * r0;
	    c = (d4 >>> 13); d4 &= 0x1fff;
	    d4 += h5 * (5 * r9);
	    d4 += h6 * (5 * r8);
	    d4 += h7 * (5 * r7);
	    d4 += h8 * (5 * r6);
	    d4 += h9 * (5 * r5);
	    c += (d4 >>> 13); d4 &= 0x1fff;

	    d5 = c;
	    d5 += h0 * r5;
	    d5 += h1 * r4;
	    d5 += h2 * r3;
	    d5 += h3 * r2;
	    d5 += h4 * r1;
	    c = (d5 >>> 13); d5 &= 0x1fff;
	    d5 += h5 * r0;
	    d5 += h6 * (5 * r9);
	    d5 += h7 * (5 * r8);
	    d5 += h8 * (5 * r7);
	    d5 += h9 * (5 * r6);
	    c += (d5 >>> 13); d5 &= 0x1fff;

	    d6 = c;
	    d6 += h0 * r6;
	    d6 += h1 * r5;
	    d6 += h2 * r4;
	    d6 += h3 * r3;
	    d6 += h4 * r2;
	    c = (d6 >>> 13); d6 &= 0x1fff;
	    d6 += h5 * r1;
	    d6 += h6 * r0;
	    d6 += h7 * (5 * r9);
	    d6 += h8 * (5 * r8);
	    d6 += h9 * (5 * r7);
	    c += (d6 >>> 13); d6 &= 0x1fff;

	    d7 = c;
	    d7 += h0 * r7;
	    d7 += h1 * r6;
	    d7 += h2 * r5;
	    d7 += h3 * r4;
	    d7 += h4 * r3;
	    c = (d7 >>> 13); d7 &= 0x1fff;
	    d7 += h5 * r2;
	    d7 += h6 * r1;
	    d7 += h7 * r0;
	    d7 += h8 * (5 * r9);
	    d7 += h9 * (5 * r8);
	    c += (d7 >>> 13); d7 &= 0x1fff;

	    d8 = c;
	    d8 += h0 * r8;
	    d8 += h1 * r7;
	    d8 += h2 * r6;
	    d8 += h3 * r5;
	    d8 += h4 * r4;
	    c = (d8 >>> 13); d8 &= 0x1fff;
	    d8 += h5 * r3;
	    d8 += h6 * r2;
	    d8 += h7 * r1;
	    d8 += h8 * r0;
	    d8 += h9 * (5 * r9);
	    c += (d8 >>> 13); d8 &= 0x1fff;

	    d9 = c;
	    d9 += h0 * r9;
	    d9 += h1 * r8;
	    d9 += h2 * r7;
	    d9 += h3 * r6;
	    d9 += h4 * r5;
	    c = (d9 >>> 13); d9 &= 0x1fff;
	    d9 += h5 * r4;
	    d9 += h6 * r3;
	    d9 += h7 * r2;
	    d9 += h8 * r1;
	    d9 += h9 * r0;
	    c += (d9 >>> 13); d9 &= 0x1fff;

	    c = (((c << 2) + c)) | 0;
	    c = (c + d0) | 0;
	    d0 = c & 0x1fff;
	    c = (c >>> 13);
	    d1 += c;

	    h0 = d0;
	    h1 = d1;
	    h2 = d2;
	    h3 = d3;
	    h4 = d4;
	    h5 = d5;
	    h6 = d6;
	    h7 = d7;
	    h8 = d8;
	    h9 = d9;

	    mpos += 16;
	    bytes -= 16;
	  }
	  this.h[0] = h0;
	  this.h[1] = h1;
	  this.h[2] = h2;
	  this.h[3] = h3;
	  this.h[4] = h4;
	  this.h[5] = h5;
	  this.h[6] = h6;
	  this.h[7] = h7;
	  this.h[8] = h8;
	  this.h[9] = h9;
	};

	poly1305.prototype.finish = function(mac, macpos) {
	  var g = new Uint16Array(10);
	  var c, mask, f, i;

	  if (this.leftover) {
	    i = this.leftover;
	    this.buffer[i++] = 1;
	    for (; i < 16; i++) this.buffer[i] = 0;
	    this.fin = 1;
	    this.blocks(this.buffer, 0, 16);
	  }

	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  for (i = 2; i < 10; i++) {
	    this.h[i] += c;
	    c = this.h[i] >>> 13;
	    this.h[i] &= 0x1fff;
	  }
	  this.h[0] += (c * 5);
	  c = this.h[0] >>> 13;
	  this.h[0] &= 0x1fff;
	  this.h[1] += c;
	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  this.h[2] += c;

	  g[0] = this.h[0] + 5;
	  c = g[0] >>> 13;
	  g[0] &= 0x1fff;
	  for (i = 1; i < 10; i++) {
	    g[i] = this.h[i] + c;
	    c = g[i] >>> 13;
	    g[i] &= 0x1fff;
	  }
	  g[9] -= (1 << 13);

	  mask = (c ^ 1) - 1;
	  for (i = 0; i < 10; i++) g[i] &= mask;
	  mask = ~mask;
	  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

	  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
	  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
	  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
	  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
	  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
	  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
	  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
	  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

	  f = this.h[0] + this.pad[0];
	  this.h[0] = f & 0xffff;
	  for (i = 1; i < 8; i++) {
	    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
	    this.h[i] = f & 0xffff;
	  }

	  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
	  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
	  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
	  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
	  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
	  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
	  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
	  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
	  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
	  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
	  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
	  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
	  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
	  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
	  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
	  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
	};

	poly1305.prototype.update = function(m, mpos, bytes) {
	  var i, want;

	  if (this.leftover) {
	    want = (16 - this.leftover);
	    if (want > bytes)
	      want = bytes;
	    for (i = 0; i < want; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    bytes -= want;
	    mpos += want;
	    this.leftover += want;
	    if (this.leftover < 16)
	      return;
	    this.blocks(this.buffer, 0, 16);
	    this.leftover = 0;
	  }

	  if (bytes >= 16) {
	    want = bytes - (bytes % 16);
	    this.blocks(m, mpos, want);
	    mpos += want;
	    bytes -= want;
	  }

	  if (bytes) {
	    for (i = 0; i < bytes; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    this.leftover += bytes;
	  }
	};

	function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
	  var s = new poly1305(k);
	  s.update(m, mpos, n);
	  s.finish(out, outpos);
	  return 0;
	}

	function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
	  var x = new Uint8Array(16);
	  crypto_onetimeauth(x,0,m,mpos,n,k);
	  return crypto_verify_16(h,hpos,x,0);
	}

	function crypto_secretbox(c,m,d,n,k) {
	  var i;
	  if (d < 32) return -1;
	  crypto_stream_xor(c,0,m,0,d,n,k);
	  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
	  for (i = 0; i < 16; i++) c[i] = 0;
	  return 0;
	}

	function crypto_secretbox_open(m,c,d,n,k) {
	  var i;
	  var x = new Uint8Array(32);
	  if (d < 32) return -1;
	  crypto_stream(x,0,32,n,k);
	  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
	  crypto_stream_xor(m,0,c,0,d,n,k);
	  for (i = 0; i < 32; i++) m[i] = 0;
	  return 0;
	}

	function set25519(r, a) {
	  var i;
	  for (i = 0; i < 16; i++) r[i] = a[i]|0;
	}

	function car25519(o) {
	  var i, v, c = 1;
	  for (i = 0; i < 16; i++) {
	    v = o[i] + c + 65535;
	    c = Math.floor(v / 65536);
	    o[i] = v - c * 65536;
	  }
	  o[0] += c-1 + 37 * (c-1);
	}

	function sel25519(p, q, b) {
	  var t, c = ~(b-1);
	  for (var i = 0; i < 16; i++) {
	    t = c & (p[i] ^ q[i]);
	    p[i] ^= t;
	    q[i] ^= t;
	  }
	}

	function pack25519(o, n) {
	  var i, j, b;
	  var m = gf(), t = gf();
	  for (i = 0; i < 16; i++) t[i] = n[i];
	  car25519(t);
	  car25519(t);
	  car25519(t);
	  for (j = 0; j < 2; j++) {
	    m[0] = t[0] - 0xffed;
	    for (i = 1; i < 15; i++) {
	      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
	      m[i-1] &= 0xffff;
	    }
	    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
	    b = (m[15]>>16) & 1;
	    m[14] &= 0xffff;
	    sel25519(t, m, 1-b);
	  }
	  for (i = 0; i < 16; i++) {
	    o[2*i] = t[i] & 0xff;
	    o[2*i+1] = t[i]>>8;
	  }
	}

	function neq25519(a, b) {
	  var c = new Uint8Array(32), d = new Uint8Array(32);
	  pack25519(c, a);
	  pack25519(d, b);
	  return crypto_verify_32(c, 0, d, 0);
	}

	function par25519(a) {
	  var d = new Uint8Array(32);
	  pack25519(d, a);
	  return d[0] & 1;
	}

	function unpack25519(o, n) {
	  var i;
	  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
	  o[15] &= 0x7fff;
	}

	function A(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
	}

	function Z(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
	}

	function M(o, a, b) {
	  var v, c,
	     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
	     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
	    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
	    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
	    b0 = b[0],
	    b1 = b[1],
	    b2 = b[2],
	    b3 = b[3],
	    b4 = b[4],
	    b5 = b[5],
	    b6 = b[6],
	    b7 = b[7],
	    b8 = b[8],
	    b9 = b[9],
	    b10 = b[10],
	    b11 = b[11],
	    b12 = b[12],
	    b13 = b[13],
	    b14 = b[14],
	    b15 = b[15];

	  v = a[0];
	  t0 += v * b0;
	  t1 += v * b1;
	  t2 += v * b2;
	  t3 += v * b3;
	  t4 += v * b4;
	  t5 += v * b5;
	  t6 += v * b6;
	  t7 += v * b7;
	  t8 += v * b8;
	  t9 += v * b9;
	  t10 += v * b10;
	  t11 += v * b11;
	  t12 += v * b12;
	  t13 += v * b13;
	  t14 += v * b14;
	  t15 += v * b15;
	  v = a[1];
	  t1 += v * b0;
	  t2 += v * b1;
	  t3 += v * b2;
	  t4 += v * b3;
	  t5 += v * b4;
	  t6 += v * b5;
	  t7 += v * b6;
	  t8 += v * b7;
	  t9 += v * b8;
	  t10 += v * b9;
	  t11 += v * b10;
	  t12 += v * b11;
	  t13 += v * b12;
	  t14 += v * b13;
	  t15 += v * b14;
	  t16 += v * b15;
	  v = a[2];
	  t2 += v * b0;
	  t3 += v * b1;
	  t4 += v * b2;
	  t5 += v * b3;
	  t6 += v * b4;
	  t7 += v * b5;
	  t8 += v * b6;
	  t9 += v * b7;
	  t10 += v * b8;
	  t11 += v * b9;
	  t12 += v * b10;
	  t13 += v * b11;
	  t14 += v * b12;
	  t15 += v * b13;
	  t16 += v * b14;
	  t17 += v * b15;
	  v = a[3];
	  t3 += v * b0;
	  t4 += v * b1;
	  t5 += v * b2;
	  t6 += v * b3;
	  t7 += v * b4;
	  t8 += v * b5;
	  t9 += v * b6;
	  t10 += v * b7;
	  t11 += v * b8;
	  t12 += v * b9;
	  t13 += v * b10;
	  t14 += v * b11;
	  t15 += v * b12;
	  t16 += v * b13;
	  t17 += v * b14;
	  t18 += v * b15;
	  v = a[4];
	  t4 += v * b0;
	  t5 += v * b1;
	  t6 += v * b2;
	  t7 += v * b3;
	  t8 += v * b4;
	  t9 += v * b5;
	  t10 += v * b6;
	  t11 += v * b7;
	  t12 += v * b8;
	  t13 += v * b9;
	  t14 += v * b10;
	  t15 += v * b11;
	  t16 += v * b12;
	  t17 += v * b13;
	  t18 += v * b14;
	  t19 += v * b15;
	  v = a[5];
	  t5 += v * b0;
	  t6 += v * b1;
	  t7 += v * b2;
	  t8 += v * b3;
	  t9 += v * b4;
	  t10 += v * b5;
	  t11 += v * b6;
	  t12 += v * b7;
	  t13 += v * b8;
	  t14 += v * b9;
	  t15 += v * b10;
	  t16 += v * b11;
	  t17 += v * b12;
	  t18 += v * b13;
	  t19 += v * b14;
	  t20 += v * b15;
	  v = a[6];
	  t6 += v * b0;
	  t7 += v * b1;
	  t8 += v * b2;
	  t9 += v * b3;
	  t10 += v * b4;
	  t11 += v * b5;
	  t12 += v * b6;
	  t13 += v * b7;
	  t14 += v * b8;
	  t15 += v * b9;
	  t16 += v * b10;
	  t17 += v * b11;
	  t18 += v * b12;
	  t19 += v * b13;
	  t20 += v * b14;
	  t21 += v * b15;
	  v = a[7];
	  t7 += v * b0;
	  t8 += v * b1;
	  t9 += v * b2;
	  t10 += v * b3;
	  t11 += v * b4;
	  t12 += v * b5;
	  t13 += v * b6;
	  t14 += v * b7;
	  t15 += v * b8;
	  t16 += v * b9;
	  t17 += v * b10;
	  t18 += v * b11;
	  t19 += v * b12;
	  t20 += v * b13;
	  t21 += v * b14;
	  t22 += v * b15;
	  v = a[8];
	  t8 += v * b0;
	  t9 += v * b1;
	  t10 += v * b2;
	  t11 += v * b3;
	  t12 += v * b4;
	  t13 += v * b5;
	  t14 += v * b6;
	  t15 += v * b7;
	  t16 += v * b8;
	  t17 += v * b9;
	  t18 += v * b10;
	  t19 += v * b11;
	  t20 += v * b12;
	  t21 += v * b13;
	  t22 += v * b14;
	  t23 += v * b15;
	  v = a[9];
	  t9 += v * b0;
	  t10 += v * b1;
	  t11 += v * b2;
	  t12 += v * b3;
	  t13 += v * b4;
	  t14 += v * b5;
	  t15 += v * b6;
	  t16 += v * b7;
	  t17 += v * b8;
	  t18 += v * b9;
	  t19 += v * b10;
	  t20 += v * b11;
	  t21 += v * b12;
	  t22 += v * b13;
	  t23 += v * b14;
	  t24 += v * b15;
	  v = a[10];
	  t10 += v * b0;
	  t11 += v * b1;
	  t12 += v * b2;
	  t13 += v * b3;
	  t14 += v * b4;
	  t15 += v * b5;
	  t16 += v * b6;
	  t17 += v * b7;
	  t18 += v * b8;
	  t19 += v * b9;
	  t20 += v * b10;
	  t21 += v * b11;
	  t22 += v * b12;
	  t23 += v * b13;
	  t24 += v * b14;
	  t25 += v * b15;
	  v = a[11];
	  t11 += v * b0;
	  t12 += v * b1;
	  t13 += v * b2;
	  t14 += v * b3;
	  t15 += v * b4;
	  t16 += v * b5;
	  t17 += v * b6;
	  t18 += v * b7;
	  t19 += v * b8;
	  t20 += v * b9;
	  t21 += v * b10;
	  t22 += v * b11;
	  t23 += v * b12;
	  t24 += v * b13;
	  t25 += v * b14;
	  t26 += v * b15;
	  v = a[12];
	  t12 += v * b0;
	  t13 += v * b1;
	  t14 += v * b2;
	  t15 += v * b3;
	  t16 += v * b4;
	  t17 += v * b5;
	  t18 += v * b6;
	  t19 += v * b7;
	  t20 += v * b8;
	  t21 += v * b9;
	  t22 += v * b10;
	  t23 += v * b11;
	  t24 += v * b12;
	  t25 += v * b13;
	  t26 += v * b14;
	  t27 += v * b15;
	  v = a[13];
	  t13 += v * b0;
	  t14 += v * b1;
	  t15 += v * b2;
	  t16 += v * b3;
	  t17 += v * b4;
	  t18 += v * b5;
	  t19 += v * b6;
	  t20 += v * b7;
	  t21 += v * b8;
	  t22 += v * b9;
	  t23 += v * b10;
	  t24 += v * b11;
	  t25 += v * b12;
	  t26 += v * b13;
	  t27 += v * b14;
	  t28 += v * b15;
	  v = a[14];
	  t14 += v * b0;
	  t15 += v * b1;
	  t16 += v * b2;
	  t17 += v * b3;
	  t18 += v * b4;
	  t19 += v * b5;
	  t20 += v * b6;
	  t21 += v * b7;
	  t22 += v * b8;
	  t23 += v * b9;
	  t24 += v * b10;
	  t25 += v * b11;
	  t26 += v * b12;
	  t27 += v * b13;
	  t28 += v * b14;
	  t29 += v * b15;
	  v = a[15];
	  t15 += v * b0;
	  t16 += v * b1;
	  t17 += v * b2;
	  t18 += v * b3;
	  t19 += v * b4;
	  t20 += v * b5;
	  t21 += v * b6;
	  t22 += v * b7;
	  t23 += v * b8;
	  t24 += v * b9;
	  t25 += v * b10;
	  t26 += v * b11;
	  t27 += v * b12;
	  t28 += v * b13;
	  t29 += v * b14;
	  t30 += v * b15;

	  t0  += 38 * t16;
	  t1  += 38 * t17;
	  t2  += 38 * t18;
	  t3  += 38 * t19;
	  t4  += 38 * t20;
	  t5  += 38 * t21;
	  t6  += 38 * t22;
	  t7  += 38 * t23;
	  t8  += 38 * t24;
	  t9  += 38 * t25;
	  t10 += 38 * t26;
	  t11 += 38 * t27;
	  t12 += 38 * t28;
	  t13 += 38 * t29;
	  t14 += 38 * t30;
	  // t15 left as is

	  // first car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  // second car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  o[ 0] = t0;
	  o[ 1] = t1;
	  o[ 2] = t2;
	  o[ 3] = t3;
	  o[ 4] = t4;
	  o[ 5] = t5;
	  o[ 6] = t6;
	  o[ 7] = t7;
	  o[ 8] = t8;
	  o[ 9] = t9;
	  o[10] = t10;
	  o[11] = t11;
	  o[12] = t12;
	  o[13] = t13;
	  o[14] = t14;
	  o[15] = t15;
	}

	function S(o, a) {
	  M(o, a, a);
	}

	function inv25519(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 253; a >= 0; a--) {
	    S(c, c);
	    if(a !== 2 && a !== 4) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function pow2523(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 250; a >= 0; a--) {
	      S(c, c);
	      if(a !== 1) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function crypto_scalarmult(q, n, p) {
	  var z = new Uint8Array(32);
	  var x = new Float64Array(80), r, i;
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf();
	  for (i = 0; i < 31; i++) z[i] = n[i];
	  z[31]=(n[31]&127)|64;
	  z[0]&=248;
	  unpack25519(x,p);
	  for (i = 0; i < 16; i++) {
	    b[i]=x[i];
	    d[i]=a[i]=c[i]=0;
	  }
	  a[0]=d[0]=1;
	  for (i=254; i>=0; --i) {
	    r=(z[i>>>3]>>>(i&7))&1;
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	    A(e,a,c);
	    Z(a,a,c);
	    A(c,b,d);
	    Z(b,b,d);
	    S(d,e);
	    S(f,a);
	    M(a,c,a);
	    M(c,b,e);
	    A(e,a,c);
	    Z(a,a,c);
	    S(b,a);
	    Z(c,d,f);
	    M(a,c,_121665);
	    A(a,a,d);
	    M(c,c,a);
	    M(a,d,f);
	    M(d,b,x);
	    S(b,e);
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	  }
	  for (i = 0; i < 16; i++) {
	    x[i+16]=a[i];
	    x[i+32]=c[i];
	    x[i+48]=b[i];
	    x[i+64]=d[i];
	  }
	  var x32 = x.subarray(32);
	  var x16 = x.subarray(16);
	  inv25519(x32,x32);
	  M(x16,x16,x32);
	  pack25519(q,x16);
	  return 0;
	}

	function crypto_scalarmult_base(q, n) {
	  return crypto_scalarmult(q, n, _9);
	}

	function crypto_box_keypair(y, x) {
	  randombytes(x, 32);
	  return crypto_scalarmult_base(y, x);
	}

	function crypto_box_beforenm(k, y, x) {
	  var s = new Uint8Array(32);
	  crypto_scalarmult(s, x, y);
	  return crypto_core_hsalsa20(k, _0, s, sigma);
	}

	var crypto_box_afternm = crypto_secretbox;
	var crypto_box_open_afternm = crypto_secretbox_open;

	function crypto_box(c, m, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_afternm(c, m, d, n, k);
	}

	function crypto_box_open(m, c, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_open_afternm(m, c, d, n, k);
	}

	var K = [
	  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	];

	function crypto_hashblocks_hl(hh, hl, m, n) {
	  var wh = new Int32Array(16), wl = new Int32Array(16),
	      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
	      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
	      th, tl, i, j, h, l, a, b, c, d;

	  var ah0 = hh[0],
	      ah1 = hh[1],
	      ah2 = hh[2],
	      ah3 = hh[3],
	      ah4 = hh[4],
	      ah5 = hh[5],
	      ah6 = hh[6],
	      ah7 = hh[7],

	      al0 = hl[0],
	      al1 = hl[1],
	      al2 = hl[2],
	      al3 = hl[3],
	      al4 = hl[4],
	      al5 = hl[5],
	      al6 = hl[6],
	      al7 = hl[7];

	  var pos = 0;
	  while (n >= 128) {
	    for (i = 0; i < 16; i++) {
	      j = 8 * i + pos;
	      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
	      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
	    }
	    for (i = 0; i < 80; i++) {
	      bh0 = ah0;
	      bh1 = ah1;
	      bh2 = ah2;
	      bh3 = ah3;
	      bh4 = ah4;
	      bh5 = ah5;
	      bh6 = ah6;
	      bh7 = ah7;

	      bl0 = al0;
	      bl1 = al1;
	      bl2 = al2;
	      bl3 = al3;
	      bl4 = al4;
	      bl5 = al5;
	      bl6 = al6;
	      bl7 = al7;

	      // add
	      h = ah7;
	      l = al7;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma1
	      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
	      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Ch
	      h = (ah4 & ah5) ^ (~ah4 & ah6);
	      l = (al4 & al5) ^ (~al4 & al6);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // K
	      h = K[i*2];
	      l = K[i*2+1];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // w
	      h = wh[i%16];
	      l = wl[i%16];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      th = c & 0xffff | d << 16;
	      tl = a & 0xffff | b << 16;

	      // add
	      h = th;
	      l = tl;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma0
	      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
	      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Maj
	      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
	      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh7 = (c & 0xffff) | (d << 16);
	      bl7 = (a & 0xffff) | (b << 16);

	      // add
	      h = bh3;
	      l = bl3;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      h = th;
	      l = tl;

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh3 = (c & 0xffff) | (d << 16);
	      bl3 = (a & 0xffff) | (b << 16);

	      ah1 = bh0;
	      ah2 = bh1;
	      ah3 = bh2;
	      ah4 = bh3;
	      ah5 = bh4;
	      ah6 = bh5;
	      ah7 = bh6;
	      ah0 = bh7;

	      al1 = bl0;
	      al2 = bl1;
	      al3 = bl2;
	      al4 = bl3;
	      al5 = bl4;
	      al6 = bl5;
	      al7 = bl6;
	      al0 = bl7;

	      if (i%16 === 15) {
	        for (j = 0; j < 16; j++) {
	          // add
	          h = wh[j];
	          l = wl[j];

	          a = l & 0xffff; b = l >>> 16;
	          c = h & 0xffff; d = h >>> 16;

	          h = wh[(j+9)%16];
	          l = wl[(j+9)%16];

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma0
	          th = wh[(j+1)%16];
	          tl = wl[(j+1)%16];
	          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
	          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma1
	          th = wh[(j+14)%16];
	          tl = wl[(j+14)%16];
	          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
	          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          b += a >>> 16;
	          c += b >>> 16;
	          d += c >>> 16;

	          wh[j] = (c & 0xffff) | (d << 16);
	          wl[j] = (a & 0xffff) | (b << 16);
	        }
	      }
	    }

	    // add
	    h = ah0;
	    l = al0;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[0];
	    l = hl[0];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[0] = ah0 = (c & 0xffff) | (d << 16);
	    hl[0] = al0 = (a & 0xffff) | (b << 16);

	    h = ah1;
	    l = al1;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[1];
	    l = hl[1];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[1] = ah1 = (c & 0xffff) | (d << 16);
	    hl[1] = al1 = (a & 0xffff) | (b << 16);

	    h = ah2;
	    l = al2;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[2];
	    l = hl[2];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[2] = ah2 = (c & 0xffff) | (d << 16);
	    hl[2] = al2 = (a & 0xffff) | (b << 16);

	    h = ah3;
	    l = al3;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[3];
	    l = hl[3];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[3] = ah3 = (c & 0xffff) | (d << 16);
	    hl[3] = al3 = (a & 0xffff) | (b << 16);

	    h = ah4;
	    l = al4;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[4];
	    l = hl[4];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[4] = ah4 = (c & 0xffff) | (d << 16);
	    hl[4] = al4 = (a & 0xffff) | (b << 16);

	    h = ah5;
	    l = al5;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[5];
	    l = hl[5];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[5] = ah5 = (c & 0xffff) | (d << 16);
	    hl[5] = al5 = (a & 0xffff) | (b << 16);

	    h = ah6;
	    l = al6;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[6];
	    l = hl[6];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[6] = ah6 = (c & 0xffff) | (d << 16);
	    hl[6] = al6 = (a & 0xffff) | (b << 16);

	    h = ah7;
	    l = al7;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[7];
	    l = hl[7];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[7] = ah7 = (c & 0xffff) | (d << 16);
	    hl[7] = al7 = (a & 0xffff) | (b << 16);

	    pos += 128;
	    n -= 128;
	  }

	  return n;
	}

	function crypto_hash(out, m, n) {
	  var hh = new Int32Array(8),
	      hl = new Int32Array(8),
	      x = new Uint8Array(256),
	      i, b = n;

	  hh[0] = 0x6a09e667;
	  hh[1] = 0xbb67ae85;
	  hh[2] = 0x3c6ef372;
	  hh[3] = 0xa54ff53a;
	  hh[4] = 0x510e527f;
	  hh[5] = 0x9b05688c;
	  hh[6] = 0x1f83d9ab;
	  hh[7] = 0x5be0cd19;

	  hl[0] = 0xf3bcc908;
	  hl[1] = 0x84caa73b;
	  hl[2] = 0xfe94f82b;
	  hl[3] = 0x5f1d36f1;
	  hl[4] = 0xade682d1;
	  hl[5] = 0x2b3e6c1f;
	  hl[6] = 0xfb41bd6b;
	  hl[7] = 0x137e2179;

	  crypto_hashblocks_hl(hh, hl, m, n);
	  n %= 128;

	  for (i = 0; i < n; i++) x[i] = m[b-n+i];
	  x[n] = 128;

	  n = 256-128*(n<112?1:0);
	  x[n-9] = 0;
	  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
	  crypto_hashblocks_hl(hh, hl, x, n);

	  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

	  return 0;
	}

	function add(p, q) {
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf(),
	      g = gf(), h = gf(), t = gf();

	  Z(a, p[1], p[0]);
	  Z(t, q[1], q[0]);
	  M(a, a, t);
	  A(b, p[0], p[1]);
	  A(t, q[0], q[1]);
	  M(b, b, t);
	  M(c, p[3], q[3]);
	  M(c, c, D2);
	  M(d, p[2], q[2]);
	  A(d, d, d);
	  Z(e, b, a);
	  Z(f, d, c);
	  A(g, d, c);
	  A(h, b, a);

	  M(p[0], e, f);
	  M(p[1], h, g);
	  M(p[2], g, f);
	  M(p[3], e, h);
	}

	function cswap(p, q, b) {
	  var i;
	  for (i = 0; i < 4; i++) {
	    sel25519(p[i], q[i], b);
	  }
	}

	function pack(r, p) {
	  var tx = gf(), ty = gf(), zi = gf();
	  inv25519(zi, p[2]);
	  M(tx, p[0], zi);
	  M(ty, p[1], zi);
	  pack25519(r, ty);
	  r[31] ^= par25519(tx) << 7;
	}

	function scalarmult(p, q, s) {
	  var b, i;
	  set25519(p[0], gf0);
	  set25519(p[1], gf1);
	  set25519(p[2], gf1);
	  set25519(p[3], gf0);
	  for (i = 255; i >= 0; --i) {
	    b = (s[(i/8)|0] >> (i&7)) & 1;
	    cswap(p, q, b);
	    add(q, p);
	    add(p, p);
	    cswap(p, q, b);
	  }
	}

	function scalarbase(p, s) {
	  var q = [gf(), gf(), gf(), gf()];
	  set25519(q[0], X);
	  set25519(q[1], Y);
	  set25519(q[2], gf1);
	  M(q[3], X, Y);
	  scalarmult(p, q, s);
	}

	function crypto_sign_keypair(pk, sk, seeded) {
	  var d = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()];
	  var i;

	  if (!seeded) randombytes(sk, 32);
	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  scalarbase(p, d);
	  pack(pk, p);

	  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
	  return 0;
	}

	var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

	function modL(r, x) {
	  var carry, i, j, k;
	  for (i = 63; i >= 32; --i) {
	    carry = 0;
	    for (j = i - 32, k = i - 12; j < k; ++j) {
	      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
	      carry = Math.floor((x[j] + 128) / 256);
	      x[j] -= carry * 256;
	    }
	    x[j] += carry;
	    x[i] = 0;
	  }
	  carry = 0;
	  for (j = 0; j < 32; j++) {
	    x[j] += carry - (x[31] >> 4) * L[j];
	    carry = x[j] >> 8;
	    x[j] &= 255;
	  }
	  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
	  for (i = 0; i < 32; i++) {
	    x[i+1] += x[i] >> 8;
	    r[i] = x[i] & 255;
	  }
	}

	function reduce(r) {
	  var x = new Float64Array(64), i;
	  for (i = 0; i < 64; i++) x[i] = r[i];
	  for (i = 0; i < 64; i++) r[i] = 0;
	  modL(r, x);
	}

	// Note: difference from C - smlen returned, not passed as argument.
	function crypto_sign(sm, m, n, sk) {
	  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
	  var i, j, x = new Float64Array(64);
	  var p = [gf(), gf(), gf(), gf()];

	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  var smlen = n + 64;
	  for (i = 0; i < n; i++) sm[64 + i] = m[i];
	  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

	  crypto_hash(r, sm.subarray(32), n+32);
	  reduce(r);
	  scalarbase(p, r);
	  pack(sm, p);

	  for (i = 32; i < 64; i++) sm[i] = sk[i];
	  crypto_hash(h, sm, n + 64);
	  reduce(h);

	  for (i = 0; i < 64; i++) x[i] = 0;
	  for (i = 0; i < 32; i++) x[i] = r[i];
	  for (i = 0; i < 32; i++) {
	    for (j = 0; j < 32; j++) {
	      x[i+j] += h[i] * d[j];
	    }
	  }

	  modL(sm.subarray(32), x);
	  return smlen;
	}

	function unpackneg(r, p) {
	  var t = gf(), chk = gf(), num = gf(),
	      den = gf(), den2 = gf(), den4 = gf(),
	      den6 = gf();

	  set25519(r[2], gf1);
	  unpack25519(r[1], p);
	  S(num, r[1]);
	  M(den, num, D);
	  Z(num, num, r[2]);
	  A(den, r[2], den);

	  S(den2, den);
	  S(den4, den2);
	  M(den6, den4, den2);
	  M(t, den6, num);
	  M(t, t, den);

	  pow2523(t, t);
	  M(t, t, num);
	  M(t, t, den);
	  M(t, t, den);
	  M(r[0], t, den);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) M(r[0], r[0], I);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) return -1;

	  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

	  M(r[3], r[0], r[1]);
	  return 0;
	}

	function crypto_sign_open(m, sm, n, pk) {
	  var i;
	  var t = new Uint8Array(32), h = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()],
	      q = [gf(), gf(), gf(), gf()];

	  if (n < 64) return -1;

	  if (unpackneg(q, pk)) return -1;

	  for (i = 0; i < n; i++) m[i] = sm[i];
	  for (i = 0; i < 32; i++) m[i+32] = pk[i];
	  crypto_hash(h, m, n);
	  reduce(h);
	  scalarmult(p, q, h);

	  scalarbase(q, sm.subarray(32));
	  add(p, q);
	  pack(t, p);

	  n -= 64;
	  if (crypto_verify_32(sm, 0, t, 0)) {
	    for (i = 0; i < n; i++) m[i] = 0;
	    return -1;
	  }

	  for (i = 0; i < n; i++) m[i] = sm[i + 64];
	  return n;
	}

	var crypto_secretbox_KEYBYTES = 32,
	    crypto_secretbox_NONCEBYTES = 24,
	    crypto_secretbox_ZEROBYTES = 32,
	    crypto_secretbox_BOXZEROBYTES = 16,
	    crypto_scalarmult_BYTES = 32,
	    crypto_scalarmult_SCALARBYTES = 32,
	    crypto_box_PUBLICKEYBYTES = 32,
	    crypto_box_SECRETKEYBYTES = 32,
	    crypto_box_BEFORENMBYTES = 32,
	    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
	    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
	    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
	    crypto_sign_BYTES = 64,
	    crypto_sign_PUBLICKEYBYTES = 32,
	    crypto_sign_SECRETKEYBYTES = 64,
	    crypto_sign_SEEDBYTES = 32,
	    crypto_hash_BYTES = 64;

	nacl.lowlevel = {
	  crypto_core_hsalsa20: crypto_core_hsalsa20,
	  crypto_stream_xor: crypto_stream_xor,
	  crypto_stream: crypto_stream,
	  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
	  crypto_stream_salsa20: crypto_stream_salsa20,
	  crypto_onetimeauth: crypto_onetimeauth,
	  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
	  crypto_verify_16: crypto_verify_16,
	  crypto_verify_32: crypto_verify_32,
	  crypto_secretbox: crypto_secretbox,
	  crypto_secretbox_open: crypto_secretbox_open,
	  crypto_scalarmult: crypto_scalarmult,
	  crypto_scalarmult_base: crypto_scalarmult_base,
	  crypto_box_beforenm: crypto_box_beforenm,
	  crypto_box_afternm: crypto_box_afternm,
	  crypto_box: crypto_box,
	  crypto_box_open: crypto_box_open,
	  crypto_box_keypair: crypto_box_keypair,
	  crypto_hash: crypto_hash,
	  crypto_sign: crypto_sign,
	  crypto_sign_keypair: crypto_sign_keypair,
	  crypto_sign_open: crypto_sign_open,

	  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
	  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
	  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
	  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
	  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
	  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
	  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
	  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
	  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
	  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
	  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
	  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
	  crypto_sign_BYTES: crypto_sign_BYTES,
	  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
	  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
	  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
	  crypto_hash_BYTES: crypto_hash_BYTES,

	  gf: gf,
	  D: D,
	  L: L,
	  pack25519: pack25519,
	  unpack25519: unpack25519,
	  M: M,
	  A: A,
	  S: S,
	  Z: Z,
	  pow2523: pow2523,
	  add: add,
	  set25519: set25519,
	  modL: modL,
	  scalarmult: scalarmult,
	  scalarbase: scalarbase,
	};

	/* High-level API */

	function checkLengths(k, n) {
	  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
	  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
	}

	function checkBoxLengths(pk, sk) {
	  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
	  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
	}

	function checkArrayTypes() {
	  for (var i = 0; i < arguments.length; i++) {
	    if (!(arguments[i] instanceof Uint8Array))
	      throw new TypeError('unexpected type, use Uint8Array');
	  }
	}

	function cleanup(arr) {
	  for (var i = 0; i < arr.length; i++) arr[i] = 0;
	}

	nacl.randomBytes = function(n) {
	  var b = new Uint8Array(n);
	  randombytes(b, n);
	  return b;
	};

	nacl.secretbox = function(msg, nonce, key) {
	  checkArrayTypes(msg, nonce, key);
	  checkLengths(key, nonce);
	  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
	  var c = new Uint8Array(m.length);
	  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
	  crypto_secretbox(c, m, m.length, nonce, key);
	  return c.subarray(crypto_secretbox_BOXZEROBYTES);
	};

	nacl.secretbox.open = function(box, nonce, key) {
	  checkArrayTypes(box, nonce, key);
	  checkLengths(key, nonce);
	  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
	  var m = new Uint8Array(c.length);
	  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
	  if (c.length < 32) return null;
	  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
	  return m.subarray(crypto_secretbox_ZEROBYTES);
	};

	nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
	nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
	nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

	nacl.scalarMult = function(n, p) {
	  checkArrayTypes(n, p);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult(q, n, p);
	  return q;
	};

	nacl.scalarMult.base = function(n) {
	  checkArrayTypes(n);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult_base(q, n);
	  return q;
	};

	nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
	nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

	nacl.box = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox(msg, nonce, k);
	};

	nacl.box.before = function(publicKey, secretKey) {
	  checkArrayTypes(publicKey, secretKey);
	  checkBoxLengths(publicKey, secretKey);
	  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
	  crypto_box_beforenm(k, publicKey, secretKey);
	  return k;
	};

	nacl.box.after = nacl.secretbox;

	nacl.box.open = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox.open(msg, nonce, k);
	};

	nacl.box.open.after = nacl.secretbox.open;

	nacl.box.keyPair = function() {
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
	  crypto_box_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.box.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  crypto_scalarmult_base(pk, secretKey);
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
	nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
	nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
	nacl.box.nonceLength = crypto_box_NONCEBYTES;
	nacl.box.overheadLength = nacl.secretbox.overheadLength;

	nacl.sign = function(msg, secretKey) {
	  checkArrayTypes(msg, secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
	  crypto_sign(signedMsg, msg, msg.length, secretKey);
	  return signedMsg;
	};

	nacl.sign.open = function(signedMsg, publicKey) {
	  checkArrayTypes(signedMsg, publicKey);
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var tmp = new Uint8Array(signedMsg.length);
	  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
	  if (mlen < 0) return null;
	  var m = new Uint8Array(mlen);
	  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
	  return m;
	};

	nacl.sign.detached = function(msg, secretKey) {
	  var signedMsg = nacl.sign(msg, secretKey);
	  var sig = new Uint8Array(crypto_sign_BYTES);
	  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
	  return sig;
	};

	nacl.sign.detached.verify = function(msg, sig, publicKey) {
	  checkArrayTypes(msg, sig, publicKey);
	  if (sig.length !== crypto_sign_BYTES)
	    throw new Error('bad signature size');
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var i;
	  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
	  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
	  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
	};

	nacl.sign.keyPair = function() {
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  crypto_sign_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.sign.keyPair.fromSeed = function(seed) {
	  checkArrayTypes(seed);
	  if (seed.length !== crypto_sign_SEEDBYTES)
	    throw new Error('bad seed size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  for (var i = 0; i < 32; i++) sk[i] = seed[i];
	  crypto_sign_keypair(pk, sk, true);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
	nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
	nacl.sign.seedLength = crypto_sign_SEEDBYTES;
	nacl.sign.signatureLength = crypto_sign_BYTES;

	nacl.hash = function(msg) {
	  checkArrayTypes(msg);
	  var h = new Uint8Array(crypto_hash_BYTES);
	  crypto_hash(h, msg, msg.length);
	  return h;
	};

	nacl.hash.hashLength = crypto_hash_BYTES;

	nacl.verify = function(x, y) {
	  checkArrayTypes(x, y);
	  // Zero length arguments are considered not equal.
	  if (x.length === 0 || y.length === 0) return false;
	  if (x.length !== y.length) return false;
	  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
	};

	nacl.setPRNG = function(fn) {
	  randombytes = fn;
	};

	(function() {
	  // Initialize PRNG if environment provides CSPRNG.
	  // If not, methods calling randombytes will throw.
	  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
	  if (crypto && crypto.getRandomValues) {
	    // Browsers.
	    var QUOTA = 65536;
	    nacl.setPRNG(function(x, n) {
	      var i, v = new Uint8Array(n);
	      for (i = 0; i < n; i += QUOTA) {
	        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
	      }
	      for (i = 0; i < n; i++) x[i] = v[i];
	      cleanup(v);
	    });
	  } else if (typeof commonjsRequire !== 'undefined') {
	    // Node.js.
	    crypto = require$$0$3;
	    if (crypto && crypto.randomBytes) {
	      nacl.setPRNG(function(x, n) {
	        var i, v = crypto.randomBytes(n);
	        for (i = 0; i < n; i++) x[i] = v[i];
	        cleanup(v);
	      });
	    }
	  }
	})();

	})(module.exports ? module.exports : (self.nacl = self.nacl || {})); 
} (naclFast));

var naclFastExports = naclFast.exports;

var naclUtil = {exports: {}};

(function (module) {
	// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
	// Public domain.
	(function(root, f) {
	  if (module.exports) module.exports = f();
	  else if (root.nacl) root.nacl.util = f();
	  else {
	    root.nacl = {};
	    root.nacl.util = f();
	  }
	}(commonjsGlobal, function() {

	  var util = {};

	  function validateBase64(s) {
	    if (!(/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s))) {
	      throw new TypeError('invalid encoding');
	    }
	  }

	  util.decodeUTF8 = function(s) {
	    if (typeof s !== 'string') throw new TypeError('expected string');
	    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
	    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
	    return b;
	  };

	  util.encodeUTF8 = function(arr) {
	    var i, s = [];
	    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
	    return decodeURIComponent(escape(s.join('')));
	  };

	  if (typeof atob === 'undefined') {
	    // Node.js

	    if (typeof Buffer.from !== 'undefined') {
	       // Node v6 and later
	      util.encodeBase64 = function (arr) { // v6 and later
	          return Buffer.from(arr).toString('base64');
	      };

	      util.decodeBase64 = function (s) {
	        validateBase64(s);
	        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
	      };

	    } else {
	      // Node earlier than v6
	      util.encodeBase64 = function (arr) { // v6 and later
	        return (new Buffer(arr)).toString('base64');
	      };

	      util.decodeBase64 = function(s) {
	        validateBase64(s);
	        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
	      };
	    }

	  } else {
	    // Browsers

	    util.encodeBase64 = function(arr) {
	      var i, s = [], len = arr.length;
	      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
	      return btoa(s.join(''));
	    };

	    util.decodeBase64 = function(s) {
	      validateBase64(s);
	      var i, d = atob(s), b = new Uint8Array(d.length);
	      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
	      return b;
	    };

	  }

	  return util;

	})); 
} (naclUtil));

var naclUtilExports = naclUtil.exports;

var L=(L=>(L.XBULL_CONNECT="XBULL_CONNECT",L.XBULL_GET_PUBLIC_KEY="XBULL_GET_PUBLIC_KEY",L.XBULL_SIGN_XDR="XBULL_SIGN_XDR",L.XBULL_GET_NETWORK="XBULL_GET_NETWORK",L.XBULL_SIGN_MESSAGE="XBULL_SIGN_MESSAGE",L.XBULL_INITIAL_RESPONSE="XBULL_INITIAL_RESPONSE",L.XBULL_CONNECT_RESPONSE="XBULL_CONNECT_RESPONSE",L.XBULL_SIGN="XBULL_SIGN",L.XBULL_SIGN_RESPONSE="XBULL_SIGN_RESPONSE",L.XBULL_SIGN_MESSAGE_RESPONSE="XBULL_SIGN_MESSAGE_RESPONSE",L))(L||{});function _(L){return !!L.error}

class r{constructor(){this.isConnected=!1;}sendEventToContentScript(e,r,o){return new Promise((s=>{const t=e=>{if(e.source!==window||!e.data||e.origin!==window.origin)return;e.data.eventId===o&&(s(e),window.removeEventListener("message",t,!1));};window.addEventListener("message",t,!1),window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({type:e,eventId:o,detail:r}));}))}async enableConnection(){const r={origin:window.origin,host:window.location.host,permissions:{canRequestPublicKey:!0,canRequestSign:!0}},o=await this.sendEventToContentScript(L.XBULL_CONNECT,r,crypto.randomUUID()),{detail:s}=o.data;if(!s||s.error)throw {code:s?.code||-1,message:s?.errorMessage||"Unexpected error"};this.isConnected=!0;}async getAddress(){try{await this.enableConnection();}catch(e){return {error:{code:e?.code||-1,message:e?.message||"Unexpected error"}}}const r={origin:window.origin,host:window.location.host},o=await this.sendEventToContentScript(L.XBULL_GET_PUBLIC_KEY,r,crypto.randomUUID()),{detail:s}=o.data;return !s||s.error?{error:{code:s?.code||-1,message:s?.errorMessage||"Unexpected error"}}:{address:s.payload}}async signTransaction(r){if(r.opts?.submit||r.opts?.submitUrl)return {error:{code:-1,message:"Parameters `submit` and `submitUrl` are not supported"}};try{await this.enableConnection();}catch(e){return {error:{code:e?.code||-1,message:e?.message||"Unexpected error"}}}const o={origin:window.origin,host:window.location.host,network:r.opts?.networkPassphrase,publicKey:r.opts?.address,xdr:r.xdr,xdrType:"Transaction"},s=await this.sendEventToContentScript(L.XBULL_SIGN_XDR,o,crypto.randomUUID()),{detail:t}=s.data;return !t||t.error?{error:{code:t?.code||-1,message:t?.errorMessage||"Unexpected error"}}:{signedTxXdr:t.payload.signedXdr,signerAddress:t.payload.signerAddress}}async signMessage(r,o){if(!r)return {error:{code:-1,message:"The message must be defined."}};try{await this.enableConnection();}catch(e){return {error:{code:e?.code||-1,message:e?.message||"Unexpected error"}}}const s={origin:window.origin,host:window.location.host,message:r,publicKey:o?.address,network:o?.networkPassphrase},t=await this.sendEventToContentScript(L.XBULL_SIGN_MESSAGE,s,crypto.randomUUID()),{detail:n}=t.data;return !n||n.error?{error:{code:n?.code||-1,message:n?.errorMessage||"Unexpected error"}}:{signedMessage:n.payload.signedMessage,signerAddress:n.payload.signerAddress}}async getNetwork(){try{await this.enableConnection();}catch(e){return {error:{code:e?.code||-1,message:e?.message||"Unexpected error"}}}const r={origin:window.origin,host:window.location.host},o=await this.sendEventToContentScript(L.XBULL_GET_NETWORK,r,crypto.randomUUID()),{detail:s}=o.data;return !s||s.error?{error:{code:s?.code||-1,message:s?.errorMessage||"Unexpected error"}}:{network:s.payload.network,networkPassphrase:s.payload.networkPassphrase}}}

class w{constructor(o){this.closeCurrentPromises$=new Subject,this.closeObservables$=new Subject,this.initialResponse$=new Subject,this.initialResponseCompleted$=new Subject,this.connectResponse$=new Subject,this.connectResult$=new Subject,this.signResponse$=new Subject,this.signResult$=new Subject,this.signMessageResponse$=new Subject,this.signMessageResult$=new Subject,this.closeCurrentPromisesSubscription=timer(1e3,1e3).pipe(takeUntil(this.closeObservables$)).subscribe((()=>{this.target?.closed&&this.closeCurrentPromises$.next();})),this.onInititalResponseSubscription=this.initialResponse$.pipe(takeUntil(this.closeObservables$)).subscribe((e=>{const s=this.decryptFromReceiver({oneTimeCode:e.data.oneTimeCode,payload:e.data.message,senderPublicKey:e.data.publicKey});JSON.parse(s).providedSession===this.session()&&(this.targetPublicKey=e.data.publicKey,this.initialResponseCompleted$.next());})),this.onConnectResponseSubscription=this.connectResponse$.pipe(takeUntil(this.closeObservables$)).subscribe((e=>{if(!this.targetPublicKey)return void this.connectResult$.next({success:!1,message:"Wallet encryption public key is not provided, request rejected."});if(!e.data.success)return void this.connectResult$.next({success:!1,message:"Request rejected from the wallet"});const s=this.decryptFromReceiver({oneTimeCode:e.data.oneTimeCode,payload:e.data.message,senderPublicKey:this.targetPublicKey}),t=JSON.parse(s);this.connectResult$.next({success:!0,publicKey:t.publicKey});})),this.onSignResponseSubscription=this.signResponse$.pipe(takeUntil(this.closeObservables$)).subscribe((e=>{if(!this.targetPublicKey)return void this.signResult$.next({success:!1,message:"Wallet encryption public key is not provided, request rejected."});if(!e.data.success)return void this.signResult$.next({success:!1,message:"Request rejected from the wallet"});const s=this.decryptFromReceiver({oneTimeCode:e.data.oneTimeCode,payload:e.data.message,senderPublicKey:this.targetPublicKey}),t=JSON.parse(s);this.signResult$.next({success:!0,xdr:t.xdr});})),this.onSignMessageResponseSubscription=this.signMessageResponse$.pipe(takeUntil(this.closeObservables$)).subscribe((e=>{if(!this.targetPublicKey)return void this.signMessageResult$.next({success:!1,message:"Wallet encryption public key is not provided, request rejected."});if(!e.data.success)return void this.signMessageResult$.next({success:!1,message:"Request rejected from the wallet"});const s=this.decryptFromReceiver({oneTimeCode:e.data.oneTimeCode,payload:e.data.message,senderPublicKey:this.targetPublicKey}),t=JSON.parse(s);this.signMessageResult$.next({success:!0,...t});})),this.preferredTarget=o?.preferredTarget||"extension",this.walletUrl=o?.url||"https://wallet.xbull.app/connect";const d=naclFastExports.box.keyPair(),u=naclUtilExports.encodeBase64(naclFastExports.randomBytes(24));this.encryptForReceiver=r=>{const n=naclFastExports.randomBytes(24),o=naclFastExports.box(naclUtilExports.decodeUTF8(r.data),n,r.receiverPublicKey,d.secretKey);return {message:naclUtilExports.encodeBase64(o),oneTimeCode:naclUtilExports.encodeBase64(n)}},this.decryptFromReceiver=s=>{const t=naclFastExports.box.open(naclUtilExports.decodeBase64(s.payload),naclUtilExports.decodeBase64(s.oneTimeCode),naclUtilExports.decodeBase64(s.senderPublicKey),d.secretKey);if(!t)throw new Error("Decrypted message is null");return naclUtilExports.encodeUTF8(t)},this.publicKey=()=>d.publicKey,this.session=()=>u.slice();const g=e=>{switch(e.data.type){case L.XBULL_INITIAL_RESPONSE:this.initialResponse$.next(e);break;case L.XBULL_CONNECT_RESPONSE:this.connectResponse$.next(e);break;case L.XBULL_SIGN_RESPONSE:this.signResponse$.next(e);break;case L.XBULL_SIGN_MESSAGE_RESPONSE:this.signMessageResponse$.next(e);}};window.addEventListener("message",g),this.closeObservables$.asObservable().pipe(take(1)).subscribe((()=>{window.removeEventListener("message",g);}));}openWallet(){return this.target&&!this.target.closed&&(this.target.close(),this.target=null,this.closeCurrentPromises$.next()),this.target=window.open(`${this.walletUrl}?public=${encodeURIComponent(naclUtilExports.encodeBase64(this.publicKey()))}&session=${encodeURIComponent(this.session())}`,"xBull_Wallet_app","width=380,height=640,left=100,top=100"),firstValueFrom(this.initialResponseCompleted$.pipe(takeUntil(this.closeCurrentPromises$)).pipe(takeUntil(this.closeObservables$)))}closeWallet(){this.target&&(this.target?.close(),this.target=null);}async connect(e={canRequestPublicKey:!0,canRequestSign:!0}){const s=window?.webkit?.messageHandlers?.cordova_iab?new r:window.xBullSDK;if(s&&"extension"===this.preferredTarget){const e=await s.getAddress();if(_(e))throw e.error;return e.address}{if(await this.openWallet(),!this.target||!this.targetPublicKey)throw new Error("xBull Wallet is not open, we can't connect with it");const{message:s,oneTimeCode:t}=this.encryptForReceiver({data:JSON.stringify(e),receiverPublicKey:naclUtilExports.decodeBase64(this.targetPublicKey)}),i={type:L.XBULL_CONNECT,message:s,oneTimeCode:t};this.target.postMessage(i,"*");const n=this.connectResult$.asObservable().pipe(switchMap((e=>e.success?(this.closeWallet(),of(e.publicKey)):(this.closeWallet(),throwError((()=>new Error(e.message))))))).pipe(take(1)).pipe(takeUntil(this.closeCurrentPromises$)).pipe(takeUntil(this.closeObservables$));return firstValueFrom(n)}}async sign(e){const s=window?.webkit?.messageHandlers?.cordova_iab?new r:window.xBullSDK;if(s&&"extension"===this.preferredTarget){const t=await s.signTransaction({xdr:e.xdr,opts:{networkPassphrase:e.network,address:e.publicKey}});if(_(t))throw t.error;return t.signedTxXdr}{if(await this.openWallet(),!this.target||!this.targetPublicKey)throw new Error("xBull Wallet is not open, we can't connect with it");if("string"!=typeof e.xdr)throw new Error("XDR provided needs to be a string value");const{message:s,oneTimeCode:t}=this.encryptForReceiver({data:JSON.stringify(e),receiverPublicKey:naclUtilExports.decodeBase64(this.targetPublicKey)}),i={type:L.XBULL_SIGN,message:s,oneTimeCode:t};this.target.postMessage(i,"*");const n=this.signResult$.asObservable().pipe(switchMap((e=>e.success?(this.closeWallet(),of(e.xdr)):(this.closeWallet(),throwError((()=>new Error(e.message))))))).pipe(take(1)).pipe(takeUntil(this.closeCurrentPromises$)).pipe(takeUntil(this.closeObservables$));return firstValueFrom(n)}}async signMessage(e,s){const t=window?.webkit?.messageHandlers?.cordova_iab?new r:window.xBullSDK;if(t&&"extension"===this.preferredTarget){const i=await t.signMessage(e,s);if(_(i))throw i.error;return i}{if(await this.openWallet(),!this.target||!this.targetPublicKey)throw new Error("xBull Wallet is not open, we can't connect with it");if("string"!=typeof e)throw new Error("XDR provided needs to be a string value");const t=this.encryptForReceiver({data:JSON.stringify({message:e,opts:s}),receiverPublicKey:naclUtilExports.decodeBase64(this.targetPublicKey)}),i={type:L.XBULL_SIGN_MESSAGE,message:t.message,oneTimeCode:t.oneTimeCode};this.target.postMessage(i,"*");const n=this.signMessageResult$.asObservable().pipe(switchMap((e=>e.success?(this.closeWallet(),of({signedMessage:e.signedMessage,signerAddress:e.signerAddress})):(this.closeWallet(),throwError((()=>new Error(e.message))))))).pipe(take(1)).pipe(takeUntil(this.closeCurrentPromises$)).pipe(takeUntil(this.closeObservables$));return firstValueFrom(n)}}closeConnections(){this.closeObservables$.next(),this.closeCurrentPromises$.next(),this.closeObservables$.complete(),this.closeCurrentPromises$.complete();}}

const XBULL_ID = "xbull";
class xBullModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = XBULL_ID;
    this.productName = "xBull";
    this.productUrl = "https://xbull.app";
    this.productIcon = "https://stellar.creit.tech/wallet-icons/xbull.png";
  }
  async isAvailable() {
    return true;
  }
  async getAddress() {
    try {
      const bridge = new w();
      const publicKey = await bridge.connect();
      bridge.closeConnections();
      return { address: publicKey };
    } catch (e) {
      throw parseError(e);
    }
  }
  async signTransaction(xdr, opts) {
    try {
      const bridge = new w();
      const signedXdr = await bridge.sign({
        xdr,
        publicKey: opts?.address,
        network: opts?.networkPassphrase
      });
      bridge.closeConnections();
      return { signedTxXdr: signedXdr, signerAddress: opts?.address };
    } catch (e) {
      throw parseError(e);
    }
  }
  async signAuthEntry() {
    throw {
      code: -3,
      message: 'xBull does not support the "signAuthEntry" function'
    };
  }
  async signMessage(message, opts) {
    try {
      const bridge = new w();
      const result = await bridge.signMessage(message, {
        address: opts?.address,
        networkPassphrase: opts?.networkPassphrase
      });
      bridge.closeConnections();
      return result;
    } catch (e) {
      throw parseError(e);
    }
  }
  async getNetwork() {
    throw {
      code: -3,
      message: 'xBull does not support the "getNetwork" function'
    };
  }
}

var build = {};

var nep0314 = {};

var cjs = {};

var serialize$1 = {};

var types = {};

types.__esModule = true;
types.integers = void 0;
types.integers = ['u8', 'u16', 'u32', 'u64', 'u128', 'i8', 'i16', 'i32', 'i64', 'i128', 'f32', 'f64'];

var buffer = {};

buffer.__esModule = true;
buffer.DecodeBuffer = buffer.EncodeBuffer = void 0;
var EncodeBuffer = /** @class */ (function () {
    function EncodeBuffer() {
        this.offset = 0;
        this.buffer_size = 256;
        this.buffer = new ArrayBuffer(this.buffer_size);
        this.view = new DataView(this.buffer);
    }
    EncodeBuffer.prototype.resize_if_necessary = function (needed_space) {
        if (this.buffer_size - this.offset < needed_space) {
            this.buffer_size = Math.max(this.buffer_size * 2, this.buffer_size + needed_space);
            var new_buffer = new ArrayBuffer(this.buffer_size);
            new Uint8Array(new_buffer).set(new Uint8Array(this.buffer));
            this.buffer = new_buffer;
            this.view = new DataView(new_buffer);
        }
    };
    EncodeBuffer.prototype.get_used_buffer = function () {
        return new Uint8Array(this.buffer).slice(0, this.offset);
    };
    EncodeBuffer.prototype.store_value = function (value, type) {
        var bSize = type.substring(1);
        var size = parseInt(bSize) / 8;
        this.resize_if_necessary(size);
        var toCall = type[0] === 'f' ? "setFloat".concat(bSize) : type[0] === 'i' ? "setInt".concat(bSize) : "setUint".concat(bSize);
        this.view[toCall](this.offset, value, true);
        this.offset += size;
    };
    EncodeBuffer.prototype.store_bytes = function (from) {
        this.resize_if_necessary(from.length);
        new Uint8Array(this.buffer).set(new Uint8Array(from), this.offset);
        this.offset += from.length;
    };
    return EncodeBuffer;
}());
buffer.EncodeBuffer = EncodeBuffer;
var DecodeBuffer = /** @class */ (function () {
    function DecodeBuffer(buf) {
        this.offset = 0;
        this.buffer_size = buf.length;
        this.buffer = new ArrayBuffer(buf.length);
        new Uint8Array(this.buffer).set(buf);
        this.view = new DataView(this.buffer);
    }
    DecodeBuffer.prototype.assert_enough_buffer = function (size) {
        if (this.offset + size > this.buffer.byteLength) {
            throw new Error('Error in schema, the buffer is smaller than expected');
        }
    };
    DecodeBuffer.prototype.consume_value = function (type) {
        var bSize = type.substring(1);
        var size = parseInt(bSize) / 8;
        this.assert_enough_buffer(size);
        var toCall = type[0] === 'f' ? "getFloat".concat(bSize) : type[0] === 'i' ? "getInt".concat(bSize) : "getUint".concat(bSize);
        var ret = this.view[toCall](this.offset, true);
        this.offset += size;
        return ret;
    };
    DecodeBuffer.prototype.consume_bytes = function (size) {
        this.assert_enough_buffer(size);
        var ret = this.buffer.slice(this.offset, this.offset + size);
        this.offset += size;
        return ret;
    };
    return DecodeBuffer;
}());
buffer.DecodeBuffer = DecodeBuffer;

var utils$8 = {};

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
utils$8.__esModule = true;
utils$8.validate_schema = utils$8.ErrorSchema = utils$8.expect_enum = utils$8.expect_same_size = utils$8.expect_bigint = utils$8.expect_type = utils$8.isArrayLike = void 0;
var types_js_1$2 = types;
function isArrayLike(value) {
    // source: https://stackoverflow.com/questions/24048547/checking-if-an-object-is-array-like
    return (Array.isArray(value) ||
        (!!value &&
            typeof value === 'object' &&
            'length' in value &&
            typeof (value.length) === 'number' &&
            (value.length === 0 ||
                (value.length > 0 &&
                    (value.length - 1) in value))));
}
utils$8.isArrayLike = isArrayLike;
function expect_type(value, type, fieldPath) {
    if (typeof (value) !== type) {
        throw new Error("Expected ".concat(type, " not ").concat(typeof (value), "(").concat(value, ") at ").concat(fieldPath.join('.')));
    }
}
utils$8.expect_type = expect_type;
function expect_bigint(value, fieldPath) {
    var basicType = ['number', 'string', 'bigint', 'boolean'].includes(typeof (value));
    var strObject = typeof (value) === 'object' && value !== null && 'toString' in value;
    if (!basicType && !strObject) {
        throw new Error("Expected bigint, number, boolean or string not ".concat(typeof (value), "(").concat(value, ") at ").concat(fieldPath.join('.')));
    }
}
utils$8.expect_bigint = expect_bigint;
function expect_same_size(length, expected, fieldPath) {
    if (length !== expected) {
        throw new Error("Array length ".concat(length, " does not match schema length ").concat(expected, " at ").concat(fieldPath.join('.')));
    }
}
utils$8.expect_same_size = expect_same_size;
function expect_enum(value, fieldPath) {
    if (typeof (value) !== 'object' || value === null) {
        throw new Error("Expected object not ".concat(typeof (value), "(").concat(value, ") at ").concat(fieldPath.join('.')));
    }
}
utils$8.expect_enum = expect_enum;
// Validate Schema
var VALID_STRING_TYPES = types_js_1$2.integers.concat(['bool', 'string']);
var VALID_OBJECT_KEYS = ['option', 'enum', 'array', 'set', 'map', 'struct'];
var ErrorSchema = /** @class */ (function (_super) {
    __extends(ErrorSchema, _super);
    function ErrorSchema(schema, expected) {
        var message = "Invalid schema: ".concat(JSON.stringify(schema), " expected ").concat(expected);
        return _super.call(this, message) || this;
    }
    return ErrorSchema;
}(Error));
utils$8.ErrorSchema = ErrorSchema;
function validate_schema(schema) {
    if (typeof (schema) === 'string' && VALID_STRING_TYPES.includes(schema)) {
        return;
    }
    if (schema && typeof (schema) === 'object') {
        var keys = Object.keys(schema);
        if (keys.length === 1 && VALID_OBJECT_KEYS.includes(keys[0])) {
            var key = keys[0];
            if (key === 'option')
                return validate_schema(schema[key]);
            if (key === 'enum')
                return validate_enum_schema(schema[key]);
            if (key === 'array')
                return validate_array_schema(schema[key]);
            if (key === 'set')
                return validate_schema(schema[key]);
            if (key === 'map')
                return validate_map_schema(schema[key]);
            if (key === 'struct')
                return validate_struct_schema(schema[key]);
        }
    }
    throw new ErrorSchema(schema, VALID_OBJECT_KEYS.join(', ') + ' or ' + VALID_STRING_TYPES.join(', '));
}
utils$8.validate_schema = validate_schema;
function validate_enum_schema(schema) {
    if (!Array.isArray(schema))
        throw new ErrorSchema(schema, 'Array');
    for (var _i = 0, schema_1 = schema; _i < schema_1.length; _i++) {
        var sch = schema_1[_i];
        if (typeof sch !== 'object' || !('struct' in sch)) {
            throw new Error('Missing "struct" key in enum schema');
        }
        if (typeof sch.struct !== 'object' || Object.keys(sch.struct).length !== 1) {
            throw new Error('The "struct" in each enum must have a single key');
        }
        validate_schema({ struct: sch.struct });
    }
}
function validate_array_schema(schema) {
    if (typeof schema !== 'object')
        throw new ErrorSchema(schema, '{ type, len? }');
    if (schema.len && typeof schema.len !== 'number') {
        throw new Error("Invalid schema: ".concat(schema));
    }
    if ('type' in schema)
        return validate_schema(schema.type);
    throw new ErrorSchema(schema, '{ type, len? }');
}
function validate_map_schema(schema) {
    if (typeof schema === 'object' && 'key' in schema && 'value' in schema) {
        validate_schema(schema.key);
        validate_schema(schema.value);
    }
    else {
        throw new ErrorSchema(schema, '{ key, value }');
    }
}
function validate_struct_schema(schema) {
    if (typeof schema !== 'object')
        throw new ErrorSchema(schema, 'object');
    for (var key in schema) {
        validate_schema(schema[key]);
    }
}

var __createBinding$1 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$1 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$1 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
    __setModuleDefault$1(result, mod);
    return result;
};
serialize$1.__esModule = true;
serialize$1.BorshSerializer = void 0;
var types_js_1$1 = types;
var buffer_js_1$1 = buffer;
var utils$7 = __importStar$1(utils$8);
var BorshSerializer = /** @class */ (function () {
    function BorshSerializer(checkTypes) {
        this.encoded = new buffer_js_1$1.EncodeBuffer();
        this.fieldPath = ['value'];
        this.checkTypes = checkTypes;
    }
    BorshSerializer.prototype.encode = function (value, schema) {
        this.encode_value(value, schema);
        return this.encoded.get_used_buffer();
    };
    BorshSerializer.prototype.encode_value = function (value, schema) {
        if (typeof schema === 'string') {
            if (types_js_1$1.integers.includes(schema))
                return this.encode_integer(value, schema);
            if (schema === 'string')
                return this.encode_string(value);
            if (schema === 'bool')
                return this.encode_boolean(value);
        }
        if (typeof schema === 'object') {
            if ('option' in schema)
                return this.encode_option(value, schema);
            if ('enum' in schema)
                return this.encode_enum(value, schema);
            if ('array' in schema)
                return this.encode_array(value, schema);
            if ('set' in schema)
                return this.encode_set(value, schema);
            if ('map' in schema)
                return this.encode_map(value, schema);
            if ('struct' in schema)
                return this.encode_struct(value, schema);
        }
    };
    BorshSerializer.prototype.encode_integer = function (value, schema) {
        var size = parseInt(schema.substring(1));
        if (size <= 32 || schema == 'f64') {
            this.checkTypes && utils$7.expect_type(value, 'number', this.fieldPath);
            this.encoded.store_value(value, schema);
        }
        else {
            this.checkTypes && utils$7.expect_bigint(value, this.fieldPath);
            this.encode_bigint(BigInt(value), size);
        }
    };
    BorshSerializer.prototype.encode_bigint = function (value, size) {
        var buffer_len = size / 8;
        var buffer = new Uint8Array(buffer_len);
        for (var i = 0; i < buffer_len; i++) {
            buffer[i] = Number(value & BigInt(0xff));
            value = value >> BigInt(8);
        }
        this.encoded.store_bytes(new Uint8Array(buffer));
    };
    BorshSerializer.prototype.encode_string = function (value) {
        this.checkTypes && utils$7.expect_type(value, 'string', this.fieldPath);
        var _value = value;
        // encode to utf8 bytes without using TextEncoder
        var utf8Bytes = [];
        for (var i = 0; i < _value.length; i++) {
            var charCode = _value.charCodeAt(i);
            if (charCode < 0x80) {
                utf8Bytes.push(charCode);
            }
            else if (charCode < 0x800) {
                utf8Bytes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
            }
            else if (charCode < 0xd800 || charCode >= 0xe000) {
                utf8Bytes.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
            }
            else {
                i++;
                charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (_value.charCodeAt(i) & 0x3ff));
                utf8Bytes.push(0xf0 | (charCode >> 18), 0x80 | ((charCode >> 12) & 0x3f), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
            }
        }
        // 4 bytes for length + string bytes
        this.encoded.store_value(utf8Bytes.length, 'u32');
        this.encoded.store_bytes(new Uint8Array(utf8Bytes));
    };
    BorshSerializer.prototype.encode_boolean = function (value) {
        this.checkTypes && utils$7.expect_type(value, 'boolean', this.fieldPath);
        this.encoded.store_value(value ? 1 : 0, 'u8');
    };
    BorshSerializer.prototype.encode_option = function (value, schema) {
        if (value === null || value === undefined) {
            this.encoded.store_value(0, 'u8');
        }
        else {
            this.encoded.store_value(1, 'u8');
            this.encode_value(value, schema.option);
        }
    };
    BorshSerializer.prototype.encode_enum = function (value, schema) {
        this.checkTypes && utils$7.expect_enum(value, this.fieldPath);
        var valueKey = Object.keys(value)[0];
        for (var i = 0; i < schema["enum"].length; i++) {
            var valueSchema = schema["enum"][i];
            if (valueKey === Object.keys(valueSchema.struct)[0]) {
                this.encoded.store_value(i, 'u8');
                return this.encode_struct(value, valueSchema);
            }
        }
        throw new Error("Enum key (".concat(valueKey, ") not found in enum schema: ").concat(JSON.stringify(schema), " at ").concat(this.fieldPath.join('.')));
    };
    BorshSerializer.prototype.encode_array = function (value, schema) {
        if (utils$7.isArrayLike(value))
            return this.encode_arraylike(value, schema);
        if (value instanceof ArrayBuffer)
            return this.encode_buffer(value, schema);
        throw new Error("Expected Array-like not ".concat(typeof (value), "(").concat(value, ") at ").concat(this.fieldPath.join('.')));
    };
    BorshSerializer.prototype.encode_arraylike = function (value, schema) {
        if (schema.array.len) {
            utils$7.expect_same_size(value.length, schema.array.len, this.fieldPath);
        }
        else {
            // 4 bytes for length
            this.encoded.store_value(value.length, 'u32');
        }
        // array values
        for (var i = 0; i < value.length; i++) {
            this.encode_value(value[i], schema.array.type);
        }
    };
    BorshSerializer.prototype.encode_buffer = function (value, schema) {
        if (schema.array.len) {
            utils$7.expect_same_size(value.byteLength, schema.array.len, this.fieldPath);
        }
        else {
            // 4 bytes for length
            this.encoded.store_value(value.byteLength, 'u32');
        }
        // array values
        this.encoded.store_bytes(new Uint8Array(value));
    };
    BorshSerializer.prototype.encode_set = function (value, schema) {
        this.checkTypes && utils$7.expect_type(value, 'object', this.fieldPath);
        var isSet = value instanceof Set;
        var values = isSet ? Array.from(value.values()) : Object.values(value);
        // 4 bytes for length
        this.encoded.store_value(values.length, 'u32');
        // set values
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value_1 = values_1[_i];
            this.encode_value(value_1, schema.set);
        }
    };
    BorshSerializer.prototype.encode_map = function (value, schema) {
        this.checkTypes && utils$7.expect_type(value, 'object', this.fieldPath);
        var isMap = value instanceof Map;
        var keys = isMap ? Array.from(value.keys()) : Object.keys(value);
        // 4 bytes for length
        this.encoded.store_value(keys.length, 'u32');
        // store key/values
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.encode_value(key, schema.map.key);
            this.encode_value(isMap ? value.get(key) : value[key], schema.map.value);
        }
    };
    BorshSerializer.prototype.encode_struct = function (value, schema) {
        this.checkTypes && utils$7.expect_type(value, 'object', this.fieldPath);
        for (var _i = 0, _a = Object.keys(schema.struct); _i < _a.length; _i++) {
            var key = _a[_i];
            this.fieldPath.push(key);
            this.encode_value(value[key], schema.struct[key]);
            this.fieldPath.pop();
        }
    };
    return BorshSerializer;
}());
serialize$1.BorshSerializer = BorshSerializer;

var deserialize$1 = {};

deserialize$1.__esModule = true;
deserialize$1.BorshDeserializer = void 0;
var types_js_1 = types;
var buffer_js_1 = buffer;
var BorshDeserializer = /** @class */ (function () {
    function BorshDeserializer(bufferArray) {
        this.buffer = new buffer_js_1.DecodeBuffer(bufferArray);
    }
    BorshDeserializer.prototype.decode = function (schema) {
        return this.decode_value(schema);
    };
    BorshDeserializer.prototype.decode_value = function (schema) {
        if (typeof schema === 'string') {
            if (types_js_1.integers.includes(schema))
                return this.decode_integer(schema);
            if (schema === 'string')
                return this.decode_string();
            if (schema === 'bool')
                return this.decode_boolean();
        }
        if (typeof schema === 'object') {
            if ('option' in schema)
                return this.decode_option(schema);
            if ('enum' in schema)
                return this.decode_enum(schema);
            if ('array' in schema)
                return this.decode_array(schema);
            if ('set' in schema)
                return this.decode_set(schema);
            if ('map' in schema)
                return this.decode_map(schema);
            if ('struct' in schema)
                return this.decode_struct(schema);
        }
        throw new Error("Unsupported type: ".concat(schema));
    };
    BorshDeserializer.prototype.decode_integer = function (schema) {
        var size = parseInt(schema.substring(1));
        if (size <= 32 || schema == 'f64') {
            return this.buffer.consume_value(schema);
        }
        return this.decode_bigint(size, schema.startsWith('i'));
    };
    BorshDeserializer.prototype.decode_bigint = function (size, signed) {
        if (signed === void 0) { signed = false; }
        var buffer_len = size / 8;
        var buffer = new Uint8Array(this.buffer.consume_bytes(buffer_len));
        var bits = buffer.reduceRight(function (r, x) { return r + x.toString(16).padStart(2, '0'); }, '');
        if (signed && buffer[buffer_len - 1]) {
            return BigInt.asIntN(size, BigInt("0x".concat(bits)));
        }
        return BigInt("0x".concat(bits));
    };
    BorshDeserializer.prototype.decode_string = function () {
        var len = this.decode_integer('u32');
        var buffer = new Uint8Array(this.buffer.consume_bytes(len));
        // decode utf-8 string without using TextDecoder
        // first get all bytes to single byte code points
        var codePoints = [];
        for (var i = 0; i < len; ++i) {
            var byte = buffer[i];
            if (byte < 0x80) {
                codePoints.push(byte);
            }
            else if (byte < 0xE0) {
                codePoints.push(((byte & 0x1F) << 6) | (buffer[++i] & 0x3F));
            }
            else if (byte < 0xF0) {
                codePoints.push(((byte & 0x0F) << 12) | ((buffer[++i] & 0x3F) << 6) | (buffer[++i] & 0x3F));
            }
            else {
                var codePoint = ((byte & 0x07) << 18) | ((buffer[++i] & 0x3F) << 12) | ((buffer[++i] & 0x3F) << 6) | (buffer[++i] & 0x3F);
                codePoints.push(codePoint);
            }
        }
        // then decode code points to utf-8
        return String.fromCodePoint.apply(String, codePoints);
    };
    BorshDeserializer.prototype.decode_boolean = function () {
        return this.buffer.consume_value('u8') > 0;
    };
    BorshDeserializer.prototype.decode_option = function (schema) {
        var option = this.buffer.consume_value('u8');
        if (option === 1) {
            return this.decode_value(schema.option);
        }
        if (option !== 0) {
            throw new Error("Invalid option ".concat(option));
        }
        return null;
    };
    BorshDeserializer.prototype.decode_enum = function (schema) {
        var _a;
        var valueIndex = this.buffer.consume_value('u8');
        if (valueIndex > schema["enum"].length) {
            throw new Error("Enum option ".concat(valueIndex, " is not available"));
        }
        var struct = schema["enum"][valueIndex].struct;
        var key = Object.keys(struct)[0];
        return _a = {}, _a[key] = this.decode_value(struct[key]), _a;
    };
    BorshDeserializer.prototype.decode_array = function (schema) {
        var result = [];
        var len = schema.array.len ? schema.array.len : this.decode_integer('u32');
        for (var i = 0; i < len; ++i) {
            result.push(this.decode_value(schema.array.type));
        }
        return result;
    };
    BorshDeserializer.prototype.decode_set = function (schema) {
        var len = this.decode_integer('u32');
        var result = new Set();
        for (var i = 0; i < len; ++i) {
            result.add(this.decode_value(schema.set));
        }
        return result;
    };
    BorshDeserializer.prototype.decode_map = function (schema) {
        var len = this.decode_integer('u32');
        var result = new Map();
        for (var i = 0; i < len; ++i) {
            var key = this.decode_value(schema.map.key);
            var value = this.decode_value(schema.map.value);
            result.set(key, value);
        }
        return result;
    };
    BorshDeserializer.prototype.decode_struct = function (schema) {
        var result = {};
        for (var key in schema.struct) {
            result[key] = this.decode_value(schema.struct[key]);
        }
        return result;
    };
    return BorshDeserializer;
}());
deserialize$1.BorshDeserializer = BorshDeserializer;

var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
cjs.__esModule = true;
cjs.deserialize = cjs.serialize = void 0;
var serialize_js_1 = serialize$1;
var deserialize_js_1 = deserialize$1;
var utils$6 = __importStar(utils$8);
function serialize(schema, value, validate) {
    if (validate === void 0) { validate = true; }
    if (validate)
        utils$6.validate_schema(schema);
    var serializer = new serialize_js_1.BorshSerializer(validate);
    return serializer.encode(value, schema);
}
cjs.serialize = serialize;
function deserialize(schema, buffer, validate) {
    if (validate === void 0) { validate = true; }
    if (validate)
        utils$6.validate_schema(schema);
    var deserializer = new deserialize_js_1.BorshDeserializer(buffer);
    return deserializer.decode(schema);
}
cjs.deserialize = deserialize;

var sha256 = {exports: {}};

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2025
 * @license MIT
 */

(function (module) {
	/*jslint bitwise: true */
	(function () {

	  var ERROR = 'input is invalid type';
	  var WINDOW = typeof window === 'object';
	  var root = WINDOW ? window : {};
	  if (root.JS_SHA256_NO_WINDOW) {
	    WINDOW = false;
	  }
	  var WEB_WORKER = !WINDOW && typeof self === 'object';
	  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node && process.type != 'renderer';
	  if (NODE_JS) {
	    root = commonjsGlobal;
	  } else if (WEB_WORKER) {
	    root = self;
	  }
	  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && 'object' === 'object' && module.exports;
	  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
	  var HEX_CHARS = '0123456789abcdef'.split('');
	  var EXTRA = [-2147483648, 8388608, 32768, 128];
	  var SHIFT = [24, 16, 8, 0];
	  var K = [
	    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
	    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
	    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
	    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
	    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
	    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
	    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
	    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
	  ];
	  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

	  var blocks = [];

	  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
	    Array.isArray = function (obj) {
	      return Object.prototype.toString.call(obj) === '[object Array]';
	    };
	  }

	  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
	    ArrayBuffer.isView = function (obj) {
	      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
	    };
	  }

	  var createOutputMethod = function (outputType, is224) {
	    return function (message) {
	      return new Sha256(is224, true).update(message)[outputType]();
	    };
	  };

	  var createMethod = function (is224) {
	    var method = createOutputMethod('hex', is224);
	    if (NODE_JS) {
	      method = nodeWrap(method, is224);
	    }
	    method.create = function () {
	      return new Sha256(is224);
	    };
	    method.update = function (message) {
	      return method.create().update(message);
	    };
	    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
	      var type = OUTPUT_TYPES[i];
	      method[type] = createOutputMethod(type, is224);
	    }
	    return method;
	  };

	  var nodeWrap = function (method, is224) {
	    var crypto = require$$0$3;
	    var Buffer = require$$1.Buffer;
	    var algorithm = is224 ? 'sha224' : 'sha256';
	    var bufferFrom;
	    if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
	      bufferFrom = Buffer.from;
	    } else {
	      bufferFrom = function (message) {
	        return new Buffer(message);
	      };
	    }
	    var nodeMethod = function (message) {
	      if (typeof message === 'string') {
	        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
	      } else {
	        if (message === null || message === undefined) {
	          throw new Error(ERROR);
	        } else if (message.constructor === ArrayBuffer) {
	          message = new Uint8Array(message);
	        }
	      }
	      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
	        message.constructor === Buffer) {
	        return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
	      } else {
	        return method(message);
	      }
	    };
	    return nodeMethod;
	  };

	  var createHmacOutputMethod = function (outputType, is224) {
	    return function (key, message) {
	      return new HmacSha256(key, is224, true).update(message)[outputType]();
	    };
	  };

	  var createHmacMethod = function (is224) {
	    var method = createHmacOutputMethod('hex', is224);
	    method.create = function (key) {
	      return new HmacSha256(key, is224);
	    };
	    method.update = function (key, message) {
	      return method.create(key).update(message);
	    };
	    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
	      var type = OUTPUT_TYPES[i];
	      method[type] = createHmacOutputMethod(type, is224);
	    }
	    return method;
	  };

	  function Sha256(is224, sharedMemory) {
	    if (sharedMemory) {
	      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
	        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
	        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
	        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
	      this.blocks = blocks;
	    } else {
	      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	    }

	    if (is224) {
	      this.h0 = 0xc1059ed8;
	      this.h1 = 0x367cd507;
	      this.h2 = 0x3070dd17;
	      this.h3 = 0xf70e5939;
	      this.h4 = 0xffc00b31;
	      this.h5 = 0x68581511;
	      this.h6 = 0x64f98fa7;
	      this.h7 = 0xbefa4fa4;
	    } else { // 256
	      this.h0 = 0x6a09e667;
	      this.h1 = 0xbb67ae85;
	      this.h2 = 0x3c6ef372;
	      this.h3 = 0xa54ff53a;
	      this.h4 = 0x510e527f;
	      this.h5 = 0x9b05688c;
	      this.h6 = 0x1f83d9ab;
	      this.h7 = 0x5be0cd19;
	    }

	    this.block = this.start = this.bytes = this.hBytes = 0;
	    this.finalized = this.hashed = false;
	    this.first = true;
	    this.is224 = is224;
	  }

	  Sha256.prototype.update = function (message) {
	    if (this.finalized) {
	      return;
	    }
	    var notString, type = typeof message;
	    if (type !== 'string') {
	      if (type === 'object') {
	        if (message === null) {
	          throw new Error(ERROR);
	        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
	          message = new Uint8Array(message);
	        } else if (!Array.isArray(message)) {
	          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
	            throw new Error(ERROR);
	          }
	        }
	      } else {
	        throw new Error(ERROR);
	      }
	      notString = true;
	    }
	    var code, index = 0, i, length = message.length, blocks = this.blocks;
	    while (index < length) {
	      if (this.hashed) {
	        this.hashed = false;
	        blocks[0] = this.block;
	        this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
	          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
	          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
	          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
	      }

	      if (notString) {
	        for (i = this.start; index < length && i < 64; ++index) {
	          blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
	        }
	      } else {
	        for (i = this.start; index < length && i < 64; ++index) {
	          code = message.charCodeAt(index);
	          if (code < 0x80) {
	            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
	          } else if (code < 0x800) {
	            blocks[i >>> 2] |= (0xc0 | (code >>> 6)) << SHIFT[i++ & 3];
	            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
	          } else if (code < 0xd800 || code >= 0xe000) {
	            blocks[i >>> 2] |= (0xe0 | (code >>> 12)) << SHIFT[i++ & 3];
	            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
	            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
	          } else {
	            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
	            blocks[i >>> 2] |= (0xf0 | (code >>> 18)) << SHIFT[i++ & 3];
	            blocks[i >>> 2] |= (0x80 | ((code >>> 12) & 0x3f)) << SHIFT[i++ & 3];
	            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
	            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
	          }
	        }
	      }

	      this.lastByteIndex = i;
	      this.bytes += i - this.start;
	      if (i >= 64) {
	        this.block = blocks[16];
	        this.start = i - 64;
	        this.hash();
	        this.hashed = true;
	      } else {
	        this.start = i;
	      }
	    }
	    if (this.bytes > 4294967295) {
	      this.hBytes += this.bytes / 4294967296 << 0;
	      this.bytes = this.bytes % 4294967296;
	    }
	    return this;
	  };

	  Sha256.prototype.finalize = function () {
	    if (this.finalized) {
	      return;
	    }
	    this.finalized = true;
	    var blocks = this.blocks, i = this.lastByteIndex;
	    blocks[16] = this.block;
	    blocks[i >>> 2] |= EXTRA[i & 3];
	    this.block = blocks[16];
	    if (i >= 56) {
	      if (!this.hashed) {
	        this.hash();
	      }
	      blocks[0] = this.block;
	      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
	        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
	        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
	        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
	    }
	    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
	    blocks[15] = this.bytes << 3;
	    this.hash();
	  };

	  Sha256.prototype.hash = function () {
	    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
	      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

	    for (j = 16; j < 64; ++j) {
	      // rightrotate
	      t1 = blocks[j - 15];
	      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
	      t1 = blocks[j - 2];
	      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
	      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
	    }

	    bc = b & c;
	    for (j = 0; j < 64; j += 4) {
	      if (this.first) {
	        if (this.is224) {
	          ab = 300032;
	          t1 = blocks[0] - 1413257819;
	          h = t1 - 150054599 << 0;
	          d = t1 + 24177077 << 0;
	        } else {
	          ab = 704751109;
	          t1 = blocks[0] - 210244248;
	          h = t1 - 1521486534 << 0;
	          d = t1 + 143694565 << 0;
	        }
	        this.first = false;
	      } else {
	        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
	        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
	        ab = a & b;
	        maj = ab ^ (a & c) ^ bc;
	        ch = (e & f) ^ (~e & g);
	        t1 = h + s1 + ch + K[j] + blocks[j];
	        t2 = s0 + maj;
	        h = d + t1 << 0;
	        d = t1 + t2 << 0;
	      }
	      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
	      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
	      da = d & a;
	      maj = da ^ (d & b) ^ ab;
	      ch = (h & e) ^ (~h & f);
	      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
	      t2 = s0 + maj;
	      g = c + t1 << 0;
	      c = t1 + t2 << 0;
	      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
	      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
	      cd = c & d;
	      maj = cd ^ (c & a) ^ da;
	      ch = (g & h) ^ (~g & e);
	      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
	      t2 = s0 + maj;
	      f = b + t1 << 0;
	      b = t1 + t2 << 0;
	      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
	      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
	      bc = b & c;
	      maj = bc ^ (b & d) ^ cd;
	      ch = (f & g) ^ (~f & h);
	      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
	      t2 = s0 + maj;
	      e = a + t1 << 0;
	      a = t1 + t2 << 0;
	      this.chromeBugWorkAround = true;
	    }

	    this.h0 = this.h0 + a << 0;
	    this.h1 = this.h1 + b << 0;
	    this.h2 = this.h2 + c << 0;
	    this.h3 = this.h3 + d << 0;
	    this.h4 = this.h4 + e << 0;
	    this.h5 = this.h5 + f << 0;
	    this.h6 = this.h6 + g << 0;
	    this.h7 = this.h7 + h << 0;
	  };

	  Sha256.prototype.hex = function () {
	    this.finalize();

	    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
	      h6 = this.h6, h7 = this.h7;

	    var hex = HEX_CHARS[(h0 >>> 28) & 0x0F] + HEX_CHARS[(h0 >>> 24) & 0x0F] +
	      HEX_CHARS[(h0 >>> 20) & 0x0F] + HEX_CHARS[(h0 >>> 16) & 0x0F] +
	      HEX_CHARS[(h0 >>> 12) & 0x0F] + HEX_CHARS[(h0 >>> 8) & 0x0F] +
	      HEX_CHARS[(h0 >>> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
	      HEX_CHARS[(h1 >>> 28) & 0x0F] + HEX_CHARS[(h1 >>> 24) & 0x0F] +
	      HEX_CHARS[(h1 >>> 20) & 0x0F] + HEX_CHARS[(h1 >>> 16) & 0x0F] +
	      HEX_CHARS[(h1 >>> 12) & 0x0F] + HEX_CHARS[(h1 >>> 8) & 0x0F] +
	      HEX_CHARS[(h1 >>> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
	      HEX_CHARS[(h2 >>> 28) & 0x0F] + HEX_CHARS[(h2 >>> 24) & 0x0F] +
	      HEX_CHARS[(h2 >>> 20) & 0x0F] + HEX_CHARS[(h2 >>> 16) & 0x0F] +
	      HEX_CHARS[(h2 >>> 12) & 0x0F] + HEX_CHARS[(h2 >>> 8) & 0x0F] +
	      HEX_CHARS[(h2 >>> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
	      HEX_CHARS[(h3 >>> 28) & 0x0F] + HEX_CHARS[(h3 >>> 24) & 0x0F] +
	      HEX_CHARS[(h3 >>> 20) & 0x0F] + HEX_CHARS[(h3 >>> 16) & 0x0F] +
	      HEX_CHARS[(h3 >>> 12) & 0x0F] + HEX_CHARS[(h3 >>> 8) & 0x0F] +
	      HEX_CHARS[(h3 >>> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
	      HEX_CHARS[(h4 >>> 28) & 0x0F] + HEX_CHARS[(h4 >>> 24) & 0x0F] +
	      HEX_CHARS[(h4 >>> 20) & 0x0F] + HEX_CHARS[(h4 >>> 16) & 0x0F] +
	      HEX_CHARS[(h4 >>> 12) & 0x0F] + HEX_CHARS[(h4 >>> 8) & 0x0F] +
	      HEX_CHARS[(h4 >>> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
	      HEX_CHARS[(h5 >>> 28) & 0x0F] + HEX_CHARS[(h5 >>> 24) & 0x0F] +
	      HEX_CHARS[(h5 >>> 20) & 0x0F] + HEX_CHARS[(h5 >>> 16) & 0x0F] +
	      HEX_CHARS[(h5 >>> 12) & 0x0F] + HEX_CHARS[(h5 >>> 8) & 0x0F] +
	      HEX_CHARS[(h5 >>> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
	      HEX_CHARS[(h6 >>> 28) & 0x0F] + HEX_CHARS[(h6 >>> 24) & 0x0F] +
	      HEX_CHARS[(h6 >>> 20) & 0x0F] + HEX_CHARS[(h6 >>> 16) & 0x0F] +
	      HEX_CHARS[(h6 >>> 12) & 0x0F] + HEX_CHARS[(h6 >>> 8) & 0x0F] +
	      HEX_CHARS[(h6 >>> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
	    if (!this.is224) {
	      hex += HEX_CHARS[(h7 >>> 28) & 0x0F] + HEX_CHARS[(h7 >>> 24) & 0x0F] +
	        HEX_CHARS[(h7 >>> 20) & 0x0F] + HEX_CHARS[(h7 >>> 16) & 0x0F] +
	        HEX_CHARS[(h7 >>> 12) & 0x0F] + HEX_CHARS[(h7 >>> 8) & 0x0F] +
	        HEX_CHARS[(h7 >>> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
	    }
	    return hex;
	  };

	  Sha256.prototype.toString = Sha256.prototype.hex;

	  Sha256.prototype.digest = function () {
	    this.finalize();

	    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
	      h6 = this.h6, h7 = this.h7;

	    var arr = [
	      (h0 >>> 24) & 0xFF, (h0 >>> 16) & 0xFF, (h0 >>> 8) & 0xFF, h0 & 0xFF,
	      (h1 >>> 24) & 0xFF, (h1 >>> 16) & 0xFF, (h1 >>> 8) & 0xFF, h1 & 0xFF,
	      (h2 >>> 24) & 0xFF, (h2 >>> 16) & 0xFF, (h2 >>> 8) & 0xFF, h2 & 0xFF,
	      (h3 >>> 24) & 0xFF, (h3 >>> 16) & 0xFF, (h3 >>> 8) & 0xFF, h3 & 0xFF,
	      (h4 >>> 24) & 0xFF, (h4 >>> 16) & 0xFF, (h4 >>> 8) & 0xFF, h4 & 0xFF,
	      (h5 >>> 24) & 0xFF, (h5 >>> 16) & 0xFF, (h5 >>> 8) & 0xFF, h5 & 0xFF,
	      (h6 >>> 24) & 0xFF, (h6 >>> 16) & 0xFF, (h6 >>> 8) & 0xFF, h6 & 0xFF
	    ];
	    if (!this.is224) {
	      arr.push((h7 >>> 24) & 0xFF, (h7 >>> 16) & 0xFF, (h7 >>> 8) & 0xFF, h7 & 0xFF);
	    }
	    return arr;
	  };

	  Sha256.prototype.array = Sha256.prototype.digest;

	  Sha256.prototype.arrayBuffer = function () {
	    this.finalize();

	    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
	    var dataView = new DataView(buffer);
	    dataView.setUint32(0, this.h0);
	    dataView.setUint32(4, this.h1);
	    dataView.setUint32(8, this.h2);
	    dataView.setUint32(12, this.h3);
	    dataView.setUint32(16, this.h4);
	    dataView.setUint32(20, this.h5);
	    dataView.setUint32(24, this.h6);
	    if (!this.is224) {
	      dataView.setUint32(28, this.h7);
	    }
	    return buffer;
	  };

	  function HmacSha256(key, is224, sharedMemory) {
	    var i, type = typeof key;
	    if (type === 'string') {
	      var bytes = [], length = key.length, index = 0, code;
	      for (i = 0; i < length; ++i) {
	        code = key.charCodeAt(i);
	        if (code < 0x80) {
	          bytes[index++] = code;
	        } else if (code < 0x800) {
	          bytes[index++] = (0xc0 | (code >>> 6));
	          bytes[index++] = (0x80 | (code & 0x3f));
	        } else if (code < 0xd800 || code >= 0xe000) {
	          bytes[index++] = (0xe0 | (code >>> 12));
	          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
	          bytes[index++] = (0x80 | (code & 0x3f));
	        } else {
	          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
	          bytes[index++] = (0xf0 | (code >>> 18));
	          bytes[index++] = (0x80 | ((code >>> 12) & 0x3f));
	          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
	          bytes[index++] = (0x80 | (code & 0x3f));
	        }
	      }
	      key = bytes;
	    } else {
	      if (type === 'object') {
	        if (key === null) {
	          throw new Error(ERROR);
	        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
	          key = new Uint8Array(key);
	        } else if (!Array.isArray(key)) {
	          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
	            throw new Error(ERROR);
	          }
	        }
	      } else {
	        throw new Error(ERROR);
	      }
	    }

	    if (key.length > 64) {
	      key = (new Sha256(is224, true)).update(key).array();
	    }

	    var oKeyPad = [], iKeyPad = [];
	    for (i = 0; i < 64; ++i) {
	      var b = key[i] || 0;
	      oKeyPad[i] = 0x5c ^ b;
	      iKeyPad[i] = 0x36 ^ b;
	    }

	    Sha256.call(this, is224, sharedMemory);

	    this.update(iKeyPad);
	    this.oKeyPad = oKeyPad;
	    this.inner = true;
	    this.sharedMemory = sharedMemory;
	  }
	  HmacSha256.prototype = new Sha256();

	  HmacSha256.prototype.finalize = function () {
	    Sha256.prototype.finalize.call(this);
	    if (this.inner) {
	      this.inner = false;
	      var innerHash = this.array();
	      Sha256.call(this, this.is224, this.sharedMemory);
	      this.update(this.oKeyPad);
	      this.update(innerHash);
	      Sha256.prototype.finalize.call(this);
	    }
	  };

	  var exports = createMethod();
	  exports.sha256 = exports;
	  exports.sha224 = createMethod(true);
	  exports.sha256.hmac = createHmacMethod();
	  exports.sha224.hmac = createHmacMethod(true);

	  if (COMMON_JS) {
	    module.exports = exports;
	  } else {
	    root.sha256 = exports.sha256;
	    root.sha224 = exports.sha224;
	  }
	})(); 
} (sha256));

var sha256Exports = sha256.exports;

var commonjs$2 = {};

var constants$1 = {};

Object.defineProperty(constants$1, "__esModule", { value: true });
constants$1.KeySize = constants$1.KeyType = void 0;
/** All supported key types */
var KeyType;
(function (KeyType) {
    KeyType[KeyType["ED25519"] = 0] = "ED25519";
    KeyType[KeyType["SECP256K1"] = 1] = "SECP256K1";
})(KeyType || (constants$1.KeyType = KeyType = {}));
constants$1.KeySize = {
    SECRET_KEY: 32,
    ED25519_PUBLIC_KEY: 32,
    SECP256k1_PUBLIC_KEY: 64,
};

var key_pair = {};

var key_pair_base = {};

Object.defineProperty(key_pair_base, "__esModule", { value: true });
key_pair_base.KeyPairBase = void 0;
class KeyPairBase {
}
key_pair_base.KeyPairBase = KeyPairBase;

var key_pair_ed25519 = {};

var commonjs$1 = {};

var constants = {};

Object.defineProperty(constants, "__esModule", { value: true });
constants.DEFAULT_FUNCTION_CALL_GAS = void 0;
// Default amount of gas to be sent with the function calls. Used to pay for the fees
// incurred while running the contract execution. The unused amount will be refunded back to
// the originator.
// Due to protocol changes that charge upfront for the maximum possible gas price inflation due to
// full blocks, the price of max_prepaid_gas is decreased to `300 * 10**12`.
// For discussion see https://github.com/nearprotocol/NEPs/issues/67
constants.DEFAULT_FUNCTION_CALL_GAS = 30000000000000n;

var errors$2 = {};

var errors$1 = {};

var GasLimitExceeded = "Exceeded the maximum amount of gas allowed to burn per contract";
var MethodEmptyName = "Method name is empty";
var WasmerCompileError = "Wasmer compilation error: {{msg}}";
var GuestPanic = "Smart contract panicked: {{panic_msg}}";
var Memory = "Error creating Wasm memory";
var GasExceeded = "Exceeded the prepaid gas";
var MethodUTF8Error = "Method name is not valid UTF8 string";
var BadUTF16 = "String encoding is bad UTF-16 sequence";
var WasmTrap = "WebAssembly trap: {{msg}}";
var GasInstrumentation = "Gas instrumentation failed or contract has denied instructions.";
var InvalidPromiseIndex = "{{promise_idx}} does not correspond to existing promises";
var InvalidPromiseResultIndex = "Accessed invalid promise result index: {{result_idx}}";
var Deserialization = "Error happened while deserializing the module";
var MethodNotFound = "Contract method is not found";
var InvalidRegisterId = "Accessed invalid register id: {{register_id}}";
var InvalidReceiptIndex = "VM Logic returned an invalid receipt index: {{receipt_index}}";
var EmptyMethodName = "Method name is empty in contract call";
var CannotReturnJointPromise = "Returning joint promise is currently prohibited";
var StackHeightInstrumentation = "Stack instrumentation failed";
var CodeDoesNotExist = "Cannot find contract code for account {{account_id}}";
var MethodInvalidSignature = "Invalid method signature";
var IntegerOverflow = "Integer overflow happened during contract execution";
var MemoryAccessViolation = "MemoryAccessViolation";
var InvalidIteratorIndex = "Iterator index {{iterator_index}} does not exist";
var IteratorWasInvalidated = "Iterator {{iterator_index}} was invalidated after its creation by performing a mutable operation on trie";
var InvalidAccountId = "VM Logic returned an invalid account id";
var Serialization = "Error happened while serializing the module";
var CannotAppendActionToJointPromise = "Actions can only be appended to non-joint promise.";
var InternalMemoryDeclared = "Internal memory declaration has been found in the module";
var Instantiate = "Error happened during instantiation";
var ProhibitedInView = "{{method_name}} is not allowed in view calls";
var InvalidMethodName = "VM Logic returned an invalid method name";
var BadUTF8 = "String encoding is bad UTF-8 sequence";
var BalanceExceeded = "Exceeded the account balance";
var LinkError = "Wasm contract link error: {{msg}}";
var InvalidPublicKey = "VM Logic provided an invalid public key";
var ActorNoPermission = "Actor {{actor_id}} doesn't have permission to account {{account_id}} to complete the action";
var LackBalanceForState = "The account {{account_id}} wouldn't have enough balance to cover storage, required to have {{amount}} yoctoNEAR more";
var ReceiverMismatch = "Wrong AccessKey used for transaction: transaction is sent to receiver_id={{tx_receiver}}, but is signed with function call access key that restricted to only use with receiver_id={{ak_receiver}}. Either change receiver_id in your transaction or switch to use a FullAccessKey.";
var CostOverflow = "Transaction gas or balance cost is too high";
var InvalidSignature = "Transaction is not signed with the given public key";
var AccessKeyNotFound = "Signer \"{{account_id}}\" doesn't have access key with the given public_key {{public_key}}";
var NotEnoughBalance = "Sender {{signer_id}} does not have enough balance {{#formatNear}}{{balance}}{{/formatNear}} for operation costing {{#formatNear}}{{cost}}{{/formatNear}}";
var NotEnoughAllowance = "Access Key {account_id}:{public_key} does not have enough balance {{#formatNear}}{{allowance}}{{/formatNear}} for transaction costing {{#formatNear}}{{cost}}{{/formatNear}}";
var Expired = "Transaction has expired";
var DeleteAccountStaking = "Account {{account_id}} is staking and can not be deleted";
var SignerDoesNotExist = "Signer {{signer_id}} does not exist";
var TriesToStake = "Account {{account_id}} tried to stake {{#formatNear}}{{stake}}{{/formatNear}}, but has staked {{#formatNear}}{{locked}}{{/formatNear}} and only has {{#formatNear}}{{balance}}{{/formatNear}}";
var AddKeyAlreadyExists = "The public key {{public_key}} is already used for an existing access key";
var InvalidSigner = "Invalid signer account ID {{signer_id}} according to requirements";
var CreateAccountNotAllowed = "The new account_id {{account_id}} can't be created by {{predecessor_id}}";
var RequiresFullAccess = "The transaction contains more then one action, but it was signed with an access key which allows transaction to apply only one specific action. To apply more then one actions TX must be signed with a full access key";
var TriesToUnstake = "Account {{account_id}} is not yet staked, but tried to unstake";
var InvalidNonce = "Transaction nonce {{tx_nonce}} must be larger than nonce of the used access key {{ak_nonce}}";
var AccountAlreadyExists = "Can't create a new account {{account_id}}, because it already exists";
var InvalidChain = "Transaction parent block hash doesn't belong to the current chain";
var AccountDoesNotExist = "Can't complete the action because account {{account_id}} doesn't exist";
var AccessKeyDoesNotExist = "Can't complete the action because access key {{public_key}} doesn't exist";
var MethodNameMismatch = "Transaction method name {{method_name}} isn't allowed by the access key";
var DeleteAccountHasRent = "Account {{account_id}} can't be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover the rent";
var DeleteAccountHasEnoughBalance = "Account {{account_id}} can't be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover it's storage";
var InvalidReceiver = "Invalid receiver account ID {{receiver_id}} according to requirements";
var DeleteKeyDoesNotExist = "Account {{account_id}} tries to remove an access key that doesn't exist";
var Timeout = "Timeout exceeded";
var Closed = "Connection closed";
var ShardCongested = "Shard {{shard_id}} rejected the transaction due to congestion level {{congestion_level}}, try again later";
var ShardStuck = "Shard {{shard_id}} rejected the transaction because it missed {{missed_chunks}} chunks and needs to recover before accepting new transactions, try again later";
var require$$0$2 = {
	GasLimitExceeded: GasLimitExceeded,
	MethodEmptyName: MethodEmptyName,
	WasmerCompileError: WasmerCompileError,
	GuestPanic: GuestPanic,
	Memory: Memory,
	GasExceeded: GasExceeded,
	MethodUTF8Error: MethodUTF8Error,
	BadUTF16: BadUTF16,
	WasmTrap: WasmTrap,
	GasInstrumentation: GasInstrumentation,
	InvalidPromiseIndex: InvalidPromiseIndex,
	InvalidPromiseResultIndex: InvalidPromiseResultIndex,
	Deserialization: Deserialization,
	MethodNotFound: MethodNotFound,
	InvalidRegisterId: InvalidRegisterId,
	InvalidReceiptIndex: InvalidReceiptIndex,
	EmptyMethodName: EmptyMethodName,
	CannotReturnJointPromise: CannotReturnJointPromise,
	StackHeightInstrumentation: StackHeightInstrumentation,
	CodeDoesNotExist: CodeDoesNotExist,
	MethodInvalidSignature: MethodInvalidSignature,
	IntegerOverflow: IntegerOverflow,
	MemoryAccessViolation: MemoryAccessViolation,
	InvalidIteratorIndex: InvalidIteratorIndex,
	IteratorWasInvalidated: IteratorWasInvalidated,
	InvalidAccountId: InvalidAccountId,
	Serialization: Serialization,
	CannotAppendActionToJointPromise: CannotAppendActionToJointPromise,
	InternalMemoryDeclared: InternalMemoryDeclared,
	Instantiate: Instantiate,
	ProhibitedInView: ProhibitedInView,
	InvalidMethodName: InvalidMethodName,
	BadUTF8: BadUTF8,
	BalanceExceeded: BalanceExceeded,
	LinkError: LinkError,
	InvalidPublicKey: InvalidPublicKey,
	ActorNoPermission: ActorNoPermission,
	LackBalanceForState: LackBalanceForState,
	ReceiverMismatch: ReceiverMismatch,
	CostOverflow: CostOverflow,
	InvalidSignature: InvalidSignature,
	AccessKeyNotFound: AccessKeyNotFound,
	NotEnoughBalance: NotEnoughBalance,
	NotEnoughAllowance: NotEnoughAllowance,
	Expired: Expired,
	DeleteAccountStaking: DeleteAccountStaking,
	SignerDoesNotExist: SignerDoesNotExist,
	TriesToStake: TriesToStake,
	AddKeyAlreadyExists: AddKeyAlreadyExists,
	InvalidSigner: InvalidSigner,
	CreateAccountNotAllowed: CreateAccountNotAllowed,
	RequiresFullAccess: RequiresFullAccess,
	TriesToUnstake: TriesToUnstake,
	InvalidNonce: InvalidNonce,
	AccountAlreadyExists: AccountAlreadyExists,
	InvalidChain: InvalidChain,
	AccountDoesNotExist: AccountDoesNotExist,
	AccessKeyDoesNotExist: AccessKeyDoesNotExist,
	MethodNameMismatch: MethodNameMismatch,
	DeleteAccountHasRent: DeleteAccountHasRent,
	DeleteAccountHasEnoughBalance: DeleteAccountHasEnoughBalance,
	InvalidReceiver: InvalidReceiver,
	DeleteKeyDoesNotExist: DeleteKeyDoesNotExist,
	Timeout: Timeout,
	Closed: Closed,
	ShardCongested: ShardCongested,
	ShardStuck: ShardStuck
};

var __importDefault$5 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(errors$1, "__esModule", { value: true });
errors$1.ErrorMessages = void 0;
const error_messages_json_1 = __importDefault$5(require$$0$2);
errors$1.ErrorMessages = error_messages_json_1.default;

var rpc_errors = {};

var commonjs = {};

var assignable = {};

Object.defineProperty(assignable, "__esModule", { value: true });
assignable.Assignable = void 0;
/* DEPRECATED - backward compatibility only */
class Assignable {
    constructor(properties) {
        Object.keys(properties).map((key) => {
            this[key] = properties[key];
        });
    }
}
assignable.Assignable = Assignable;

var _enum = {};

Object.defineProperty(_enum, "__esModule", { value: true });
_enum.Enum = void 0;
// TODO determine why subclassing is still necessary even though `enum`
//  cannot be set in the base class or it will not be borsh-serializable
let Enum$1 = class Enum {
    constructor(properties) {
        if (Object.keys(properties).length !== 1) {
            throw new Error('Enum can only take single value');
        }
        Object.keys(properties).map((key) => {
            this[key] = properties[key];
        });
    }
};
_enum.Enum = Enum$1;

var errors = {};

Object.defineProperty(errors, "__esModule", { value: true });
errors.ErrorContext = errors.TypedError = errors.ArgumentTypeError = errors.PositionalArgsError = void 0;
class PositionalArgsError extends Error {
    constructor() {
        super('Contract method calls expect named arguments wrapped in object, e.g. { argName1: argValue1, argName2: argValue2 }');
    }
}
errors.PositionalArgsError = PositionalArgsError;
class ArgumentTypeError extends Error {
    constructor(argName, argType, argValue) {
        super(`Expected ${argType} for '${argName}' argument, but got '${JSON.stringify(argValue)}'`);
    }
}
errors.ArgumentTypeError = ArgumentTypeError;
class TypedError extends Error {
    type;
    context;
    constructor(message, type, context) {
        super(message);
        this.type = type || 'UntypedError';
        this.context = context;
    }
}
errors.TypedError = TypedError;
class ErrorContext {
    transactionHash;
    constructor(transactionHash) {
        this.transactionHash = transactionHash;
    }
}
errors.ErrorContext = ErrorContext;

var provider$1 = {};

var light_client = {};

/**
 * NEAR RPC API request types and responses
 * @module
 */
Object.defineProperty(light_client, "__esModule", { value: true });
light_client.IdType = void 0;
var IdType;
(function (IdType) {
    IdType["Transaction"] = "transaction";
    IdType["Receipt"] = "receipt";
})(IdType || (light_client.IdType = IdType = {}));

var response = {};

Object.defineProperty(response, "__esModule", { value: true });
response.FinalExecutionStatusBasic = response.ExecutionStatusBasic = void 0;
var ExecutionStatusBasic;
(function (ExecutionStatusBasic) {
    ExecutionStatusBasic["Unknown"] = "Unknown";
    ExecutionStatusBasic["Pending"] = "Pending";
    ExecutionStatusBasic["Failure"] = "Failure";
})(ExecutionStatusBasic || (response.ExecutionStatusBasic = ExecutionStatusBasic = {}));
var FinalExecutionStatusBasic;
(function (FinalExecutionStatusBasic) {
    FinalExecutionStatusBasic["NotStarted"] = "NotStarted";
    FinalExecutionStatusBasic["Started"] = "Started";
    FinalExecutionStatusBasic["Failure"] = "Failure";
})(FinalExecutionStatusBasic || (response.FinalExecutionStatusBasic = FinalExecutionStatusBasic = {}));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FinalExecutionStatusBasic = exports.ExecutionStatusBasic = exports.IdType = void 0;
	var light_client_1 = light_client;
	Object.defineProperty(exports, "IdType", { enumerable: true, get: function () { return light_client_1.IdType; } });
	var response_1 = response;
	Object.defineProperty(exports, "ExecutionStatusBasic", { enumerable: true, get: function () { return response_1.ExecutionStatusBasic; } });
	Object.defineProperty(exports, "FinalExecutionStatusBasic", { enumerable: true, get: function () { return response_1.FinalExecutionStatusBasic; } }); 
} (provider$1));

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(assignable, exports);
	__exportStar(_enum, exports);
	__exportStar(errors, exports);
	__exportStar(provider$1, exports); 
} (commonjs));

var mustache = {exports: {}};

(function (module, exports) {
	// This file has been generated from mustache.mjs
	(function (global, factory) {
	  module.exports = factory() ;
	}(commonjsGlobal, (function () {
	  /*!
	   * mustache.js - Logic-less {{mustache}} templates with JavaScript
	   * http://github.com/janl/mustache.js
	   */

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  /**
	   * Safe way of detecting whether or not the given thing is a primitive and
	   * whether it has the given property
	   */
	  function primitiveHasOwnProperty (primitive, propName) {
	    return (
	      primitive != null
	      && typeof primitive !== 'object'
	      && primitive.hasOwnProperty
	      && primitive.hasOwnProperty(propName)
	    );
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;',
	    '`': '&#x60;',
	    '=': '&#x3D;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   *
	   * Tokens for partials also contain two more elements: 1) a string value of
	   * indendation prior to that tag and 2) the index of that tag on that line -
	   * eg a value of 2 indicates the partial is the third tag on this line.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];
	    var lineHasNonSpace = false;
	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?
	    var indentation = '';  // Tracks indentation for tags that use it
	    var tagIndex = 0;      // Stores a count of number of tags encountered on a line

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	            indentation += chr;
	          } else {
	            nonSpace = true;
	            lineHasNonSpace = true;
	            indentation += ' ';
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n') {
	            stripSpace();
	            indentation = '';
	            tagIndex = 0;
	            lineHasNonSpace = false;
	          }
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      if (type == '>') {
	        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
	      } else {
	        token = [ type, value, start, scanner.pos ];
	      }
	      tagIndex++;
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    stripSpace();

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	        case '#':
	        case '^':
	          collector.push(token);
	          sections.push(token);
	          collector = token[4] = [];
	          break;
	        case '/':
	          section = sections.pop();
	          section[5] = token[2];
	          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	          break;
	        default:
	          collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	      case -1:
	        match = this.tail;
	        this.tail = '';
	        break;
	      case 0:
	        match = '';
	        break;
	      default:
	        match = this.tail.substring(0, index);
	        this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, intermediateValue, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          intermediateValue = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           *
	           * In the case where dot notation is used, we consider the lookup
	           * to be successful even if the last "object" in the path is
	           * not actually an object but a primitive (e.g., a string, or an
	           * integer), because it is sometimes useful to access a property
	           * of an autoboxed primitive, such as the length of a string.
	           **/
	          while (intermediateValue != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = (
	                hasProperty(intermediateValue, names[index])
	                || primitiveHasOwnProperty(intermediateValue, names[index])
	              );

	            intermediateValue = intermediateValue[names[index++]];
	          }
	        } else {
	          intermediateValue = context.view[name];

	          /**
	           * Only checking against `hasProperty`, which always returns `false` if
	           * `context.view` is not an object. Deliberately omitting the check
	           * against `primitiveHasOwnProperty` if dot notation is not used.
	           *
	           * Consider this example:
	           * ```
	           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
	           * ```
	           *
	           * If we were to check also against `primitiveHasOwnProperty`, as we do
	           * in the dot notation case, then render call would return:
	           *
	           * "The length of a football field is 9."
	           *
	           * rather than the expected:
	           *
	           * "The length of a football field is 100 yards."
	           **/
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit) {
	          value = intermediateValue;
	          break;
	        }

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.templateCache = {
	      _cache: {},
	      set: function set (key, value) {
	        this._cache[key] = value;
	      },
	      get: function get (key) {
	        return this._cache[key];
	      },
	      clear: function clear () {
	        this._cache = {};
	      }
	    };
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    if (typeof this.templateCache !== 'undefined') {
	      this.templateCache.clear();
	    }
	  };

	  /**
	   * Parses and caches the given `template` according to the given `tags` or
	   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.templateCache;
	    var cacheKey = template + ':' + (tags || mustache.tags).join(':');
	    var isCacheEnabled = typeof cache !== 'undefined';
	    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

	    if (tokens == undefined) {
	      tokens = parseTemplate(template, tags);
	      isCacheEnabled && cache.set(cacheKey, tokens);
	    }
	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   *
	   * If the optional `tags` argument is given here it must be an array with two
	   * string values: the opening and closing tags used in the template (e.g.
	   * [ "<%", "%>" ]). The default is to mustache.tags.
	   */
	  Writer.prototype.render = function render (template, view, partials, tags) {
	    var tokens = this.parse(template, tags);
	    var context = (view instanceof Context) ? view : new Context(view, undefined);
	    return this.renderTokens(tokens, context, partials, template, tags);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, tags) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, tags);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
	    var filteredIndentation = indentation.replace(/[^ \t]/g, '');
	    var partialByNl = partial.split('\n');
	    for (var i = 0; i < partialByNl.length; i++) {
	      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
	        partialByNl[i] = filteredIndentation + partialByNl[i];
	      }
	    }
	    return partialByNl.join('\n');
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials, tags) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null) {
	      var lineHasNonSpace = token[6];
	      var tagIndex = token[5];
	      var indentation = token[4];
	      var indentedValue = value;
	      if (tagIndex == 0 && indentation) {
	        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
	      }
	      return this.renderTokens(this.parse(indentedValue, tags), context, partials, indentedValue);
	    }
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  var mustache = {
	    name: 'mustache.js',
	    version: '4.0.0',
	    tags: [ '{{', '}}' ],
	    clearCache: undefined,
	    escape: undefined,
	    parse: undefined,
	    render: undefined,
	    Scanner: undefined,
	    Context: undefined,
	    Writer: undefined,
	    /**
	     * Allows a user to override the default caching strategy, by providing an
	     * object with set, get and clear methods. This can also be used to disable
	     * the cache by setting it to the literal `undefined`.
	     */
	    set templateCache (cache) {
	      defaultWriter.templateCache = cache;
	    },
	    /**
	     * Gets the default or overridden caching object from the default writer.
	     */
	    get templateCache () {
	      return defaultWriter.templateCache;
	    }
	  };

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer. If the optional `tags` argument is given here it must be an
	   * array with two string values: the opening and closing tags used in the
	   * template (e.g. [ "<%", "%>" ]). The default is to mustache.tags.
	   */
	  mustache.render = function render (template, view, partials, tags) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials, tags);
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	  return mustache;

	}))); 
} (mustache));

var mustacheExports = mustache.exports;

var format = {};

var lib$1 = {};

(function (exports) {
	/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bytes = exports.stringToBytes = exports.str = exports.bytesToString = exports.hex = exports.utf8 = exports.bech32m = exports.bech32 = exports.base58check = exports.createBase58check = exports.base58xmr = exports.base58xrp = exports.base58flickr = exports.base58 = exports.base64urlnopad = exports.base64url = exports.base64nopad = exports.base64 = exports.base32crockford = exports.base32hexnopad = exports.base32hex = exports.base32nopad = exports.base32 = exports.base16 = exports.utils = void 0;
	function isBytes(a) {
	    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
	}
	/** Asserts something is Uint8Array. */
	function abytes(b, ...lengths) {
	    if (!isBytes(b))
	        throw new Error('Uint8Array expected');
	    if (lengths.length > 0)
	        ;
	}
	function isArrayOf(isString, arr) {
	    if (!Array.isArray(arr))
	        return false;
	    if (arr.length === 0)
	        return true;
	    if (isString) {
	        return arr.every((item) => typeof item === 'string');
	    }
	    else {
	        return arr.every((item) => Number.isSafeInteger(item));
	    }
	}
	// no abytes: seems to have 10% slowdown. Why?!
	function afn(input) {
	    if (typeof input !== 'function')
	        throw new Error('function expected');
	    return true;
	}
	function astr(label, input) {
	    if (typeof input !== 'string')
	        throw new Error(`${label}: string expected`);
	    return true;
	}
	function anumber(n) {
	    if (!Number.isSafeInteger(n))
	        throw new Error(`invalid integer: ${n}`);
	}
	function aArr(input) {
	    if (!Array.isArray(input))
	        throw new Error('array expected');
	}
	function astrArr(label, input) {
	    if (!isArrayOf(true, input))
	        throw new Error(`${label}: array of strings expected`);
	}
	function anumArr(label, input) {
	    if (!isArrayOf(false, input))
	        throw new Error(`${label}: array of numbers expected`);
	}
	/**
	 * @__NO_SIDE_EFFECTS__
	 */
	function chain(...args) {
	    const id = (a) => a;
	    // Wrap call in closure so JIT can inline calls
	    const wrap = (a, b) => (c) => a(b(c));
	    // Construct chain of args[-1].encode(args[-2].encode([...]))
	    const encode = args.map((x) => x.encode).reduceRight(wrap, id);
	    // Construct chain of args[0].decode(args[1].decode(...))
	    const decode = args.map((x) => x.decode).reduce(wrap, id);
	    return { encode, decode };
	}
	/**
	 * Encodes integer radix representation to array of strings using alphabet and back.
	 * Could also be array of strings.
	 * @__NO_SIDE_EFFECTS__
	 */
	function alphabet(letters) {
	    // mapping 1 to "b"
	    const lettersA = typeof letters === 'string' ? letters.split('') : letters;
	    const len = lettersA.length;
	    astrArr('alphabet', lettersA);
	    // mapping "b" to 1
	    const indexes = new Map(lettersA.map((l, i) => [l, i]));
	    return {
	        encode: (digits) => {
	            aArr(digits);
	            return digits.map((i) => {
	                if (!Number.isSafeInteger(i) || i < 0 || i >= len)
	                    throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
	                return lettersA[i];
	            });
	        },
	        decode: (input) => {
	            aArr(input);
	            return input.map((letter) => {
	                astr('alphabet.decode', letter);
	                const i = indexes.get(letter);
	                if (i === undefined)
	                    throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
	                return i;
	            });
	        },
	    };
	}
	/**
	 * @__NO_SIDE_EFFECTS__
	 */
	function join(separator = '') {
	    astr('join', separator);
	    return {
	        encode: (from) => {
	            astrArr('join.decode', from);
	            return from.join(separator);
	        },
	        decode: (to) => {
	            astr('join.decode', to);
	            return to.split(separator);
	        },
	    };
	}
	/**
	 * Pad strings array so it has integer number of bits
	 * @__NO_SIDE_EFFECTS__
	 */
	function padding(bits, chr = '=') {
	    anumber(bits);
	    astr('padding', chr);
	    return {
	        encode(data) {
	            astrArr('padding.encode', data);
	            while ((data.length * bits) % 8)
	                data.push(chr);
	            return data;
	        },
	        decode(input) {
	            astrArr('padding.decode', input);
	            let end = input.length;
	            if ((end * bits) % 8)
	                throw new Error('padding: invalid, string should have whole number of bytes');
	            for (; end > 0 && input[end - 1] === chr; end--) {
	                const last = end - 1;
	                const byte = last * bits;
	                if (byte % 8 === 0)
	                    throw new Error('padding: invalid, string has too much padding');
	            }
	            return input.slice(0, end);
	        },
	    };
	}
	/**
	 * @__NO_SIDE_EFFECTS__
	 */
	function normalize(fn) {
	    afn(fn);
	    return { encode: (from) => from, decode: (to) => fn(to) };
	}
	/**
	 * Slow: O(n^2) time complexity
	 */
	function convertRadix(data, from, to) {
	    // base 1 is impossible
	    if (from < 2)
	        throw new Error(`convertRadix: invalid from=${from}, base cannot be less than 2`);
	    if (to < 2)
	        throw new Error(`convertRadix: invalid to=${to}, base cannot be less than 2`);
	    aArr(data);
	    if (!data.length)
	        return [];
	    let pos = 0;
	    const res = [];
	    const digits = Array.from(data, (d) => {
	        anumber(d);
	        if (d < 0 || d >= from)
	            throw new Error(`invalid integer: ${d}`);
	        return d;
	    });
	    const dlen = digits.length;
	    while (true) {
	        let carry = 0;
	        let done = true;
	        for (let i = pos; i < dlen; i++) {
	            const digit = digits[i];
	            const fromCarry = from * carry;
	            const digitBase = fromCarry + digit;
	            if (!Number.isSafeInteger(digitBase) ||
	                fromCarry / from !== carry ||
	                digitBase - digit !== fromCarry) {
	                throw new Error('convertRadix: carry overflow');
	            }
	            const div = digitBase / to;
	            carry = digitBase % to;
	            const rounded = Math.floor(div);
	            digits[i] = rounded;
	            if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
	                throw new Error('convertRadix: carry overflow');
	            if (!done)
	                continue;
	            else if (!rounded)
	                pos = i;
	            else
	                done = false;
	        }
	        res.push(carry);
	        if (done)
	            break;
	    }
	    for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
	        res.push(0);
	    return res.reverse();
	}
	const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
	const radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from, to) => from + (to - gcd(from, to));
	const powers = /* @__PURE__ */ (() => {
	    let res = [];
	    for (let i = 0; i < 40; i++)
	        res.push(2 ** i);
	    return res;
	})();
	/**
	 * Implemented with numbers, because BigInt is 5x slower
	 */
	function convertRadix2(data, from, to, padding) {
	    aArr(data);
	    if (from <= 0 || from > 32)
	        throw new Error(`convertRadix2: wrong from=${from}`);
	    if (to <= 0 || to > 32)
	        throw new Error(`convertRadix2: wrong to=${to}`);
	    if (radix2carry(from, to) > 32) {
	        throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
	    }
	    let carry = 0;
	    let pos = 0; // bitwise position in current element
	    const max = powers[from];
	    const mask = powers[to] - 1;
	    const res = [];
	    for (const n of data) {
	        anumber(n);
	        if (n >= max)
	            throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
	        carry = (carry << from) | n;
	        if (pos + from > 32)
	            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
	        pos += from;
	        for (; pos >= to; pos -= to)
	            res.push(((carry >> (pos - to)) & mask) >>> 0);
	        const pow = powers[pos];
	        if (pow === undefined)
	            throw new Error('invalid carry');
	        carry &= pow - 1; // clean carry, otherwise it will cause overflow
	    }
	    carry = (carry << (to - pos)) & mask;
	    if (!padding && pos >= from)
	        throw new Error('Excess padding');
	    if (!padding && carry > 0)
	        throw new Error(`Non-zero padding: ${carry}`);
	    if (padding && pos > 0)
	        res.push(carry >>> 0);
	    return res;
	}
	/**
	 * @__NO_SIDE_EFFECTS__
	 */
	function radix(num) {
	    anumber(num);
	    const _256 = 2 ** 8;
	    return {
	        encode: (bytes) => {
	            if (!isBytes(bytes))
	                throw new Error('radix.encode input should be Uint8Array');
	            return convertRadix(Array.from(bytes), _256, num);
	        },
	        decode: (digits) => {
	            anumArr('radix.decode', digits);
	            return Uint8Array.from(convertRadix(digits, num, _256));
	        },
	    };
	}
	/**
	 * If both bases are power of same number (like `2**8 <-> 2**64`),
	 * there is a linear algorithm. For now we have implementation for power-of-two bases only.
	 * @__NO_SIDE_EFFECTS__
	 */
	function radix2(bits, revPadding = false) {
	    anumber(bits);
	    if (bits <= 0 || bits > 32)
	        throw new Error('radix2: bits should be in (0..32]');
	    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
	        throw new Error('radix2: carry overflow');
	    return {
	        encode: (bytes) => {
	            if (!isBytes(bytes))
	                throw new Error('radix2.encode input should be Uint8Array');
	            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
	        },
	        decode: (digits) => {
	            anumArr('radix2.decode', digits);
	            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
	        },
	    };
	}
	function unsafeWrapper(fn) {
	    afn(fn);
	    return function (...args) {
	        try {
	            return fn.apply(null, args);
	        }
	        catch (e) { }
	    };
	}
	function checksum(len, fn) {
	    anumber(len);
	    afn(fn);
	    return {
	        encode(data) {
	            if (!isBytes(data))
	                throw new Error('checksum.encode: input should be Uint8Array');
	            const sum = fn(data).slice(0, len);
	            const res = new Uint8Array(data.length + len);
	            res.set(data);
	            res.set(sum, data.length);
	            return res;
	        },
	        decode(data) {
	            if (!isBytes(data))
	                throw new Error('checksum.decode: input should be Uint8Array');
	            const payload = data.slice(0, -len);
	            const oldChecksum = data.slice(-len);
	            const newChecksum = fn(payload).slice(0, len);
	            for (let i = 0; i < len; i++)
	                if (newChecksum[i] !== oldChecksum[i])
	                    throw new Error('Invalid checksum');
	            return payload;
	        },
	    };
	}
	// prettier-ignore
	exports.utils = {
	    alphabet, chain, checksum, convertRadix, convertRadix2, radix, radix2, join, padding,
	};
	// RFC 4648 aka RFC 3548
	// ---------------------
	/**
	 * base16 encoding from RFC 4648.
	 * @example
	 * ```js
	 * base16.encode(Uint8Array.from([0x12, 0xab]));
	 * // => '12AB'
	 * ```
	 */
	exports.base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
	/**
	 * base32 encoding from RFC 4648. Has padding.
	 * Use `base32nopad` for unpadded version.
	 * Also check out `base32hex`, `base32hexnopad`, `base32crockford`.
	 * @example
	 * ```js
	 * base32.encode(Uint8Array.from([0x12, 0xab]));
	 * // => 'CKVQ===='
	 * base32.decode('CKVQ====');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	exports.base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
	/**
	 * base32 encoding from RFC 4648. No padding.
	 * Use `base32` for padded version.
	 * Also check out `base32hex`, `base32hexnopad`, `base32crockford`.
	 * @example
	 * ```js
	 * base32nopad.encode(Uint8Array.from([0x12, 0xab]));
	 * // => 'CKVQ'
	 * base32nopad.decode('CKVQ');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	exports.base32nopad = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), join(''));
	/**
	 * base32 encoding from RFC 4648. Padded. Compared to ordinary `base32`, slightly different alphabet.
	 * Use `base32hexnopad` for unpadded version.
	 * @example
	 * ```js
	 * base32hex.encode(Uint8Array.from([0x12, 0xab]));
	 * // => '2ALG===='
	 * base32hex.decode('2ALG====');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	exports.base32hex = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
	/**
	 * base32 encoding from RFC 4648. No padding. Compared to ordinary `base32`, slightly different alphabet.
	 * Use `base32hex` for padded version.
	 * @example
	 * ```js
	 * base32hexnopad.encode(Uint8Array.from([0x12, 0xab]));
	 * // => '2ALG'
	 * base32hexnopad.decode('2ALG');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	exports.base32hexnopad = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), join(''));
	/**
	 * base32 encoding from RFC 4648. Doug Crockford's version.
	 * https://www.crockford.com/base32.html
	 * @example
	 * ```js
	 * base32crockford.encode(Uint8Array.from([0x12, 0xab]));
	 * // => '2ANG'
	 * base32crockford.decode('2ANG');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	exports.base32crockford = chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
	// Built-in base64 conversion https://caniuse.com/mdn-javascript_builtins_uint8array_frombase64
	// prettier-ignore
	const hasBase64Builtin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toBase64 === 'function' &&
	    typeof Uint8Array.fromBase64 === 'function')();
	const decodeBase64Builtin = (s, isUrl) => {
	    astr('base64', s);
	    const re = isUrl ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/;
	    const alphabet = isUrl ? 'base64url' : 'base64';
	    if (s.length > 0 && !re.test(s))
	        throw new Error('invalid base64');
	    return Uint8Array.fromBase64(s, { alphabet, lastChunkHandling: 'strict' });
	};
	/**
	 * base64 from RFC 4648. Padded.
	 * Use `base64nopad` for unpadded version.
	 * Also check out `base64url`, `base64urlnopad`.
	 * Falls back to built-in function, when available.
	 * @example
	 * ```js
	 * base64.encode(Uint8Array.from([0x12, 0xab]));
	 * // => 'Eqs='
	 * base64.decode('Eqs=');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	// prettier-ignore
	exports.base64 = hasBase64Builtin ? {
	    encode(b) { abytes(b); return b.toBase64(); },
	    decode(s) { return decodeBase64Builtin(s, false); },
	} : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
	/**
	 * base64 from RFC 4648. No padding.
	 * Use `base64` for padded version.
	 * @example
	 * ```js
	 * base64nopad.encode(Uint8Array.from([0x12, 0xab]));
	 * // => 'Eqs'
	 * base64nopad.decode('Eqs');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	exports.base64nopad = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), join(''));
	/**
	 * base64 from RFC 4648, using URL-safe alphabet. Padded.
	 * Use `base64urlnopad` for unpadded version.
	 * Falls back to built-in function, when available.
	 * @example
	 * ```js
	 * base64url.encode(Uint8Array.from([0x12, 0xab]));
	 * // => 'Eqs='
	 * base64url.decode('Eqs=');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	// prettier-ignore
	exports.base64url = hasBase64Builtin ? {
	    encode(b) { abytes(b); return b.toBase64({ alphabet: 'base64url' }); },
	    decode(s) { return decodeBase64Builtin(s, true); },
	} : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
	/**
	 * base64 from RFC 4648, using URL-safe alphabet. No padding.
	 * Use `base64url` for padded version.
	 * @example
	 * ```js
	 * base64urlnopad.encode(Uint8Array.from([0x12, 0xab]));
	 * // => 'Eqs'
	 * base64urlnopad.decode('Eqs');
	 * // => Uint8Array.from([0x12, 0xab])
	 * ```
	 */
	exports.base64urlnopad = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), join(''));
	// base58 code
	// -----------
	const genBase58 = /* @__NO_SIDE_EFFECTS__ */ (abc) => chain(radix(58), alphabet(abc), join(''));
	/**
	 * base58: base64 without ambigous characters +, /, 0, O, I, l.
	 * Quadratic (O(n^2)) - so, can't be used on large inputs.
	 * @example
	 * ```js
	 * base58.decode('01abcdef');
	 * // => '3UhJW'
	 * ```
	 */
	exports.base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
	/**
	 * base58: flickr version. Check out `base58`.
	 */
	exports.base58flickr = genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
	/**
	 * base58: XRP version. Check out `base58`.
	 */
	exports.base58xrp = genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
	// Data len (index) -> encoded block len
	const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
	/**
	 * base58: XMR version. Check out `base58`.
	 * Done in 8-byte blocks (which equals 11 chars in decoding). Last (non-full) block padded with '1' to size in XMR_BLOCK_LEN.
	 * Block encoding significantly reduces quadratic complexity of base58.
	 */
	exports.base58xmr = {
	    encode(data) {
	        let res = '';
	        for (let i = 0; i < data.length; i += 8) {
	            const block = data.subarray(i, i + 8);
	            res += exports.base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
	        }
	        return res;
	    },
	    decode(str) {
	        let res = [];
	        for (let i = 0; i < str.length; i += 11) {
	            const slice = str.slice(i, i + 11);
	            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
	            const block = exports.base58.decode(slice);
	            for (let j = 0; j < block.length - blockLen; j++) {
	                if (block[j] !== 0)
	                    throw new Error('base58xmr: wrong padding');
	            }
	            res = res.concat(Array.from(block.slice(block.length - blockLen)));
	        }
	        return Uint8Array.from(res);
	    },
	};
	/**
	 * Method, which creates base58check encoder.
	 * Requires function, calculating sha256.
	 */
	const createBase58check = (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), exports.base58);
	exports.createBase58check = createBase58check;
	/**
	 * Use `createBase58check` instead.
	 * @deprecated
	 */
	exports.base58check = exports.createBase58check;
	const BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
	const POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
	function bech32Polymod(pre) {
	    const b = pre >> 25;
	    let chk = (pre & 0x1ffffff) << 5;
	    for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
	        if (((b >> i) & 1) === 1)
	            chk ^= POLYMOD_GENERATORS[i];
	    }
	    return chk;
	}
	function bechChecksum(prefix, words, encodingConst = 1) {
	    const len = prefix.length;
	    let chk = 1;
	    for (let i = 0; i < len; i++) {
	        const c = prefix.charCodeAt(i);
	        if (c < 33 || c > 126)
	            throw new Error(`Invalid prefix (${prefix})`);
	        chk = bech32Polymod(chk) ^ (c >> 5);
	    }
	    chk = bech32Polymod(chk);
	    for (let i = 0; i < len; i++)
	        chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i) & 0x1f);
	    for (let v of words)
	        chk = bech32Polymod(chk) ^ v;
	    for (let i = 0; i < 6; i++)
	        chk = bech32Polymod(chk);
	    chk ^= encodingConst;
	    return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
	}
	/**
	 * @__NO_SIDE_EFFECTS__
	 */
	function genBech32(encoding) {
	    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
	    const _words = radix2(5);
	    const fromWords = _words.decode;
	    const toWords = _words.encode;
	    const fromWordsUnsafe = unsafeWrapper(fromWords);
	    function encode(prefix, words, limit = 90) {
	        astr('bech32.encode prefix', prefix);
	        if (isBytes(words))
	            words = Array.from(words);
	        anumArr('bech32.encode', words);
	        const plen = prefix.length;
	        if (plen === 0)
	            throw new TypeError(`Invalid prefix length ${plen}`);
	        const actualLength = plen + 7 + words.length;
	        if (limit !== false && actualLength > limit)
	            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
	        const lowered = prefix.toLowerCase();
	        const sum = bechChecksum(lowered, words, ENCODING_CONST);
	        return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
	    }
	    function decode(str, limit = 90) {
	        astr('bech32.decode input', str);
	        const slen = str.length;
	        if (slen < 8 || (limit !== false && slen > limit))
	            throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
	        // don't allow mixed case
	        const lowered = str.toLowerCase();
	        if (str !== lowered && str !== str.toUpperCase())
	            throw new Error(`String must be lowercase or uppercase`);
	        const sepIndex = lowered.lastIndexOf('1');
	        if (sepIndex === 0 || sepIndex === -1)
	            throw new Error(`Letter "1" must be present between prefix and data only`);
	        const prefix = lowered.slice(0, sepIndex);
	        const data = lowered.slice(sepIndex + 1);
	        if (data.length < 6)
	            throw new Error('Data must be at least 6 characters long');
	        const words = BECH_ALPHABET.decode(data).slice(0, -6);
	        const sum = bechChecksum(prefix, words, ENCODING_CONST);
	        if (!data.endsWith(sum))
	            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
	        return { prefix, words };
	    }
	    const decodeUnsafe = unsafeWrapper(decode);
	    function decodeToBytes(str) {
	        const { prefix, words } = decode(str, false);
	        return { prefix, words, bytes: fromWords(words) };
	    }
	    function encodeFromBytes(prefix, bytes) {
	        return encode(prefix, toWords(bytes));
	    }
	    return {
	        encode,
	        decode,
	        encodeFromBytes,
	        decodeToBytes,
	        decodeUnsafe,
	        fromWords,
	        fromWordsUnsafe,
	        toWords,
	    };
	}
	/**
	 * bech32 from BIP 173. Operates on words.
	 * For high-level, check out scure-btc-signer:
	 * https://github.com/paulmillr/scure-btc-signer.
	 */
	exports.bech32 = genBech32('bech32');
	/**
	 * bech32m from BIP 350. Operates on words.
	 * It was to mitigate `bech32` weaknesses.
	 * For high-level, check out scure-btc-signer:
	 * https://github.com/paulmillr/scure-btc-signer.
	 */
	exports.bech32m = genBech32('bech32m');
	/**
	 * UTF-8-to-byte decoder. Uses built-in TextDecoder / TextEncoder.
	 * @example
	 * ```js
	 * const b = utf8.decode("hey"); // => new Uint8Array([ 104, 101, 121 ])
	 * const str = utf8.encode(b); // "hey"
	 * ```
	 */
	exports.utf8 = {
	    encode: (data) => new TextDecoder().decode(data),
	    decode: (str) => new TextEncoder().encode(str),
	};
	// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
	// prettier-ignore
	const hasHexBuiltin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === 'function' &&
	    typeof Uint8Array.fromHex === 'function')();
	// prettier-ignore
	const hexBuiltin = {
	    encode(data) { abytes(data); return data.toHex(); },
	    decode(s) { astr('hex', s); return Uint8Array.fromHex(s); },
	};
	/**
	 * hex string decoder. Uses built-in function, when available.
	 * @example
	 * ```js
	 * const b = hex.decode("0102ff"); // => new Uint8Array([ 1, 2, 255 ])
	 * const str = hex.encode(b); // "0102ff"
	 * ```
	 */
	exports.hex = hasHexBuiltin
	    ? hexBuiltin
	    : chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize((s) => {
	        if (typeof s !== 'string' || s.length % 2 !== 0)
	            throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
	        return s.toLowerCase();
	    }));
	// prettier-ignore
	const CODERS = {
	    utf8: exports.utf8, hex: exports.hex, base16: exports.base16, base32: exports.base32, base64: exports.base64, base64url: exports.base64url, base58: exports.base58, base58xmr: exports.base58xmr
	};
	const coderTypeError = 'Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr';
	/** @deprecated */
	const bytesToString = (type, bytes) => {
	    if (typeof type !== 'string' || !CODERS.hasOwnProperty(type))
	        throw new TypeError(coderTypeError);
	    if (!isBytes(bytes))
	        throw new TypeError('bytesToString() expects Uint8Array');
	    return CODERS[type].encode(bytes);
	};
	exports.bytesToString = bytesToString;
	/** @deprecated */
	exports.str = exports.bytesToString; // as in python, but for bytes only
	/** @deprecated */
	const stringToBytes = (type, str) => {
	    if (!CODERS.hasOwnProperty(type))
	        throw new TypeError(coderTypeError);
	    if (typeof str !== 'string')
	        throw new TypeError('stringToBytes() expects string');
	    return CODERS[type].decode(str);
	};
	exports.stringToBytes = stringToBytes;
	/** @deprecated */
	exports.bytes = exports.stringToBytes;
	
} (lib$1));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.baseDecode = exports.baseEncode = exports.parseNearAmount = exports.formatNearAmount = exports.NEAR_NOMINATION = exports.NEAR_NOMINATION_EXP = void 0;
	const base_1 = lib$1;
	/**
	 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
	 */
	exports.NEAR_NOMINATION_EXP = 24;
	/**
	 * Number of indivisible units in one NEAR. Derived from {@link NEAR_NOMINATION_EXP}.
	 */
	exports.NEAR_NOMINATION = 10n ** BigInt(exports.NEAR_NOMINATION_EXP);
	// Pre-calculate offsets used for rounding to different number of digits
	const ROUNDING_OFFSETS = [];
	const BN10 = 10n;
	for (let i = 0, offset = 5n; i < exports.NEAR_NOMINATION_EXP; i++, offset = offset * BN10) {
	    ROUNDING_OFFSETS[i] = offset;
	}
	/**
	 * Convert account balance value from internal indivisible units to NEAR. 1 NEAR is defined by {@link NEAR_NOMINATION}.
	 * Effectively this divides given amount by {@link NEAR_NOMINATION}.
	 *
	 * @param balance decimal string representing balance in smallest non-divisible NEAR units (as specified by {@link NEAR_NOMINATION})
	 * @param fracDigits number of fractional digits to preserve in formatted string. Balance is rounded to match given number of digits.
	 * @returns Value in Ⓝ
	 */
	function formatNearAmount(balance, fracDigits = exports.NEAR_NOMINATION_EXP) {
	    let balanceBN = BigInt(balance);
	    if (fracDigits !== exports.NEAR_NOMINATION_EXP) {
	        // Adjust balance for rounding at given number of digits
	        const roundingExp = exports.NEAR_NOMINATION_EXP - fracDigits - 1;
	        if (roundingExp > 0) {
	            balanceBN += ROUNDING_OFFSETS[roundingExp];
	        }
	    }
	    balance = balanceBN.toString();
	    const wholeStr = balance.substring(0, balance.length - exports.NEAR_NOMINATION_EXP) || "0";
	    const fractionStr = balance
	        .substring(balance.length - exports.NEAR_NOMINATION_EXP)
	        .padStart(exports.NEAR_NOMINATION_EXP, "0")
	        .substring(0, fracDigits);
	    return trimTrailingZeroes(`${formatWithCommas(wholeStr)}.${fractionStr}`);
	}
	exports.formatNearAmount = formatNearAmount;
	/**
	 * Convert human readable NEAR amount to internal indivisible units.
	 * Effectively this multiplies given amount by {@link NEAR_NOMINATION}.
	 *
	 * @param amt decimal string (potentially fractional) denominated in NEAR.
	 * @returns The parsed yoctoⓃ amount or null if no amount was passed in
	 */
	function parseNearAmount(amt) {
	    if (!amt) {
	        return null;
	    }
	    amt = cleanupAmount(amt);
	    const split = amt.split(".");
	    const wholePart = split[0];
	    const fracPart = split[1] || "";
	    if (split.length > 2 || fracPart.length > exports.NEAR_NOMINATION_EXP) {
	        throw new Error(`Cannot parse '${amt}' as NEAR amount`);
	    }
	    return trimLeadingZeroes(wholePart + fracPart.padEnd(exports.NEAR_NOMINATION_EXP, "0"));
	}
	exports.parseNearAmount = parseNearAmount;
	/**
	 * Removes commas from the input
	 * @param amount A value or amount that may contain commas
	 * @returns string The cleaned value
	 */
	function cleanupAmount(amount) {
	    return amount.replace(/,/g, "").trim();
	}
	/**
	 * Removes .000… from an input
	 * @param value A value that may contain trailing zeroes in the decimals place
	 * @returns string The value without the trailing zeros
	 */
	function trimTrailingZeroes(value) {
	    return value.replace(/\.?0*$/, "");
	}
	/**
	 * Removes leading zeroes from an input
	 * @param value A value that may contain leading zeroes
	 * @returns string The value without the leading zeroes
	 */
	function trimLeadingZeroes(value) {
	    value = value.replace(/^0+/, "");
	    if (value === "") {
	        return "0";
	    }
	    return value;
	}
	/**
	 * Returns a human-readable value with commas
	 * @param value A value that may not contain commas
	 * @returns string A value with commas
	 */
	function formatWithCommas(value) {
	    const pattern = /(-?\d+)(\d{3})/;
	    while (pattern.test(value)) {
	        value = value.replace(pattern, "$1,$2");
	    }
	    return value;
	}
	/**
	 * Encodes a Uint8Array or string into base58
	 * @param value Uint8Array or string representing a borsh encoded object
	 * @returns string base58 encoding of the value
	 */
	function baseEncode(value) {
	    if (typeof value === "string") {
	        const bytes = [];
	        for (let c = 0; c < value.length; c++) {
	            bytes.push(value.charCodeAt(c));
	        }
	        value = new Uint8Array(bytes);
	    }
	    return base_1.base58.encode(value);
	}
	exports.baseEncode = baseEncode;
	/**
	 * Decodes a base58 string into a Uint8Array
	 * @param value base58 encoded string
	 * @returns Uint8Array representing the decoded value
	 */
	function baseDecode(value) {
	    return base_1.base58.decode(value);
	}
	exports.baseDecode = baseDecode; 
} (format));

var schema = {
	AccessKeyNotFound: {
		name: "AccessKeyNotFound",
		subtypes: [
		],
		props: {
			account_id: "",
			public_key: ""
		}
	},
	AccountAlreadyExists: {
		name: "AccountAlreadyExists",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	AccountDoesNotExist: {
		name: "AccountDoesNotExist",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	ActionError: {
		name: "ActionError",
		subtypes: [
			"AccountAlreadyExists",
			"AccountDoesNotExist",
			"CreateAccountOnlyByRegistrar",
			"CreateAccountNotAllowed",
			"ActorNoPermission",
			"DeleteKeyDoesNotExist",
			"AddKeyAlreadyExists",
			"DeleteAccountStaking",
			"LackBalanceForState",
			"TriesToUnstake",
			"TriesToStake",
			"InsufficientStake",
			"FunctionCallError",
			"NewReceiptValidationError",
			"OnlyImplicitAccountCreationAllowed",
			"DeleteAccountWithLargeState",
			"DelegateActionInvalidSignature",
			"DelegateActionSenderDoesNotMatchTxReceiver",
			"DelegateActionExpired",
			"DelegateActionAccessKeyError",
			"DelegateActionInvalidNonce",
			"DelegateActionNonceTooLarge"
		],
		props: {
			index: ""
		}
	},
	ActionsValidationError: {
		name: "ActionsValidationError",
		subtypes: [
			"DeleteActionMustBeFinal",
			"TotalPrepaidGasExceeded",
			"TotalNumberOfActionsExceeded",
			"AddKeyMethodNamesNumberOfBytesExceeded",
			"AddKeyMethodNameLengthExceeded",
			"IntegerOverflow",
			"InvalidAccountId",
			"ContractSizeExceeded",
			"FunctionCallMethodNameLengthExceeded",
			"FunctionCallArgumentsLengthExceeded",
			"UnsuitableStakingKey",
			"FunctionCallZeroAttachedGas",
			"DelegateActionMustBeOnlyOne",
			"UnsupportedProtocolFeature"
		],
		props: {
		}
	},
	ActorNoPermission: {
		name: "ActorNoPermission",
		subtypes: [
		],
		props: {
			account_id: "",
			actor_id: ""
		}
	},
	AddKeyAlreadyExists: {
		name: "AddKeyAlreadyExists",
		subtypes: [
		],
		props: {
			account_id: "",
			public_key: ""
		}
	},
	AddKeyMethodNameLengthExceeded: {
		name: "AddKeyMethodNameLengthExceeded",
		subtypes: [
		],
		props: {
			length: "",
			limit: ""
		}
	},
	AddKeyMethodNamesNumberOfBytesExceeded: {
		name: "AddKeyMethodNamesNumberOfBytesExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			total_number_of_bytes: ""
		}
	},
	AltBn128InvalidInput: {
		name: "AltBn128InvalidInput",
		subtypes: [
		],
		props: {
			msg: ""
		}
	},
	BadUTF16: {
		name: "BadUTF16",
		subtypes: [
		],
		props: {
		}
	},
	BadUTF8: {
		name: "BadUTF8",
		subtypes: [
		],
		props: {
		}
	},
	BalanceExceeded: {
		name: "BalanceExceeded",
		subtypes: [
		],
		props: {
		}
	},
	BalanceMismatchError: {
		name: "BalanceMismatchError",
		subtypes: [
		],
		props: {
			final_accounts_balance: "",
			final_postponed_receipts_balance: "",
			forwarded_buffered_receipts_balance: "",
			incoming_receipts_balance: "",
			incoming_validator_rewards: "",
			initial_accounts_balance: "",
			initial_postponed_receipts_balance: "",
			new_buffered_receipts_balance: "",
			new_delayed_receipts_balance: "",
			other_burnt_amount: "",
			outgoing_receipts_balance: "",
			processed_delayed_receipts_balance: "",
			slashed_burnt_amount: "",
			tx_burnt_amount: ""
		}
	},
	CallIndirectOOB: {
		name: "CallIndirectOOB",
		subtypes: [
		],
		props: {
		}
	},
	CannotAppendActionToJointPromise: {
		name: "CannotAppendActionToJointPromise",
		subtypes: [
		],
		props: {
		}
	},
	CannotReturnJointPromise: {
		name: "CannotReturnJointPromise",
		subtypes: [
		],
		props: {
		}
	},
	CodeDoesNotExist: {
		name: "CodeDoesNotExist",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	CompilationError: {
		name: "CompilationError",
		subtypes: [
			"CodeDoesNotExist",
			"PrepareError",
			"WasmerCompileError"
		],
		props: {
		}
	},
	ContractSizeExceeded: {
		name: "ContractSizeExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			size: ""
		}
	},
	CostOverflow: {
		name: "CostOverflow",
		subtypes: [
		],
		props: {
		}
	},
	CreateAccountNotAllowed: {
		name: "CreateAccountNotAllowed",
		subtypes: [
		],
		props: {
			account_id: "",
			predecessor_id: ""
		}
	},
	CreateAccountOnlyByRegistrar: {
		name: "CreateAccountOnlyByRegistrar",
		subtypes: [
		],
		props: {
			account_id: "",
			predecessor_id: "",
			registrar_account_id: ""
		}
	},
	DelegateActionExpired: {
		name: "DelegateActionExpired",
		subtypes: [
		],
		props: {
		}
	},
	DelegateActionInvalidNonce: {
		name: "DelegateActionInvalidNonce",
		subtypes: [
		],
		props: {
			ak_nonce: "",
			delegate_nonce: ""
		}
	},
	DelegateActionInvalidSignature: {
		name: "DelegateActionInvalidSignature",
		subtypes: [
		],
		props: {
		}
	},
	DelegateActionMustBeOnlyOne: {
		name: "DelegateActionMustBeOnlyOne",
		subtypes: [
		],
		props: {
		}
	},
	DelegateActionNonceTooLarge: {
		name: "DelegateActionNonceTooLarge",
		subtypes: [
		],
		props: {
			delegate_nonce: "",
			upper_bound: ""
		}
	},
	DelegateActionSenderDoesNotMatchTxReceiver: {
		name: "DelegateActionSenderDoesNotMatchTxReceiver",
		subtypes: [
		],
		props: {
			receiver_id: "",
			sender_id: ""
		}
	},
	DeleteAccountStaking: {
		name: "DeleteAccountStaking",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	DeleteAccountWithLargeState: {
		name: "DeleteAccountWithLargeState",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	DeleteActionMustBeFinal: {
		name: "DeleteActionMustBeFinal",
		subtypes: [
		],
		props: {
		}
	},
	DeleteKeyDoesNotExist: {
		name: "DeleteKeyDoesNotExist",
		subtypes: [
		],
		props: {
			account_id: "",
			public_key: ""
		}
	},
	DepositWithFunctionCall: {
		name: "DepositWithFunctionCall",
		subtypes: [
		],
		props: {
		}
	},
	Deprecated: {
		name: "Deprecated",
		subtypes: [
		],
		props: {
			method_name: ""
		}
	},
	Deserialization: {
		name: "Deserialization",
		subtypes: [
		],
		props: {
		}
	},
	ECRecoverError: {
		name: "ECRecoverError",
		subtypes: [
		],
		props: {
			msg: ""
		}
	},
	Ed25519VerifyInvalidInput: {
		name: "Ed25519VerifyInvalidInput",
		subtypes: [
		],
		props: {
			msg: ""
		}
	},
	EmptyMethodName: {
		name: "EmptyMethodName",
		subtypes: [
		],
		props: {
		}
	},
	Expired: {
		name: "Expired",
		subtypes: [
		],
		props: {
		}
	},
	FunctionCallArgumentsLengthExceeded: {
		name: "FunctionCallArgumentsLengthExceeded",
		subtypes: [
		],
		props: {
			length: "",
			limit: ""
		}
	},
	FunctionCallMethodNameLengthExceeded: {
		name: "FunctionCallMethodNameLengthExceeded",
		subtypes: [
		],
		props: {
			length: "",
			limit: ""
		}
	},
	FunctionCallZeroAttachedGas: {
		name: "FunctionCallZeroAttachedGas",
		subtypes: [
		],
		props: {
		}
	},
	GasExceeded: {
		name: "GasExceeded",
		subtypes: [
		],
		props: {
		}
	},
	GasInstrumentation: {
		name: "GasInstrumentation",
		subtypes: [
		],
		props: {
		}
	},
	GasLimitExceeded: {
		name: "GasLimitExceeded",
		subtypes: [
		],
		props: {
		}
	},
	GenericTrap: {
		name: "GenericTrap",
		subtypes: [
		],
		props: {
		}
	},
	GuestPanic: {
		name: "GuestPanic",
		subtypes: [
		],
		props: {
			panic_msg: ""
		}
	},
	HostError: {
		name: "HostError",
		subtypes: [
			"BadUTF16",
			"BadUTF8",
			"GasExceeded",
			"GasLimitExceeded",
			"BalanceExceeded",
			"EmptyMethodName",
			"GuestPanic",
			"IntegerOverflow",
			"InvalidPromiseIndex",
			"CannotAppendActionToJointPromise",
			"CannotReturnJointPromise",
			"InvalidPromiseResultIndex",
			"InvalidRegisterId",
			"IteratorWasInvalidated",
			"MemoryAccessViolation",
			"InvalidReceiptIndex",
			"InvalidIteratorIndex",
			"InvalidAccountId",
			"InvalidMethodName",
			"InvalidPublicKey",
			"ProhibitedInView",
			"NumberOfLogsExceeded",
			"KeyLengthExceeded",
			"ValueLengthExceeded",
			"TotalLogLengthExceeded",
			"NumberPromisesExceeded",
			"NumberInputDataDependenciesExceeded",
			"ReturnedValueLengthExceeded",
			"ContractSizeExceeded",
			"Deprecated",
			"ECRecoverError",
			"AltBn128InvalidInput",
			"Ed25519VerifyInvalidInput"
		],
		props: {
		}
	},
	IllegalArithmetic: {
		name: "IllegalArithmetic",
		subtypes: [
		],
		props: {
		}
	},
	IncorrectCallIndirectSignature: {
		name: "IncorrectCallIndirectSignature",
		subtypes: [
		],
		props: {
		}
	},
	IndirectCallToNull: {
		name: "IndirectCallToNull",
		subtypes: [
		],
		props: {
		}
	},
	Instantiate: {
		name: "Instantiate",
		subtypes: [
		],
		props: {
		}
	},
	InsufficientStake: {
		name: "InsufficientStake",
		subtypes: [
		],
		props: {
			account_id: "",
			minimum_stake: "",
			stake: ""
		}
	},
	IntegerOverflow: {
		name: "IntegerOverflow",
		subtypes: [
		],
		props: {
		}
	},
	InternalMemoryDeclared: {
		name: "InternalMemoryDeclared",
		subtypes: [
		],
		props: {
		}
	},
	InvalidAccessKeyError: {
		name: "InvalidAccessKeyError",
		subtypes: [
			"AccessKeyNotFound",
			"ReceiverMismatch",
			"MethodNameMismatch",
			"RequiresFullAccess",
			"NotEnoughAllowance",
			"DepositWithFunctionCall"
		],
		props: {
		}
	},
	InvalidAccountId: {
		name: "InvalidAccountId",
		subtypes: [
		],
		props: {
		}
	},
	InvalidChain: {
		name: "InvalidChain",
		subtypes: [
		],
		props: {
		}
	},
	InvalidDataReceiverId: {
		name: "InvalidDataReceiverId",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	InvalidIteratorIndex: {
		name: "InvalidIteratorIndex",
		subtypes: [
		],
		props: {
			iterator_index: ""
		}
	},
	InvalidMethodName: {
		name: "InvalidMethodName",
		subtypes: [
		],
		props: {
		}
	},
	InvalidNonce: {
		name: "InvalidNonce",
		subtypes: [
		],
		props: {
			ak_nonce: "",
			tx_nonce: ""
		}
	},
	InvalidPredecessorId: {
		name: "InvalidPredecessorId",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	InvalidPromiseIndex: {
		name: "InvalidPromiseIndex",
		subtypes: [
		],
		props: {
			promise_idx: ""
		}
	},
	InvalidPromiseResultIndex: {
		name: "InvalidPromiseResultIndex",
		subtypes: [
		],
		props: {
			result_idx: ""
		}
	},
	InvalidPublicKey: {
		name: "InvalidPublicKey",
		subtypes: [
		],
		props: {
		}
	},
	InvalidReceiptIndex: {
		name: "InvalidReceiptIndex",
		subtypes: [
		],
		props: {
			receipt_index: ""
		}
	},
	InvalidReceiverId: {
		name: "InvalidReceiverId",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	InvalidRegisterId: {
		name: "InvalidRegisterId",
		subtypes: [
		],
		props: {
			register_id: ""
		}
	},
	InvalidSignature: {
		name: "InvalidSignature",
		subtypes: [
		],
		props: {
		}
	},
	InvalidSignerId: {
		name: "InvalidSignerId",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	InvalidTxError: {
		name: "InvalidTxError",
		subtypes: [
			"InvalidAccessKeyError",
			"InvalidSignerId",
			"SignerDoesNotExist",
			"InvalidNonce",
			"NonceTooLarge",
			"InvalidReceiverId",
			"InvalidSignature",
			"NotEnoughBalance",
			"LackBalanceForState",
			"CostOverflow",
			"InvalidChain",
			"Expired",
			"ActionsValidation",
			"TransactionSizeExceeded",
			"StorageError",
			"ShardCongested",
			"ShardStuck"
		],
		props: {
		}
	},
	IteratorWasInvalidated: {
		name: "IteratorWasInvalidated",
		subtypes: [
		],
		props: {
			iterator_index: ""
		}
	},
	KeyLengthExceeded: {
		name: "KeyLengthExceeded",
		subtypes: [
		],
		props: {
			length: "",
			limit: ""
		}
	},
	LackBalanceForState: {
		name: "LackBalanceForState",
		subtypes: [
		],
		props: {
			account_id: "",
			amount: ""
		}
	},
	Memory: {
		name: "Memory",
		subtypes: [
		],
		props: {
		}
	},
	MemoryAccessViolation: {
		name: "MemoryAccessViolation",
		subtypes: [
		],
		props: {
		}
	},
	MemoryOutOfBounds: {
		name: "MemoryOutOfBounds",
		subtypes: [
		],
		props: {
		}
	},
	MethodEmptyName: {
		name: "MethodEmptyName",
		subtypes: [
		],
		props: {
		}
	},
	MethodInvalidSignature: {
		name: "MethodInvalidSignature",
		subtypes: [
		],
		props: {
		}
	},
	MethodNameMismatch: {
		name: "MethodNameMismatch",
		subtypes: [
		],
		props: {
			method_name: ""
		}
	},
	MethodNotFound: {
		name: "MethodNotFound",
		subtypes: [
		],
		props: {
		}
	},
	MethodResolveError: {
		name: "MethodResolveError",
		subtypes: [
			"MethodEmptyName",
			"MethodNotFound",
			"MethodInvalidSignature"
		],
		props: {
		}
	},
	MisalignedAtomicAccess: {
		name: "MisalignedAtomicAccess",
		subtypes: [
		],
		props: {
		}
	},
	NonceTooLarge: {
		name: "NonceTooLarge",
		subtypes: [
		],
		props: {
			tx_nonce: "",
			upper_bound: ""
		}
	},
	NotEnoughAllowance: {
		name: "NotEnoughAllowance",
		subtypes: [
		],
		props: {
			account_id: "",
			allowance: "",
			cost: "",
			public_key: ""
		}
	},
	NotEnoughBalance: {
		name: "NotEnoughBalance",
		subtypes: [
		],
		props: {
			balance: "",
			cost: "",
			signer_id: ""
		}
	},
	NumberInputDataDependenciesExceeded: {
		name: "NumberInputDataDependenciesExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			number_of_input_data_dependencies: ""
		}
	},
	NumberOfLogsExceeded: {
		name: "NumberOfLogsExceeded",
		subtypes: [
		],
		props: {
			limit: ""
		}
	},
	NumberPromisesExceeded: {
		name: "NumberPromisesExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			number_of_promises: ""
		}
	},
	OnlyImplicitAccountCreationAllowed: {
		name: "OnlyImplicitAccountCreationAllowed",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	PrepareError: {
		name: "PrepareError",
		subtypes: [
			"Serialization",
			"Deserialization",
			"InternalMemoryDeclared",
			"GasInstrumentation",
			"StackHeightInstrumentation",
			"Instantiate",
			"Memory",
			"TooManyFunctions",
			"TooManyLocals"
		],
		props: {
		}
	},
	ProhibitedInView: {
		name: "ProhibitedInView",
		subtypes: [
		],
		props: {
			method_name: ""
		}
	},
	ReceiptSizeExceeded: {
		name: "ReceiptSizeExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			size: ""
		}
	},
	ReceiptValidationError: {
		name: "ReceiptValidationError",
		subtypes: [
			"InvalidPredecessorId",
			"InvalidReceiverId",
			"InvalidSignerId",
			"InvalidDataReceiverId",
			"ReturnedValueLengthExceeded",
			"NumberInputDataDependenciesExceeded",
			"ActionsValidation",
			"ReceiptSizeExceeded"
		],
		props: {
		}
	},
	ReceiverMismatch: {
		name: "ReceiverMismatch",
		subtypes: [
		],
		props: {
			ak_receiver: "",
			tx_receiver: ""
		}
	},
	RequiresFullAccess: {
		name: "RequiresFullAccess",
		subtypes: [
		],
		props: {
		}
	},
	ReturnedValueLengthExceeded: {
		name: "ReturnedValueLengthExceeded",
		subtypes: [
		],
		props: {
			length: "",
			limit: ""
		}
	},
	Serialization: {
		name: "Serialization",
		subtypes: [
		],
		props: {
		}
	},
	ShardCongested: {
		name: "ShardCongested",
		subtypes: [
		],
		props: {
			congestion_level: "",
			shard_id: ""
		}
	},
	ShardStuck: {
		name: "ShardStuck",
		subtypes: [
		],
		props: {
			missed_chunks: "",
			shard_id: ""
		}
	},
	SignerDoesNotExist: {
		name: "SignerDoesNotExist",
		subtypes: [
		],
		props: {
			signer_id: ""
		}
	},
	StackHeightInstrumentation: {
		name: "StackHeightInstrumentation",
		subtypes: [
		],
		props: {
		}
	},
	StackOverflow: {
		name: "StackOverflow",
		subtypes: [
		],
		props: {
		}
	},
	TooManyFunctions: {
		name: "TooManyFunctions",
		subtypes: [
		],
		props: {
		}
	},
	TooManyLocals: {
		name: "TooManyLocals",
		subtypes: [
		],
		props: {
		}
	},
	TotalLogLengthExceeded: {
		name: "TotalLogLengthExceeded",
		subtypes: [
		],
		props: {
			length: "",
			limit: ""
		}
	},
	TotalNumberOfActionsExceeded: {
		name: "TotalNumberOfActionsExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			total_number_of_actions: ""
		}
	},
	TotalPrepaidGasExceeded: {
		name: "TotalPrepaidGasExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			total_prepaid_gas: ""
		}
	},
	TransactionSizeExceeded: {
		name: "TransactionSizeExceeded",
		subtypes: [
		],
		props: {
			limit: "",
			size: ""
		}
	},
	TriesToStake: {
		name: "TriesToStake",
		subtypes: [
		],
		props: {
			account_id: "",
			balance: "",
			locked: "",
			stake: ""
		}
	},
	TriesToUnstake: {
		name: "TriesToUnstake",
		subtypes: [
		],
		props: {
			account_id: ""
		}
	},
	TxExecutionError: {
		name: "TxExecutionError",
		subtypes: [
			"ActionError",
			"InvalidTxError"
		],
		props: {
		}
	},
	Unreachable: {
		name: "Unreachable",
		subtypes: [
		],
		props: {
		}
	},
	UnsuitableStakingKey: {
		name: "UnsuitableStakingKey",
		subtypes: [
		],
		props: {
			public_key: ""
		}
	},
	UnsupportedProtocolFeature: {
		name: "UnsupportedProtocolFeature",
		subtypes: [
		],
		props: {
			protocol_feature: "",
			version: ""
		}
	},
	ValueLengthExceeded: {
		name: "ValueLengthExceeded",
		subtypes: [
		],
		props: {
			length: "",
			limit: ""
		}
	},
	WasmTrap: {
		name: "WasmTrap",
		subtypes: [
			"Unreachable",
			"IncorrectCallIndirectSignature",
			"MemoryOutOfBounds",
			"CallIndirectOOB",
			"IllegalArithmetic",
			"MisalignedAtomicAccess",
			"IndirectCallToNull",
			"StackOverflow",
			"GenericTrap"
		],
		props: {
		}
	},
	WasmerCompileError: {
		name: "WasmerCompileError",
		subtypes: [
		],
		props: {
			msg: ""
		}
	},
	Closed: {
		name: "Closed",
		subtypes: [
		],
		props: {
		}
	},
	ServerError: {
		name: "ServerError",
		subtypes: [
			"TxExecutionError",
			"Timeout",
			"Closed"
		],
		props: {
		}
	},
	Timeout: {
		name: "Timeout",
		subtypes: [
		],
		props: {
		}
	}
};
var require$$4 = {
	schema: schema
};

var __importDefault$4 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(rpc_errors, "__esModule", { value: true });
rpc_errors.getErrorTypeFromErrorMessage = rpc_errors.formatError = rpc_errors.parseResultError = rpc_errors.parseRpcError = rpc_errors.ServerError = void 0;
const types_1 = commonjs;
const mustache_1 = __importDefault$4(mustacheExports);
const format_1 = format;
const errors_1$1 = errors$1;
const rpc_error_schema_json_1 = __importDefault$4(require$$4);
const mustacheHelpers = {
    formatNear: () => (n, render) => (0, format_1.formatNearAmount)(render(n))
};
class ServerError extends types_1.TypedError {
}
rpc_errors.ServerError = ServerError;
class ServerTransactionError extends ServerError {
    transaction_outcome;
}
function parseRpcError(errorObj) {
    const result = {};
    const errorClassName = walkSubtype(errorObj, rpc_error_schema_json_1.default.schema, result, '');
    // NOTE: This assumes that all errors extend TypedError
    const error = new ServerError(formatError(errorClassName, result), errorClassName);
    Object.assign(error, result);
    return error;
}
rpc_errors.parseRpcError = parseRpcError;
function parseResultError(result) {
    const server_error = parseRpcError(result.status.Failure);
    const server_tx_error = new ServerTransactionError();
    Object.assign(server_tx_error, server_error);
    server_tx_error.type = server_error.type;
    server_tx_error.message = server_error.message;
    server_tx_error.transaction_outcome = result.transaction_outcome;
    return server_tx_error;
}
rpc_errors.parseResultError = parseResultError;
function formatError(errorClassName, errorData) {
    if (typeof errors_1$1.ErrorMessages[errorClassName] === 'string') {
        return mustache_1.default.render(errors_1$1.ErrorMessages[errorClassName], {
            ...errorData,
            ...mustacheHelpers
        });
    }
    return JSON.stringify(errorData);
}
rpc_errors.formatError = formatError;
/**
 * Walks through defined schema returning error(s) recursively
 * @param errorObj The error to be parsed
 * @param schema A defined schema in JSON mapping to the RPC errors
 * @param result An object used in recursion or called directly
 * @param typeName The human-readable error type name as defined in the JSON mapping
 */
function walkSubtype(errorObj, schema, result, typeName) {
    let error;
    let type;
    let errorTypeName;
    for (const errorName in schema) {
        if (isString(errorObj[errorName])) {
            // Return early if error type is in a schema
            return errorObj[errorName];
        }
        if (isObject(errorObj[errorName])) {
            error = errorObj[errorName];
            type = schema[errorName];
            errorTypeName = errorName;
        }
        else if (isObject(errorObj.kind) && isObject(errorObj.kind[errorName])) {
            error = errorObj.kind[errorName];
            type = schema[errorName];
            errorTypeName = errorName;
        }
        else {
            continue;
        }
    }
    if (error && type) {
        for (const prop of Object.keys(type.props)) {
            result[prop] = error[prop];
        }
        return walkSubtype(error, schema, result, errorTypeName);
    }
    else {
        // TODO: is this the right thing to do?
        result.kind = errorObj;
        return typeName;
    }
}
function getErrorTypeFromErrorMessage(errorMessage, errorType) {
    // This function should be removed when JSON RPC starts returning typed errors.
    switch (true) {
        case /^account .*? does not exist while viewing$/.test(errorMessage):
            return 'AccountDoesNotExist';
        case /^Account .*? doesn't exist$/.test(errorMessage):
            return 'AccountDoesNotExist';
        case /^access key .*? does not exist while viewing$/.test(errorMessage):
            return 'AccessKeyDoesNotExist';
        case /wasm execution failed with error: FunctionCallError\(CompilationError\(CodeDoesNotExist/.test(errorMessage):
            return 'CodeDoesNotExist';
        case /wasm execution failed with error: CompilationError\(CodeDoesNotExist/.test(errorMessage):
            return 'CodeDoesNotExist';
        case /wasm execution failed with error: FunctionCallError\(MethodResolveError\(MethodNotFound/.test(errorMessage):
            return 'MethodNotFound';
        case /wasm execution failed with error: MethodResolveError\(MethodNotFound/.test(errorMessage):
            return 'MethodNotFound';
        case /Transaction nonce \d+ must be larger than nonce of the used access key \d+/.test(errorMessage):
            return 'InvalidNonce';
        default:
            return errorType;
    }
}
rpc_errors.getErrorTypeFromErrorMessage = getErrorTypeFromErrorMessage;
/**
 * Helper function determining if the argument is an object
 * @param n Value to check
 */
function isObject(n) {
    return Object.prototype.toString.call(n) === '[object Object]';
}
/**
 * Helper function determining if the argument is a string
 * @param n Value to check
 */
function isString(n) {
    return Object.prototype.toString.call(n) === '[object String]';
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.parseRpcError = exports.parseResultError = exports.getErrorTypeFromErrorMessage = exports.formatError = exports.ServerError = exports.ErrorMessages = void 0;
	var errors_1 = errors$1;
	Object.defineProperty(exports, "ErrorMessages", { enumerable: true, get: function () { return errors_1.ErrorMessages; } });
	var rpc_errors_1 = rpc_errors;
	Object.defineProperty(exports, "ServerError", { enumerable: true, get: function () { return rpc_errors_1.ServerError; } });
	Object.defineProperty(exports, "formatError", { enumerable: true, get: function () { return rpc_errors_1.formatError; } });
	Object.defineProperty(exports, "getErrorTypeFromErrorMessage", { enumerable: true, get: function () { return rpc_errors_1.getErrorTypeFromErrorMessage; } });
	Object.defineProperty(exports, "parseResultError", { enumerable: true, get: function () { return rpc_errors_1.parseResultError; } });
	Object.defineProperty(exports, "parseRpcError", { enumerable: true, get: function () { return rpc_errors_1.parseRpcError; } }); 
} (errors$2));

var logging = {};

var logger$1 = {};

var console_logger = {};

Object.defineProperty(console_logger, "__esModule", { value: true });
console_logger.ConsoleLogger = void 0;
class ConsoleLogger {
    logLevels;
    constructor(logLevels) {
        this.logLevels = logLevels;
    }
    isLevelEnabled = (level) => {
        return this.logLevels.includes(level);
    };
    print(level, message, ...optionalParams) {
        switch (level) {
            case 'error':
            case 'fatal':
                return console.error(message, ...optionalParams);
            case 'warn':
                return console.warn(message, ...optionalParams);
            case 'log':
                return console.log(message, ...optionalParams);
            case 'debug':
            case 'verbose':
                return console.debug(message, ...optionalParams);
        }
    }
    verbose(message, ...optionalParams) {
        if (!this.isLevelEnabled('verbose'))
            return;
        this.print('verbose', message, ...optionalParams);
    }
    debug(message, ...optionalParams) {
        if (!this.isLevelEnabled('debug'))
            return;
        this.print('debug', message, ...optionalParams);
    }
    log(message, ...optionalParams) {
        if (!this.isLevelEnabled('log'))
            return;
        this.print('log', message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        if (!this.isLevelEnabled('warn'))
            return;
        this.print('warn', message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        if (!this.isLevelEnabled('error'))
            return;
        this.print('error', message, ...optionalParams);
    }
    fatal(message, ...optionalParams) {
        if (!this.isLevelEnabled('fatal'))
            return;
        this.print('fatal', message, ...optionalParams);
    }
}
console_logger.ConsoleLogger = ConsoleLogger;

var logger = {};

Object.defineProperty(logger, "__esModule", { value: true });
logger.Logger = void 0;
const console_logger_1 = console_logger;
const DEFAULT_LOG_LEVELS = [
    'verbose',
    'debug',
    'log',
    'warn',
    'error',
    'fatal',
];
const DEFAULT_LOGGER = new console_logger_1.ConsoleLogger(DEFAULT_LOG_LEVELS);
/**
 * Used to log the library messages
 */
class Logger {
    static instanceRef = DEFAULT_LOGGER;
    static overrideLogger = (logger) => {
        this.instanceRef = logger;
    };
    static error(message, ...optionalParams) {
        this.instanceRef?.error(message, ...optionalParams);
    }
    /**
     * Write a 'log' level log.
     */
    static log(message, ...optionalParams) {
        this.instanceRef?.log(message, ...optionalParams);
    }
    /**
     * Write a 'warn' level log.
     */
    static warn(message, ...optionalParams) {
        this.instanceRef?.warn(message, ...optionalParams);
    }
    /**
     * Write a 'debug' level log.
     */
    static debug(message, ...optionalParams) {
        this.instanceRef?.debug?.(message, ...optionalParams);
    }
    /**
     * Write a 'verbose' level log.
     */
    static verbose(message, ...optionalParams) {
        this.instanceRef?.verbose?.(message, ...optionalParams);
    }
    static fatal(message, ...optionalParams) {
        this.instanceRef?.fatal?.(message, ...optionalParams);
    }
}
logger.Logger = Logger;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Logger = exports.ConsoleLogger = void 0;
	var console_logger_1 = console_logger;
	Object.defineProperty(exports, "ConsoleLogger", { enumerable: true, get: function () { return console_logger_1.ConsoleLogger; } });
	var logger_1 = logger;
	Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } }); 
} (logger$1));

Object.defineProperty(logging, "__esModule", { value: true });
logging.printTxOutcomeLogs = logging.printTxOutcomeLogsAndFailures = void 0;
const errors_1 = errors$2;
const logger_1 = logger$1;
/**
 * Parse and print details from a query execution response
 * @param params
 * @param params.contractId ID of the account/contract which made the query
 * @param params.outcome the query execution response
 */
function printTxOutcomeLogsAndFailures({ contractId, outcome, }) {
    const flatLogs = [outcome.transaction_outcome, ...outcome.receipts_outcome]
        .reduce((acc, it) => {
        const isFailure = typeof it.outcome.status === 'object' && typeof it.outcome.status.Failure === 'object';
        if (it.outcome.logs.length || isFailure) {
            return acc.concat({
                receiptIds: it.outcome.receipt_ids,
                logs: it.outcome.logs,
                failure: typeof it.outcome.status === 'object' && it.outcome.status.Failure !== undefined
                    ? (0, errors_1.parseRpcError)(it.outcome.status.Failure)
                    : null
            });
        }
        else {
            return acc;
        }
    }, []);
    for (const result of flatLogs) {
        logger_1.Logger.log(`Receipt${result.receiptIds.length > 1 ? 's' : ''}: ${result.receiptIds.join(', ')}`);
        printTxOutcomeLogs({
            contractId,
            logs: result.logs,
            prefix: '\t',
        });
        if (result.failure) {
            logger_1.Logger.warn(`\tFailure [${contractId}]: ${result.failure}`);
        }
    }
}
logging.printTxOutcomeLogsAndFailures = printTxOutcomeLogsAndFailures;
/**
 * Format and print log output from a query execution response
 * @param params
 * @param params.contractId ID of the account/contract which made the query
 * @param params.logs log output from a query execution response
 * @param params.prefix string to append to the beginning of each log
 */
function printTxOutcomeLogs({ contractId, logs, prefix = '', }) {
    for (const log of logs) {
        logger_1.Logger.log(`${prefix}Log [${contractId}]: ${log}`);
    }
}
logging.printTxOutcomeLogs = printTxOutcomeLogs;

var provider = {};

Object.defineProperty(provider, "__esModule", { value: true });
provider.getTransactionLastResult = void 0;
/** @hidden */
function getTransactionLastResult(txResult) {
    if (typeof txResult.status === 'object' && typeof txResult.status.SuccessValue === 'string') {
        const value = Buffer.from(txResult.status.SuccessValue, 'base64').toString();
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    }
    return null;
}
provider.getTransactionLastResult = getTransactionLastResult;

var validators = {};

/*!
 * depd
 * Copyright(c) 2014-2018 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var relative = require$$0$4.relative;

/**
 * Module exports.
 */

var depd_1$1 = depd;

/**
 * Get the path to base files on.
 */

var basePath = process.cwd();

/**
 * Determine if namespace is contained in the string.
 */

function containsNamespace (str, namespace) {
  var vals = str.split(/[ ,]+/);
  var ns = String(namespace).toLowerCase();

  for (var i = 0; i < vals.length; i++) {
    var val = vals[i];

    // namespace contained
    if (val && (val === '*' || val.toLowerCase() === ns)) {
      return true
    }
  }

  return false
}

/**
 * Convert a data descriptor to accessor descriptor.
 */

function convertDataDescriptorToAccessor (obj, prop, message) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
  var value = descriptor.value;

  descriptor.get = function getter () { return value };

  if (descriptor.writable) {
    descriptor.set = function setter (val) { return (value = val) };
  }

  delete descriptor.value;
  delete descriptor.writable;

  Object.defineProperty(obj, prop, descriptor);

  return descriptor
}

/**
 * Create arguments string to keep arity.
 */

function createArgumentsString (arity) {
  var str = '';

  for (var i = 0; i < arity; i++) {
    str += ', arg' + i;
  }

  return str.substr(2)
}

/**
 * Create stack string from stack.
 */

function createStackString (stack) {
  var str = this.name + ': ' + this.namespace;

  if (this.message) {
    str += ' deprecated ' + this.message;
  }

  for (var i = 0; i < stack.length; i++) {
    str += '\n    at ' + stack[i].toString();
  }

  return str
}

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  var stack = getStack();
  var site = callSiteLocation(stack[1]);
  var file = site[0];

  function deprecate (message) {
    // call to self as log
    log.call(deprecate, message);
  }

  deprecate._file = file;
  deprecate._ignored = isignored(namespace);
  deprecate._namespace = namespace;
  deprecate._traced = istraced(namespace);
  deprecate._warned = Object.create(null);

  deprecate.function = wrapfunction;
  deprecate.property = wrapproperty;

  return deprecate
}

/**
 * Determine if event emitter has listeners of a given type.
 *
 * The way to do this check is done three different ways in Node.js >= 0.8
 * so this consolidates them into a minimal set using instance methods.
 *
 * @param {EventEmitter} emitter
 * @param {string} type
 * @returns {boolean}
 * @private
 */

function eehaslisteners (emitter, type) {
  var count = typeof emitter.listenerCount !== 'function'
    ? emitter.listeners(type).length
    : emitter.listenerCount(type);

  return count > 0
}

/**
 * Determine if namespace is ignored.
 */

function isignored (namespace) {
  if (process.noDeprecation) {
    // --no-deprecation support
    return true
  }

  var str = process.env.NO_DEPRECATION || '';

  // namespace ignored
  return containsNamespace(str, namespace)
}

/**
 * Determine if namespace is traced.
 */

function istraced (namespace) {
  if (process.traceDeprecation) {
    // --trace-deprecation support
    return true
  }

  var str = process.env.TRACE_DEPRECATION || '';

  // namespace traced
  return containsNamespace(str, namespace)
}

/**
 * Display deprecation message.
 */

function log (message, site) {
  var haslisteners = eehaslisteners(process, 'deprecation');

  // abort early if no destination
  if (!haslisteners && this._ignored) {
    return
  }

  var caller;
  var callFile;
  var callSite;
  var depSite;
  var i = 0;
  var seen = false;
  var stack = getStack();
  var file = this._file;

  if (site) {
    // provided site
    depSite = site;
    callSite = callSiteLocation(stack[1]);
    callSite.name = depSite.name;
    file = callSite[0];
  } else {
    // get call site
    i = 2;
    depSite = callSiteLocation(stack[i]);
    callSite = depSite;
  }

  // get caller of deprecated thing in relation to file
  for (; i < stack.length; i++) {
    caller = callSiteLocation(stack[i]);
    callFile = caller[0];

    if (callFile === file) {
      seen = true;
    } else if (callFile === this._file) {
      file = this._file;
    } else if (seen) {
      break
    }
  }

  var key = caller
    ? depSite.join(':') + '__' + caller.join(':')
    : undefined;

  if (key !== undefined && key in this._warned) {
    // already warned
    return
  }

  this._warned[key] = true;

  // generate automatic message from call site
  var msg = message;
  if (!msg) {
    msg = callSite === depSite || !callSite.name
      ? defaultMessage(depSite)
      : defaultMessage(callSite);
  }

  // emit deprecation if listeners exist
  if (haslisteners) {
    var err = DeprecationError(this._namespace, msg, stack.slice(i));
    process.emit('deprecation', err);
    return
  }

  // format and write message
  var format = process.stderr.isTTY
    ? formatColor
    : formatPlain;
  var output = format.call(this, msg, caller, stack.slice(i));
  process.stderr.write(output + '\n', 'utf8');
}

/**
 * Get call site location as array.
 */

function callSiteLocation (callSite) {
  var file = callSite.getFileName() || '<anonymous>';
  var line = callSite.getLineNumber();
  var colm = callSite.getColumnNumber();

  if (callSite.isEval()) {
    file = callSite.getEvalOrigin() + ', ' + file;
  }

  var site = [file, line, colm];

  site.callSite = callSite;
  site.name = callSite.getFunctionName();

  return site
}

/**
 * Generate a default message from the site.
 */

function defaultMessage (site) {
  var callSite = site.callSite;
  var funcName = site.name;

  // make useful anonymous name
  if (!funcName) {
    funcName = '<anonymous@' + formatLocation(site) + '>';
  }

  var context = callSite.getThis();
  var typeName = context && callSite.getTypeName();

  // ignore useless type name
  if (typeName === 'Object') {
    typeName = undefined;
  }

  // make useful type name
  if (typeName === 'Function') {
    typeName = context.name || typeName;
  }

  return typeName && callSite.getMethodName()
    ? typeName + '.' + funcName
    : funcName
}

/**
 * Format deprecation message without color.
 */

function formatPlain (msg, caller, stack) {
  var timestamp = new Date().toUTCString();

  var formatted = timestamp +
    ' ' + this._namespace +
    ' deprecated ' + msg;

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    at ' + stack[i].toString();
    }

    return formatted
  }

  if (caller) {
    formatted += ' at ' + formatLocation(caller);
  }

  return formatted
}

/**
 * Format deprecation message with color.
 */

function formatColor (msg, caller, stack) {
  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
    ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
    ' \x1b[0m' + msg + '\x1b[39m'; // reset

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    \x1b[36mat ' + stack[i].toString() + '\x1b[39m'; // cyan
    }

    return formatted
  }

  if (caller) {
    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m'; // cyan
  }

  return formatted
}

/**
 * Format call site location.
 */

function formatLocation (callSite) {
  return relative(basePath, callSite[0]) +
    ':' + callSite[1] +
    ':' + callSite[2]
}

/**
 * Get the stack as array of call sites.
 */

function getStack () {
  var limit = Error.stackTraceLimit;
  var obj = {};
  var prep = Error.prepareStackTrace;

  Error.prepareStackTrace = prepareObjectStackTrace;
  Error.stackTraceLimit = Math.max(10, limit);

  // capture the stack
  Error.captureStackTrace(obj);

  // slice this function off the top
  var stack = obj.stack.slice(1);

  Error.prepareStackTrace = prep;
  Error.stackTraceLimit = limit;

  return stack
}

/**
 * Capture call site stack from v8.
 */

function prepareObjectStackTrace (obj, stack) {
  return stack
}

/**
 * Return a wrapped function in a deprecation message.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  var args = createArgumentsString(fn.length);
  var stack = getStack();
  var site = callSiteLocation(stack[1]);

  site.name = fn.name;

  // eslint-disable-next-line no-new-func
  var deprecatedfn = new Function('fn', 'log', 'deprecate', 'message', 'site',
    '"use strict"\n' +
    'return function (' + args + ') {' +
    'log.call(deprecate, message, site)\n' +
    'return fn.apply(this, arguments)\n' +
    '}')(fn, log, this, message, site);

  return deprecatedfn
}

/**
 * Wrap property in a deprecation message.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }

  var deprecate = this;
  var stack = getStack();
  var site = callSiteLocation(stack[1]);

  // set site name
  site.name = prop;

  // convert data descriptor
  if ('value' in descriptor) {
    descriptor = convertDataDescriptorToAccessor(obj, prop);
  }

  var get = descriptor.get;
  var set = descriptor.set;

  // wrap getter
  if (typeof get === 'function') {
    descriptor.get = function getter () {
      log.call(deprecate, message, site);
      return get.apply(this, arguments)
    };
  }

  // wrap setter
  if (typeof set === 'function') {
    descriptor.set = function setter () {
      log.call(deprecate, message, site);
      return set.apply(this, arguments)
    };
  }

  Object.defineProperty(obj, prop, descriptor);
}

/**
 * Create DeprecationError for deprecation
 */

function DeprecationError (namespace, message, stack) {
  var error = new Error();
  var stackString;

  Object.defineProperty(error, 'constructor', {
    value: DeprecationError
  });

  Object.defineProperty(error, 'message', {
    configurable: true,
    enumerable: false,
    value: message,
    writable: true
  });

  Object.defineProperty(error, 'name', {
    enumerable: false,
    configurable: true,
    value: 'DeprecationError',
    writable: true
  });

  Object.defineProperty(error, 'namespace', {
    configurable: true,
    enumerable: false,
    value: namespace,
    writable: true
  });

  Object.defineProperty(error, 'stack', {
    configurable: true,
    enumerable: false,
    get: function () {
      if (stackString !== undefined) {
        return stackString
      }

      // prepare stack trace
      return (stackString = createStackString.call(this, stack))
    },
    set: function setter (val) {
      stackString = val;
    }
  });

  return error
}

var utils$5 = {};

Object.defineProperty(utils$5, "__esModule", { value: true });
utils$5.sortBigIntAsc = void 0;
function sortBigIntAsc(a, b) {
    return (a < b ? -1 : a > b ? 1 : 0);
}
utils$5.sortBigIntAsc = sortBigIntAsc;

var __importDefault$3 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(validators, "__esModule", { value: true });
validators.diffEpochValidators = validators.findSeatPrice = void 0;
const depd_1 = __importDefault$3(depd_1$1);
const utils_1$3 = utils$5;
/** Finds seat price given validators stakes and number of seats.
 *  Calculation follow the spec: https://nomicon.io/Economics/README.html#validator-selection
 * @param validators: current or next epoch validators.
 * @param maxNumberOfSeats: maximum number of seats in the network.
 * @param minimumStakeRatio: minimum stake ratio
 * @param protocolVersion: version of the protocol from genesis config
 */
function findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio, protocolVersion) {
    if (protocolVersion && protocolVersion < 49) {
        return findSeatPriceForProtocolBefore49(validators, maxNumberOfSeats);
    }
    if (!minimumStakeRatio) {
        const deprecate = (0, depd_1.default)('findSeatPrice(validators, maxNumberOfSeats)');
        deprecate('`use `findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio)` instead');
        minimumStakeRatio = [1, 6250]; // hardcoded minimumStakeRation from 12/7/21
    }
    return findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio);
}
validators.findSeatPrice = findSeatPrice;
function findSeatPriceForProtocolBefore49(validators, numSeats) {
    const stakes = validators.map(v => BigInt(v.stake)).sort(utils_1$3.sortBigIntAsc);
    const num = BigInt(numSeats);
    const stakesSum = stakes.reduce((a, b) => a + b);
    if (stakesSum < num) {
        throw new Error('Stakes are below seats');
    }
    // assert stakesSum >= numSeats
    let left = 1n, right = stakesSum + 1n;
    while (left !== right - 1n) {
        const mid = (left + right) / 2n;
        let found = false;
        let currentSum = 0n;
        for (let i = 0; i < stakes.length; ++i) {
            currentSum = currentSum + (stakes[i] / mid);
            if (currentSum >= num) {
                left = mid;
                found = true;
                break;
            }
        }
        if (!found) {
            right = mid;
        }
    }
    return left;
}
// nearcore reference: https://github.com/near/nearcore/blob/5a8ae263ec07930cd34d0dcf5bcee250c67c02aa/chain/epoch_manager/src/validator_selection.rs#L308;L315
function findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio) {
    if (minimumStakeRatio.length != 2) {
        throw Error('minimumStakeRatio should have 2 elements');
    }
    const stakes = validators.map(v => BigInt(v.stake)).sort(utils_1$3.sortBigIntAsc);
    const stakesSum = stakes.reduce((a, b) => a + b);
    if (validators.length < maxNumberOfSeats) {
        return stakesSum * BigInt(minimumStakeRatio[0]) / BigInt(minimumStakeRatio[1]);
    }
    else {
        return stakes[0] + 1n;
    }
}
/** Diff validators between current and next epoch.
 * Returns additions, subtractions and changes to validator set.
 * @param currentValidators: list of current validators.
 * @param nextValidators: list of next validators.
 */
function diffEpochValidators(currentValidators, nextValidators) {
    const validatorsMap = new Map();
    currentValidators.forEach(v => validatorsMap.set(v.account_id, v));
    const nextValidatorsSet = new Set(nextValidators.map(v => v.account_id));
    return {
        newValidators: nextValidators.filter(v => !validatorsMap.has(v.account_id)),
        removedValidators: currentValidators.filter(v => !nextValidatorsSet.has(v.account_id)),
        changedValidators: nextValidators.filter(v => (validatorsMap.has(v.account_id) && validatorsMap.get(v.account_id).stake != v.stake))
            .map(v => ({ current: validatorsMap.get(v.account_id), next: v }))
    };
}
validators.diffEpochValidators = diffEpochValidators;

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__exportStar(constants, exports);
	__exportStar(errors$2, exports);
	__exportStar(format, exports);
	__exportStar(logging, exports);
	__exportStar(provider, exports);
	__exportStar(validators, exports);
	__exportStar(logger$1, exports);
	__exportStar(utils$5, exports); 
} (commonjs$1));

var ed25519 = {};

var sha512 = {};

var _md = {};

var _assert = {};

/**
 * Internal assertion helpers.
 * @module
 */
Object.defineProperty(_assert, "__esModule", { value: true });
_assert.anumber = anumber;
_assert.abytes = abytes$1;
_assert.ahash = ahash;
_assert.aexists = aexists;
_assert.aoutput = aoutput;
/** Asserts something is positive integer. */
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error('positive integer expected, got ' + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */
function isBytes$1(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
/** Asserts something is Uint8Array. */
function abytes$1(b, ...lengths) {
    if (!isBytes$1(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */
function aoutput(out, instance) {
    abytes$1(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error('digestInto() expects output buffer of length at least ' + min);
    }
}

var utils$4 = {};

var crypto$1 = {};

Object.defineProperty(crypto$1, "__esModule", { value: true });
crypto$1.crypto = void 0;
crypto$1.crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

(function (exports) {
	/**
	 * Utilities for hex, bytes, CSPRNG.
	 * @module
	 */
	/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.isLE = void 0;
	exports.isBytes = isBytes;
	exports.u8 = u8;
	exports.u32 = u32;
	exports.createView = createView;
	exports.rotr = rotr;
	exports.rotl = rotl;
	exports.byteSwap = byteSwap;
	exports.byteSwap32 = byteSwap32;
	exports.bytesToHex = bytesToHex;
	exports.hexToBytes = hexToBytes;
	exports.asyncLoop = asyncLoop;
	exports.utf8ToBytes = utf8ToBytes;
	exports.toBytes = toBytes;
	exports.concatBytes = concatBytes;
	exports.checkOpts = checkOpts;
	exports.wrapConstructor = wrapConstructor;
	exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
	exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
	exports.randomBytes = randomBytes;
	// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
	// node.js versions earlier than v19 don't declare it in global scope.
	// For node.js, package.json#exports field mapping rewrites import
	// from `crypto` to `cryptoNode`, which imports native module.
	// Makes the utils un-importable in browsers without a bundler.
	// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
	const crypto_1 = crypto$1;
	const _assert_js_1 = _assert;
	// export { isBytes } from './_assert.js';
	// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
	function isBytes(a) {
	    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
	}
	// Cast array to different type
	function u8(arr) {
	    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
	}
	function u32(arr) {
	    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
	}
	// Cast array to view
	function createView(arr) {
	    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
	}
	/** The rotate right (circular right shift) operation for uint32 */
	function rotr(word, shift) {
	    return (word << (32 - shift)) | (word >>> shift);
	}
	/** The rotate left (circular left shift) operation for uint32 */
	function rotl(word, shift) {
	    return (word << shift) | ((word >>> (32 - shift)) >>> 0);
	}
	/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
	exports.isLE = (() => new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44)();
	// The byte swap operation for uint32
	function byteSwap(word) {
	    return (((word << 24) & 0xff000000) |
	        ((word << 8) & 0xff0000) |
	        ((word >>> 8) & 0xff00) |
	        ((word >>> 24) & 0xff));
	}
	/** Conditionally byte swap if on a big-endian platform */
	exports.byteSwapIfBE = exports.isLE
	    ? (n) => n
	    : (n) => byteSwap(n);
	/** In place byte swap for Uint32Array */
	function byteSwap32(arr) {
	    for (let i = 0; i < arr.length; i++) {
	        arr[i] = byteSwap(arr[i]);
	    }
	}
	// Array where index 0xf0 (240) is mapped to string 'f0'
	const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
	/**
	 * Convert byte array to hex string.
	 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
	 */
	function bytesToHex(bytes) {
	    (0, _assert_js_1.abytes)(bytes);
	    // pre-caching improves the speed 6x
	    let hex = '';
	    for (let i = 0; i < bytes.length; i++) {
	        hex += hexes[bytes[i]];
	    }
	    return hex;
	}
	// We use optimized technique to convert hex string to byte array
	const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
	function asciiToBase16(ch) {
	    if (ch >= asciis._0 && ch <= asciis._9)
	        return ch - asciis._0; // '2' => 50-48
	    if (ch >= asciis.A && ch <= asciis.F)
	        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
	    if (ch >= asciis.a && ch <= asciis.f)
	        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
	    return;
	}
	/**
	 * Convert hex string to byte array.
	 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
	 */
	function hexToBytes(hex) {
	    if (typeof hex !== 'string')
	        throw new Error('hex string expected, got ' + typeof hex);
	    const hl = hex.length;
	    const al = hl / 2;
	    if (hl % 2)
	        throw new Error('hex string expected, got unpadded hex of length ' + hl);
	    const array = new Uint8Array(al);
	    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
	        const n1 = asciiToBase16(hex.charCodeAt(hi));
	        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
	        if (n1 === undefined || n2 === undefined) {
	            const char = hex[hi] + hex[hi + 1];
	            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
	        }
	        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
	    }
	    return array;
	}
	/**
	 * There is no setImmediate in browser and setTimeout is slow.
	 * Call of async fn will return Promise, which will be fullfiled only on
	 * next scheduler queue processing step and this is exactly what we need.
	 */
	const nextTick = async () => { };
	exports.nextTick = nextTick;
	/** Returns control to thread each 'tick' ms to avoid blocking. */
	async function asyncLoop(iters, tick, cb) {
	    let ts = Date.now();
	    for (let i = 0; i < iters; i++) {
	        cb(i);
	        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
	        const diff = Date.now() - ts;
	        if (diff >= 0 && diff < tick)
	            continue;
	        await (0, exports.nextTick)();
	        ts += diff;
	    }
	}
	/**
	 * Convert JS string to byte array.
	 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
	 */
	function utf8ToBytes(str) {
	    if (typeof str !== 'string')
	        throw new Error('utf8ToBytes expected string, got ' + typeof str);
	    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
	}
	/**
	 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
	 * Warning: when Uint8Array is passed, it would NOT get copied.
	 * Keep in mind for future mutable operations.
	 */
	function toBytes(data) {
	    if (typeof data === 'string')
	        data = utf8ToBytes(data);
	    (0, _assert_js_1.abytes)(data);
	    return data;
	}
	/**
	 * Copies several Uint8Arrays into one.
	 */
	function concatBytes(...arrays) {
	    let sum = 0;
	    for (let i = 0; i < arrays.length; i++) {
	        const a = arrays[i];
	        (0, _assert_js_1.abytes)(a);
	        sum += a.length;
	    }
	    const res = new Uint8Array(sum);
	    for (let i = 0, pad = 0; i < arrays.length; i++) {
	        const a = arrays[i];
	        res.set(a, pad);
	        pad += a.length;
	    }
	    return res;
	}
	/** For runtime check if class implements interface */
	class Hash {
	    // Safe version that clones internal state
	    clone() {
	        return this._cloneInto();
	    }
	}
	exports.Hash = Hash;
	function checkOpts(defaults, opts) {
	    if (opts !== undefined && {}.toString.call(opts) !== '[object Object]')
	        throw new Error('Options should be object or undefined');
	    const merged = Object.assign(defaults, opts);
	    return merged;
	}
	/** Wraps hash function, creating an interface on top of it */
	function wrapConstructor(hashCons) {
	    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
	    const tmp = hashCons();
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = () => hashCons();
	    return hashC;
	}
	function wrapConstructorWithOpts(hashCons) {
	    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
	    const tmp = hashCons({});
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = (opts) => hashCons(opts);
	    return hashC;
	}
	function wrapXOFConstructorWithOpts(hashCons) {
	    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
	    const tmp = hashCons({});
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = (opts) => hashCons(opts);
	    return hashC;
	}
	/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
	function randomBytes(bytesLength = 32) {
	    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
	        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
	    }
	    // Legacy Node.js compatibility
	    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') {
	        return crypto_1.crypto.randomBytes(bytesLength);
	    }
	    throw new Error('crypto.getRandomValues must be defined');
	}
	
} (utils$4));

Object.defineProperty(_md, "__esModule", { value: true });
_md.HashMD = void 0;
_md.setBigUint64 = setBigUint64;
_md.Chi = Chi;
_md.Maj = Maj;
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */
const _assert_js_1 = _assert;
const utils_js_1$6 = utils$4;
/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function')
        return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number((value >> _32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
/** Choice: a ? b : c */
function Chi(a, b, c) {
    return (a & b) ^ (~a & c);
}
/** Majority function, true if any two inputs is true. */
function Maj(a, b, c) {
    return (a & b) ^ (a & c) ^ (b & c);
}
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */
class HashMD extends utils_js_1$6.Hash {
    constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1$6.createView)(this.buffer);
    }
    update(data) {
        (0, _assert_js_1.aexists)(this);
        const { view, buffer, blockLen } = this;
        data = (0, utils_js_1$6.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1$6.createView)(data);
                for (; blockLen <= len - pos; pos += blockLen)
                    this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, _assert_js_1.aexists)(this);
        (0, _assert_js_1.aoutput)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1$6.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
            throw new Error('_sha2: outputLen bigger than state');
        for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
            to.buffer.set(buffer);
        return to;
    }
}
_md.HashMD = HashMD;

var _u64 = {};

Object.defineProperty(_u64, "__esModule", { value: true });
_u64.add5L = _u64.add5H = _u64.add4H = _u64.add4L = _u64.add3H = _u64.add3L = _u64.rotlBL = _u64.rotlBH = _u64.rotlSL = _u64.rotlSH = _u64.rotr32L = _u64.rotr32H = _u64.rotrBL = _u64.rotrBH = _u64.rotrSL = _u64.rotrSH = _u64.shrSL = _u64.shrSH = _u64.toBig = void 0;
_u64.fromBig = fromBig;
_u64.split = split;
_u64.add = add;
/**
 * Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
 * @todo re-check https://issues.chromium.org/issues/42212588
 * @module
 */
const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
_u64.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, _l, s) => h >>> s;
_u64.shrSH = shrSH;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
_u64.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
_u64.rotrSH = rotrSH;
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
_u64.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
_u64.rotrBH = rotrBH;
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
_u64.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (_h, l) => l;
_u64.rotr32H = rotr32H;
const rotr32L = (h, _l) => h;
_u64.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
_u64.rotlSH = rotlSH;
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
_u64.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
_u64.rotlBH = rotlBH;
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
_u64.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
_u64.add3L = add3L;
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
_u64.add3H = add3H;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
_u64.add4L = add4L;
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
_u64.add4H = add4H;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
_u64.add5L = add5L;
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
_u64.add5H = add5H;
// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
_u64.default = u64;

Object.defineProperty(sha512, "__esModule", { value: true });
sha512.sha384 = sha512.sha512_256 = sha512.sha512_224 = sha512.sha512 = sha512.SHA384 = sha512.SHA512_256 = sha512.SHA512_224 = sha512.SHA512 = void 0;
/**
 * SHA2-512 a.k.a. sha512 and sha384. It is slower than sha256 in js because u64 operations are slow.
 *
 * Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
 * [the paper on truncated SHA512/256](https://eprint.iacr.org/2010/548.pdf).
 * @module
 */
const _md_js_1 = _md;
const _u64_js_1 = _u64;
const utils_js_1$5 = utils$4;
// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => _u64_js_1.default.split([
    '0x428a2f98d728ae22', '0x7137449123ef65cd', '0xb5c0fbcfec4d3b2f', '0xe9b5dba58189dbbc',
    '0x3956c25bf348b538', '0x59f111f1b605d019', '0x923f82a4af194f9b', '0xab1c5ed5da6d8118',
    '0xd807aa98a3030242', '0x12835b0145706fbe', '0x243185be4ee4b28c', '0x550c7dc3d5ffb4e2',
    '0x72be5d74f27b896f', '0x80deb1fe3b1696b1', '0x9bdc06a725c71235', '0xc19bf174cf692694',
    '0xe49b69c19ef14ad2', '0xefbe4786384f25e3', '0x0fc19dc68b8cd5b5', '0x240ca1cc77ac9c65',
    '0x2de92c6f592b0275', '0x4a7484aa6ea6e483', '0x5cb0a9dcbd41fbd4', '0x76f988da831153b5',
    '0x983e5152ee66dfab', '0xa831c66d2db43210', '0xb00327c898fb213f', '0xbf597fc7beef0ee4',
    '0xc6e00bf33da88fc2', '0xd5a79147930aa725', '0x06ca6351e003826f', '0x142929670a0e6e70',
    '0x27b70a8546d22ffc', '0x2e1b21385c26c926', '0x4d2c6dfc5ac42aed', '0x53380d139d95b3df',
    '0x650a73548baf63de', '0x766a0abb3c77b2a8', '0x81c2c92e47edaee6', '0x92722c851482353b',
    '0xa2bfe8a14cf10364', '0xa81a664bbc423001', '0xc24b8b70d0f89791', '0xc76c51a30654be30',
    '0xd192e819d6ef5218', '0xd69906245565a910', '0xf40e35855771202a', '0x106aa07032bbd1b8',
    '0x19a4c116b8d2d0c8', '0x1e376c085141ab53', '0x2748774cdf8eeb99', '0x34b0bcb5e19b48a8',
    '0x391c0cb3c5c95a63', '0x4ed8aa4ae3418acb', '0x5b9cca4f7763e373', '0x682e6ff3d6b2b8a3',
    '0x748f82ee5defb2fc', '0x78a5636f43172f60', '0x84c87814a1f0ab72', '0x8cc702081a6439ec',
    '0x90befffa23631e28', '0xa4506cebde82bde9', '0xbef9a3f7b2c67915', '0xc67178f2e372532b',
    '0xca273eceea26619c', '0xd186b8c721c0c207', '0xeada7dd6cde0eb1e', '0xf57d4f7fee6ed178',
    '0x06f067aa72176fba', '0x0a637dc5a2c898a6', '0x113f9804bef90dae', '0x1b710b35131c471b',
    '0x28db77f523047d84', '0x32caab7b40c72493', '0x3c9ebe0a15c9bebc', '0x431d67c49c100d4c',
    '0x4cc5d4becb3e42b6', '0x597f299cfc657e2a', '0x5fcb6fab3ad6faec', '0x6c44198c4a475817'
].map(n => BigInt(n))))();
// Temporary buffer, not used to store anything between runs
const SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
const SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
class SHA512 extends _md_js_1.HashMD {
    constructor() {
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x6a09e667 | 0;
        this.Al = 0xf3bcc908 | 0;
        this.Bh = 0xbb67ae85 | 0;
        this.Bl = 0x84caa73b | 0;
        this.Ch = 0x3c6ef372 | 0;
        this.Cl = 0xfe94f82b | 0;
        this.Dh = 0xa54ff53a | 0;
        this.Dl = 0x5f1d36f1 | 0;
        this.Eh = 0x510e527f | 0;
        this.El = 0xade682d1 | 0;
        this.Fh = 0x9b05688c | 0;
        this.Fl = 0x2b3e6c1f | 0;
        this.Gh = 0x1f83d9ab | 0;
        this.Gl = 0xfb41bd6b | 0;
        this.Hh = 0x5be0cd19 | 0;
        this.Hl = 0x137e2179 | 0;
    }
    // prettier-ignore
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4) {
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32((offset += 4));
        }
        for (let i = 16; i < 80; i++) {
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = _u64_js_1.default.rotrSH(W15h, W15l, 1) ^ _u64_js_1.default.rotrSH(W15h, W15l, 8) ^ _u64_js_1.default.shrSH(W15h, W15l, 7);
            const s0l = _u64_js_1.default.rotrSL(W15h, W15l, 1) ^ _u64_js_1.default.rotrSL(W15h, W15l, 8) ^ _u64_js_1.default.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = _u64_js_1.default.rotrSH(W2h, W2l, 19) ^ _u64_js_1.default.rotrBH(W2h, W2l, 61) ^ _u64_js_1.default.shrSH(W2h, W2l, 6);
            const s1l = _u64_js_1.default.rotrSL(W2h, W2l, 19) ^ _u64_js_1.default.rotrBL(W2h, W2l, 61) ^ _u64_js_1.default.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = _u64_js_1.default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = _u64_js_1.default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for (let i = 0; i < 80; i++) {
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = _u64_js_1.default.rotrSH(Eh, El, 14) ^ _u64_js_1.default.rotrSH(Eh, El, 18) ^ _u64_js_1.default.rotrBH(Eh, El, 41);
            const sigma1l = _u64_js_1.default.rotrSL(Eh, El, 14) ^ _u64_js_1.default.rotrSL(Eh, El, 18) ^ _u64_js_1.default.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = (Eh & Fh) ^ (~Eh & Gh);
            const CHIl = (El & Fl) ^ (~El & Gl);
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = _u64_js_1.default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = _u64_js_1.default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = _u64_js_1.default.rotrSH(Ah, Al, 28) ^ _u64_js_1.default.rotrBH(Ah, Al, 34) ^ _u64_js_1.default.rotrBH(Ah, Al, 39);
            const sigma0l = _u64_js_1.default.rotrSL(Ah, Al, 28) ^ _u64_js_1.default.rotrBL(Ah, Al, 34) ^ _u64_js_1.default.rotrBL(Ah, Al, 39);
            const MAJh = (Ah & Bh) ^ (Ah & Ch) ^ (Bh & Ch);
            const MAJl = (Al & Bl) ^ (Al & Cl) ^ (Bl & Cl);
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = _u64_js_1.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = _u64_js_1.default.add3L(T1l, sigma0l, MAJl);
            Ah = _u64_js_1.default.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah, l: Al } = _u64_js_1.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh, l: Bl } = _u64_js_1.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch, l: Cl } = _u64_js_1.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh, l: Dl } = _u64_js_1.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh, l: El } = _u64_js_1.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh, l: Fl } = _u64_js_1.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh, l: Gl } = _u64_js_1.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh, l: Hl } = _u64_js_1.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
    }
    destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
sha512.SHA512 = SHA512;
class SHA512_224 extends SHA512 {
    constructor() {
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x8c3d37c8 | 0;
        this.Al = 0x19544da2 | 0;
        this.Bh = 0x73e19966 | 0;
        this.Bl = 0x89dcd4d6 | 0;
        this.Ch = 0x1dfab7ae | 0;
        this.Cl = 0x32ff9c82 | 0;
        this.Dh = 0x679dd514 | 0;
        this.Dl = 0x582f9fcf | 0;
        this.Eh = 0x0f6d2b69 | 0;
        this.El = 0x7bd44da8 | 0;
        this.Fh = 0x77e36f73 | 0;
        this.Fl = 0x04c48942 | 0;
        this.Gh = 0x3f9d85a8 | 0;
        this.Gl = 0x6a1d36c8 | 0;
        this.Hh = 0x1112e6ad | 0;
        this.Hl = 0x91d692a1 | 0;
        this.outputLen = 28;
    }
}
sha512.SHA512_224 = SHA512_224;
class SHA512_256 extends SHA512 {
    constructor() {
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x22312194 | 0;
        this.Al = 0xfc2bf72c | 0;
        this.Bh = 0x9f555fa3 | 0;
        this.Bl = 0xc84c64c2 | 0;
        this.Ch = 0x2393b86b | 0;
        this.Cl = 0x6f53b151 | 0;
        this.Dh = 0x96387719 | 0;
        this.Dl = 0x5940eabd | 0;
        this.Eh = 0x96283ee2 | 0;
        this.El = 0xa88effe3 | 0;
        this.Fh = 0xbe5e1e25 | 0;
        this.Fl = 0x53863992 | 0;
        this.Gh = 0x2b0199fc | 0;
        this.Gl = 0x2c85b8aa | 0;
        this.Hh = 0x0eb72ddc | 0;
        this.Hl = 0x81c52ca2 | 0;
        this.outputLen = 32;
    }
}
sha512.SHA512_256 = SHA512_256;
class SHA384 extends SHA512 {
    constructor() {
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0xcbbb9d5d | 0;
        this.Al = 0xc1059ed8 | 0;
        this.Bh = 0x629a292a | 0;
        this.Bl = 0x367cd507 | 0;
        this.Ch = 0x9159015a | 0;
        this.Cl = 0x3070dd17 | 0;
        this.Dh = 0x152fecd8 | 0;
        this.Dl = 0xf70e5939 | 0;
        this.Eh = 0x67332667 | 0;
        this.El = 0xffc00b31 | 0;
        this.Fh = 0x8eb44a87 | 0;
        this.Fl = 0x68581511 | 0;
        this.Gh = 0xdb0c2e0d | 0;
        this.Gl = 0x64f98fa7 | 0;
        this.Hh = 0x47b5481d | 0;
        this.Hl = 0xbefa4fa4 | 0;
        this.outputLen = 48;
    }
}
sha512.SHA384 = SHA384;
/** SHA2-512 hash function. */
sha512.sha512 = (0, utils_js_1$5.wrapConstructor)(() => new SHA512());
/** SHA2-512/224 "truncated" hash function, with improved resistance to length extension attacks. */
sha512.sha512_224 = (0, utils_js_1$5.wrapConstructor)(() => new SHA512_224());
/** SHA2-512/256 "truncated" hash function, with improved resistance to length extension attacks. */
sha512.sha512_256 = (0, utils_js_1$5.wrapConstructor)(() => new SHA512_256());
/** SHA2-384 hash function. */
sha512.sha384 = (0, utils_js_1$5.wrapConstructor)(() => new SHA384());

var curve$1 = {};

var modular = {};

var utils$3 = {};

/**
 * Hex, bytes and number utilities.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
Object.defineProperty(utils$3, "__esModule", { value: true });
utils$3.notImplemented = utils$3.bitMask = void 0;
utils$3.isBytes = isBytes;
utils$3.abytes = abytes;
utils$3.abool = abool;
utils$3.bytesToHex = bytesToHex;
utils$3.numberToHexUnpadded = numberToHexUnpadded;
utils$3.hexToNumber = hexToNumber;
utils$3.hexToBytes = hexToBytes;
utils$3.bytesToNumberBE = bytesToNumberBE;
utils$3.bytesToNumberLE = bytesToNumberLE;
utils$3.numberToBytesBE = numberToBytesBE;
utils$3.numberToBytesLE = numberToBytesLE;
utils$3.numberToVarBytesBE = numberToVarBytesBE;
utils$3.ensureBytes = ensureBytes;
utils$3.concatBytes = concatBytes;
utils$3.equalBytes = equalBytes;
utils$3.utf8ToBytes = utf8ToBytes;
utils$3.inRange = inRange;
utils$3.aInRange = aInRange;
utils$3.bitLen = bitLen;
utils$3.bitGet = bitGet;
utils$3.bitSet = bitSet;
utils$3.createHmacDrbg = createHmacDrbg;
utils$3.validateObject = validateObject;
utils$3.memoized = memoized;
// 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n$4 = /* @__PURE__ */ BigInt(0);
const _1n$4 = /* @__PURE__ */ BigInt(1);
const _2n$2 = /* @__PURE__ */ BigInt(2);
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
function abytes(item) {
    if (!isBytes(item))
        throw new Error('Uint8Array expected');
}
function abool(title, value) {
    if (typeof value !== 'boolean')
        throw new Error(title + ' boolean expected, got ' + value);
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes) {
    abytes(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? '0' + hex : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    return hex === '' ? _0n$4 : BigInt('0x' + hex); // Big Endian
}
// We use optimized technique to convert hex string to byte array
const asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
        return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F)
        return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f)
        return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
        throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
// BE: Big Endian, LE: Little Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
    abytes(bytes);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
}
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */
function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(title + ' must be hex string or Uint8Array, cause: ' + e);
        }
    }
    else if (isBytes(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(title + ' must be hex string or Uint8Array');
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(title + ' of length ' + expectedLength + ' expected, got ' + len);
    return res;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
// Compares 2 u8a-s in kinda constant time
function equalBytes(a, b) {
    if (a.length !== b.length)
        return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
    return diff === 0;
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
// Is positive bigint
const isPosBig = (n) => typeof n === 'bigint' && _0n$4 <= n;
function inRange(n, min, max) {
    return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
/**
 * Asserts min <= n < max. NOTE: It's < max and not <= max.
 * @example
 * aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
 */
function aInRange(title, n, min, max) {
    // Why min <= n < max and not a (min < n < max) OR b (min <= n <= max)?
    // consider P=256n, min=0n, max=P
    // - a for min=0 would require -1:          `inRange('x', x, -1n, P)`
    // - b would commonly require subtraction:  `inRange('x', x, 0n, P - 1n)`
    // - our way is the cleanest:               `inRange('x', x, 0n, P)
    if (!inRange(n, min, max))
        throw new Error('expected valid ' + title + ': ' + min + ' <= n < ' + max + ', got ' + n);
}
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */
function bitLen(n) {
    let len;
    for (len = 0; n > _0n$4; n >>= _1n$4, len += 1)
        ;
    return len;
}
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */
function bitGet(n, pos) {
    return (n >> BigInt(pos)) & _1n$4;
}
/**
 * Sets single bit at position.
 */
function bitSet(n, pos, value) {
    return n | ((value ? _1n$4 : _0n$4) << BigInt(pos));
}
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */
const bitMask = (n) => (_2n$2 << BigInt(n - 1)) - _1n$4;
utils$3.bitMask = bitMask;
// DRBG
const u8n = (data) => new Uint8Array(data); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n()) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while (len < qByteLen) {
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return concatBytes(...out);
    };
    const genUntil = (seed, pred) => {
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    stringOrUint8Array: (val) => typeof val === 'string' || isBytes(val),
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error('invalid validator function');
        const val = object[fieldName];
        if (isOptional && val === undefined)
            return;
        if (!checkVal(val, object)) {
            throw new Error('param ' + String(fieldName) + ' is invalid. Expected ' + type + ', got ' + val);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))
        checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
        checkField(fieldName, type, true);
    return object;
}
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
/**
 * throws not implemented error
 */
const notImplemented = () => {
    throw new Error('not implemented');
};
utils$3.notImplemented = notImplemented;
/**
 * Memoizes (caches) computation result.
 * Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
 */
function memoized(fn) {
    const map = new WeakMap();
    return (arg, ...args) => {
        const val = map.get(arg);
        if (val !== undefined)
            return val;
        const computed = fn(arg, ...args);
        map.set(arg, computed);
        return computed;
    };
}

Object.defineProperty(modular, "__esModule", { value: true });
modular.isNegativeLE = void 0;
modular.mod = mod;
modular.pow = pow;
modular.pow2 = pow2;
modular.invert = invert;
modular.tonelliShanks = tonelliShanks;
modular.FpSqrt = FpSqrt;
modular.validateField = validateField;
modular.FpPow = FpPow;
modular.FpInvertBatch = FpInvertBatch;
modular.FpDiv = FpDiv;
modular.FpLegendre = FpLegendre;
modular.FpIsSquare = FpIsSquare;
modular.nLength = nLength;
modular.Field = Field;
modular.FpSqrtOdd = FpSqrtOdd;
modular.FpSqrtEven = FpSqrtEven;
modular.hashToPrivateScalar = hashToPrivateScalar;
modular.getFieldBytesLength = getFieldBytesLength;
modular.getMinHashLength = getMinHashLength;
modular.mapHashToField = mapHashToField;
/**
 * Utils for modular division and finite fields.
 * A finite field over 11 is integer number operations `mod 11`.
 * There is no division: it is replaced by modular multiplicative inverse.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const utils_js_1$4 = utils$3;
// prettier-ignore
const _0n$3 = BigInt(0), _1n$3 = BigInt(1), _2n$1 = /* @__PURE__ */ BigInt(2), _3n = /* @__PURE__ */ BigInt(3);
// prettier-ignore
const _4n = /* @__PURE__ */ BigInt(4), _5n = /* @__PURE__ */ BigInt(5), _8n$1 = /* @__PURE__ */ BigInt(8);
// prettier-ignore
const _9n = /* @__PURE__ */ BigInt(9), _16n = /* @__PURE__ */ BigInt(16);
// Calculates a modulo b
function mod(a, b) {
    const result = a % b;
    return result >= _0n$3 ? result : b + result;
}
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @todo use field version && remove
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */
function pow(num, power, modulo) {
    if (power < _0n$3)
        throw new Error('invalid exponent, negatives unsupported');
    if (modulo <= _0n$3)
        throw new Error('invalid modulus');
    if (modulo === _1n$3)
        return _0n$3;
    let res = _1n$3;
    while (power > _0n$3) {
        if (power & _1n$3)
            res = (res * num) % modulo;
        num = (num * num) % modulo;
        power >>= _1n$3;
    }
    return res;
}
/** Does `x^(2^power)` mod p. `pow2(30, 4)` == `30^(2^4)` */
function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n$3) {
        res *= res;
        res %= modulo;
    }
    return res;
}
/**
 * Inverses number over modulo.
 * Implemented using [Euclidean GCD](https://brilliant.org/wiki/extended-euclidean-algorithm/).
 */
function invert(number, modulo) {
    if (number === _0n$3)
        throw new Error('invert: expected non-zero number');
    if (modulo <= _0n$3)
        throw new Error('invert: expected positive modulus, got ' + modulo);
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = _0n$3; _1n$3; let u = _1n$3; _0n$3;
    while (a !== _0n$3) {
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        // prettier-ignore
        b = a, a = r, x = u, u = m;
    }
    const gcd = b;
    if (gcd !== _1n$3)
        throw new Error('invert: does not exist');
    return mod(x, modulo);
}
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * Will start an infinite loop if field order P is not prime.
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */
function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - _1n$3) / _2n$1;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for (Q = P - _1n$3, S = 0; Q % _2n$1 === _0n$3; Q /= _2n$1, S++)
        ;
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for (Z = _2n$1; Z < P && pow(Z, legendreC, P) !== P - _1n$3; Z++) {
        // Crash instead of infinity loop, we cannot reasonable count until P.
        if (Z > 1000)
            throw new Error('Cannot find square root: likely non-prime P');
    }
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + _1n$3) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + _1n$3) / _2n$1;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
            throw new Error('Cannot find square root');
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while (!Fp.eql(b, Fp.ONE)) {
            if (Fp.eql(b, Fp.ZERO))
                return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for (let t2 = Fp.sqr(b); m < r; m++) {
                if (Fp.eql(t2, Fp.ONE))
                    break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, _1n$3 << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
/**
 * Square root for a finite field. It will try to check if optimizations are applicable and fall back to 4:
 *
 * 1. P ≡ 3 (mod 4)
 * 2. P ≡ 5 (mod 8)
 * 3. P ≡ 9 (mod 16)
 * 4. Tonelli-Shanks algorithm
 *
 * Different algorithms can give different roots, it is up to user to decide which one they want.
 * For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
 */
function FpSqrt(P) {
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + _1n$3) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n$1 === _5n) {
        const c1 = (P - _5n) / _8n$1;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, _2n$1);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, _2n$1), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // P ≡ 9 (mod 16)
    if (P % _16n === _9n) ;
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n$3) === _1n$3;
modular.isNegativeLE = isNegativeLE;
// prettier-ignore
const FIELD_FIELDS = [
    'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
    'eql', 'add', 'sub', 'mul', 'pow', 'div',
    'addN', 'subN', 'mulN', 'sqrN'
];
function validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger',
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = 'function';
        return map;
    }, initial);
    return (0, utils_js_1$4.validateObject)(field, opts);
}
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */
function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < _0n$3)
        throw new Error('invalid exponent, negatives unsupported');
    if (power === _0n$3)
        return f.ONE;
    if (power === _1n$3)
        return num;
    let p = f.ONE;
    let d = num;
    while (power > _0n$3) {
        if (power & _1n$3)
            p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n$3;
    }
    return p;
}
/**
 * Efficiently invert an array of Field elements.
 * `inv(0)` will return `undefined` here: make sure to throw an error.
 */
function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
function FpDiv(f, lhs, rhs) {
    return f.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, f.ORDER) : f.inv(rhs));
}
/**
 * Legendre symbol.
 * * (a | p) ≡ 1    if a is a square (mod p), quadratic residue
 * * (a | p) ≡ -1   if a is not a square (mod p), quadratic non residue
 * * (a | p) ≡ 0    if a ≡ 0 (mod p)
 */
function FpLegendre(order) {
    const legendreConst = (order - _1n$3) / _2n$1; // Integer arithmetic
    return (f, x) => f.pow(x, legendreConst);
}
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(f) {
    const legendre = FpLegendre(f.ORDER);
    return (x) => {
        const p = legendre(f, x);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
    };
}
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
}
/**
 * Initializes a finite field over prime.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * Fragile: always run a benchmark on a change.
 * Security note: operations don't check 'isValid' for all elements for performance reasons,
 * it is caller responsibility to check this.
 * This is low-level code, please make sure you know what you're doing.
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */
function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= _0n$3)
        throw new Error('invalid field: expected ORDER > 0, got ' + ORDER);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048)
        throw new Error('invalid field: expected ORDER of <= 2048 bytes');
    let sqrtP; // cached sqrtP
    const f = Object.freeze({
        ORDER,
        isLE,
        BITS,
        BYTES,
        MASK: (0, utils_js_1$4.bitMask)(BITS),
        ZERO: _0n$3,
        ONE: _1n$3,
        create: (num) => mod(num, ORDER),
        isValid: (num) => {
            if (typeof num !== 'bigint')
                throw new Error('invalid field element: expected bigint, got ' + typeof num);
            return _0n$3 <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num) => num === _0n$3,
        isOdd: (num) => (num & _1n$3) === _1n$3,
        neg: (num) => mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => mod(num * num, ORDER),
        add: (lhs, rhs) => mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt ||
            ((n) => {
                if (!sqrtP)
                    sqrtP = FpSqrt(ORDER);
                return sqrtP(f, n);
            }),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c) => (c ? b : a),
        toBytes: (num) => (isLE ? (0, utils_js_1$4.numberToBytesLE)(num, BYTES) : (0, utils_js_1$4.numberToBytesBE)(num, BYTES)),
        fromBytes: (bytes) => {
            if (bytes.length !== BYTES)
                throw new Error('Field.fromBytes: expected ' + BYTES + ' bytes, got ' + bytes.length);
            return isLE ? (0, utils_js_1$4.bytesToNumberLE)(bytes) : (0, utils_js_1$4.bytesToNumberBE)(bytes);
        },
    });
    return Object.freeze(f);
}
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error("Field doesn't have isOdd");
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd)
        throw new Error("Field doesn't have isOdd");
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use `mapKeyToField` instead
 */
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = (0, utils_js_1$4.ensureBytes)('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error('hashToPrivateScalar: expected ' + minLen + '-1024 bytes of input, got ' + hashLen);
    const num = isLE ? (0, utils_js_1$4.bytesToNumberLE)(hash) : (0, utils_js_1$4.bytesToNumberBE)(hash);
    return mod(num, groupOrder - _1n$3) + _1n$3;
}
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */
function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint')
        throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */
function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */
function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024)
        throw new Error('expected ' + minLen + '-1024 bytes of input, got ' + len);
    const num = isLE ? (0, utils_js_1$4.bytesToNumberLE)(key) : (0, utils_js_1$4.bytesToNumberBE)(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = mod(num, fieldOrder - _1n$3) + _1n$3;
    return isLE ? (0, utils_js_1$4.numberToBytesLE)(reduced, fieldLen) : (0, utils_js_1$4.numberToBytesBE)(reduced, fieldLen);
}

Object.defineProperty(curve$1, "__esModule", { value: true });
curve$1.wNAF = wNAF;
curve$1.pippenger = pippenger;
curve$1.precomputeMSMUnsafe = precomputeMSMUnsafe;
curve$1.validateBasic = validateBasic;
/**
 * Methods for elliptic curve multiplication by scalars.
 * Contains wNAF, pippenger
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const modular_js_1$3 = modular;
const utils_js_1$3 = utils$3;
const _0n$2 = BigInt(0);
const _1n$2 = BigInt(1);
function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
}
function validateW(W, bits) {
    if (!Number.isSafeInteger(W) || W <= 0 || W > bits)
        throw new Error('invalid window size, expected [1..' + bits + '], got W=' + W);
}
function calcWOpts(W, bits) {
    validateW(W, bits);
    const windows = Math.ceil(bits / W) + 1; // +1, because
    const windowSize = 2 ** (W - 1); // -1 because we skip zero
    return { windows, windowSize };
}
function validateMSMPoints(points, c) {
    if (!Array.isArray(points))
        throw new Error('array expected');
    points.forEach((p, i) => {
        if (!(p instanceof c))
            throw new Error('invalid point at index ' + i);
    });
}
function validateMSMScalars(scalars, field) {
    if (!Array.isArray(scalars))
        throw new Error('array of scalars expected');
    scalars.forEach((s, i) => {
        if (!field.isValid(s))
            throw new Error('invalid scalar at index ' + i);
    });
}
// Since points in different groups cannot be equal (different object constructor),
// we can have single place to store precomputes
const pointPrecomputes = new WeakMap();
const pointWindowSizes = new WeakMap(); // This allows use make points immutable (nothing changes inside)
function getW(P) {
    return pointWindowSizes.get(P) || 1;
}
/**
 * Elliptic curve multiplication of Point by scalar. Fragile.
 * Scalars should always be less than curve order: this should be checked inside of a curve itself.
 * Creates precomputation tables for fast multiplication:
 * - private scalar is split by fixed size windows of W bits
 * - every window point is collected from window's table & added to accumulator
 * - since windows are different, same point inside tables won't be accessed more than once per calc
 * - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
 * - +1 window is neccessary for wNAF
 * - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
 *
 * @todo Research returning 2d JS array of windows, instead of a single window.
 * This would allow windows to be in different memory locations
 */
function wNAF(c, bits) {
    return {
        constTimeNegate,
        hasPrecomputes(elm) {
            return getW(elm) !== 1;
        },
        // non-const time multiplication ladder
        unsafeLadder(elm, n, p = c.ZERO) {
            let d = elm;
            while (n > _0n$2) {
                if (n & _1n$2)
                    p = p.add(d);
                d = d.double();
                n >>= _1n$2;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @param elm Point instance
         * @param W window size
         * @returns precomputed point tables flattened to a single array
         */
        precomputeWindow(elm, W) {
            const { windows, windowSize } = calcWOpts(W, bits);
            const points = [];
            let p = elm;
            let base = p;
            for (let window = 0; window < windows; window++) {
                base = p;
                points.push(base);
                // =1, because we skip zero
                for (let i = 1; i < windowSize; i++) {
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */
        wNAF(W, precomputes, n) {
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = calcWOpts(W, bits);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for (let window = 0; window < windows; window++) {
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n$2;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) {
                    // The most important part for const-time getPublicKey
                    f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                }
                else {
                    p = p.add(constTimeNegate(cond2, precomputes[offset2]));
                }
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return { p, f };
        },
        /**
         * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @param acc accumulator point to add result of multiplication
         * @returns point
         */
        wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
            const { windows, windowSize } = calcWOpts(W, bits);
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for (let window = 0; window < windows; window++) {
                const offset = window * windowSize;
                if (n === _0n$2)
                    break; // No need to go over empty scalar
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n$2;
                }
                if (wbits === 0)
                    continue;
                let curr = precomputes[offset + Math.abs(wbits) - 1]; // -1 because we skip zero
                if (wbits < 0)
                    curr = curr.negate();
                // NOTE: by re-using acc, we can save a lot of additions in case of MSM
                acc = acc.add(curr);
            }
            return acc;
        },
        getPrecomputes(W, P, transform) {
            // Calculate precomputes on a first run, reuse them after
            let comp = pointPrecomputes.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1)
                    pointPrecomputes.set(P, transform(comp));
            }
            return comp;
        },
        wNAFCached(P, n, transform) {
            const W = getW(P);
            return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
        },
        wNAFCachedUnsafe(P, n, transform, prev) {
            const W = getW(P);
            if (W === 1)
                return this.unsafeLadder(P, n, prev); // For W=1 ladder is ~x2 faster
            return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
        },
        // We calculate precomputes for elliptic curve point multiplication
        // using windowed method. This specifies window size and
        // stores precomputed values. Usually only base point would be precomputed.
        setWindowSize(P, W) {
            validateW(W, bits);
            pointWindowSizes.set(P, W);
            pointPrecomputes.delete(P);
        },
    };
}
/**
 * Pippenger algorithm for multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
 * 30x faster vs naive addition on L=4096, 10x faster with precomputes.
 * For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
 * Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
 * @param c Curve Point constructor
 * @param fieldN field over CURVE.N - important that it's not over CURVE.P
 * @param points array of L curve points
 * @param scalars array of L scalars (aka private keys / bigints)
 */
function pippenger(c, fieldN, points, scalars) {
    // If we split scalars by some window (let's say 8 bits), every chunk will only
    // take 256 buckets even if there are 4096 scalars, also re-uses double.
    // TODO:
    // - https://eprint.iacr.org/2024/750.pdf
    // - https://tches.iacr.org/index.php/TCHES/article/view/10287
    // 0 is accepted in scalars
    validateMSMPoints(points, c);
    validateMSMScalars(scalars, fieldN);
    if (points.length !== scalars.length)
        throw new Error('arrays of points and scalars must have equal length');
    const zero = c.ZERO;
    const wbits = (0, utils_js_1$3.bitLen)(BigInt(points.length));
    const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1; // in bits
    const MASK = (1 << windowSize) - 1;
    const buckets = new Array(MASK + 1).fill(zero); // +1 for zero array
    const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
    let sum = zero;
    for (let i = lastBits; i >= 0; i -= windowSize) {
        buckets.fill(zero);
        for (let j = 0; j < scalars.length; j++) {
            const scalar = scalars[j];
            const wbits = Number((scalar >> BigInt(i)) & BigInt(MASK));
            buckets[wbits] = buckets[wbits].add(points[j]);
        }
        let resI = zero; // not using this will do small speed-up, but will lose ct
        // Skip first bucket, because it is zero
        for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
            sumI = sumI.add(buckets[j]);
            resI = resI.add(sumI);
        }
        sum = sum.add(resI);
        if (i !== 0)
            for (let j = 0; j < windowSize; j++)
                sum = sum.double();
    }
    return sum;
}
/**
 * Precomputed multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
 * @param c Curve Point constructor
 * @param fieldN field over CURVE.N - important that it's not over CURVE.P
 * @param points array of L curve points
 * @returns function which multiplies points with scaars
 */
function precomputeMSMUnsafe(c, fieldN, points, windowSize) {
    /**
     * Performance Analysis of Window-based Precomputation
     *
     * Base Case (256-bit scalar, 8-bit window):
     * - Standard precomputation requires:
     *   - 31 additions per scalar × 256 scalars = 7,936 ops
     *   - Plus 255 summary additions = 8,191 total ops
     *   Note: Summary additions can be optimized via accumulator
     *
     * Chunked Precomputation Analysis:
     * - Using 32 chunks requires:
     *   - 255 additions per chunk
     *   - 256 doublings
     *   - Total: (255 × 32) + 256 = 8,416 ops
     *
     * Memory Usage Comparison:
     * Window Size | Standard Points | Chunked Points
     * ------------|-----------------|---------------
     *     4-bit   |     520         |      15
     *     8-bit   |    4,224        |     255
     *    10-bit   |   13,824        |   1,023
     *    16-bit   |  557,056        |  65,535
     *
     * Key Advantages:
     * 1. Enables larger window sizes due to reduced memory overhead
     * 2. More efficient for smaller scalar counts:
     *    - 16 chunks: (16 × 255) + 256 = 4,336 ops
     *    - ~2x faster than standard 8,191 ops
     *
     * Limitations:
     * - Not suitable for plain precomputes (requires 256 constant doublings)
     * - Performance degrades with larger scalar counts:
     *   - Optimal for ~256 scalars
     *   - Less efficient for 4096+ scalars (Pippenger preferred)
     */
    validateW(windowSize, fieldN.BITS);
    validateMSMPoints(points, c);
    const zero = c.ZERO;
    const tableSize = 2 ** windowSize - 1; // table size (without zero)
    const chunks = Math.ceil(fieldN.BITS / windowSize); // chunks of item
    const MASK = BigInt((1 << windowSize) - 1);
    const tables = points.map((p) => {
        const res = [];
        for (let i = 0, acc = p; i < tableSize; i++) {
            res.push(acc);
            acc = acc.add(p);
        }
        return res;
    });
    return (scalars) => {
        validateMSMScalars(scalars, fieldN);
        if (scalars.length > points.length)
            throw new Error('array of scalars must be smaller than array of points');
        let res = zero;
        for (let i = 0; i < chunks; i++) {
            // No need to double if accumulator is still zero.
            if (res !== zero)
                for (let j = 0; j < windowSize; j++)
                    res = res.double();
            const shiftBy = BigInt(chunks * windowSize - (i + 1) * windowSize);
            for (let j = 0; j < scalars.length; j++) {
                const n = scalars[j];
                const curr = Number((n >> shiftBy) & MASK);
                if (!curr)
                    continue; // skip zero scalars chunks
                res = res.add(tables[j][curr - 1]);
            }
        }
        return res;
    };
}
function validateBasic(curve) {
    (0, modular_js_1$3.validateField)(curve.Fp);
    (0, utils_js_1$3.validateObject)(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field',
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
    });
    // Set defaults
    return Object.freeze({
        ...(0, modular_js_1$3.nLength)(curve.n, curve.nBitLength),
        ...curve,
        ...{ p: curve.Fp.ORDER },
    });
}

var edwards$1 = {};

Object.defineProperty(edwards$1, "__esModule", { value: true });
edwards$1.twistedEdwards = twistedEdwards;
/**
 * Twisted Edwards curve. The formula is: ax² + y² = 1 + dx²y².
 * For design rationale of types / exports, see weierstrass module documentation.
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const curve_js_1 = curve$1;
const modular_js_1$2 = modular;
const ut = utils$3;
const utils_js_1$2 = utils$3;
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const _0n$1 = BigInt(0), _1n$1 = BigInt(1), _2n = BigInt(2), _8n = BigInt(8);
// verification rule is either zip215 or rfc8032 / nist186-5. Consult fromHex:
const VERIFY_DEFAULT = { zip215: true };
function validateOpts$1(curve) {
    const opts = (0, curve_js_1.validateBasic)(curve);
    ut.validateObject(curve, {
        hash: 'function',
        a: 'bigint',
        d: 'bigint',
        randomBytes: 'function',
    }, {
        adjustScalarBytes: 'function',
        domain: 'function',
        uvRatio: 'function',
        mapToCurve: 'function',
    });
    // Set defaults
    return Object.freeze({ ...opts });
}
/**
 * Creates Twisted Edwards curve with EdDSA signatures.
 * @example
 * import { Field } from '@noble/curves/abstract/modular';
 * // Before that, define BigInt-s: a, d, p, n, Gx, Gy, h
 * const curve = twistedEdwards({ a, d, Fp: Field(p), n, Gx, Gy, h })
 */
function twistedEdwards(curveDef) {
    const CURVE = validateOpts$1(curveDef);
    const { Fp, n: CURVE_ORDER, prehash: prehash, hash: cHash, randomBytes, nByteLength, h: cofactor, } = CURVE;
    // Important:
    // There are some places where Fp.BYTES is used instead of nByteLength.
    // So far, everything has been tested with curves of Fp.BYTES == nByteLength.
    // TODO: test and find curves which behave otherwise.
    const MASK = _2n << (BigInt(nByteLength * 8) - _1n$1);
    const modP = Fp.create; // Function overrides
    const Fn = (0, modular_js_1$2.Field)(CURVE.n, CURVE.nBitLength);
    // sqrt(u/v)
    const uvRatio = CURVE.uvRatio ||
        ((u, v) => {
            try {
                return { isValid: true, value: Fp.sqrt(u * Fp.inv(v)) };
            }
            catch (e) {
                return { isValid: false, value: _0n$1 };
            }
        });
    const adjustScalarBytes = CURVE.adjustScalarBytes || ((bytes) => bytes); // NOOP
    const domain = CURVE.domain ||
        ((data, ctx, phflag) => {
            (0, utils_js_1$2.abool)('phflag', phflag);
            if (ctx.length || phflag)
                throw new Error('Contexts/pre-hash are not supported');
            return data;
        }); // NOOP
    // 0 <= n < MASK
    // Coordinates larger than Fp.ORDER are allowed for zip215
    function aCoordinate(title, n) {
        ut.aInRange('coordinate ' + title, n, _0n$1, MASK);
    }
    function assertPoint(other) {
        if (!(other instanceof Point))
            throw new Error('ExtendedPoint expected');
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    const toAffineMemo = (0, utils_js_1$2.memoized)((p, iz) => {
        const { ex: x, ey: y, ez: z } = p;
        const is0 = p.is0();
        if (iz == null)
            iz = is0 ? _8n : Fp.inv(z); // 8 was chosen arbitrarily
        const ax = modP(x * iz);
        const ay = modP(y * iz);
        const zz = modP(z * iz);
        if (is0)
            return { x: _0n$1, y: _1n$1 };
        if (zz !== _1n$1)
            throw new Error('invZ was invalid');
        return { x: ax, y: ay };
    });
    const assertValidMemo = (0, utils_js_1$2.memoized)((p) => {
        const { a, d } = CURVE;
        if (p.is0())
            throw new Error('bad point: ZERO'); // TODO: optimize, with vars below?
        // Equation in affine coordinates: ax² + y² = 1 + dx²y²
        // Equation in projective coordinates (X/Z, Y/Z, Z):  (aX² + Y²)Z² = Z⁴ + dX²Y²
        const { ex: X, ey: Y, ez: Z, et: T } = p;
        const X2 = modP(X * X); // X²
        const Y2 = modP(Y * Y); // Y²
        const Z2 = modP(Z * Z); // Z²
        const Z4 = modP(Z2 * Z2); // Z⁴
        const aX2 = modP(X2 * a); // aX²
        const left = modP(Z2 * modP(aX2 + Y2)); // (aX² + Y²)Z²
        const right = modP(Z4 + modP(d * modP(X2 * Y2))); // Z⁴ + dX²Y²
        if (left !== right)
            throw new Error('bad point: equation left != right (1)');
        // In Extended coordinates we also have T, which is x*y=T/Z: check X*Y == Z*T
        const XY = modP(X * Y);
        const ZT = modP(Z * T);
        if (XY !== ZT)
            throw new Error('bad point: equation left != right (2)');
        return true;
    });
    // Extended Point works in extended coordinates: (x, y, z, t) ∋ (x=x/z, y=y/z, t=xy).
    // https://en.wikipedia.org/wiki/Twisted_Edwards_curve#Extended_coordinates
    class Point {
        constructor(ex, ey, ez, et) {
            this.ex = ex;
            this.ey = ey;
            this.ez = ez;
            this.et = et;
            aCoordinate('x', ex);
            aCoordinate('y', ey);
            aCoordinate('z', ez);
            aCoordinate('t', et);
            Object.freeze(this);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        static fromAffine(p) {
            if (p instanceof Point)
                throw new Error('extended point not allowed');
            const { x, y } = p || {};
            aCoordinate('x', x);
            aCoordinate('y', y);
            return new Point(x, y, _1n$1, modP(x * y));
        }
        static normalizeZ(points) {
            const toInv = Fp.invertBatch(points.map((p) => p.ez));
            return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        // Multiscalar Multiplication
        static msm(points, scalars) {
            return (0, curve_js_1.pippenger)(Point, Fn, points, scalars);
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            wnaf.setWindowSize(this, windowSize);
        }
        // Not required for fromHex(), which always creates valid points.
        // Could be useful for fromAffine().
        assertValidity() {
            assertValidMemo(this);
        }
        // Compare one point to another.
        equals(other) {
            assertPoint(other);
            const { ex: X1, ey: Y1, ez: Z1 } = this;
            const { ex: X2, ey: Y2, ez: Z2 } = other;
            const X1Z2 = modP(X1 * Z2);
            const X2Z1 = modP(X2 * Z1);
            const Y1Z2 = modP(Y1 * Z2);
            const Y2Z1 = modP(Y2 * Z1);
            return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        negate() {
            // Flips point sign to a negative one (-x, y in affine coords)
            return new Point(modP(-this.ex), this.ey, this.ez, modP(-this.et));
        }
        // Fast algo for doubling Extended Point.
        // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
        // Cost: 4M + 4S + 1*a + 6add + 1*2.
        double() {
            const { a } = CURVE;
            const { ex: X1, ey: Y1, ez: Z1 } = this;
            const A = modP(X1 * X1); // A = X12
            const B = modP(Y1 * Y1); // B = Y12
            const C = modP(_2n * modP(Z1 * Z1)); // C = 2*Z12
            const D = modP(a * A); // D = a*A
            const x1y1 = X1 + Y1;
            const E = modP(modP(x1y1 * x1y1) - A - B); // E = (X1+Y1)2-A-B
            const G = D + B; // G = D+B
            const F = G - C; // F = G-C
            const H = D - B; // H = D-B
            const X3 = modP(E * F); // X3 = E*F
            const Y3 = modP(G * H); // Y3 = G*H
            const T3 = modP(E * H); // T3 = E*H
            const Z3 = modP(F * G); // Z3 = F*G
            return new Point(X3, Y3, Z3, T3);
        }
        // Fast algo for adding 2 Extended Points.
        // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
        // Cost: 9M + 1*a + 1*d + 7add.
        add(other) {
            assertPoint(other);
            const { a, d } = CURVE;
            const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
            const { ex: X2, ey: Y2, ez: Z2, et: T2 } = other;
            // Faster algo for adding 2 Extended Points when curve's a=-1.
            // http://hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html#addition-add-2008-hwcd-4
            // Cost: 8M + 8add + 2*2.
            // Note: It does not check whether the `other` point is valid.
            if (a === BigInt(-1)) {
                const A = modP((Y1 - X1) * (Y2 + X2));
                const B = modP((Y1 + X1) * (Y2 - X2));
                const F = modP(B - A);
                if (F === _0n$1)
                    return this.double(); // Same point. Tests say it doesn't affect timing
                const C = modP(Z1 * _2n * T2);
                const D = modP(T1 * _2n * Z2);
                const E = D + C;
                const G = B + A;
                const H = D - C;
                const X3 = modP(E * F);
                const Y3 = modP(G * H);
                const T3 = modP(E * H);
                const Z3 = modP(F * G);
                return new Point(X3, Y3, Z3, T3);
            }
            const A = modP(X1 * X2); // A = X1*X2
            const B = modP(Y1 * Y2); // B = Y1*Y2
            const C = modP(T1 * d * T2); // C = T1*d*T2
            const D = modP(Z1 * Z2); // D = Z1*Z2
            const E = modP((X1 + Y1) * (X2 + Y2) - A - B); // E = (X1+Y1)*(X2+Y2)-A-B
            const F = D - C; // F = D-C
            const G = D + C; // G = D+C
            const H = modP(B - a * A); // H = B-a*A
            const X3 = modP(E * F); // X3 = E*F
            const Y3 = modP(G * H); // Y3 = G*H
            const T3 = modP(E * H); // T3 = E*H
            const Z3 = modP(F * G); // Z3 = F*G
            return new Point(X3, Y3, Z3, T3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, n, Point.normalizeZ);
        }
        // Constant-time multiplication.
        multiply(scalar) {
            const n = scalar;
            ut.aInRange('scalar', n, _1n$1, CURVE_ORDER); // 1 <= scalar < L
            const { p, f } = this.wNAF(n);
            return Point.normalizeZ([p, f])[0];
        }
        // Non-constant-time multiplication. Uses double-and-add algorithm.
        // It's faster, but should only be used when you don't care about
        // an exposed private key e.g. sig verification.
        // Does NOT allow scalars higher than CURVE.n.
        // Accepts optional accumulator to merge with multiply (important for sparse scalars)
        multiplyUnsafe(scalar, acc = Point.ZERO) {
            const n = scalar;
            ut.aInRange('scalar', n, _0n$1, CURVE_ORDER); // 0 <= scalar < L
            if (n === _0n$1)
                return I;
            if (this.is0() || n === _1n$1)
                return this;
            return wnaf.wNAFCachedUnsafe(this, n, Point.normalizeZ, acc);
        }
        // Checks if point is of small order.
        // If you add something to small order point, you will have "dirty"
        // point with torsion component.
        // Multiplies point by cofactor and checks if the result is 0.
        isSmallOrder() {
            return this.multiplyUnsafe(cofactor).is0();
        }
        // Multiplies point by curve order and checks if the result is 0.
        // Returns `false` is the point is dirty.
        isTorsionFree() {
            return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
        }
        // Converts Extended point to default (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        toAffine(iz) {
            return toAffineMemo(this, iz);
        }
        clearCofactor() {
            const { h: cofactor } = CURVE;
            if (cofactor === _1n$1)
                return this;
            return this.multiplyUnsafe(cofactor);
        }
        // Converts hash string or Uint8Array to Point.
        // Uses algo from RFC8032 5.1.3.
        static fromHex(hex, zip215 = false) {
            const { d, a } = CURVE;
            const len = Fp.BYTES;
            hex = (0, utils_js_1$2.ensureBytes)('pointHex', hex, len); // copy hex to a new array
            (0, utils_js_1$2.abool)('zip215', zip215);
            const normed = hex.slice(); // copy again, we'll manipulate it
            const lastByte = hex[len - 1]; // select last byte
            normed[len - 1] = lastByte & ~0x80; // clear last bit
            const y = ut.bytesToNumberLE(normed);
            // zip215=true is good for consensus-critical apps. =false follows RFC8032 / NIST186-5.
            // RFC8032 prohibits >= p, but ZIP215 doesn't
            // zip215=true:  0 <= y < MASK (2^256 for ed25519)
            // zip215=false: 0 <= y < P (2^255-19 for ed25519)
            const max = zip215 ? MASK : Fp.ORDER;
            ut.aInRange('pointHex.y', y, _0n$1, max);
            // Ed25519: x² = (y²-1)/(dy²+1) mod p. Ed448: x² = (y²-1)/(dy²-1) mod p. Generic case:
            // ax²+y²=1+dx²y² => y²-1=dx²y²-ax² => y²-1=x²(dy²-a) => x²=(y²-1)/(dy²-a)
            const y2 = modP(y * y); // denominator is always non-0 mod p.
            const u = modP(y2 - _1n$1); // u = y² - 1
            const v = modP(d * y2 - a); // v = d y² + 1.
            let { isValid, value: x } = uvRatio(u, v); // √(u/v)
            if (!isValid)
                throw new Error('Point.fromHex: invalid y coordinate');
            const isXOdd = (x & _1n$1) === _1n$1; // There are 2 square roots. Use x_0 bit to select proper
            const isLastByteOdd = (lastByte & 0x80) !== 0; // x_0, last bit
            if (!zip215 && x === _0n$1 && isLastByteOdd)
                // if x=0 and x_0 = 1, fail
                throw new Error('Point.fromHex: x=0 and x_0=1');
            if (isLastByteOdd !== isXOdd)
                x = modP(-x); // if x_0 != x mod 2, set x = p-x
            return Point.fromAffine({ x, y });
        }
        static fromPrivateKey(privKey) {
            return getExtendedPublicKey(privKey).point;
        }
        toRawBytes() {
            const { x, y } = this.toAffine();
            const bytes = ut.numberToBytesLE(y, Fp.BYTES); // each y has 2 x values (x, -y)
            bytes[bytes.length - 1] |= x & _1n$1 ? 0x80 : 0; // when compressing, it's enough to store y
            return bytes; // and use the last byte to encode sign of x
        }
        toHex() {
            return ut.bytesToHex(this.toRawBytes()); // Same as toRawBytes, but returns string.
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, _1n$1, modP(CURVE.Gx * CURVE.Gy));
    Point.ZERO = new Point(_0n$1, _1n$1, _1n$1, _0n$1); // 0, 1, 1, 0
    const { BASE: G, ZERO: I } = Point;
    const wnaf = (0, curve_js_1.wNAF)(Point, nByteLength * 8);
    function modN(a) {
        return (0, modular_js_1$2.mod)(a, CURVE_ORDER);
    }
    // Little-endian SHA512 with modulo n
    function modN_LE(hash) {
        return modN(ut.bytesToNumberLE(hash));
    }
    /** Convenience method that creates public key and other stuff. RFC8032 5.1.5 */
    function getExtendedPublicKey(key) {
        const len = Fp.BYTES;
        key = (0, utils_js_1$2.ensureBytes)('private key', key, len);
        // Hash private key with curve's hash function to produce uniformingly random input
        // Check byte lengths: ensure(64, h(ensure(32, key)))
        const hashed = (0, utils_js_1$2.ensureBytes)('hashed private key', cHash(key), 2 * len);
        const head = adjustScalarBytes(hashed.slice(0, len)); // clear first half bits, produce FE
        const prefix = hashed.slice(len, 2 * len); // second half is called key prefix (5.1.6)
        const scalar = modN_LE(head); // The actual private scalar
        const point = G.multiply(scalar); // Point on Edwards curve aka public key
        const pointBytes = point.toRawBytes(); // Uint8Array representation
        return { head, prefix, scalar, point, pointBytes };
    }
    // Calculates EdDSA pub key. RFC8032 5.1.5. Privkey is hashed. Use first half with 3 bits cleared
    function getPublicKey(privKey) {
        return getExtendedPublicKey(privKey).pointBytes;
    }
    // int('LE', SHA512(dom2(F, C) || msgs)) mod N
    function hashDomainToScalar(context = new Uint8Array(), ...msgs) {
        const msg = ut.concatBytes(...msgs);
        return modN_LE(cHash(domain(msg, (0, utils_js_1$2.ensureBytes)('context', context), !!prehash)));
    }
    /** Signs message with privateKey. RFC8032 5.1.6 */
    function sign(msg, privKey, options = {}) {
        msg = (0, utils_js_1$2.ensureBytes)('message', msg);
        if (prehash)
            msg = prehash(msg); // for ed25519ph etc.
        const { prefix, scalar, pointBytes } = getExtendedPublicKey(privKey);
        const r = hashDomainToScalar(options.context, prefix, msg); // r = dom2(F, C) || prefix || PH(M)
        const R = G.multiply(r).toRawBytes(); // R = rG
        const k = hashDomainToScalar(options.context, R, pointBytes, msg); // R || A || PH(M)
        const s = modN(r + k * scalar); // S = (r + k * s) mod L
        ut.aInRange('signature.s', s, _0n$1, CURVE_ORDER); // 0 <= s < l
        const res = ut.concatBytes(R, ut.numberToBytesLE(s, Fp.BYTES));
        return (0, utils_js_1$2.ensureBytes)('result', res, Fp.BYTES * 2); // 64-byte signature
    }
    const verifyOpts = VERIFY_DEFAULT;
    /**
     * Verifies EdDSA signature against message and public key. RFC8032 5.1.7.
     * An extended group equation is checked.
     */
    function verify(sig, msg, publicKey, options = verifyOpts) {
        const { context, zip215 } = options;
        const len = Fp.BYTES; // Verifies EdDSA signature against message and public key. RFC8032 5.1.7.
        sig = (0, utils_js_1$2.ensureBytes)('signature', sig, 2 * len); // An extended group equation is checked.
        msg = (0, utils_js_1$2.ensureBytes)('message', msg);
        publicKey = (0, utils_js_1$2.ensureBytes)('publicKey', publicKey, len);
        if (zip215 !== undefined)
            (0, utils_js_1$2.abool)('zip215', zip215);
        if (prehash)
            msg = prehash(msg); // for ed25519ph, etc
        const s = ut.bytesToNumberLE(sig.slice(len, 2 * len));
        let A, R, SB;
        try {
            // zip215=true is good for consensus-critical apps. =false follows RFC8032 / NIST186-5.
            // zip215=true:  0 <= y < MASK (2^256 for ed25519)
            // zip215=false: 0 <= y < P (2^255-19 for ed25519)
            A = Point.fromHex(publicKey, zip215);
            R = Point.fromHex(sig.slice(0, len), zip215);
            SB = G.multiplyUnsafe(s); // 0 <= s < l is done inside
        }
        catch (error) {
            return false;
        }
        if (!zip215 && A.isSmallOrder())
            return false;
        const k = hashDomainToScalar(context, R.toRawBytes(), A.toRawBytes(), msg);
        const RkA = R.add(A.multiplyUnsafe(k));
        // Extended group equation
        // [8][S]B = [8]R + [8][k]A'
        return RkA.subtract(SB).clearCofactor().equals(Point.ZERO);
    }
    G._setWindowSize(8); // Enable precomputes. Slows down first publicKey computation by 20ms.
    const utils = {
        getExtendedPublicKey,
        // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
        randomPrivateKey: () => randomBytes(Fp.BYTES),
        /**
         * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
         * values. This slows down first getPublicKey() by milliseconds (see Speed section),
         * but allows to speed-up subsequent getPublicKey() calls up to 20x.
         * @param windowSize 2, 4, 8, 16
         */
        precompute(windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3));
            return point;
        },
    };
    return {
        CURVE,
        getPublicKey,
        sign,
        verify,
        ExtendedPoint: Point,
        utils,
    };
}

var hashToCurve = {};

Object.defineProperty(hashToCurve, "__esModule", { value: true });
hashToCurve.expand_message_xmd = expand_message_xmd;
hashToCurve.expand_message_xof = expand_message_xof;
hashToCurve.hash_to_field = hash_to_field;
hashToCurve.isogenyMap = isogenyMap;
hashToCurve.createHasher = createHasher;
const modular_js_1$1 = modular;
const utils_js_1$1 = utils$3;
// Octet Stream to Integer. "spec" implementation of os2ip is 2.5x slower vs bytesToNumberBE.
const os2ip = utils_js_1$1.bytesToNumberBE;
// Integer to Octet Stream (numberToBytesBE)
function i2osp(value, length) {
    anum(value);
    anum(length);
    if (value < 0 || value >= 1 << (8 * length))
        throw new Error('invalid I2OSP input: ' + value);
    const res = Array.from({ length }).fill(0);
    for (let i = length - 1; i >= 0; i--) {
        res[i] = value & 0xff;
        value >>>= 8;
    }
    return new Uint8Array(res);
}
function strxor(a, b) {
    const arr = new Uint8Array(a.length);
    for (let i = 0; i < a.length; i++) {
        arr[i] = a[i] ^ b[i];
    }
    return arr;
}
function anum(item) {
    if (!Number.isSafeInteger(item))
        throw new Error('number expected');
}
/**
 * Produces a uniformly random byte string using a cryptographic hash function H that outputs b bits.
 * [RFC 9380 5.3.1](https://www.rfc-editor.org/rfc/rfc9380#section-5.3.1).
 */
function expand_message_xmd(msg, DST, lenInBytes, H) {
    (0, utils_js_1$1.abytes)(msg);
    (0, utils_js_1$1.abytes)(DST);
    anum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    if (DST.length > 255)
        DST = H((0, utils_js_1$1.concatBytes)((0, utils_js_1$1.utf8ToBytes)('H2C-OVERSIZE-DST-'), DST));
    const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (lenInBytes > 65535 || ell > 255)
        throw new Error('expand_message_xmd: invalid lenInBytes');
    const DST_prime = (0, utils_js_1$1.concatBytes)(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2); // len_in_bytes_str
    const b = new Array(ell);
    const b_0 = H((0, utils_js_1$1.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
    b[0] = H((0, utils_js_1$1.concatBytes)(b_0, i2osp(1, 1), DST_prime));
    for (let i = 1; i <= ell; i++) {
        const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
        b[i] = H((0, utils_js_1$1.concatBytes)(...args));
    }
    const pseudo_random_bytes = (0, utils_js_1$1.concatBytes)(...b);
    return pseudo_random_bytes.slice(0, lenInBytes);
}
/**
 * Produces a uniformly random byte string using an extendable-output function (XOF) H.
 * 1. The collision resistance of H MUST be at least k bits.
 * 2. H MUST be an XOF that has been proved indifferentiable from
 *    a random oracle under a reasonable cryptographic assumption.
 * [RFC 9380 5.3.2](https://www.rfc-editor.org/rfc/rfc9380#section-5.3.2).
 */
function expand_message_xof(msg, DST, lenInBytes, k, H) {
    (0, utils_js_1$1.abytes)(msg);
    (0, utils_js_1$1.abytes)(DST);
    anum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    // DST = H('H2C-OVERSIZE-DST-' || a_very_long_DST, Math.ceil((lenInBytes * k) / 8));
    if (DST.length > 255) {
        const dkLen = Math.ceil((2 * k) / 8);
        DST = H.create({ dkLen }).update((0, utils_js_1$1.utf8ToBytes)('H2C-OVERSIZE-DST-')).update(DST).digest();
    }
    if (lenInBytes > 65535 || DST.length > 255)
        throw new Error('expand_message_xof: invalid lenInBytes');
    return (H.create({ dkLen: lenInBytes })
        .update(msg)
        .update(i2osp(lenInBytes, 2))
        // 2. DST_prime = DST || I2OSP(len(DST), 1)
        .update(DST)
        .update(i2osp(DST.length, 1))
        .digest());
}
/**
 * Hashes arbitrary-length byte strings to a list of one or more elements of a finite field F.
 * [RFC 9380 5.2](https://www.rfc-editor.org/rfc/rfc9380#section-5.2).
 * @param msg a byte string containing the message to hash
 * @param count the number of elements of F to output
 * @param options `{DST: string, p: bigint, m: number, k: number, expand: 'xmd' | 'xof', hash: H}`, see above
 * @returns [u_0, ..., u_(count - 1)], a list of field elements.
 */
function hash_to_field(msg, count, options) {
    (0, utils_js_1$1.validateObject)(options, {
        DST: 'stringOrUint8Array',
        p: 'bigint',
        m: 'isSafeInteger',
        k: 'isSafeInteger',
        hash: 'hash',
    });
    const { p, k, m, hash, expand, DST: _DST } = options;
    (0, utils_js_1$1.abytes)(msg);
    anum(count);
    const DST = typeof _DST === 'string' ? (0, utils_js_1$1.utf8ToBytes)(_DST) : _DST;
    const log2p = p.toString(2).length;
    const L = Math.ceil((log2p + k) / 8); // section 5.1 of ietf draft link above
    const len_in_bytes = count * m * L;
    let prb; // pseudo_random_bytes
    if (expand === 'xmd') {
        prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
    }
    else if (expand === 'xof') {
        prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
    }
    else if (expand === '_internal_pass') {
        // for internal tests only
        prb = msg;
    }
    else {
        throw new Error('expand must be "xmd" or "xof"');
    }
    const u = new Array(count);
    for (let i = 0; i < count; i++) {
        const e = new Array(m);
        for (let j = 0; j < m; j++) {
            const elm_offset = L * (j + i * m);
            const tv = prb.subarray(elm_offset, elm_offset + L);
            e[j] = (0, modular_js_1$1.mod)(os2ip(tv), p);
        }
        u[i] = e;
    }
    return u;
}
function isogenyMap(field, map) {
    // Make same order as in spec
    const COEFF = map.map((i) => Array.from(i).reverse());
    return (x, y) => {
        const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen); // xNum / xDen
        y = field.mul(y, field.div(yNum, yDen)); // y * (yNum / yDev)
        return { x: x, y: y };
    };
}
/** Creates hash-to-curve methods from EC Point and mapToCurve function. */
function createHasher(Point, mapToCurve, def) {
    if (typeof mapToCurve !== 'function')
        throw new Error('mapToCurve() must be defined');
    return {
        // Encodes byte string to elliptic curve.
        // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        hashToCurve(msg, options) {
            const u = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
            const u0 = Point.fromAffine(mapToCurve(u[0]));
            const u1 = Point.fromAffine(mapToCurve(u[1]));
            const P = u0.add(u1).clearCofactor();
            P.assertValidity();
            return P;
        },
        // Encodes byte string to elliptic curve.
        // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        encodeToCurve(msg, options) {
            const u = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
            const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
            P.assertValidity();
            return P;
        },
        // Same as encodeToCurve, but without hash
        mapToCurve(scalars) {
            if (!Array.isArray(scalars))
                throw new Error('mapToCurve: expected array of bigints');
            for (const i of scalars)
                if (typeof i !== 'bigint')
                    throw new Error('mapToCurve: expected array of bigints');
            const P = Point.fromAffine(mapToCurve(scalars)).clearCofactor();
            P.assertValidity();
            return P;
        },
    };
}

var montgomery$1 = {};

Object.defineProperty(montgomery$1, "__esModule", { value: true });
montgomery$1.montgomery = montgomery;
/**
 * Montgomery curve methods. It's not really whole montgomery curve,
 * just bunch of very specific methods for X25519 / X448 from
 * [RFC 7748](https://www.rfc-editor.org/rfc/rfc7748)
 * @module
 */
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const modular_js_1 = modular;
const utils_js_1 = utils$3;
const _0n = BigInt(0);
const _1n = BigInt(1);
function validateOpts(curve) {
    (0, utils_js_1.validateObject)(curve, {
        a: 'bigint',
    }, {
        montgomeryBits: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
        adjustScalarBytes: 'function',
        domain: 'function',
        powPminus2: 'function',
        Gu: 'bigint',
    });
    // Set defaults
    return Object.freeze({ ...curve });
}
// Uses only one coordinate instead of two
function montgomery(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { P } = CURVE;
    const modP = (n) => (0, modular_js_1.mod)(n, P);
    const montgomeryBits = CURVE.montgomeryBits;
    const montgomeryBytes = Math.ceil(montgomeryBits / 8);
    const fieldLen = CURVE.nByteLength;
    const adjustScalarBytes = CURVE.adjustScalarBytes || ((bytes) => bytes);
    const powPminus2 = CURVE.powPminus2 || ((x) => (0, modular_js_1.pow)(x, P - BigInt(2), P));
    // cswap from RFC7748. But it is not from RFC7748!
    /*
      cswap(swap, x_2, x_3):
           dummy = mask(swap) AND (x_2 XOR x_3)
           x_2 = x_2 XOR dummy
           x_3 = x_3 XOR dummy
           Return (x_2, x_3)
    Where mask(swap) is the all-1 or all-0 word of the same length as x_2
     and x_3, computed, e.g., as mask(swap) = 0 - swap.
    */
    function cswap(swap, x_2, x_3) {
        const dummy = modP(swap * (x_2 - x_3));
        x_2 = modP(x_2 - dummy);
        x_3 = modP(x_3 + dummy);
        return [x_2, x_3];
    }
    // x25519 from 4
    // The constant a24 is (486662 - 2) / 4 = 121665 for curve25519/X25519
    const a24 = (CURVE.a - BigInt(2)) / BigInt(4);
    /**
     *
     * @param pointU u coordinate (x) on Montgomery Curve 25519
     * @param scalar by which the point would be multiplied
     * @returns new Point on Montgomery curve
     */
    function montgomeryLadder(u, scalar) {
        (0, utils_js_1.aInRange)('u', u, _0n, P);
        (0, utils_js_1.aInRange)('scalar', scalar, _0n, P);
        // Section 5: Implementations MUST accept non-canonical values and process them as
        // if they had been reduced modulo the field prime.
        const k = scalar;
        const x_1 = u;
        let x_2 = _1n;
        let z_2 = _0n;
        let x_3 = u;
        let z_3 = _1n;
        let swap = _0n;
        let sw;
        for (let t = BigInt(montgomeryBits - 1); t >= _0n; t--) {
            const k_t = (k >> t) & _1n;
            swap ^= k_t;
            sw = cswap(swap, x_2, x_3);
            x_2 = sw[0];
            x_3 = sw[1];
            sw = cswap(swap, z_2, z_3);
            z_2 = sw[0];
            z_3 = sw[1];
            swap = k_t;
            const A = x_2 + z_2;
            const AA = modP(A * A);
            const B = x_2 - z_2;
            const BB = modP(B * B);
            const E = AA - BB;
            const C = x_3 + z_3;
            const D = x_3 - z_3;
            const DA = modP(D * A);
            const CB = modP(C * B);
            const dacb = DA + CB;
            const da_cb = DA - CB;
            x_3 = modP(dacb * dacb);
            z_3 = modP(x_1 * modP(da_cb * da_cb));
            x_2 = modP(AA * BB);
            z_2 = modP(E * (AA + modP(a24 * E)));
        }
        // (x_2, x_3) = cswap(swap, x_2, x_3)
        sw = cswap(swap, x_2, x_3);
        x_2 = sw[0];
        x_3 = sw[1];
        // (z_2, z_3) = cswap(swap, z_2, z_3)
        sw = cswap(swap, z_2, z_3);
        z_2 = sw[0];
        z_3 = sw[1];
        // z_2^(p - 2)
        const z2 = powPminus2(z_2);
        // Return x_2 * (z_2^(p - 2))
        return modP(x_2 * z2);
    }
    function encodeUCoordinate(u) {
        return (0, utils_js_1.numberToBytesLE)(modP(u), montgomeryBytes);
    }
    function decodeUCoordinate(uEnc) {
        // Section 5: When receiving such an array, implementations of X25519
        // MUST mask the most significant bit in the final byte.
        const u = (0, utils_js_1.ensureBytes)('u coordinate', uEnc, montgomeryBytes);
        if (fieldLen === 32)
            u[31] &= 127; // 0b0111_1111
        return (0, utils_js_1.bytesToNumberLE)(u);
    }
    function decodeScalar(n) {
        const bytes = (0, utils_js_1.ensureBytes)('scalar', n);
        const len = bytes.length;
        if (len !== montgomeryBytes && len !== fieldLen) {
            let valid = '' + montgomeryBytes + ' or ' + fieldLen;
            throw new Error('invalid scalar, expected ' + valid + ' bytes, got ' + len);
        }
        return (0, utils_js_1.bytesToNumberLE)(adjustScalarBytes(bytes));
    }
    function scalarMult(scalar, u) {
        const pointU = decodeUCoordinate(u);
        const _scalar = decodeScalar(scalar);
        const pu = montgomeryLadder(pointU, _scalar);
        // The result was not contributory
        // https://cr.yp.to/ecdh.html#validate
        if (pu === _0n)
            throw new Error('invalid private or public key received');
        return encodeUCoordinate(pu);
    }
    // Computes public key from private. By doing scalar multiplication of base point.
    const GuBytes = encodeUCoordinate(CURVE.Gu);
    function scalarMultBase(scalar) {
        return scalarMult(scalar, GuBytes);
    }
    return {
        scalarMult,
        scalarMultBase,
        getSharedSecret: (privateKey, publicKey) => scalarMult(privateKey, publicKey),
        getPublicKey: (privateKey) => scalarMultBase(privateKey),
        utils: { randomPrivateKey: () => CURVE.randomBytes(CURVE.nByteLength) },
        GuBytes: GuBytes,
    };
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hash_to_ristretto255 = exports.hashToRistretto255 = exports.RistrettoPoint = exports.encodeToCurve = exports.hashToCurve = exports.edwardsToMontgomery = exports.x25519 = exports.ed25519ph = exports.ed25519ctx = exports.ed25519 = exports.ED25519_TORSION_SUBGROUP = void 0;
	exports.edwardsToMontgomeryPub = edwardsToMontgomeryPub;
	exports.edwardsToMontgomeryPriv = edwardsToMontgomeryPriv;
	/**
	 * ed25519 Twisted Edwards curve with following addons:
	 * - X25519 ECDH
	 * - Ristretto cofactor elimination
	 * - Elligator hash-to-group / point indistinguishability
	 * @module
	 */
	/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	const sha512_1 = sha512;
	const utils_1 = utils$4;
	const curve_js_1 = curve$1;
	const edwards_js_1 = edwards$1;
	const hash_to_curve_js_1 = hashToCurve;
	const modular_js_1 = modular;
	const montgomery_js_1 = montgomery$1;
	const utils_js_1 = utils$3;
	const ED25519_P = BigInt('57896044618658097711785492504343953926634992332820282019728792003956564819949');
	// √(-1) aka √(a) aka 2^((p-1)/4)
	const ED25519_SQRT_M1 = /* @__PURE__ */ BigInt('19681161376707505956807079304988542015446066515923890162744021073123829784752');
	// prettier-ignore
	const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3);
	// prettier-ignore
	const _5n = BigInt(5), _8n = BigInt(8);
	function ed25519_pow_2_252_3(x) {
	    // prettier-ignore
	    const _10n = BigInt(10), _20n = BigInt(20), _40n = BigInt(40), _80n = BigInt(80);
	    const P = ED25519_P;
	    const x2 = (x * x) % P;
	    const b2 = (x2 * x) % P; // x^3, 11
	    const b4 = ((0, modular_js_1.pow2)(b2, _2n, P) * b2) % P; // x^15, 1111
	    const b5 = ((0, modular_js_1.pow2)(b4, _1n, P) * x) % P; // x^31
	    const b10 = ((0, modular_js_1.pow2)(b5, _5n, P) * b5) % P;
	    const b20 = ((0, modular_js_1.pow2)(b10, _10n, P) * b10) % P;
	    const b40 = ((0, modular_js_1.pow2)(b20, _20n, P) * b20) % P;
	    const b80 = ((0, modular_js_1.pow2)(b40, _40n, P) * b40) % P;
	    const b160 = ((0, modular_js_1.pow2)(b80, _80n, P) * b80) % P;
	    const b240 = ((0, modular_js_1.pow2)(b160, _80n, P) * b80) % P;
	    const b250 = ((0, modular_js_1.pow2)(b240, _10n, P) * b10) % P;
	    const pow_p_5_8 = ((0, modular_js_1.pow2)(b250, _2n, P) * x) % P;
	    // ^ To pow to (p+3)/8, multiply it by x.
	    return { pow_p_5_8, b2 };
	}
	function adjustScalarBytes(bytes) {
	    // Section 5: For X25519, in order to decode 32 random bytes as an integer scalar,
	    // set the three least significant bits of the first byte
	    bytes[0] &= 248; // 0b1111_1000
	    // and the most significant bit of the last to zero,
	    bytes[31] &= 127; // 0b0111_1111
	    // set the second most significant bit of the last byte to 1
	    bytes[31] |= 64; // 0b0100_0000
	    return bytes;
	}
	// sqrt(u/v)
	function uvRatio(u, v) {
	    const P = ED25519_P;
	    const v3 = (0, modular_js_1.mod)(v * v * v, P); // v³
	    const v7 = (0, modular_js_1.mod)(v3 * v3 * v, P); // v⁷
	    // (p+3)/8 and (p-5)/8
	    const pow = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
	    let x = (0, modular_js_1.mod)(u * v3 * pow, P); // (uv³)(uv⁷)^(p-5)/8
	    const vx2 = (0, modular_js_1.mod)(v * x * x, P); // vx²
	    const root1 = x; // First root candidate
	    const root2 = (0, modular_js_1.mod)(x * ED25519_SQRT_M1, P); // Second root candidate
	    const useRoot1 = vx2 === u; // If vx² = u (mod p), x is a square root
	    const useRoot2 = vx2 === (0, modular_js_1.mod)(-u, P); // If vx² = -u, set x <-- x * 2^((p-1)/4)
	    const noRoot = vx2 === (0, modular_js_1.mod)(-u * ED25519_SQRT_M1, P); // There is no valid root, vx² = -u√(-1)
	    if (useRoot1)
	        x = root1;
	    if (useRoot2 || noRoot)
	        x = root2; // We return root2 anyway, for const-time
	    if ((0, modular_js_1.isNegativeLE)(x, P))
	        x = (0, modular_js_1.mod)(-x, P);
	    return { isValid: useRoot1 || useRoot2, value: x };
	}
	// Just in case
	exports.ED25519_TORSION_SUBGROUP = [
	    '0100000000000000000000000000000000000000000000000000000000000000',
	    'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a',
	    '0000000000000000000000000000000000000000000000000000000000000080',
	    '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05',
	    'ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f',
	    '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85',
	    '0000000000000000000000000000000000000000000000000000000000000000',
	    'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa',
	];
	const Fp = /* @__PURE__ */ (() => (0, modular_js_1.Field)(ED25519_P, undefined, true))();
	const ed25519Defaults = /* @__PURE__ */ (() => ({
	    // Param: a
	    a: BigInt(-1), // Fp.create(-1) is proper; our way still works and is faster
	    // d is equal to -121665/121666 over finite field.
	    // Negative number is P - number, and division is invert(number, P)
	    d: BigInt('37095705934669439343138083508754565189542113879843219016388785533085940283555'),
	    // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
	    Fp,
	    // Subgroup order: how many points curve has
	    // 2n**252n + 27742317777372353535851937790883648493n;
	    n: BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989'),
	    // Cofactor
	    h: _8n,
	    // Base point (x, y) aka generator point
	    Gx: BigInt('15112221349535400772501151409588531511454012693041857206046113283949847762202'),
	    Gy: BigInt('46316835694926478169428394003475163141307993866256225615783033603165251855960'),
	    hash: sha512_1.sha512,
	    randomBytes: utils_1.randomBytes,
	    adjustScalarBytes,
	    // dom2
	    // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
	    // Constant-time, u/√v
	    uvRatio,
	}))();
	/**
	 * ed25519 curve with EdDSA signatures.
	 * @example
	 * import { ed25519 } from '@noble/curves/ed25519';
	 * const priv = ed25519.utils.randomPrivateKey();
	 * const pub = ed25519.getPublicKey(priv);
	 * const msg = new TextEncoder().encode('hello');
	 * const sig = ed25519.sign(msg, priv);
	 * ed25519.verify(sig, msg, pub); // Default mode: follows ZIP215
	 * ed25519.verify(sig, msg, pub, { zip215: false }); // RFC8032 / FIPS 186-5
	 */
	exports.ed25519 = (() => (0, edwards_js_1.twistedEdwards)(ed25519Defaults))();
	function ed25519_domain(data, ctx, phflag) {
	    if (ctx.length > 255)
	        throw new Error('Context is too big');
	    return (0, utils_1.concatBytes)((0, utils_1.utf8ToBytes)('SigEd25519 no Ed25519 collisions'), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
	}
	exports.ed25519ctx = (() => (0, edwards_js_1.twistedEdwards)({
	    ...ed25519Defaults,
	    domain: ed25519_domain,
	}))();
	exports.ed25519ph = (() => (0, edwards_js_1.twistedEdwards)(Object.assign({}, ed25519Defaults, {
	    domain: ed25519_domain,
	    prehash: sha512_1.sha512,
	})))();
	/**
	 * ECDH using curve25519 aka x25519.
	 * @example
	 * import { x25519 } from '@noble/curves/ed25519';
	 * const priv = 'a546e36bf0527c9d3b16154b82465edd62144c0ac1fc5a18506a2244ba449ac4';
	 * const pub = 'e6db6867583030db3594c1a424b15f7c726624ec26b3353b10a903a6d0ab1c4c';
	 * x25519.getSharedSecret(priv, pub) === x25519.scalarMult(priv, pub); // aliases
	 * x25519.getPublicKey(priv) === x25519.scalarMultBase(priv);
	 * x25519.getPublicKey(x25519.utils.randomPrivateKey());
	 */
	exports.x25519 = (() => (0, montgomery_js_1.montgomery)({
	    P: ED25519_P,
	    a: BigInt(486662),
	    montgomeryBits: 255, // n is 253 bits
	    nByteLength: 32,
	    Gu: BigInt(9),
	    powPminus2: (x) => {
	        const P = ED25519_P;
	        // x^(p-2) aka x^(2^255-21)
	        const { pow_p_5_8, b2 } = ed25519_pow_2_252_3(x);
	        return (0, modular_js_1.mod)((0, modular_js_1.pow2)(pow_p_5_8, _3n, P) * b2, P);
	    },
	    adjustScalarBytes,
	    randomBytes: utils_1.randomBytes,
	}))();
	/**
	 * Converts ed25519 public key to x25519 public key. Uses formula:
	 * * `(u, v) = ((1+y)/(1-y), sqrt(-486664)*u/x)`
	 * * `(x, y) = (sqrt(-486664)*u/v, (u-1)/(u+1))`
	 * @example
	 *   const someonesPub = ed25519.getPublicKey(ed25519.utils.randomPrivateKey());
	 *   const aPriv = x25519.utils.randomPrivateKey();
	 *   x25519.getSharedSecret(aPriv, edwardsToMontgomeryPub(someonesPub))
	 */
	function edwardsToMontgomeryPub(edwardsPub) {
	    const { y } = exports.ed25519.ExtendedPoint.fromHex(edwardsPub);
	    const _1n = BigInt(1);
	    return Fp.toBytes(Fp.create((_1n + y) * Fp.inv(_1n - y)));
	}
	exports.edwardsToMontgomery = edwardsToMontgomeryPub; // deprecated
	/**
	 * Converts ed25519 secret key to x25519 secret key.
	 * @example
	 *   const someonesPub = x25519.getPublicKey(x25519.utils.randomPrivateKey());
	 *   const aPriv = ed25519.utils.randomPrivateKey();
	 *   x25519.getSharedSecret(edwardsToMontgomeryPriv(aPriv), someonesPub)
	 */
	function edwardsToMontgomeryPriv(edwardsPriv) {
	    const hashed = ed25519Defaults.hash(edwardsPriv.subarray(0, 32));
	    return ed25519Defaults.adjustScalarBytes(hashed).subarray(0, 32);
	}
	// Hash To Curve Elligator2 Map (NOTE: different from ristretto255 elligator)
	// NOTE: very important part is usage of FpSqrtEven for ELL2_C1_EDWARDS, since
	// SageMath returns different root first and everything falls apart
	const ELL2_C1 = /* @__PURE__ */ (() => (Fp.ORDER + _3n) / _8n)(); // 1. c1 = (q + 3) / 8       # Integer arithmetic
	const ELL2_C2 = /* @__PURE__ */ (() => Fp.pow(_2n, ELL2_C1))(); // 2. c2 = 2^c1
	const ELL2_C3 = /* @__PURE__ */ (() => Fp.sqrt(Fp.neg(Fp.ONE)))(); // 3. c3 = sqrt(-1)
	// prettier-ignore
	function map_to_curve_elligator2_curve25519(u) {
	    const ELL2_C4 = (Fp.ORDER - _5n) / _8n; // 4. c4 = (q - 5) / 8       # Integer arithmetic
	    const ELL2_J = BigInt(486662);
	    let tv1 = Fp.sqr(u); //  1.  tv1 = u^2
	    tv1 = Fp.mul(tv1, _2n); //  2.  tv1 = 2 * tv1
	    let xd = Fp.add(tv1, Fp.ONE); //  3.   xd = tv1 + 1         # Nonzero: -1 is square (mod p), tv1 is not
	    let x1n = Fp.neg(ELL2_J); //  4.  x1n = -J              # x1 = x1n / xd = -J / (1 + 2 * u^2)
	    let tv2 = Fp.sqr(xd); //  5.  tv2 = xd^2
	    let gxd = Fp.mul(tv2, xd); //  6.  gxd = tv2 * xd        # gxd = xd^3
	    let gx1 = Fp.mul(tv1, ELL2_J); //  7.  gx1 = J * tv1         # x1n + J * xd
	    gx1 = Fp.mul(gx1, x1n); //  8.  gx1 = gx1 * x1n       # x1n^2 + J * x1n * xd
	    gx1 = Fp.add(gx1, tv2); //  9.  gx1 = gx1 + tv2       # x1n^2 + J * x1n * xd + xd^2
	    gx1 = Fp.mul(gx1, x1n); //  10. gx1 = gx1 * x1n       # x1n^3 + J * x1n^2 * xd + x1n * xd^2
	    let tv3 = Fp.sqr(gxd); //  11. tv3 = gxd^2
	    tv2 = Fp.sqr(tv3); //  12. tv2 = tv3^2           # gxd^4
	    tv3 = Fp.mul(tv3, gxd); //  13. tv3 = tv3 * gxd       # gxd^3
	    tv3 = Fp.mul(tv3, gx1); //  14. tv3 = tv3 * gx1       # gx1 * gxd^3
	    tv2 = Fp.mul(tv2, tv3); //  15. tv2 = tv2 * tv3       # gx1 * gxd^7
	    let y11 = Fp.pow(tv2, ELL2_C4); //  16. y11 = tv2^c4        # (gx1 * gxd^7)^((p - 5) / 8)
	    y11 = Fp.mul(y11, tv3); //  17. y11 = y11 * tv3       # gx1*gxd^3*(gx1*gxd^7)^((p-5)/8)
	    let y12 = Fp.mul(y11, ELL2_C3); //  18. y12 = y11 * c3
	    tv2 = Fp.sqr(y11); //  19. tv2 = y11^2
	    tv2 = Fp.mul(tv2, gxd); //  20. tv2 = tv2 * gxd
	    let e1 = Fp.eql(tv2, gx1); //  21.  e1 = tv2 == gx1
	    let y1 = Fp.cmov(y12, y11, e1); //  22.  y1 = CMOV(y12, y11, e1)  # If g(x1) is square, this is its sqrt
	    let x2n = Fp.mul(x1n, tv1); //  23. x2n = x1n * tv1       # x2 = x2n / xd = 2 * u^2 * x1n / xd
	    let y21 = Fp.mul(y11, u); //  24. y21 = y11 * u
	    y21 = Fp.mul(y21, ELL2_C2); //  25. y21 = y21 * c2
	    let y22 = Fp.mul(y21, ELL2_C3); //  26. y22 = y21 * c3
	    let gx2 = Fp.mul(gx1, tv1); //  27. gx2 = gx1 * tv1       # g(x2) = gx2 / gxd = 2 * u^2 * g(x1)
	    tv2 = Fp.sqr(y21); //  28. tv2 = y21^2
	    tv2 = Fp.mul(tv2, gxd); //  29. tv2 = tv2 * gxd
	    let e2 = Fp.eql(tv2, gx2); //  30.  e2 = tv2 == gx2
	    let y2 = Fp.cmov(y22, y21, e2); //  31.  y2 = CMOV(y22, y21, e2)  # If g(x2) is square, this is its sqrt
	    tv2 = Fp.sqr(y1); //  32. tv2 = y1^2
	    tv2 = Fp.mul(tv2, gxd); //  33. tv2 = tv2 * gxd
	    let e3 = Fp.eql(tv2, gx1); //  34.  e3 = tv2 == gx1
	    let xn = Fp.cmov(x2n, x1n, e3); //  35.  xn = CMOV(x2n, x1n, e3)  # If e3, x = x1, else x = x2
	    let y = Fp.cmov(y2, y1, e3); //  36.   y = CMOV(y2, y1, e3)    # If e3, y = y1, else y = y2
	    let e4 = Fp.isOdd(y); //  37.  e4 = sgn0(y) == 1        # Fix sign of y
	    y = Fp.cmov(y, Fp.neg(y), e3 !== e4); //  38.   y = CMOV(y, -y, e3 XOR e4)
	    return { xMn: xn, xMd: xd, yMn: y, yMd: _1n }; //  39. return (xn, xd, y, 1)
	}
	const ELL2_C1_EDWARDS = /* @__PURE__ */ (() => (0, modular_js_1.FpSqrtEven)(Fp, Fp.neg(BigInt(486664))))(); // sgn0(c1) MUST equal 0
	function map_to_curve_elligator2_edwards25519(u) {
	    const { xMn, xMd, yMn, yMd } = map_to_curve_elligator2_curve25519(u); //  1.  (xMn, xMd, yMn, yMd) =
	    // map_to_curve_elligator2_curve25519(u)
	    let xn = Fp.mul(xMn, yMd); //  2.  xn = xMn * yMd
	    xn = Fp.mul(xn, ELL2_C1_EDWARDS); //  3.  xn = xn * c1
	    let xd = Fp.mul(xMd, yMn); //  4.  xd = xMd * yMn    # xn / xd = c1 * xM / yM
	    let yn = Fp.sub(xMn, xMd); //  5.  yn = xMn - xMd
	    let yd = Fp.add(xMn, xMd); //  6.  yd = xMn + xMd    # (n / d - 1) / (n / d + 1) = (n - d) / (n + d)
	    let tv1 = Fp.mul(xd, yd); //  7. tv1 = xd * yd
	    let e = Fp.eql(tv1, Fp.ZERO); //  8.   e = tv1 == 0
	    xn = Fp.cmov(xn, Fp.ZERO, e); //  9.  xn = CMOV(xn, 0, e)
	    xd = Fp.cmov(xd, Fp.ONE, e); //  10. xd = CMOV(xd, 1, e)
	    yn = Fp.cmov(yn, Fp.ONE, e); //  11. yn = CMOV(yn, 1, e)
	    yd = Fp.cmov(yd, Fp.ONE, e); //  12. yd = CMOV(yd, 1, e)
	    const inv = Fp.invertBatch([xd, yd]); // batch division
	    return { x: Fp.mul(xn, inv[0]), y: Fp.mul(yn, inv[1]) }; //  13. return (xn, xd, yn, yd)
	}
	const htf = /* @__PURE__ */ (() => (0, hash_to_curve_js_1.createHasher)(exports.ed25519.ExtendedPoint, (scalars) => map_to_curve_elligator2_edwards25519(scalars[0]), {
	    DST: 'edwards25519_XMD:SHA-512_ELL2_RO_',
	    encodeDST: 'edwards25519_XMD:SHA-512_ELL2_NU_',
	    p: Fp.ORDER,
	    m: 1,
	    k: 128,
	    expand: 'xmd',
	    hash: sha512_1.sha512,
	}))();
	exports.hashToCurve = (() => htf.hashToCurve)();
	exports.encodeToCurve = (() => htf.encodeToCurve)();
	function assertRstPoint(other) {
	    if (!(other instanceof RistPoint))
	        throw new Error('RistrettoPoint expected');
	}
	// √(-1) aka √(a) aka 2^((p-1)/4)
	const SQRT_M1 = ED25519_SQRT_M1;
	// √(ad - 1)
	const SQRT_AD_MINUS_ONE = /* @__PURE__ */ BigInt('25063068953384623474111414158702152701244531502492656460079210482610430750235');
	// 1 / √(a-d)
	const INVSQRT_A_MINUS_D = /* @__PURE__ */ BigInt('54469307008909316920995813868745141605393597292927456921205312896311721017578');
	// 1-d²
	const ONE_MINUS_D_SQ = /* @__PURE__ */ BigInt('1159843021668779879193775521855586647937357759715417654439879720876111806838');
	// (d-1)²
	const D_MINUS_ONE_SQ = /* @__PURE__ */ BigInt('40440834346308536858101042469323190826248399146238708352240133220865137265952');
	// Calculates 1/√(number)
	const invertSqrt = (number) => uvRatio(_1n, number);
	const MAX_255B = /* @__PURE__ */ BigInt('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
	const bytes255ToNumberLE = (bytes) => exports.ed25519.CURVE.Fp.create((0, utils_js_1.bytesToNumberLE)(bytes) & MAX_255B);
	// Computes Elligator map for Ristretto
	// https://ristretto.group/formulas/elligator.html
	function calcElligatorRistrettoMap(r0) {
	    const { d } = exports.ed25519.CURVE;
	    const P = exports.ed25519.CURVE.Fp.ORDER;
	    const mod = exports.ed25519.CURVE.Fp.create;
	    const r = mod(SQRT_M1 * r0 * r0); // 1
	    const Ns = mod((r + _1n) * ONE_MINUS_D_SQ); // 2
	    let c = BigInt(-1); // 3
	    const D = mod((c - d * r) * mod(r + d)); // 4
	    let { isValid: Ns_D_is_sq, value: s } = uvRatio(Ns, D); // 5
	    let s_ = mod(s * r0); // 6
	    if (!(0, modular_js_1.isNegativeLE)(s_, P))
	        s_ = mod(-s_);
	    if (!Ns_D_is_sq)
	        s = s_; // 7
	    if (!Ns_D_is_sq)
	        c = r; // 8
	    const Nt = mod(c * (r - _1n) * D_MINUS_ONE_SQ - D); // 9
	    const s2 = s * s;
	    const W0 = mod((s + s) * D); // 10
	    const W1 = mod(Nt * SQRT_AD_MINUS_ONE); // 11
	    const W2 = mod(_1n - s2); // 12
	    const W3 = mod(_1n + s2); // 13
	    return new exports.ed25519.ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
	}
	/**
	 * Each ed25519/ExtendedPoint has 8 different equivalent points. This can be
	 * a source of bugs for protocols like ring signatures. Ristretto was created to solve this.
	 * Ristretto point operates in X:Y:Z:T extended coordinates like ExtendedPoint,
	 * but it should work in its own namespace: do not combine those two.
	 * https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-ristretto255-decaf448
	 */
	class RistPoint {
	    // Private property to discourage combining ExtendedPoint + RistrettoPoint
	    // Always use Ristretto encoding/decoding instead.
	    constructor(ep) {
	        this.ep = ep;
	    }
	    static fromAffine(ap) {
	        return new RistPoint(exports.ed25519.ExtendedPoint.fromAffine(ap));
	    }
	    /**
	     * Takes uniform output of 64-byte hash function like sha512 and converts it to `RistrettoPoint`.
	     * The hash-to-group operation applies Elligator twice and adds the results.
	     * **Note:** this is one-way map, there is no conversion from point to hash.
	     * https://ristretto.group/formulas/elligator.html
	     * @param hex 64-byte output of a hash function
	     */
	    static hashToCurve(hex) {
	        hex = (0, utils_js_1.ensureBytes)('ristrettoHash', hex, 64);
	        const r1 = bytes255ToNumberLE(hex.slice(0, 32));
	        const R1 = calcElligatorRistrettoMap(r1);
	        const r2 = bytes255ToNumberLE(hex.slice(32, 64));
	        const R2 = calcElligatorRistrettoMap(r2);
	        return new RistPoint(R1.add(R2));
	    }
	    /**
	     * Converts ristretto-encoded string to ristretto point.
	     * https://ristretto.group/formulas/decoding.html
	     * @param hex Ristretto-encoded 32 bytes. Not every 32-byte string is valid ristretto encoding
	     */
	    static fromHex(hex) {
	        hex = (0, utils_js_1.ensureBytes)('ristrettoHex', hex, 32);
	        const { a, d } = exports.ed25519.CURVE;
	        const P = exports.ed25519.CURVE.Fp.ORDER;
	        const mod = exports.ed25519.CURVE.Fp.create;
	        const emsg = 'RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint';
	        const s = bytes255ToNumberLE(hex);
	        // 1. Check that s_bytes is the canonical encoding of a field element, or else abort.
	        // 3. Check that s is non-negative, or else abort
	        if (!(0, utils_js_1.equalBytes)((0, utils_js_1.numberToBytesLE)(s, 32), hex) || (0, modular_js_1.isNegativeLE)(s, P))
	            throw new Error(emsg);
	        const s2 = mod(s * s);
	        const u1 = mod(_1n + a * s2); // 4 (a is -1)
	        const u2 = mod(_1n - a * s2); // 5
	        const u1_2 = mod(u1 * u1);
	        const u2_2 = mod(u2 * u2);
	        const v = mod(a * d * u1_2 - u2_2); // 6
	        const { isValid, value: I } = invertSqrt(mod(v * u2_2)); // 7
	        const Dx = mod(I * u2); // 8
	        const Dy = mod(I * Dx * v); // 9
	        let x = mod((s + s) * Dx); // 10
	        if ((0, modular_js_1.isNegativeLE)(x, P))
	            x = mod(-x); // 10
	        const y = mod(u1 * Dy); // 11
	        const t = mod(x * y); // 12
	        if (!isValid || (0, modular_js_1.isNegativeLE)(t, P) || y === _0n)
	            throw new Error(emsg);
	        return new RistPoint(new exports.ed25519.ExtendedPoint(x, y, _1n, t));
	    }
	    static msm(points, scalars) {
	        const Fn = (0, modular_js_1.Field)(exports.ed25519.CURVE.n, exports.ed25519.CURVE.nBitLength);
	        return (0, curve_js_1.pippenger)(RistPoint, Fn, points, scalars);
	    }
	    /**
	     * Encodes ristretto point to Uint8Array.
	     * https://ristretto.group/formulas/encoding.html
	     */
	    toRawBytes() {
	        let { ex: x, ey: y, ez: z, et: t } = this.ep;
	        const P = exports.ed25519.CURVE.Fp.ORDER;
	        const mod = exports.ed25519.CURVE.Fp.create;
	        const u1 = mod(mod(z + y) * mod(z - y)); // 1
	        const u2 = mod(x * y); // 2
	        // Square root always exists
	        const u2sq = mod(u2 * u2);
	        const { value: invsqrt } = invertSqrt(mod(u1 * u2sq)); // 3
	        const D1 = mod(invsqrt * u1); // 4
	        const D2 = mod(invsqrt * u2); // 5
	        const zInv = mod(D1 * D2 * t); // 6
	        let D; // 7
	        if ((0, modular_js_1.isNegativeLE)(t * zInv, P)) {
	            let _x = mod(y * SQRT_M1);
	            let _y = mod(x * SQRT_M1);
	            x = _x;
	            y = _y;
	            D = mod(D1 * INVSQRT_A_MINUS_D);
	        }
	        else {
	            D = D2; // 8
	        }
	        if ((0, modular_js_1.isNegativeLE)(x * zInv, P))
	            y = mod(-y); // 9
	        let s = mod((z - y) * D); // 10 (check footer's note, no sqrt(-a))
	        if ((0, modular_js_1.isNegativeLE)(s, P))
	            s = mod(-s);
	        return (0, utils_js_1.numberToBytesLE)(s, 32); // 11
	    }
	    toHex() {
	        return (0, utils_js_1.bytesToHex)(this.toRawBytes());
	    }
	    toString() {
	        return this.toHex();
	    }
	    // Compare one point to another.
	    equals(other) {
	        assertRstPoint(other);
	        const { ex: X1, ey: Y1 } = this.ep;
	        const { ex: X2, ey: Y2 } = other.ep;
	        const mod = exports.ed25519.CURVE.Fp.create;
	        // (x1 * y2 == y1 * x2) | (y1 * y2 == x1 * x2)
	        const one = mod(X1 * Y2) === mod(Y1 * X2);
	        const two = mod(Y1 * Y2) === mod(X1 * X2);
	        return one || two;
	    }
	    add(other) {
	        assertRstPoint(other);
	        return new RistPoint(this.ep.add(other.ep));
	    }
	    subtract(other) {
	        assertRstPoint(other);
	        return new RistPoint(this.ep.subtract(other.ep));
	    }
	    multiply(scalar) {
	        return new RistPoint(this.ep.multiply(scalar));
	    }
	    multiplyUnsafe(scalar) {
	        return new RistPoint(this.ep.multiplyUnsafe(scalar));
	    }
	    double() {
	        return new RistPoint(this.ep.double());
	    }
	    negate() {
	        return new RistPoint(this.ep.negate());
	    }
	}
	exports.RistrettoPoint = (() => {
	    if (!RistPoint.BASE)
	        RistPoint.BASE = new RistPoint(exports.ed25519.ExtendedPoint.BASE);
	    if (!RistPoint.ZERO)
	        RistPoint.ZERO = new RistPoint(exports.ed25519.ExtendedPoint.ZERO);
	    return RistPoint;
	})();
	// Hashing to ristretto255. https://www.rfc-editor.org/rfc/rfc9380#appendix-B
	const hashToRistretto255 = (msg, options) => {
	    const d = options.DST;
	    const DST = typeof d === 'string' ? (0, utils_1.utf8ToBytes)(d) : d;
	    const uniform_bytes = (0, hash_to_curve_js_1.expand_message_xmd)(msg, DST, 64, sha512_1.sha512);
	    const P = RistPoint.hashToCurve(uniform_bytes);
	    return P;
	};
	exports.hashToRistretto255 = hashToRistretto255;
	exports.hash_to_ristretto255 = exports.hashToRistretto255; // legacy
	
} (ed25519));

var randombytes = require$$0$3.randomBytes;

var public_key = {};

var secp256k1$1 = {exports: {}};

var nodeGypBuild$1 = {exports: {}};

var nodeGypBuild;
var hasRequiredNodeGypBuild$1;

function requireNodeGypBuild$1 () {
	if (hasRequiredNodeGypBuild$1) return nodeGypBuild;
	hasRequiredNodeGypBuild$1 = 1;
	var fs = require$$0$5;
	var path = require$$0$4;
	var os = require$$2;

	// Workaround to fix webpack's build warnings: 'the request of a dependency is an expression'
	var runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : commonjsRequire; // eslint-disable-line

	var vars = (process.config && process.config.variables) || {};
	var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
	var abi = process.versions.modules; // TODO: support old node where this is undef
	var runtime = isElectron() ? 'electron' : (isNwjs() ? 'node-webkit' : 'node');

	var arch = process.env.npm_config_arch || os.arch();
	var platform = process.env.npm_config_platform || os.platform();
	var libc = process.env.LIBC || (isAlpine(platform) ? 'musl' : 'glibc');
	var armv = process.env.ARM_VERSION || (arch === 'arm64' ? '8' : vars.arm_version) || '';
	var uv = (process.versions.uv || '').split('.')[0];

	nodeGypBuild = load;

	function load (dir) {
	  return runtimeRequire(load.resolve(dir))
	}

	load.resolve = load.path = function (dir) {
	  dir = path.resolve(dir || '.');

	  try {
	    var name = runtimeRequire(path.join(dir, 'package.json')).name.toUpperCase().replace(/-/g, '_');
	    if (process.env[name + '_PREBUILD']) dir = process.env[name + '_PREBUILD'];
	  } catch (err) {}

	  if (!prebuildsOnly) {
	    var release = getFirst(path.join(dir, 'build/Release'), matchBuild);
	    if (release) return release

	    var debug = getFirst(path.join(dir, 'build/Debug'), matchBuild);
	    if (debug) return debug
	  }

	  var prebuild = resolve(dir);
	  if (prebuild) return prebuild

	  var nearby = resolve(path.dirname(process.execPath));
	  if (nearby) return nearby

	  var target = [
	    'platform=' + platform,
	    'arch=' + arch,
	    'runtime=' + runtime,
	    'abi=' + abi,
	    'uv=' + uv,
	    armv ? 'armv=' + armv : '',
	    'libc=' + libc,
	    'node=' + process.versions.node,
	    process.versions.electron ? 'electron=' + process.versions.electron : '',
	    typeof __webpack_require__ === 'function' ? 'webpack=true' : '' // eslint-disable-line
	  ].filter(Boolean).join(' ');

	  throw new Error('No native build was found for ' + target + '\n    loaded from: ' + dir + '\n')

	  function resolve (dir) {
	    // Find matching "prebuilds/<platform>-<arch>" directory
	    var tuples = readdirSync(path.join(dir, 'prebuilds')).map(parseTuple);
	    var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
	    if (!tuple) return

	    // Find most specific flavor first
	    var prebuilds = path.join(dir, 'prebuilds', tuple.name);
	    var parsed = readdirSync(prebuilds).map(parseTags);
	    var candidates = parsed.filter(matchTags(runtime, abi));
	    var winner = candidates.sort(compareTags(runtime))[0];
	    if (winner) return path.join(prebuilds, winner.file)
	  }
	};

	function readdirSync (dir) {
	  try {
	    return fs.readdirSync(dir)
	  } catch (err) {
	    return []
	  }
	}

	function getFirst (dir, filter) {
	  var files = readdirSync(dir).filter(filter);
	  return files[0] && path.join(dir, files[0])
	}

	function matchBuild (name) {
	  return /\.node$/.test(name)
	}

	function parseTuple (name) {
	  // Example: darwin-x64+arm64
	  var arr = name.split('-');
	  if (arr.length !== 2) return

	  var platform = arr[0];
	  var architectures = arr[1].split('+');

	  if (!platform) return
	  if (!architectures.length) return
	  if (!architectures.every(Boolean)) return

	  return { name, platform, architectures }
	}

	function matchTuple (platform, arch) {
	  return function (tuple) {
	    if (tuple == null) return false
	    if (tuple.platform !== platform) return false
	    return tuple.architectures.includes(arch)
	  }
	}

	function compareTuples (a, b) {
	  // Prefer single-arch prebuilds over multi-arch
	  return a.architectures.length - b.architectures.length
	}

	function parseTags (file) {
	  var arr = file.split('.');
	  var extension = arr.pop();
	  var tags = { file: file, specificity: 0 };

	  if (extension !== 'node') return

	  for (var i = 0; i < arr.length; i++) {
	    var tag = arr[i];

	    if (tag === 'node' || tag === 'electron' || tag === 'node-webkit') {
	      tags.runtime = tag;
	    } else if (tag === 'napi') {
	      tags.napi = true;
	    } else if (tag.slice(0, 3) === 'abi') {
	      tags.abi = tag.slice(3);
	    } else if (tag.slice(0, 2) === 'uv') {
	      tags.uv = tag.slice(2);
	    } else if (tag.slice(0, 4) === 'armv') {
	      tags.armv = tag.slice(4);
	    } else if (tag === 'glibc' || tag === 'musl') {
	      tags.libc = tag;
	    } else {
	      continue
	    }

	    tags.specificity++;
	  }

	  return tags
	}

	function matchTags (runtime, abi) {
	  return function (tags) {
	    if (tags == null) return false
	    if (tags.runtime && tags.runtime !== runtime && !runtimeAgnostic(tags)) return false
	    if (tags.abi && tags.abi !== abi && !tags.napi) return false
	    if (tags.uv && tags.uv !== uv) return false
	    if (tags.armv && tags.armv !== armv) return false
	    if (tags.libc && tags.libc !== libc) return false

	    return true
	  }
	}

	function runtimeAgnostic (tags) {
	  return tags.runtime === 'node' && tags.napi
	}

	function compareTags (runtime) {
	  // Precedence: non-agnostic runtime, abi over napi, then by specificity.
	  return function (a, b) {
	    if (a.runtime !== b.runtime) {
	      return a.runtime === runtime ? -1 : 1
	    } else if (a.abi !== b.abi) {
	      return a.abi ? -1 : 1
	    } else if (a.specificity !== b.specificity) {
	      return a.specificity > b.specificity ? -1 : 1
	    } else {
	      return 0
	    }
	  }
	}

	function isNwjs () {
	  return !!(process.versions && process.versions.nw)
	}

	function isElectron () {
	  if (process.versions && process.versions.electron) return true
	  if (process.env.ELECTRON_RUN_AS_NODE) return true
	  return typeof window !== 'undefined' && window.process && window.process.type === 'renderer'
	}

	function isAlpine (platform) {
	  return platform === 'linux' && fs.existsSync('/etc/alpine-release')
	}

	// Exposed for unit tests
	// TODO: move to lib
	load.parseTags = parseTags;
	load.matchTags = matchTags;
	load.compareTags = compareTags;
	load.parseTuple = parseTuple;
	load.matchTuple = matchTuple;
	load.compareTuples = compareTuples;
	return nodeGypBuild;
}

var hasRequiredNodeGypBuild;

function requireNodeGypBuild () {
	if (hasRequiredNodeGypBuild) return nodeGypBuild$1.exports;
	hasRequiredNodeGypBuild = 1;
	const runtimeRequire = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : commonjsRequire; // eslint-disable-line
	if (typeof runtimeRequire.addon === 'function') { // if the platform supports native resolving prefer that
	  nodeGypBuild$1.exports = runtimeRequire.addon.bind(runtimeRequire);
	} else { // else use the runtime version here
	  nodeGypBuild$1.exports = requireNodeGypBuild$1();
	}
	return nodeGypBuild$1.exports;
}

var lib;
var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	const errors = {
	  IMPOSSIBLE_CASE: 'Impossible case. Please create issue.',
	  TWEAK_ADD:
	    'The tweak was out of range or the resulted private key is invalid',
	  TWEAK_MUL: 'The tweak was out of range or equal to zero',
	  CONTEXT_RANDOMIZE_UNKNOW: 'Unknow error on context randomization',
	  SECKEY_INVALID: 'Private Key is invalid',
	  PUBKEY_PARSE: 'Public Key could not be parsed',
	  PUBKEY_SERIALIZE: 'Public Key serialization error',
	  PUBKEY_COMBINE: 'The sum of the public keys is not valid',
	  SIG_PARSE: 'Signature could not be parsed',
	  SIGN: 'The nonce generation function failed, or the private key was invalid',
	  RECOVER: 'Public key could not be recover',
	  ECDH: 'Scalar was invalid (zero or overflow)'
	};

	function assert (cond, msg) {
	  if (!cond) throw new Error(msg)
	}

	function isUint8Array (name, value, length) {
	  assert(value instanceof Uint8Array, `Expected ${name} to be an Uint8Array`);

	  if (length !== undefined) {
	    if (Array.isArray(length)) {
	      const numbers = length.join(', ');
	      const msg = `Expected ${name} to be an Uint8Array with length [${numbers}]`;
	      assert(length.includes(value.length), msg);
	    } else {
	      const msg = `Expected ${name} to be an Uint8Array with length ${length}`;
	      assert(value.length === length, msg);
	    }
	  }
	}

	function isCompressed (value) {
	  assert(toTypeString(value) === 'Boolean', 'Expected compressed to be a Boolean');
	}

	function getAssertedOutput (output = (len) => new Uint8Array(len), length) {
	  if (typeof output === 'function') output = output(length);
	  isUint8Array('output', output, length);
	  return output
	}

	function toTypeString (value) {
	  return Object.prototype.toString.call(value).slice(8, -1)
	}

	lib = (secp256k1) => {
	  return {
	    contextRandomize (seed) {
	      assert(
	        seed === null || seed instanceof Uint8Array,
	        'Expected seed to be an Uint8Array or null'
	      );
	      if (seed !== null) isUint8Array('seed', seed, 32);

	      switch (secp256k1.contextRandomize(seed)) {
	        case 1:
	          throw new Error(errors.CONTEXT_RANDOMIZE_UNKNOW)
	      }
	    },

	    privateKeyVerify (seckey) {
	      isUint8Array('private key', seckey, 32);

	      return secp256k1.privateKeyVerify(seckey) === 0
	    },

	    privateKeyNegate (seckey) {
	      isUint8Array('private key', seckey, 32);

	      switch (secp256k1.privateKeyNegate(seckey)) {
	        case 0:
	          return seckey
	        case 1:
	          throw new Error(errors.IMPOSSIBLE_CASE)
	      }
	    },

	    privateKeyTweakAdd (seckey, tweak) {
	      isUint8Array('private key', seckey, 32);
	      isUint8Array('tweak', tweak, 32);

	      switch (secp256k1.privateKeyTweakAdd(seckey, tweak)) {
	        case 0:
	          return seckey
	        case 1:
	          throw new Error(errors.TWEAK_ADD)
	      }
	    },

	    privateKeyTweakMul (seckey, tweak) {
	      isUint8Array('private key', seckey, 32);
	      isUint8Array('tweak', tweak, 32);

	      switch (secp256k1.privateKeyTweakMul(seckey, tweak)) {
	        case 0:
	          return seckey
	        case 1:
	          throw new Error(errors.TWEAK_MUL)
	      }
	    },

	    publicKeyVerify (pubkey) {
	      isUint8Array('public key', pubkey, [33, 65]);

	      return secp256k1.publicKeyVerify(pubkey) === 0
	    },

	    publicKeyCreate (seckey, compressed = true, output) {
	      isUint8Array('private key', seckey, 32);
	      isCompressed(compressed);
	      output = getAssertedOutput(output, compressed ? 33 : 65);

	      switch (secp256k1.publicKeyCreate(output, seckey)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.SECKEY_INVALID)
	        case 2:
	          throw new Error(errors.PUBKEY_SERIALIZE)
	      }
	    },

	    publicKeyConvert (pubkey, compressed = true, output) {
	      isUint8Array('public key', pubkey, [33, 65]);
	      isCompressed(compressed);
	      output = getAssertedOutput(output, compressed ? 33 : 65);

	      switch (secp256k1.publicKeyConvert(output, pubkey)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.PUBKEY_PARSE)
	        case 2:
	          throw new Error(errors.PUBKEY_SERIALIZE)
	      }
	    },

	    publicKeyNegate (pubkey, compressed = true, output) {
	      isUint8Array('public key', pubkey, [33, 65]);
	      isCompressed(compressed);
	      output = getAssertedOutput(output, compressed ? 33 : 65);

	      switch (secp256k1.publicKeyNegate(output, pubkey)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.PUBKEY_PARSE)
	        case 2:
	          throw new Error(errors.IMPOSSIBLE_CASE)
	        case 3:
	          throw new Error(errors.PUBKEY_SERIALIZE)
	      }
	    },

	    publicKeyCombine (pubkeys, compressed = true, output) {
	      assert(Array.isArray(pubkeys), 'Expected public keys to be an Array');
	      assert(pubkeys.length > 0, 'Expected public keys array will have more than zero items');
	      for (const pubkey of pubkeys) {
	        isUint8Array('public key', pubkey, [33, 65]);
	      }
	      isCompressed(compressed);
	      output = getAssertedOutput(output, compressed ? 33 : 65);

	      switch (secp256k1.publicKeyCombine(output, pubkeys)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.PUBKEY_PARSE)
	        case 2:
	          throw new Error(errors.PUBKEY_COMBINE)
	        case 3:
	          throw new Error(errors.PUBKEY_SERIALIZE)
	      }
	    },

	    publicKeyTweakAdd (pubkey, tweak, compressed = true, output) {
	      isUint8Array('public key', pubkey, [33, 65]);
	      isUint8Array('tweak', tweak, 32);
	      isCompressed(compressed);
	      output = getAssertedOutput(output, compressed ? 33 : 65);

	      switch (secp256k1.publicKeyTweakAdd(output, pubkey, tweak)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.PUBKEY_PARSE)
	        case 2:
	          throw new Error(errors.TWEAK_ADD)
	      }
	    },

	    publicKeyTweakMul (pubkey, tweak, compressed = true, output) {
	      isUint8Array('public key', pubkey, [33, 65]);
	      isUint8Array('tweak', tweak, 32);
	      isCompressed(compressed);
	      output = getAssertedOutput(output, compressed ? 33 : 65);

	      switch (secp256k1.publicKeyTweakMul(output, pubkey, tweak)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.PUBKEY_PARSE)
	        case 2:
	          throw new Error(errors.TWEAK_MUL)
	      }
	    },

	    signatureNormalize (sig) {
	      isUint8Array('signature', sig, 64);

	      switch (secp256k1.signatureNormalize(sig)) {
	        case 0:
	          return sig
	        case 1:
	          throw new Error(errors.SIG_PARSE)
	      }
	    },

	    signatureExport (sig, output) {
	      isUint8Array('signature', sig, 64);
	      output = getAssertedOutput(output, 72);

	      const obj = { output, outputlen: 72 };
	      switch (secp256k1.signatureExport(obj, sig)) {
	        case 0:
	          return output.slice(0, obj.outputlen)
	        case 1:
	          throw new Error(errors.SIG_PARSE)
	        case 2:
	          throw new Error(errors.IMPOSSIBLE_CASE)
	      }
	    },

	    signatureImport (sig, output) {
	      isUint8Array('signature', sig);
	      output = getAssertedOutput(output, 64);

	      switch (secp256k1.signatureImport(output, sig)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.SIG_PARSE)
	        case 2:
	          throw new Error(errors.IMPOSSIBLE_CASE)
	      }
	    },

	    ecdsaSign (msg32, seckey, options = {}, output) {
	      isUint8Array('message', msg32, 32);
	      isUint8Array('private key', seckey, 32);
	      assert(toTypeString(options) === 'Object', 'Expected options to be an Object');
	      if (options.data !== undefined) isUint8Array('options.data', options.data);
	      if (options.noncefn !== undefined) assert(toTypeString(options.noncefn) === 'Function', 'Expected options.noncefn to be a Function');
	      output = getAssertedOutput(output, 64);

	      const obj = { signature: output, recid: null };
	      switch (secp256k1.ecdsaSign(obj, msg32, seckey, options.data, options.noncefn)) {
	        case 0:
	          return obj
	        case 1:
	          throw new Error(errors.SIGN)
	        case 2:
	          throw new Error(errors.IMPOSSIBLE_CASE)
	      }
	    },

	    ecdsaVerify (sig, msg32, pubkey) {
	      isUint8Array('signature', sig, 64);
	      isUint8Array('message', msg32, 32);
	      isUint8Array('public key', pubkey, [33, 65]);

	      switch (secp256k1.ecdsaVerify(sig, msg32, pubkey)) {
	        case 0:
	          return true
	        case 3:
	          return false
	        case 1:
	          throw new Error(errors.SIG_PARSE)
	        case 2:
	          throw new Error(errors.PUBKEY_PARSE)
	      }
	    },

	    ecdsaRecover (sig, recid, msg32, compressed = true, output) {
	      isUint8Array('signature', sig, 64);
	      assert(
	        toTypeString(recid) === 'Number' &&
	          recid >= 0 &&
	          recid <= 3,
	        'Expected recovery id to be a Number within interval [0, 3]'
	      );
	      isUint8Array('message', msg32, 32);
	      isCompressed(compressed);
	      output = getAssertedOutput(output, compressed ? 33 : 65);

	      switch (secp256k1.ecdsaRecover(output, sig, recid, msg32)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.SIG_PARSE)
	        case 2:
	          throw new Error(errors.RECOVER)
	        case 3:
	          throw new Error(errors.IMPOSSIBLE_CASE)
	      }
	    },

	    ecdh (pubkey, seckey, options = {}, output) {
	      isUint8Array('public key', pubkey, [33, 65]);
	      isUint8Array('private key', seckey, 32);
	      assert(toTypeString(options) === 'Object', 'Expected options to be an Object');
	      if (options.data !== undefined) isUint8Array('options.data', options.data);
	      if (options.hashfn !== undefined) {
	        assert(toTypeString(options.hashfn) === 'Function', 'Expected options.hashfn to be a Function');
	        if (options.xbuf !== undefined) isUint8Array('options.xbuf', options.xbuf, 32);
	        if (options.ybuf !== undefined) isUint8Array('options.ybuf', options.ybuf, 32);
	        isUint8Array('output', output);
	      } else {
	        output = getAssertedOutput(output, 32);
	      }

	      switch (secp256k1.ecdh(output, pubkey, seckey, options.data, options.hashfn, options.xbuf, options.ybuf)) {
	        case 0:
	          return output
	        case 1:
	          throw new Error(errors.PUBKEY_PARSE)
	        case 2:
	          throw new Error(errors.ECDH)
	      }
	    }
	  }
	};
	return lib;
}

var bindings;
var hasRequiredBindings;

function requireBindings () {
	if (hasRequiredBindings) return bindings;
	hasRequiredBindings = 1;
	const addon = requireNodeGypBuild()(__dirname);
	bindings = requireLib()(new addon.Secp256k1());
	return bindings;
}

var elliptic$2 = {};

var name = "elliptic";
var version = "6.6.1";
var description = "EC cryptography";
var main = "lib/elliptic.js";
var files = [
	"lib"
];
var scripts = {
	lint: "eslint lib test",
	"lint:fix": "npm run lint -- --fix",
	unit: "istanbul test _mocha --reporter=spec test/index.js",
	test: "npm run lint && npm run unit",
	version: "grunt dist && git add dist/"
};
var repository = {
	type: "git",
	url: "git@github.com:indutny/elliptic"
};
var keywords = [
	"EC",
	"Elliptic",
	"curve",
	"Cryptography"
];
var author = "Fedor Indutny <fedor@indutny.com>";
var license = "MIT";
var bugs = {
	url: "https://github.com/indutny/elliptic/issues"
};
var homepage = "https://github.com/indutny/elliptic";
var devDependencies = {
	brfs: "^2.0.2",
	coveralls: "^3.1.0",
	eslint: "^7.6.0",
	grunt: "^1.2.1",
	"grunt-browserify": "^5.3.0",
	"grunt-cli": "^1.3.2",
	"grunt-contrib-connect": "^3.0.0",
	"grunt-contrib-copy": "^1.0.0",
	"grunt-contrib-uglify": "^5.0.0",
	"grunt-mocha-istanbul": "^5.0.2",
	"grunt-saucelabs": "^9.0.1",
	istanbul: "^0.4.5",
	mocha: "^8.0.1"
};
var dependencies = {
	"bn.js": "^4.11.9",
	brorand: "^1.1.0",
	"hash.js": "^1.0.0",
	"hmac-drbg": "^1.0.1",
	inherits: "^2.0.4",
	"minimalistic-assert": "^1.0.1",
	"minimalistic-crypto-utils": "^1.0.1"
};
var require$$0$1 = {
	name: name,
	version: version,
	description: description,
	main: main,
	files: files,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies,
	dependencies: dependencies
};

var utils$2 = {};

var bn = {exports: {}};

bn.exports;

var hasRequiredBn;

function requireBn () {
	if (hasRequiredBn) return bn.exports;
	hasRequiredBn = 1;
	(function (module) {
		(function (module, exports) {

		  // Utils
		  function assert (val, msg) {
		    if (!val) throw new Error(msg || 'Assertion failed');
		  }

		  // Could use `inherits` module, but don't want to move from single file
		  // architecture yet.
		  function inherits (ctor, superCtor) {
		    ctor.super_ = superCtor;
		    var TempCtor = function () {};
		    TempCtor.prototype = superCtor.prototype;
		    ctor.prototype = new TempCtor();
		    ctor.prototype.constructor = ctor;
		  }

		  // BN

		  function BN (number, base, endian) {
		    if (BN.isBN(number)) {
		      return number;
		    }

		    this.negative = 0;
		    this.words = null;
		    this.length = 0;

		    // Reduction context
		    this.red = null;

		    if (number !== null) {
		      if (base === 'le' || base === 'be') {
		        endian = base;
		        base = 10;
		      }

		      this._init(number || 0, base || 10, endian || 'be');
		    }
		  }
		  if (typeof module === 'object') {
		    module.exports = BN;
		  } else {
		    exports.BN = BN;
		  }

		  BN.BN = BN;
		  BN.wordSize = 26;

		  var Buffer;
		  try {
		    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
		      Buffer = window.Buffer;
		    } else {
		      Buffer = require('buffer').Buffer;
		    }
		  } catch (e) {
		  }

		  BN.isBN = function isBN (num) {
		    if (num instanceof BN) {
		      return true;
		    }

		    return num !== null && typeof num === 'object' &&
		      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
		  };

		  BN.max = function max (left, right) {
		    if (left.cmp(right) > 0) return left;
		    return right;
		  };

		  BN.min = function min (left, right) {
		    if (left.cmp(right) < 0) return left;
		    return right;
		  };

		  BN.prototype._init = function init (number, base, endian) {
		    if (typeof number === 'number') {
		      return this._initNumber(number, base, endian);
		    }

		    if (typeof number === 'object') {
		      return this._initArray(number, base, endian);
		    }

		    if (base === 'hex') {
		      base = 16;
		    }
		    assert(base === (base | 0) && base >= 2 && base <= 36);

		    number = number.toString().replace(/\s+/g, '');
		    var start = 0;
		    if (number[0] === '-') {
		      start++;
		      this.negative = 1;
		    }

		    if (start < number.length) {
		      if (base === 16) {
		        this._parseHex(number, start, endian);
		      } else {
		        this._parseBase(number, base, start);
		        if (endian === 'le') {
		          this._initArray(this.toArray(), base, endian);
		        }
		      }
		    }
		  };

		  BN.prototype._initNumber = function _initNumber (number, base, endian) {
		    if (number < 0) {
		      this.negative = 1;
		      number = -number;
		    }
		    if (number < 0x4000000) {
		      this.words = [ number & 0x3ffffff ];
		      this.length = 1;
		    } else if (number < 0x10000000000000) {
		      this.words = [
		        number & 0x3ffffff,
		        (number / 0x4000000) & 0x3ffffff
		      ];
		      this.length = 2;
		    } else {
		      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
		      this.words = [
		        number & 0x3ffffff,
		        (number / 0x4000000) & 0x3ffffff,
		        1
		      ];
		      this.length = 3;
		    }

		    if (endian !== 'le') return;

		    // Reverse the bytes
		    this._initArray(this.toArray(), base, endian);
		  };

		  BN.prototype._initArray = function _initArray (number, base, endian) {
		    // Perhaps a Uint8Array
		    assert(typeof number.length === 'number');
		    if (number.length <= 0) {
		      this.words = [ 0 ];
		      this.length = 1;
		      return this;
		    }

		    this.length = Math.ceil(number.length / 3);
		    this.words = new Array(this.length);
		    for (var i = 0; i < this.length; i++) {
		      this.words[i] = 0;
		    }

		    var j, w;
		    var off = 0;
		    if (endian === 'be') {
		      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
		        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
		        this.words[j] |= (w << off) & 0x3ffffff;
		        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
		        off += 24;
		        if (off >= 26) {
		          off -= 26;
		          j++;
		        }
		      }
		    } else if (endian === 'le') {
		      for (i = 0, j = 0; i < number.length; i += 3) {
		        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
		        this.words[j] |= (w << off) & 0x3ffffff;
		        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
		        off += 24;
		        if (off >= 26) {
		          off -= 26;
		          j++;
		        }
		      }
		    }
		    return this.strip();
		  };

		  function parseHex4Bits (string, index) {
		    var c = string.charCodeAt(index);
		    // 'A' - 'F'
		    if (c >= 65 && c <= 70) {
		      return c - 55;
		    // 'a' - 'f'
		    } else if (c >= 97 && c <= 102) {
		      return c - 87;
		    // '0' - '9'
		    } else {
		      return (c - 48) & 0xf;
		    }
		  }

		  function parseHexByte (string, lowerBound, index) {
		    var r = parseHex4Bits(string, index);
		    if (index - 1 >= lowerBound) {
		      r |= parseHex4Bits(string, index - 1) << 4;
		    }
		    return r;
		  }

		  BN.prototype._parseHex = function _parseHex (number, start, endian) {
		    // Create possibly bigger array to ensure that it fits the number
		    this.length = Math.ceil((number.length - start) / 6);
		    this.words = new Array(this.length);
		    for (var i = 0; i < this.length; i++) {
		      this.words[i] = 0;
		    }

		    // 24-bits chunks
		    var off = 0;
		    var j = 0;

		    var w;
		    if (endian === 'be') {
		      for (i = number.length - 1; i >= start; i -= 2) {
		        w = parseHexByte(number, start, i) << off;
		        this.words[j] |= w & 0x3ffffff;
		        if (off >= 18) {
		          off -= 18;
		          j += 1;
		          this.words[j] |= w >>> 26;
		        } else {
		          off += 8;
		        }
		      }
		    } else {
		      var parseLength = number.length - start;
		      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
		        w = parseHexByte(number, start, i) << off;
		        this.words[j] |= w & 0x3ffffff;
		        if (off >= 18) {
		          off -= 18;
		          j += 1;
		          this.words[j] |= w >>> 26;
		        } else {
		          off += 8;
		        }
		      }
		    }

		    this.strip();
		  };

		  function parseBase (str, start, end, mul) {
		    var r = 0;
		    var len = Math.min(str.length, end);
		    for (var i = start; i < len; i++) {
		      var c = str.charCodeAt(i) - 48;

		      r *= mul;

		      // 'a'
		      if (c >= 49) {
		        r += c - 49 + 0xa;

		      // 'A'
		      } else if (c >= 17) {
		        r += c - 17 + 0xa;

		      // '0' - '9'
		      } else {
		        r += c;
		      }
		    }
		    return r;
		  }

		  BN.prototype._parseBase = function _parseBase (number, base, start) {
		    // Initialize as zero
		    this.words = [ 0 ];
		    this.length = 1;

		    // Find length of limb in base
		    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
		      limbLen++;
		    }
		    limbLen--;
		    limbPow = (limbPow / base) | 0;

		    var total = number.length - start;
		    var mod = total % limbLen;
		    var end = Math.min(total, total - mod) + start;

		    var word = 0;
		    for (var i = start; i < end; i += limbLen) {
		      word = parseBase(number, i, i + limbLen, base);

		      this.imuln(limbPow);
		      if (this.words[0] + word < 0x4000000) {
		        this.words[0] += word;
		      } else {
		        this._iaddn(word);
		      }
		    }

		    if (mod !== 0) {
		      var pow = 1;
		      word = parseBase(number, i, number.length, base);

		      for (i = 0; i < mod; i++) {
		        pow *= base;
		      }

		      this.imuln(pow);
		      if (this.words[0] + word < 0x4000000) {
		        this.words[0] += word;
		      } else {
		        this._iaddn(word);
		      }
		    }

		    this.strip();
		  };

		  BN.prototype.copy = function copy (dest) {
		    dest.words = new Array(this.length);
		    for (var i = 0; i < this.length; i++) {
		      dest.words[i] = this.words[i];
		    }
		    dest.length = this.length;
		    dest.negative = this.negative;
		    dest.red = this.red;
		  };

		  BN.prototype.clone = function clone () {
		    var r = new BN(null);
		    this.copy(r);
		    return r;
		  };

		  BN.prototype._expand = function _expand (size) {
		    while (this.length < size) {
		      this.words[this.length++] = 0;
		    }
		    return this;
		  };

		  // Remove leading `0` from `this`
		  BN.prototype.strip = function strip () {
		    while (this.length > 1 && this.words[this.length - 1] === 0) {
		      this.length--;
		    }
		    return this._normSign();
		  };

		  BN.prototype._normSign = function _normSign () {
		    // -0 = 0
		    if (this.length === 1 && this.words[0] === 0) {
		      this.negative = 0;
		    }
		    return this;
		  };

		  BN.prototype.inspect = function inspect () {
		    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
		  };

		  /*

		  var zeros = [];
		  var groupSizes = [];
		  var groupBases = [];

		  var s = '';
		  var i = -1;
		  while (++i < BN.wordSize) {
		    zeros[i] = s;
		    s += '0';
		  }
		  groupSizes[0] = 0;
		  groupSizes[1] = 0;
		  groupBases[0] = 0;
		  groupBases[1] = 0;
		  var base = 2 - 1;
		  while (++base < 36 + 1) {
		    var groupSize = 0;
		    var groupBase = 1;
		    while (groupBase < (1 << BN.wordSize) / base) {
		      groupBase *= base;
		      groupSize += 1;
		    }
		    groupSizes[base] = groupSize;
		    groupBases[base] = groupBase;
		  }

		  */

		  var zeros = [
		    '',
		    '0',
		    '00',
		    '000',
		    '0000',
		    '00000',
		    '000000',
		    '0000000',
		    '00000000',
		    '000000000',
		    '0000000000',
		    '00000000000',
		    '000000000000',
		    '0000000000000',
		    '00000000000000',
		    '000000000000000',
		    '0000000000000000',
		    '00000000000000000',
		    '000000000000000000',
		    '0000000000000000000',
		    '00000000000000000000',
		    '000000000000000000000',
		    '0000000000000000000000',
		    '00000000000000000000000',
		    '000000000000000000000000',
		    '0000000000000000000000000'
		  ];

		  var groupSizes = [
		    0, 0,
		    25, 16, 12, 11, 10, 9, 8,
		    8, 7, 7, 7, 7, 6, 6,
		    6, 6, 6, 6, 6, 5, 5,
		    5, 5, 5, 5, 5, 5, 5,
		    5, 5, 5, 5, 5, 5, 5
		  ];

		  var groupBases = [
		    0, 0,
		    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
		    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
		    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
		    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
		    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
		  ];

		  BN.prototype.toString = function toString (base, padding) {
		    base = base || 10;
		    padding = padding | 0 || 1;

		    var out;
		    if (base === 16 || base === 'hex') {
		      out = '';
		      var off = 0;
		      var carry = 0;
		      for (var i = 0; i < this.length; i++) {
		        var w = this.words[i];
		        var word = (((w << off) | carry) & 0xffffff).toString(16);
		        carry = (w >>> (24 - off)) & 0xffffff;
		        off += 2;
		        if (off >= 26) {
		          off -= 26;
		          i--;
		        }
		        if (carry !== 0 || i !== this.length - 1) {
		          out = zeros[6 - word.length] + word + out;
		        } else {
		          out = word + out;
		        }
		      }
		      if (carry !== 0) {
		        out = carry.toString(16) + out;
		      }
		      while (out.length % padding !== 0) {
		        out = '0' + out;
		      }
		      if (this.negative !== 0) {
		        out = '-' + out;
		      }
		      return out;
		    }

		    if (base === (base | 0) && base >= 2 && base <= 36) {
		      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
		      var groupSize = groupSizes[base];
		      // var groupBase = Math.pow(base, groupSize);
		      var groupBase = groupBases[base];
		      out = '';
		      var c = this.clone();
		      c.negative = 0;
		      while (!c.isZero()) {
		        var r = c.modn(groupBase).toString(base);
		        c = c.idivn(groupBase);

		        if (!c.isZero()) {
		          out = zeros[groupSize - r.length] + r + out;
		        } else {
		          out = r + out;
		        }
		      }
		      if (this.isZero()) {
		        out = '0' + out;
		      }
		      while (out.length % padding !== 0) {
		        out = '0' + out;
		      }
		      if (this.negative !== 0) {
		        out = '-' + out;
		      }
		      return out;
		    }

		    assert(false, 'Base should be between 2 and 36');
		  };

		  BN.prototype.toNumber = function toNumber () {
		    var ret = this.words[0];
		    if (this.length === 2) {
		      ret += this.words[1] * 0x4000000;
		    } else if (this.length === 3 && this.words[2] === 0x01) {
		      // NOTE: at this stage it is known that the top bit is set
		      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
		    } else if (this.length > 2) {
		      assert(false, 'Number can only safely store up to 53 bits');
		    }
		    return (this.negative !== 0) ? -ret : ret;
		  };

		  BN.prototype.toJSON = function toJSON () {
		    return this.toString(16);
		  };

		  BN.prototype.toBuffer = function toBuffer (endian, length) {
		    assert(typeof Buffer !== 'undefined');
		    return this.toArrayLike(Buffer, endian, length);
		  };

		  BN.prototype.toArray = function toArray (endian, length) {
		    return this.toArrayLike(Array, endian, length);
		  };

		  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
		    var byteLength = this.byteLength();
		    var reqLength = length || Math.max(1, byteLength);
		    assert(byteLength <= reqLength, 'byte array longer than desired length');
		    assert(reqLength > 0, 'Requested array length <= 0');

		    this.strip();
		    var littleEndian = endian === 'le';
		    var res = new ArrayType(reqLength);

		    var b, i;
		    var q = this.clone();
		    if (!littleEndian) {
		      // Assume big-endian
		      for (i = 0; i < reqLength - byteLength; i++) {
		        res[i] = 0;
		      }

		      for (i = 0; !q.isZero(); i++) {
		        b = q.andln(0xff);
		        q.iushrn(8);

		        res[reqLength - i - 1] = b;
		      }
		    } else {
		      for (i = 0; !q.isZero(); i++) {
		        b = q.andln(0xff);
		        q.iushrn(8);

		        res[i] = b;
		      }

		      for (; i < reqLength; i++) {
		        res[i] = 0;
		      }
		    }

		    return res;
		  };

		  if (Math.clz32) {
		    BN.prototype._countBits = function _countBits (w) {
		      return 32 - Math.clz32(w);
		    };
		  } else {
		    BN.prototype._countBits = function _countBits (w) {
		      var t = w;
		      var r = 0;
		      if (t >= 0x1000) {
		        r += 13;
		        t >>>= 13;
		      }
		      if (t >= 0x40) {
		        r += 7;
		        t >>>= 7;
		      }
		      if (t >= 0x8) {
		        r += 4;
		        t >>>= 4;
		      }
		      if (t >= 0x02) {
		        r += 2;
		        t >>>= 2;
		      }
		      return r + t;
		    };
		  }

		  BN.prototype._zeroBits = function _zeroBits (w) {
		    // Short-cut
		    if (w === 0) return 26;

		    var t = w;
		    var r = 0;
		    if ((t & 0x1fff) === 0) {
		      r += 13;
		      t >>>= 13;
		    }
		    if ((t & 0x7f) === 0) {
		      r += 7;
		      t >>>= 7;
		    }
		    if ((t & 0xf) === 0) {
		      r += 4;
		      t >>>= 4;
		    }
		    if ((t & 0x3) === 0) {
		      r += 2;
		      t >>>= 2;
		    }
		    if ((t & 0x1) === 0) {
		      r++;
		    }
		    return r;
		  };

		  // Return number of used bits in a BN
		  BN.prototype.bitLength = function bitLength () {
		    var w = this.words[this.length - 1];
		    var hi = this._countBits(w);
		    return (this.length - 1) * 26 + hi;
		  };

		  function toBitArray (num) {
		    var w = new Array(num.bitLength());

		    for (var bit = 0; bit < w.length; bit++) {
		      var off = (bit / 26) | 0;
		      var wbit = bit % 26;

		      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
		    }

		    return w;
		  }

		  // Number of trailing zero bits
		  BN.prototype.zeroBits = function zeroBits () {
		    if (this.isZero()) return 0;

		    var r = 0;
		    for (var i = 0; i < this.length; i++) {
		      var b = this._zeroBits(this.words[i]);
		      r += b;
		      if (b !== 26) break;
		    }
		    return r;
		  };

		  BN.prototype.byteLength = function byteLength () {
		    return Math.ceil(this.bitLength() / 8);
		  };

		  BN.prototype.toTwos = function toTwos (width) {
		    if (this.negative !== 0) {
		      return this.abs().inotn(width).iaddn(1);
		    }
		    return this.clone();
		  };

		  BN.prototype.fromTwos = function fromTwos (width) {
		    if (this.testn(width - 1)) {
		      return this.notn(width).iaddn(1).ineg();
		    }
		    return this.clone();
		  };

		  BN.prototype.isNeg = function isNeg () {
		    return this.negative !== 0;
		  };

		  // Return negative clone of `this`
		  BN.prototype.neg = function neg () {
		    return this.clone().ineg();
		  };

		  BN.prototype.ineg = function ineg () {
		    if (!this.isZero()) {
		      this.negative ^= 1;
		    }

		    return this;
		  };

		  // Or `num` with `this` in-place
		  BN.prototype.iuor = function iuor (num) {
		    while (this.length < num.length) {
		      this.words[this.length++] = 0;
		    }

		    for (var i = 0; i < num.length; i++) {
		      this.words[i] = this.words[i] | num.words[i];
		    }

		    return this.strip();
		  };

		  BN.prototype.ior = function ior (num) {
		    assert((this.negative | num.negative) === 0);
		    return this.iuor(num);
		  };

		  // Or `num` with `this`
		  BN.prototype.or = function or (num) {
		    if (this.length > num.length) return this.clone().ior(num);
		    return num.clone().ior(this);
		  };

		  BN.prototype.uor = function uor (num) {
		    if (this.length > num.length) return this.clone().iuor(num);
		    return num.clone().iuor(this);
		  };

		  // And `num` with `this` in-place
		  BN.prototype.iuand = function iuand (num) {
		    // b = min-length(num, this)
		    var b;
		    if (this.length > num.length) {
		      b = num;
		    } else {
		      b = this;
		    }

		    for (var i = 0; i < b.length; i++) {
		      this.words[i] = this.words[i] & num.words[i];
		    }

		    this.length = b.length;

		    return this.strip();
		  };

		  BN.prototype.iand = function iand (num) {
		    assert((this.negative | num.negative) === 0);
		    return this.iuand(num);
		  };

		  // And `num` with `this`
		  BN.prototype.and = function and (num) {
		    if (this.length > num.length) return this.clone().iand(num);
		    return num.clone().iand(this);
		  };

		  BN.prototype.uand = function uand (num) {
		    if (this.length > num.length) return this.clone().iuand(num);
		    return num.clone().iuand(this);
		  };

		  // Xor `num` with `this` in-place
		  BN.prototype.iuxor = function iuxor (num) {
		    // a.length > b.length
		    var a;
		    var b;
		    if (this.length > num.length) {
		      a = this;
		      b = num;
		    } else {
		      a = num;
		      b = this;
		    }

		    for (var i = 0; i < b.length; i++) {
		      this.words[i] = a.words[i] ^ b.words[i];
		    }

		    if (this !== a) {
		      for (; i < a.length; i++) {
		        this.words[i] = a.words[i];
		      }
		    }

		    this.length = a.length;

		    return this.strip();
		  };

		  BN.prototype.ixor = function ixor (num) {
		    assert((this.negative | num.negative) === 0);
		    return this.iuxor(num);
		  };

		  // Xor `num` with `this`
		  BN.prototype.xor = function xor (num) {
		    if (this.length > num.length) return this.clone().ixor(num);
		    return num.clone().ixor(this);
		  };

		  BN.prototype.uxor = function uxor (num) {
		    if (this.length > num.length) return this.clone().iuxor(num);
		    return num.clone().iuxor(this);
		  };

		  // Not ``this`` with ``width`` bitwidth
		  BN.prototype.inotn = function inotn (width) {
		    assert(typeof width === 'number' && width >= 0);

		    var bytesNeeded = Math.ceil(width / 26) | 0;
		    var bitsLeft = width % 26;

		    // Extend the buffer with leading zeroes
		    this._expand(bytesNeeded);

		    if (bitsLeft > 0) {
		      bytesNeeded--;
		    }

		    // Handle complete words
		    for (var i = 0; i < bytesNeeded; i++) {
		      this.words[i] = ~this.words[i] & 0x3ffffff;
		    }

		    // Handle the residue
		    if (bitsLeft > 0) {
		      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
		    }

		    // And remove leading zeroes
		    return this.strip();
		  };

		  BN.prototype.notn = function notn (width) {
		    return this.clone().inotn(width);
		  };

		  // Set `bit` of `this`
		  BN.prototype.setn = function setn (bit, val) {
		    assert(typeof bit === 'number' && bit >= 0);

		    var off = (bit / 26) | 0;
		    var wbit = bit % 26;

		    this._expand(off + 1);

		    if (val) {
		      this.words[off] = this.words[off] | (1 << wbit);
		    } else {
		      this.words[off] = this.words[off] & ~(1 << wbit);
		    }

		    return this.strip();
		  };

		  // Add `num` to `this` in-place
		  BN.prototype.iadd = function iadd (num) {
		    var r;

		    // negative + positive
		    if (this.negative !== 0 && num.negative === 0) {
		      this.negative = 0;
		      r = this.isub(num);
		      this.negative ^= 1;
		      return this._normSign();

		    // positive + negative
		    } else if (this.negative === 0 && num.negative !== 0) {
		      num.negative = 0;
		      r = this.isub(num);
		      num.negative = 1;
		      return r._normSign();
		    }

		    // a.length > b.length
		    var a, b;
		    if (this.length > num.length) {
		      a = this;
		      b = num;
		    } else {
		      a = num;
		      b = this;
		    }

		    var carry = 0;
		    for (var i = 0; i < b.length; i++) {
		      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
		      this.words[i] = r & 0x3ffffff;
		      carry = r >>> 26;
		    }
		    for (; carry !== 0 && i < a.length; i++) {
		      r = (a.words[i] | 0) + carry;
		      this.words[i] = r & 0x3ffffff;
		      carry = r >>> 26;
		    }

		    this.length = a.length;
		    if (carry !== 0) {
		      this.words[this.length] = carry;
		      this.length++;
		    // Copy the rest of the words
		    } else if (a !== this) {
		      for (; i < a.length; i++) {
		        this.words[i] = a.words[i];
		      }
		    }

		    return this;
		  };

		  // Add `num` to `this`
		  BN.prototype.add = function add (num) {
		    var res;
		    if (num.negative !== 0 && this.negative === 0) {
		      num.negative = 0;
		      res = this.sub(num);
		      num.negative ^= 1;
		      return res;
		    } else if (num.negative === 0 && this.negative !== 0) {
		      this.negative = 0;
		      res = num.sub(this);
		      this.negative = 1;
		      return res;
		    }

		    if (this.length > num.length) return this.clone().iadd(num);

		    return num.clone().iadd(this);
		  };

		  // Subtract `num` from `this` in-place
		  BN.prototype.isub = function isub (num) {
		    // this - (-num) = this + num
		    if (num.negative !== 0) {
		      num.negative = 0;
		      var r = this.iadd(num);
		      num.negative = 1;
		      return r._normSign();

		    // -this - num = -(this + num)
		    } else if (this.negative !== 0) {
		      this.negative = 0;
		      this.iadd(num);
		      this.negative = 1;
		      return this._normSign();
		    }

		    // At this point both numbers are positive
		    var cmp = this.cmp(num);

		    // Optimization - zeroify
		    if (cmp === 0) {
		      this.negative = 0;
		      this.length = 1;
		      this.words[0] = 0;
		      return this;
		    }

		    // a > b
		    var a, b;
		    if (cmp > 0) {
		      a = this;
		      b = num;
		    } else {
		      a = num;
		      b = this;
		    }

		    var carry = 0;
		    for (var i = 0; i < b.length; i++) {
		      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
		      carry = r >> 26;
		      this.words[i] = r & 0x3ffffff;
		    }
		    for (; carry !== 0 && i < a.length; i++) {
		      r = (a.words[i] | 0) + carry;
		      carry = r >> 26;
		      this.words[i] = r & 0x3ffffff;
		    }

		    // Copy rest of the words
		    if (carry === 0 && i < a.length && a !== this) {
		      for (; i < a.length; i++) {
		        this.words[i] = a.words[i];
		      }
		    }

		    this.length = Math.max(this.length, i);

		    if (a !== this) {
		      this.negative = 1;
		    }

		    return this.strip();
		  };

		  // Subtract `num` from `this`
		  BN.prototype.sub = function sub (num) {
		    return this.clone().isub(num);
		  };

		  function smallMulTo (self, num, out) {
		    out.negative = num.negative ^ self.negative;
		    var len = (self.length + num.length) | 0;
		    out.length = len;
		    len = (len - 1) | 0;

		    // Peel one iteration (compiler can't do it, because of code complexity)
		    var a = self.words[0] | 0;
		    var b = num.words[0] | 0;
		    var r = a * b;

		    var lo = r & 0x3ffffff;
		    var carry = (r / 0x4000000) | 0;
		    out.words[0] = lo;

		    for (var k = 1; k < len; k++) {
		      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
		      // note that ncarry could be >= 0x3ffffff
		      var ncarry = carry >>> 26;
		      var rword = carry & 0x3ffffff;
		      var maxJ = Math.min(k, num.length - 1);
		      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
		        var i = (k - j) | 0;
		        a = self.words[i] | 0;
		        b = num.words[j] | 0;
		        r = a * b + rword;
		        ncarry += (r / 0x4000000) | 0;
		        rword = r & 0x3ffffff;
		      }
		      out.words[k] = rword | 0;
		      carry = ncarry | 0;
		    }
		    if (carry !== 0) {
		      out.words[k] = carry | 0;
		    } else {
		      out.length--;
		    }

		    return out.strip();
		  }

		  // TODO(indutny): it may be reasonable to omit it for users who don't need
		  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
		  // multiplication (like elliptic secp256k1).
		  var comb10MulTo = function comb10MulTo (self, num, out) {
		    var a = self.words;
		    var b = num.words;
		    var o = out.words;
		    var c = 0;
		    var lo;
		    var mid;
		    var hi;
		    var a0 = a[0] | 0;
		    var al0 = a0 & 0x1fff;
		    var ah0 = a0 >>> 13;
		    var a1 = a[1] | 0;
		    var al1 = a1 & 0x1fff;
		    var ah1 = a1 >>> 13;
		    var a2 = a[2] | 0;
		    var al2 = a2 & 0x1fff;
		    var ah2 = a2 >>> 13;
		    var a3 = a[3] | 0;
		    var al3 = a3 & 0x1fff;
		    var ah3 = a3 >>> 13;
		    var a4 = a[4] | 0;
		    var al4 = a4 & 0x1fff;
		    var ah4 = a4 >>> 13;
		    var a5 = a[5] | 0;
		    var al5 = a5 & 0x1fff;
		    var ah5 = a5 >>> 13;
		    var a6 = a[6] | 0;
		    var al6 = a6 & 0x1fff;
		    var ah6 = a6 >>> 13;
		    var a7 = a[7] | 0;
		    var al7 = a7 & 0x1fff;
		    var ah7 = a7 >>> 13;
		    var a8 = a[8] | 0;
		    var al8 = a8 & 0x1fff;
		    var ah8 = a8 >>> 13;
		    var a9 = a[9] | 0;
		    var al9 = a9 & 0x1fff;
		    var ah9 = a9 >>> 13;
		    var b0 = b[0] | 0;
		    var bl0 = b0 & 0x1fff;
		    var bh0 = b0 >>> 13;
		    var b1 = b[1] | 0;
		    var bl1 = b1 & 0x1fff;
		    var bh1 = b1 >>> 13;
		    var b2 = b[2] | 0;
		    var bl2 = b2 & 0x1fff;
		    var bh2 = b2 >>> 13;
		    var b3 = b[3] | 0;
		    var bl3 = b3 & 0x1fff;
		    var bh3 = b3 >>> 13;
		    var b4 = b[4] | 0;
		    var bl4 = b4 & 0x1fff;
		    var bh4 = b4 >>> 13;
		    var b5 = b[5] | 0;
		    var bl5 = b5 & 0x1fff;
		    var bh5 = b5 >>> 13;
		    var b6 = b[6] | 0;
		    var bl6 = b6 & 0x1fff;
		    var bh6 = b6 >>> 13;
		    var b7 = b[7] | 0;
		    var bl7 = b7 & 0x1fff;
		    var bh7 = b7 >>> 13;
		    var b8 = b[8] | 0;
		    var bl8 = b8 & 0x1fff;
		    var bh8 = b8 >>> 13;
		    var b9 = b[9] | 0;
		    var bl9 = b9 & 0x1fff;
		    var bh9 = b9 >>> 13;

		    out.negative = self.negative ^ num.negative;
		    out.length = 19;
		    /* k = 0 */
		    lo = Math.imul(al0, bl0);
		    mid = Math.imul(al0, bh0);
		    mid = (mid + Math.imul(ah0, bl0)) | 0;
		    hi = Math.imul(ah0, bh0);
		    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
		    w0 &= 0x3ffffff;
		    /* k = 1 */
		    lo = Math.imul(al1, bl0);
		    mid = Math.imul(al1, bh0);
		    mid = (mid + Math.imul(ah1, bl0)) | 0;
		    hi = Math.imul(ah1, bh0);
		    lo = (lo + Math.imul(al0, bl1)) | 0;
		    mid = (mid + Math.imul(al0, bh1)) | 0;
		    mid = (mid + Math.imul(ah0, bl1)) | 0;
		    hi = (hi + Math.imul(ah0, bh1)) | 0;
		    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
		    w1 &= 0x3ffffff;
		    /* k = 2 */
		    lo = Math.imul(al2, bl0);
		    mid = Math.imul(al2, bh0);
		    mid = (mid + Math.imul(ah2, bl0)) | 0;
		    hi = Math.imul(ah2, bh0);
		    lo = (lo + Math.imul(al1, bl1)) | 0;
		    mid = (mid + Math.imul(al1, bh1)) | 0;
		    mid = (mid + Math.imul(ah1, bl1)) | 0;
		    hi = (hi + Math.imul(ah1, bh1)) | 0;
		    lo = (lo + Math.imul(al0, bl2)) | 0;
		    mid = (mid + Math.imul(al0, bh2)) | 0;
		    mid = (mid + Math.imul(ah0, bl2)) | 0;
		    hi = (hi + Math.imul(ah0, bh2)) | 0;
		    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
		    w2 &= 0x3ffffff;
		    /* k = 3 */
		    lo = Math.imul(al3, bl0);
		    mid = Math.imul(al3, bh0);
		    mid = (mid + Math.imul(ah3, bl0)) | 0;
		    hi = Math.imul(ah3, bh0);
		    lo = (lo + Math.imul(al2, bl1)) | 0;
		    mid = (mid + Math.imul(al2, bh1)) | 0;
		    mid = (mid + Math.imul(ah2, bl1)) | 0;
		    hi = (hi + Math.imul(ah2, bh1)) | 0;
		    lo = (lo + Math.imul(al1, bl2)) | 0;
		    mid = (mid + Math.imul(al1, bh2)) | 0;
		    mid = (mid + Math.imul(ah1, bl2)) | 0;
		    hi = (hi + Math.imul(ah1, bh2)) | 0;
		    lo = (lo + Math.imul(al0, bl3)) | 0;
		    mid = (mid + Math.imul(al0, bh3)) | 0;
		    mid = (mid + Math.imul(ah0, bl3)) | 0;
		    hi = (hi + Math.imul(ah0, bh3)) | 0;
		    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
		    w3 &= 0x3ffffff;
		    /* k = 4 */
		    lo = Math.imul(al4, bl0);
		    mid = Math.imul(al4, bh0);
		    mid = (mid + Math.imul(ah4, bl0)) | 0;
		    hi = Math.imul(ah4, bh0);
		    lo = (lo + Math.imul(al3, bl1)) | 0;
		    mid = (mid + Math.imul(al3, bh1)) | 0;
		    mid = (mid + Math.imul(ah3, bl1)) | 0;
		    hi = (hi + Math.imul(ah3, bh1)) | 0;
		    lo = (lo + Math.imul(al2, bl2)) | 0;
		    mid = (mid + Math.imul(al2, bh2)) | 0;
		    mid = (mid + Math.imul(ah2, bl2)) | 0;
		    hi = (hi + Math.imul(ah2, bh2)) | 0;
		    lo = (lo + Math.imul(al1, bl3)) | 0;
		    mid = (mid + Math.imul(al1, bh3)) | 0;
		    mid = (mid + Math.imul(ah1, bl3)) | 0;
		    hi = (hi + Math.imul(ah1, bh3)) | 0;
		    lo = (lo + Math.imul(al0, bl4)) | 0;
		    mid = (mid + Math.imul(al0, bh4)) | 0;
		    mid = (mid + Math.imul(ah0, bl4)) | 0;
		    hi = (hi + Math.imul(ah0, bh4)) | 0;
		    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
		    w4 &= 0x3ffffff;
		    /* k = 5 */
		    lo = Math.imul(al5, bl0);
		    mid = Math.imul(al5, bh0);
		    mid = (mid + Math.imul(ah5, bl0)) | 0;
		    hi = Math.imul(ah5, bh0);
		    lo = (lo + Math.imul(al4, bl1)) | 0;
		    mid = (mid + Math.imul(al4, bh1)) | 0;
		    mid = (mid + Math.imul(ah4, bl1)) | 0;
		    hi = (hi + Math.imul(ah4, bh1)) | 0;
		    lo = (lo + Math.imul(al3, bl2)) | 0;
		    mid = (mid + Math.imul(al3, bh2)) | 0;
		    mid = (mid + Math.imul(ah3, bl2)) | 0;
		    hi = (hi + Math.imul(ah3, bh2)) | 0;
		    lo = (lo + Math.imul(al2, bl3)) | 0;
		    mid = (mid + Math.imul(al2, bh3)) | 0;
		    mid = (mid + Math.imul(ah2, bl3)) | 0;
		    hi = (hi + Math.imul(ah2, bh3)) | 0;
		    lo = (lo + Math.imul(al1, bl4)) | 0;
		    mid = (mid + Math.imul(al1, bh4)) | 0;
		    mid = (mid + Math.imul(ah1, bl4)) | 0;
		    hi = (hi + Math.imul(ah1, bh4)) | 0;
		    lo = (lo + Math.imul(al0, bl5)) | 0;
		    mid = (mid + Math.imul(al0, bh5)) | 0;
		    mid = (mid + Math.imul(ah0, bl5)) | 0;
		    hi = (hi + Math.imul(ah0, bh5)) | 0;
		    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
		    w5 &= 0x3ffffff;
		    /* k = 6 */
		    lo = Math.imul(al6, bl0);
		    mid = Math.imul(al6, bh0);
		    mid = (mid + Math.imul(ah6, bl0)) | 0;
		    hi = Math.imul(ah6, bh0);
		    lo = (lo + Math.imul(al5, bl1)) | 0;
		    mid = (mid + Math.imul(al5, bh1)) | 0;
		    mid = (mid + Math.imul(ah5, bl1)) | 0;
		    hi = (hi + Math.imul(ah5, bh1)) | 0;
		    lo = (lo + Math.imul(al4, bl2)) | 0;
		    mid = (mid + Math.imul(al4, bh2)) | 0;
		    mid = (mid + Math.imul(ah4, bl2)) | 0;
		    hi = (hi + Math.imul(ah4, bh2)) | 0;
		    lo = (lo + Math.imul(al3, bl3)) | 0;
		    mid = (mid + Math.imul(al3, bh3)) | 0;
		    mid = (mid + Math.imul(ah3, bl3)) | 0;
		    hi = (hi + Math.imul(ah3, bh3)) | 0;
		    lo = (lo + Math.imul(al2, bl4)) | 0;
		    mid = (mid + Math.imul(al2, bh4)) | 0;
		    mid = (mid + Math.imul(ah2, bl4)) | 0;
		    hi = (hi + Math.imul(ah2, bh4)) | 0;
		    lo = (lo + Math.imul(al1, bl5)) | 0;
		    mid = (mid + Math.imul(al1, bh5)) | 0;
		    mid = (mid + Math.imul(ah1, bl5)) | 0;
		    hi = (hi + Math.imul(ah1, bh5)) | 0;
		    lo = (lo + Math.imul(al0, bl6)) | 0;
		    mid = (mid + Math.imul(al0, bh6)) | 0;
		    mid = (mid + Math.imul(ah0, bl6)) | 0;
		    hi = (hi + Math.imul(ah0, bh6)) | 0;
		    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
		    w6 &= 0x3ffffff;
		    /* k = 7 */
		    lo = Math.imul(al7, bl0);
		    mid = Math.imul(al7, bh0);
		    mid = (mid + Math.imul(ah7, bl0)) | 0;
		    hi = Math.imul(ah7, bh0);
		    lo = (lo + Math.imul(al6, bl1)) | 0;
		    mid = (mid + Math.imul(al6, bh1)) | 0;
		    mid = (mid + Math.imul(ah6, bl1)) | 0;
		    hi = (hi + Math.imul(ah6, bh1)) | 0;
		    lo = (lo + Math.imul(al5, bl2)) | 0;
		    mid = (mid + Math.imul(al5, bh2)) | 0;
		    mid = (mid + Math.imul(ah5, bl2)) | 0;
		    hi = (hi + Math.imul(ah5, bh2)) | 0;
		    lo = (lo + Math.imul(al4, bl3)) | 0;
		    mid = (mid + Math.imul(al4, bh3)) | 0;
		    mid = (mid + Math.imul(ah4, bl3)) | 0;
		    hi = (hi + Math.imul(ah4, bh3)) | 0;
		    lo = (lo + Math.imul(al3, bl4)) | 0;
		    mid = (mid + Math.imul(al3, bh4)) | 0;
		    mid = (mid + Math.imul(ah3, bl4)) | 0;
		    hi = (hi + Math.imul(ah3, bh4)) | 0;
		    lo = (lo + Math.imul(al2, bl5)) | 0;
		    mid = (mid + Math.imul(al2, bh5)) | 0;
		    mid = (mid + Math.imul(ah2, bl5)) | 0;
		    hi = (hi + Math.imul(ah2, bh5)) | 0;
		    lo = (lo + Math.imul(al1, bl6)) | 0;
		    mid = (mid + Math.imul(al1, bh6)) | 0;
		    mid = (mid + Math.imul(ah1, bl6)) | 0;
		    hi = (hi + Math.imul(ah1, bh6)) | 0;
		    lo = (lo + Math.imul(al0, bl7)) | 0;
		    mid = (mid + Math.imul(al0, bh7)) | 0;
		    mid = (mid + Math.imul(ah0, bl7)) | 0;
		    hi = (hi + Math.imul(ah0, bh7)) | 0;
		    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
		    w7 &= 0x3ffffff;
		    /* k = 8 */
		    lo = Math.imul(al8, bl0);
		    mid = Math.imul(al8, bh0);
		    mid = (mid + Math.imul(ah8, bl0)) | 0;
		    hi = Math.imul(ah8, bh0);
		    lo = (lo + Math.imul(al7, bl1)) | 0;
		    mid = (mid + Math.imul(al7, bh1)) | 0;
		    mid = (mid + Math.imul(ah7, bl1)) | 0;
		    hi = (hi + Math.imul(ah7, bh1)) | 0;
		    lo = (lo + Math.imul(al6, bl2)) | 0;
		    mid = (mid + Math.imul(al6, bh2)) | 0;
		    mid = (mid + Math.imul(ah6, bl2)) | 0;
		    hi = (hi + Math.imul(ah6, bh2)) | 0;
		    lo = (lo + Math.imul(al5, bl3)) | 0;
		    mid = (mid + Math.imul(al5, bh3)) | 0;
		    mid = (mid + Math.imul(ah5, bl3)) | 0;
		    hi = (hi + Math.imul(ah5, bh3)) | 0;
		    lo = (lo + Math.imul(al4, bl4)) | 0;
		    mid = (mid + Math.imul(al4, bh4)) | 0;
		    mid = (mid + Math.imul(ah4, bl4)) | 0;
		    hi = (hi + Math.imul(ah4, bh4)) | 0;
		    lo = (lo + Math.imul(al3, bl5)) | 0;
		    mid = (mid + Math.imul(al3, bh5)) | 0;
		    mid = (mid + Math.imul(ah3, bl5)) | 0;
		    hi = (hi + Math.imul(ah3, bh5)) | 0;
		    lo = (lo + Math.imul(al2, bl6)) | 0;
		    mid = (mid + Math.imul(al2, bh6)) | 0;
		    mid = (mid + Math.imul(ah2, bl6)) | 0;
		    hi = (hi + Math.imul(ah2, bh6)) | 0;
		    lo = (lo + Math.imul(al1, bl7)) | 0;
		    mid = (mid + Math.imul(al1, bh7)) | 0;
		    mid = (mid + Math.imul(ah1, bl7)) | 0;
		    hi = (hi + Math.imul(ah1, bh7)) | 0;
		    lo = (lo + Math.imul(al0, bl8)) | 0;
		    mid = (mid + Math.imul(al0, bh8)) | 0;
		    mid = (mid + Math.imul(ah0, bl8)) | 0;
		    hi = (hi + Math.imul(ah0, bh8)) | 0;
		    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
		    w8 &= 0x3ffffff;
		    /* k = 9 */
		    lo = Math.imul(al9, bl0);
		    mid = Math.imul(al9, bh0);
		    mid = (mid + Math.imul(ah9, bl0)) | 0;
		    hi = Math.imul(ah9, bh0);
		    lo = (lo + Math.imul(al8, bl1)) | 0;
		    mid = (mid + Math.imul(al8, bh1)) | 0;
		    mid = (mid + Math.imul(ah8, bl1)) | 0;
		    hi = (hi + Math.imul(ah8, bh1)) | 0;
		    lo = (lo + Math.imul(al7, bl2)) | 0;
		    mid = (mid + Math.imul(al7, bh2)) | 0;
		    mid = (mid + Math.imul(ah7, bl2)) | 0;
		    hi = (hi + Math.imul(ah7, bh2)) | 0;
		    lo = (lo + Math.imul(al6, bl3)) | 0;
		    mid = (mid + Math.imul(al6, bh3)) | 0;
		    mid = (mid + Math.imul(ah6, bl3)) | 0;
		    hi = (hi + Math.imul(ah6, bh3)) | 0;
		    lo = (lo + Math.imul(al5, bl4)) | 0;
		    mid = (mid + Math.imul(al5, bh4)) | 0;
		    mid = (mid + Math.imul(ah5, bl4)) | 0;
		    hi = (hi + Math.imul(ah5, bh4)) | 0;
		    lo = (lo + Math.imul(al4, bl5)) | 0;
		    mid = (mid + Math.imul(al4, bh5)) | 0;
		    mid = (mid + Math.imul(ah4, bl5)) | 0;
		    hi = (hi + Math.imul(ah4, bh5)) | 0;
		    lo = (lo + Math.imul(al3, bl6)) | 0;
		    mid = (mid + Math.imul(al3, bh6)) | 0;
		    mid = (mid + Math.imul(ah3, bl6)) | 0;
		    hi = (hi + Math.imul(ah3, bh6)) | 0;
		    lo = (lo + Math.imul(al2, bl7)) | 0;
		    mid = (mid + Math.imul(al2, bh7)) | 0;
		    mid = (mid + Math.imul(ah2, bl7)) | 0;
		    hi = (hi + Math.imul(ah2, bh7)) | 0;
		    lo = (lo + Math.imul(al1, bl8)) | 0;
		    mid = (mid + Math.imul(al1, bh8)) | 0;
		    mid = (mid + Math.imul(ah1, bl8)) | 0;
		    hi = (hi + Math.imul(ah1, bh8)) | 0;
		    lo = (lo + Math.imul(al0, bl9)) | 0;
		    mid = (mid + Math.imul(al0, bh9)) | 0;
		    mid = (mid + Math.imul(ah0, bl9)) | 0;
		    hi = (hi + Math.imul(ah0, bh9)) | 0;
		    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
		    w9 &= 0x3ffffff;
		    /* k = 10 */
		    lo = Math.imul(al9, bl1);
		    mid = Math.imul(al9, bh1);
		    mid = (mid + Math.imul(ah9, bl1)) | 0;
		    hi = Math.imul(ah9, bh1);
		    lo = (lo + Math.imul(al8, bl2)) | 0;
		    mid = (mid + Math.imul(al8, bh2)) | 0;
		    mid = (mid + Math.imul(ah8, bl2)) | 0;
		    hi = (hi + Math.imul(ah8, bh2)) | 0;
		    lo = (lo + Math.imul(al7, bl3)) | 0;
		    mid = (mid + Math.imul(al7, bh3)) | 0;
		    mid = (mid + Math.imul(ah7, bl3)) | 0;
		    hi = (hi + Math.imul(ah7, bh3)) | 0;
		    lo = (lo + Math.imul(al6, bl4)) | 0;
		    mid = (mid + Math.imul(al6, bh4)) | 0;
		    mid = (mid + Math.imul(ah6, bl4)) | 0;
		    hi = (hi + Math.imul(ah6, bh4)) | 0;
		    lo = (lo + Math.imul(al5, bl5)) | 0;
		    mid = (mid + Math.imul(al5, bh5)) | 0;
		    mid = (mid + Math.imul(ah5, bl5)) | 0;
		    hi = (hi + Math.imul(ah5, bh5)) | 0;
		    lo = (lo + Math.imul(al4, bl6)) | 0;
		    mid = (mid + Math.imul(al4, bh6)) | 0;
		    mid = (mid + Math.imul(ah4, bl6)) | 0;
		    hi = (hi + Math.imul(ah4, bh6)) | 0;
		    lo = (lo + Math.imul(al3, bl7)) | 0;
		    mid = (mid + Math.imul(al3, bh7)) | 0;
		    mid = (mid + Math.imul(ah3, bl7)) | 0;
		    hi = (hi + Math.imul(ah3, bh7)) | 0;
		    lo = (lo + Math.imul(al2, bl8)) | 0;
		    mid = (mid + Math.imul(al2, bh8)) | 0;
		    mid = (mid + Math.imul(ah2, bl8)) | 0;
		    hi = (hi + Math.imul(ah2, bh8)) | 0;
		    lo = (lo + Math.imul(al1, bl9)) | 0;
		    mid = (mid + Math.imul(al1, bh9)) | 0;
		    mid = (mid + Math.imul(ah1, bl9)) | 0;
		    hi = (hi + Math.imul(ah1, bh9)) | 0;
		    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
		    w10 &= 0x3ffffff;
		    /* k = 11 */
		    lo = Math.imul(al9, bl2);
		    mid = Math.imul(al9, bh2);
		    mid = (mid + Math.imul(ah9, bl2)) | 0;
		    hi = Math.imul(ah9, bh2);
		    lo = (lo + Math.imul(al8, bl3)) | 0;
		    mid = (mid + Math.imul(al8, bh3)) | 0;
		    mid = (mid + Math.imul(ah8, bl3)) | 0;
		    hi = (hi + Math.imul(ah8, bh3)) | 0;
		    lo = (lo + Math.imul(al7, bl4)) | 0;
		    mid = (mid + Math.imul(al7, bh4)) | 0;
		    mid = (mid + Math.imul(ah7, bl4)) | 0;
		    hi = (hi + Math.imul(ah7, bh4)) | 0;
		    lo = (lo + Math.imul(al6, bl5)) | 0;
		    mid = (mid + Math.imul(al6, bh5)) | 0;
		    mid = (mid + Math.imul(ah6, bl5)) | 0;
		    hi = (hi + Math.imul(ah6, bh5)) | 0;
		    lo = (lo + Math.imul(al5, bl6)) | 0;
		    mid = (mid + Math.imul(al5, bh6)) | 0;
		    mid = (mid + Math.imul(ah5, bl6)) | 0;
		    hi = (hi + Math.imul(ah5, bh6)) | 0;
		    lo = (lo + Math.imul(al4, bl7)) | 0;
		    mid = (mid + Math.imul(al4, bh7)) | 0;
		    mid = (mid + Math.imul(ah4, bl7)) | 0;
		    hi = (hi + Math.imul(ah4, bh7)) | 0;
		    lo = (lo + Math.imul(al3, bl8)) | 0;
		    mid = (mid + Math.imul(al3, bh8)) | 0;
		    mid = (mid + Math.imul(ah3, bl8)) | 0;
		    hi = (hi + Math.imul(ah3, bh8)) | 0;
		    lo = (lo + Math.imul(al2, bl9)) | 0;
		    mid = (mid + Math.imul(al2, bh9)) | 0;
		    mid = (mid + Math.imul(ah2, bl9)) | 0;
		    hi = (hi + Math.imul(ah2, bh9)) | 0;
		    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
		    w11 &= 0x3ffffff;
		    /* k = 12 */
		    lo = Math.imul(al9, bl3);
		    mid = Math.imul(al9, bh3);
		    mid = (mid + Math.imul(ah9, bl3)) | 0;
		    hi = Math.imul(ah9, bh3);
		    lo = (lo + Math.imul(al8, bl4)) | 0;
		    mid = (mid + Math.imul(al8, bh4)) | 0;
		    mid = (mid + Math.imul(ah8, bl4)) | 0;
		    hi = (hi + Math.imul(ah8, bh4)) | 0;
		    lo = (lo + Math.imul(al7, bl5)) | 0;
		    mid = (mid + Math.imul(al7, bh5)) | 0;
		    mid = (mid + Math.imul(ah7, bl5)) | 0;
		    hi = (hi + Math.imul(ah7, bh5)) | 0;
		    lo = (lo + Math.imul(al6, bl6)) | 0;
		    mid = (mid + Math.imul(al6, bh6)) | 0;
		    mid = (mid + Math.imul(ah6, bl6)) | 0;
		    hi = (hi + Math.imul(ah6, bh6)) | 0;
		    lo = (lo + Math.imul(al5, bl7)) | 0;
		    mid = (mid + Math.imul(al5, bh7)) | 0;
		    mid = (mid + Math.imul(ah5, bl7)) | 0;
		    hi = (hi + Math.imul(ah5, bh7)) | 0;
		    lo = (lo + Math.imul(al4, bl8)) | 0;
		    mid = (mid + Math.imul(al4, bh8)) | 0;
		    mid = (mid + Math.imul(ah4, bl8)) | 0;
		    hi = (hi + Math.imul(ah4, bh8)) | 0;
		    lo = (lo + Math.imul(al3, bl9)) | 0;
		    mid = (mid + Math.imul(al3, bh9)) | 0;
		    mid = (mid + Math.imul(ah3, bl9)) | 0;
		    hi = (hi + Math.imul(ah3, bh9)) | 0;
		    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
		    w12 &= 0x3ffffff;
		    /* k = 13 */
		    lo = Math.imul(al9, bl4);
		    mid = Math.imul(al9, bh4);
		    mid = (mid + Math.imul(ah9, bl4)) | 0;
		    hi = Math.imul(ah9, bh4);
		    lo = (lo + Math.imul(al8, bl5)) | 0;
		    mid = (mid + Math.imul(al8, bh5)) | 0;
		    mid = (mid + Math.imul(ah8, bl5)) | 0;
		    hi = (hi + Math.imul(ah8, bh5)) | 0;
		    lo = (lo + Math.imul(al7, bl6)) | 0;
		    mid = (mid + Math.imul(al7, bh6)) | 0;
		    mid = (mid + Math.imul(ah7, bl6)) | 0;
		    hi = (hi + Math.imul(ah7, bh6)) | 0;
		    lo = (lo + Math.imul(al6, bl7)) | 0;
		    mid = (mid + Math.imul(al6, bh7)) | 0;
		    mid = (mid + Math.imul(ah6, bl7)) | 0;
		    hi = (hi + Math.imul(ah6, bh7)) | 0;
		    lo = (lo + Math.imul(al5, bl8)) | 0;
		    mid = (mid + Math.imul(al5, bh8)) | 0;
		    mid = (mid + Math.imul(ah5, bl8)) | 0;
		    hi = (hi + Math.imul(ah5, bh8)) | 0;
		    lo = (lo + Math.imul(al4, bl9)) | 0;
		    mid = (mid + Math.imul(al4, bh9)) | 0;
		    mid = (mid + Math.imul(ah4, bl9)) | 0;
		    hi = (hi + Math.imul(ah4, bh9)) | 0;
		    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
		    w13 &= 0x3ffffff;
		    /* k = 14 */
		    lo = Math.imul(al9, bl5);
		    mid = Math.imul(al9, bh5);
		    mid = (mid + Math.imul(ah9, bl5)) | 0;
		    hi = Math.imul(ah9, bh5);
		    lo = (lo + Math.imul(al8, bl6)) | 0;
		    mid = (mid + Math.imul(al8, bh6)) | 0;
		    mid = (mid + Math.imul(ah8, bl6)) | 0;
		    hi = (hi + Math.imul(ah8, bh6)) | 0;
		    lo = (lo + Math.imul(al7, bl7)) | 0;
		    mid = (mid + Math.imul(al7, bh7)) | 0;
		    mid = (mid + Math.imul(ah7, bl7)) | 0;
		    hi = (hi + Math.imul(ah7, bh7)) | 0;
		    lo = (lo + Math.imul(al6, bl8)) | 0;
		    mid = (mid + Math.imul(al6, bh8)) | 0;
		    mid = (mid + Math.imul(ah6, bl8)) | 0;
		    hi = (hi + Math.imul(ah6, bh8)) | 0;
		    lo = (lo + Math.imul(al5, bl9)) | 0;
		    mid = (mid + Math.imul(al5, bh9)) | 0;
		    mid = (mid + Math.imul(ah5, bl9)) | 0;
		    hi = (hi + Math.imul(ah5, bh9)) | 0;
		    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
		    w14 &= 0x3ffffff;
		    /* k = 15 */
		    lo = Math.imul(al9, bl6);
		    mid = Math.imul(al9, bh6);
		    mid = (mid + Math.imul(ah9, bl6)) | 0;
		    hi = Math.imul(ah9, bh6);
		    lo = (lo + Math.imul(al8, bl7)) | 0;
		    mid = (mid + Math.imul(al8, bh7)) | 0;
		    mid = (mid + Math.imul(ah8, bl7)) | 0;
		    hi = (hi + Math.imul(ah8, bh7)) | 0;
		    lo = (lo + Math.imul(al7, bl8)) | 0;
		    mid = (mid + Math.imul(al7, bh8)) | 0;
		    mid = (mid + Math.imul(ah7, bl8)) | 0;
		    hi = (hi + Math.imul(ah7, bh8)) | 0;
		    lo = (lo + Math.imul(al6, bl9)) | 0;
		    mid = (mid + Math.imul(al6, bh9)) | 0;
		    mid = (mid + Math.imul(ah6, bl9)) | 0;
		    hi = (hi + Math.imul(ah6, bh9)) | 0;
		    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
		    w15 &= 0x3ffffff;
		    /* k = 16 */
		    lo = Math.imul(al9, bl7);
		    mid = Math.imul(al9, bh7);
		    mid = (mid + Math.imul(ah9, bl7)) | 0;
		    hi = Math.imul(ah9, bh7);
		    lo = (lo + Math.imul(al8, bl8)) | 0;
		    mid = (mid + Math.imul(al8, bh8)) | 0;
		    mid = (mid + Math.imul(ah8, bl8)) | 0;
		    hi = (hi + Math.imul(ah8, bh8)) | 0;
		    lo = (lo + Math.imul(al7, bl9)) | 0;
		    mid = (mid + Math.imul(al7, bh9)) | 0;
		    mid = (mid + Math.imul(ah7, bl9)) | 0;
		    hi = (hi + Math.imul(ah7, bh9)) | 0;
		    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
		    w16 &= 0x3ffffff;
		    /* k = 17 */
		    lo = Math.imul(al9, bl8);
		    mid = Math.imul(al9, bh8);
		    mid = (mid + Math.imul(ah9, bl8)) | 0;
		    hi = Math.imul(ah9, bh8);
		    lo = (lo + Math.imul(al8, bl9)) | 0;
		    mid = (mid + Math.imul(al8, bh9)) | 0;
		    mid = (mid + Math.imul(ah8, bl9)) | 0;
		    hi = (hi + Math.imul(ah8, bh9)) | 0;
		    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
		    w17 &= 0x3ffffff;
		    /* k = 18 */
		    lo = Math.imul(al9, bl9);
		    mid = Math.imul(al9, bh9);
		    mid = (mid + Math.imul(ah9, bl9)) | 0;
		    hi = Math.imul(ah9, bh9);
		    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
		    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
		    w18 &= 0x3ffffff;
		    o[0] = w0;
		    o[1] = w1;
		    o[2] = w2;
		    o[3] = w3;
		    o[4] = w4;
		    o[5] = w5;
		    o[6] = w6;
		    o[7] = w7;
		    o[8] = w8;
		    o[9] = w9;
		    o[10] = w10;
		    o[11] = w11;
		    o[12] = w12;
		    o[13] = w13;
		    o[14] = w14;
		    o[15] = w15;
		    o[16] = w16;
		    o[17] = w17;
		    o[18] = w18;
		    if (c !== 0) {
		      o[19] = c;
		      out.length++;
		    }
		    return out;
		  };

		  // Polyfill comb
		  if (!Math.imul) {
		    comb10MulTo = smallMulTo;
		  }

		  function bigMulTo (self, num, out) {
		    out.negative = num.negative ^ self.negative;
		    out.length = self.length + num.length;

		    var carry = 0;
		    var hncarry = 0;
		    for (var k = 0; k < out.length - 1; k++) {
		      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
		      // note that ncarry could be >= 0x3ffffff
		      var ncarry = hncarry;
		      hncarry = 0;
		      var rword = carry & 0x3ffffff;
		      var maxJ = Math.min(k, num.length - 1);
		      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
		        var i = k - j;
		        var a = self.words[i] | 0;
		        var b = num.words[j] | 0;
		        var r = a * b;

		        var lo = r & 0x3ffffff;
		        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
		        lo = (lo + rword) | 0;
		        rword = lo & 0x3ffffff;
		        ncarry = (ncarry + (lo >>> 26)) | 0;

		        hncarry += ncarry >>> 26;
		        ncarry &= 0x3ffffff;
		      }
		      out.words[k] = rword;
		      carry = ncarry;
		      ncarry = hncarry;
		    }
		    if (carry !== 0) {
		      out.words[k] = carry;
		    } else {
		      out.length--;
		    }

		    return out.strip();
		  }

		  function jumboMulTo (self, num, out) {
		    var fftm = new FFTM();
		    return fftm.mulp(self, num, out);
		  }

		  BN.prototype.mulTo = function mulTo (num, out) {
		    var res;
		    var len = this.length + num.length;
		    if (this.length === 10 && num.length === 10) {
		      res = comb10MulTo(this, num, out);
		    } else if (len < 63) {
		      res = smallMulTo(this, num, out);
		    } else if (len < 1024) {
		      res = bigMulTo(this, num, out);
		    } else {
		      res = jumboMulTo(this, num, out);
		    }

		    return res;
		  };

		  // Cooley-Tukey algorithm for FFT
		  // slightly revisited to rely on looping instead of recursion

		  function FFTM (x, y) {
		    this.x = x;
		    this.y = y;
		  }

		  FFTM.prototype.makeRBT = function makeRBT (N) {
		    var t = new Array(N);
		    var l = BN.prototype._countBits(N) - 1;
		    for (var i = 0; i < N; i++) {
		      t[i] = this.revBin(i, l, N);
		    }

		    return t;
		  };

		  // Returns binary-reversed representation of `x`
		  FFTM.prototype.revBin = function revBin (x, l, N) {
		    if (x === 0 || x === N - 1) return x;

		    var rb = 0;
		    for (var i = 0; i < l; i++) {
		      rb |= (x & 1) << (l - i - 1);
		      x >>= 1;
		    }

		    return rb;
		  };

		  // Performs "tweedling" phase, therefore 'emulating'
		  // behaviour of the recursive algorithm
		  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
		    for (var i = 0; i < N; i++) {
		      rtws[i] = rws[rbt[i]];
		      itws[i] = iws[rbt[i]];
		    }
		  };

		  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
		    this.permute(rbt, rws, iws, rtws, itws, N);

		    for (var s = 1; s < N; s <<= 1) {
		      var l = s << 1;

		      var rtwdf = Math.cos(2 * Math.PI / l);
		      var itwdf = Math.sin(2 * Math.PI / l);

		      for (var p = 0; p < N; p += l) {
		        var rtwdf_ = rtwdf;
		        var itwdf_ = itwdf;

		        for (var j = 0; j < s; j++) {
		          var re = rtws[p + j];
		          var ie = itws[p + j];

		          var ro = rtws[p + j + s];
		          var io = itws[p + j + s];

		          var rx = rtwdf_ * ro - itwdf_ * io;

		          io = rtwdf_ * io + itwdf_ * ro;
		          ro = rx;

		          rtws[p + j] = re + ro;
		          itws[p + j] = ie + io;

		          rtws[p + j + s] = re - ro;
		          itws[p + j + s] = ie - io;

		          /* jshint maxdepth : false */
		          if (j !== l) {
		            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

		            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
		            rtwdf_ = rx;
		          }
		        }
		      }
		    }
		  };

		  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
		    var N = Math.max(m, n) | 1;
		    var odd = N & 1;
		    var i = 0;
		    for (N = N / 2 | 0; N; N = N >>> 1) {
		      i++;
		    }

		    return 1 << i + 1 + odd;
		  };

		  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
		    if (N <= 1) return;

		    for (var i = 0; i < N / 2; i++) {
		      var t = rws[i];

		      rws[i] = rws[N - i - 1];
		      rws[N - i - 1] = t;

		      t = iws[i];

		      iws[i] = -iws[N - i - 1];
		      iws[N - i - 1] = -t;
		    }
		  };

		  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
		    var carry = 0;
		    for (var i = 0; i < N / 2; i++) {
		      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
		        Math.round(ws[2 * i] / N) +
		        carry;

		      ws[i] = w & 0x3ffffff;

		      if (w < 0x4000000) {
		        carry = 0;
		      } else {
		        carry = w / 0x4000000 | 0;
		      }
		    }

		    return ws;
		  };

		  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
		    var carry = 0;
		    for (var i = 0; i < len; i++) {
		      carry = carry + (ws[i] | 0);

		      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
		      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
		    }

		    // Pad with zeroes
		    for (i = 2 * len; i < N; ++i) {
		      rws[i] = 0;
		    }

		    assert(carry === 0);
		    assert((carry & ~0x1fff) === 0);
		  };

		  FFTM.prototype.stub = function stub (N) {
		    var ph = new Array(N);
		    for (var i = 0; i < N; i++) {
		      ph[i] = 0;
		    }

		    return ph;
		  };

		  FFTM.prototype.mulp = function mulp (x, y, out) {
		    var N = 2 * this.guessLen13b(x.length, y.length);

		    var rbt = this.makeRBT(N);

		    var _ = this.stub(N);

		    var rws = new Array(N);
		    var rwst = new Array(N);
		    var iwst = new Array(N);

		    var nrws = new Array(N);
		    var nrwst = new Array(N);
		    var niwst = new Array(N);

		    var rmws = out.words;
		    rmws.length = N;

		    this.convert13b(x.words, x.length, rws, N);
		    this.convert13b(y.words, y.length, nrws, N);

		    this.transform(rws, _, rwst, iwst, N, rbt);
		    this.transform(nrws, _, nrwst, niwst, N, rbt);

		    for (var i = 0; i < N; i++) {
		      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
		      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
		      rwst[i] = rx;
		    }

		    this.conjugate(rwst, iwst, N);
		    this.transform(rwst, iwst, rmws, _, N, rbt);
		    this.conjugate(rmws, _, N);
		    this.normalize13b(rmws, N);

		    out.negative = x.negative ^ y.negative;
		    out.length = x.length + y.length;
		    return out.strip();
		  };

		  // Multiply `this` by `num`
		  BN.prototype.mul = function mul (num) {
		    var out = new BN(null);
		    out.words = new Array(this.length + num.length);
		    return this.mulTo(num, out);
		  };

		  // Multiply employing FFT
		  BN.prototype.mulf = function mulf (num) {
		    var out = new BN(null);
		    out.words = new Array(this.length + num.length);
		    return jumboMulTo(this, num, out);
		  };

		  // In-place Multiplication
		  BN.prototype.imul = function imul (num) {
		    return this.clone().mulTo(num, this);
		  };

		  BN.prototype.imuln = function imuln (num) {
		    assert(typeof num === 'number');
		    assert(num < 0x4000000);

		    // Carry
		    var carry = 0;
		    for (var i = 0; i < this.length; i++) {
		      var w = (this.words[i] | 0) * num;
		      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
		      carry >>= 26;
		      carry += (w / 0x4000000) | 0;
		      // NOTE: lo is 27bit maximum
		      carry += lo >>> 26;
		      this.words[i] = lo & 0x3ffffff;
		    }

		    if (carry !== 0) {
		      this.words[i] = carry;
		      this.length++;
		    }
		    this.length = num === 0 ? 1 : this.length;

		    return this;
		  };

		  BN.prototype.muln = function muln (num) {
		    return this.clone().imuln(num);
		  };

		  // `this` * `this`
		  BN.prototype.sqr = function sqr () {
		    return this.mul(this);
		  };

		  // `this` * `this` in-place
		  BN.prototype.isqr = function isqr () {
		    return this.imul(this.clone());
		  };

		  // Math.pow(`this`, `num`)
		  BN.prototype.pow = function pow (num) {
		    var w = toBitArray(num);
		    if (w.length === 0) return new BN(1);

		    // Skip leading zeroes
		    var res = this;
		    for (var i = 0; i < w.length; i++, res = res.sqr()) {
		      if (w[i] !== 0) break;
		    }

		    if (++i < w.length) {
		      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
		        if (w[i] === 0) continue;

		        res = res.mul(q);
		      }
		    }

		    return res;
		  };

		  // Shift-left in-place
		  BN.prototype.iushln = function iushln (bits) {
		    assert(typeof bits === 'number' && bits >= 0);
		    var r = bits % 26;
		    var s = (bits - r) / 26;
		    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
		    var i;

		    if (r !== 0) {
		      var carry = 0;

		      for (i = 0; i < this.length; i++) {
		        var newCarry = this.words[i] & carryMask;
		        var c = ((this.words[i] | 0) - newCarry) << r;
		        this.words[i] = c | carry;
		        carry = newCarry >>> (26 - r);
		      }

		      if (carry) {
		        this.words[i] = carry;
		        this.length++;
		      }
		    }

		    if (s !== 0) {
		      for (i = this.length - 1; i >= 0; i--) {
		        this.words[i + s] = this.words[i];
		      }

		      for (i = 0; i < s; i++) {
		        this.words[i] = 0;
		      }

		      this.length += s;
		    }

		    return this.strip();
		  };

		  BN.prototype.ishln = function ishln (bits) {
		    // TODO(indutny): implement me
		    assert(this.negative === 0);
		    return this.iushln(bits);
		  };

		  // Shift-right in-place
		  // NOTE: `hint` is a lowest bit before trailing zeroes
		  // NOTE: if `extended` is present - it will be filled with destroyed bits
		  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
		    assert(typeof bits === 'number' && bits >= 0);
		    var h;
		    if (hint) {
		      h = (hint - (hint % 26)) / 26;
		    } else {
		      h = 0;
		    }

		    var r = bits % 26;
		    var s = Math.min((bits - r) / 26, this.length);
		    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
		    var maskedWords = extended;

		    h -= s;
		    h = Math.max(0, h);

		    // Extended mode, copy masked part
		    if (maskedWords) {
		      for (var i = 0; i < s; i++) {
		        maskedWords.words[i] = this.words[i];
		      }
		      maskedWords.length = s;
		    }

		    if (s === 0) ; else if (this.length > s) {
		      this.length -= s;
		      for (i = 0; i < this.length; i++) {
		        this.words[i] = this.words[i + s];
		      }
		    } else {
		      this.words[0] = 0;
		      this.length = 1;
		    }

		    var carry = 0;
		    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
		      var word = this.words[i] | 0;
		      this.words[i] = (carry << (26 - r)) | (word >>> r);
		      carry = word & mask;
		    }

		    // Push carried bits as a mask
		    if (maskedWords && carry !== 0) {
		      maskedWords.words[maskedWords.length++] = carry;
		    }

		    if (this.length === 0) {
		      this.words[0] = 0;
		      this.length = 1;
		    }

		    return this.strip();
		  };

		  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
		    // TODO(indutny): implement me
		    assert(this.negative === 0);
		    return this.iushrn(bits, hint, extended);
		  };

		  // Shift-left
		  BN.prototype.shln = function shln (bits) {
		    return this.clone().ishln(bits);
		  };

		  BN.prototype.ushln = function ushln (bits) {
		    return this.clone().iushln(bits);
		  };

		  // Shift-right
		  BN.prototype.shrn = function shrn (bits) {
		    return this.clone().ishrn(bits);
		  };

		  BN.prototype.ushrn = function ushrn (bits) {
		    return this.clone().iushrn(bits);
		  };

		  // Test if n bit is set
		  BN.prototype.testn = function testn (bit) {
		    assert(typeof bit === 'number' && bit >= 0);
		    var r = bit % 26;
		    var s = (bit - r) / 26;
		    var q = 1 << r;

		    // Fast case: bit is much higher than all existing words
		    if (this.length <= s) return false;

		    // Check bit and return
		    var w = this.words[s];

		    return !!(w & q);
		  };

		  // Return only lowers bits of number (in-place)
		  BN.prototype.imaskn = function imaskn (bits) {
		    assert(typeof bits === 'number' && bits >= 0);
		    var r = bits % 26;
		    var s = (bits - r) / 26;

		    assert(this.negative === 0, 'imaskn works only with positive numbers');

		    if (this.length <= s) {
		      return this;
		    }

		    if (r !== 0) {
		      s++;
		    }
		    this.length = Math.min(s, this.length);

		    if (r !== 0) {
		      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
		      this.words[this.length - 1] &= mask;
		    }

		    return this.strip();
		  };

		  // Return only lowers bits of number
		  BN.prototype.maskn = function maskn (bits) {
		    return this.clone().imaskn(bits);
		  };

		  // Add plain number `num` to `this`
		  BN.prototype.iaddn = function iaddn (num) {
		    assert(typeof num === 'number');
		    assert(num < 0x4000000);
		    if (num < 0) return this.isubn(-num);

		    // Possible sign change
		    if (this.negative !== 0) {
		      if (this.length === 1 && (this.words[0] | 0) < num) {
		        this.words[0] = num - (this.words[0] | 0);
		        this.negative = 0;
		        return this;
		      }

		      this.negative = 0;
		      this.isubn(num);
		      this.negative = 1;
		      return this;
		    }

		    // Add without checks
		    return this._iaddn(num);
		  };

		  BN.prototype._iaddn = function _iaddn (num) {
		    this.words[0] += num;

		    // Carry
		    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
		      this.words[i] -= 0x4000000;
		      if (i === this.length - 1) {
		        this.words[i + 1] = 1;
		      } else {
		        this.words[i + 1]++;
		      }
		    }
		    this.length = Math.max(this.length, i + 1);

		    return this;
		  };

		  // Subtract plain number `num` from `this`
		  BN.prototype.isubn = function isubn (num) {
		    assert(typeof num === 'number');
		    assert(num < 0x4000000);
		    if (num < 0) return this.iaddn(-num);

		    if (this.negative !== 0) {
		      this.negative = 0;
		      this.iaddn(num);
		      this.negative = 1;
		      return this;
		    }

		    this.words[0] -= num;

		    if (this.length === 1 && this.words[0] < 0) {
		      this.words[0] = -this.words[0];
		      this.negative = 1;
		    } else {
		      // Carry
		      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
		        this.words[i] += 0x4000000;
		        this.words[i + 1] -= 1;
		      }
		    }

		    return this.strip();
		  };

		  BN.prototype.addn = function addn (num) {
		    return this.clone().iaddn(num);
		  };

		  BN.prototype.subn = function subn (num) {
		    return this.clone().isubn(num);
		  };

		  BN.prototype.iabs = function iabs () {
		    this.negative = 0;

		    return this;
		  };

		  BN.prototype.abs = function abs () {
		    return this.clone().iabs();
		  };

		  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
		    var len = num.length + shift;
		    var i;

		    this._expand(len);

		    var w;
		    var carry = 0;
		    for (i = 0; i < num.length; i++) {
		      w = (this.words[i + shift] | 0) + carry;
		      var right = (num.words[i] | 0) * mul;
		      w -= right & 0x3ffffff;
		      carry = (w >> 26) - ((right / 0x4000000) | 0);
		      this.words[i + shift] = w & 0x3ffffff;
		    }
		    for (; i < this.length - shift; i++) {
		      w = (this.words[i + shift] | 0) + carry;
		      carry = w >> 26;
		      this.words[i + shift] = w & 0x3ffffff;
		    }

		    if (carry === 0) return this.strip();

		    // Subtraction overflow
		    assert(carry === -1);
		    carry = 0;
		    for (i = 0; i < this.length; i++) {
		      w = -(this.words[i] | 0) + carry;
		      carry = w >> 26;
		      this.words[i] = w & 0x3ffffff;
		    }
		    this.negative = 1;

		    return this.strip();
		  };

		  BN.prototype._wordDiv = function _wordDiv (num, mode) {
		    var shift = this.length - num.length;

		    var a = this.clone();
		    var b = num;

		    // Normalize
		    var bhi = b.words[b.length - 1] | 0;
		    var bhiBits = this._countBits(bhi);
		    shift = 26 - bhiBits;
		    if (shift !== 0) {
		      b = b.ushln(shift);
		      a.iushln(shift);
		      bhi = b.words[b.length - 1] | 0;
		    }

		    // Initialize quotient
		    var m = a.length - b.length;
		    var q;

		    if (mode !== 'mod') {
		      q = new BN(null);
		      q.length = m + 1;
		      q.words = new Array(q.length);
		      for (var i = 0; i < q.length; i++) {
		        q.words[i] = 0;
		      }
		    }

		    var diff = a.clone()._ishlnsubmul(b, 1, m);
		    if (diff.negative === 0) {
		      a = diff;
		      if (q) {
		        q.words[m] = 1;
		      }
		    }

		    for (var j = m - 1; j >= 0; j--) {
		      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
		        (a.words[b.length + j - 1] | 0);

		      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
		      // (0x7ffffff)
		      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

		      a._ishlnsubmul(b, qj, j);
		      while (a.negative !== 0) {
		        qj--;
		        a.negative = 0;
		        a._ishlnsubmul(b, 1, j);
		        if (!a.isZero()) {
		          a.negative ^= 1;
		        }
		      }
		      if (q) {
		        q.words[j] = qj;
		      }
		    }
		    if (q) {
		      q.strip();
		    }
		    a.strip();

		    // Denormalize
		    if (mode !== 'div' && shift !== 0) {
		      a.iushrn(shift);
		    }

		    return {
		      div: q || null,
		      mod: a
		    };
		  };

		  // NOTE: 1) `mode` can be set to `mod` to request mod only,
		  //       to `div` to request div only, or be absent to
		  //       request both div & mod
		  //       2) `positive` is true if unsigned mod is requested
		  BN.prototype.divmod = function divmod (num, mode, positive) {
		    assert(!num.isZero());

		    if (this.isZero()) {
		      return {
		        div: new BN(0),
		        mod: new BN(0)
		      };
		    }

		    var div, mod, res;
		    if (this.negative !== 0 && num.negative === 0) {
		      res = this.neg().divmod(num, mode);

		      if (mode !== 'mod') {
		        div = res.div.neg();
		      }

		      if (mode !== 'div') {
		        mod = res.mod.neg();
		        if (positive && mod.negative !== 0) {
		          mod.iadd(num);
		        }
		      }

		      return {
		        div: div,
		        mod: mod
		      };
		    }

		    if (this.negative === 0 && num.negative !== 0) {
		      res = this.divmod(num.neg(), mode);

		      if (mode !== 'mod') {
		        div = res.div.neg();
		      }

		      return {
		        div: div,
		        mod: res.mod
		      };
		    }

		    if ((this.negative & num.negative) !== 0) {
		      res = this.neg().divmod(num.neg(), mode);

		      if (mode !== 'div') {
		        mod = res.mod.neg();
		        if (positive && mod.negative !== 0) {
		          mod.isub(num);
		        }
		      }

		      return {
		        div: res.div,
		        mod: mod
		      };
		    }

		    // Both numbers are positive at this point

		    // Strip both numbers to approximate shift value
		    if (num.length > this.length || this.cmp(num) < 0) {
		      return {
		        div: new BN(0),
		        mod: this
		      };
		    }

		    // Very short reduction
		    if (num.length === 1) {
		      if (mode === 'div') {
		        return {
		          div: this.divn(num.words[0]),
		          mod: null
		        };
		      }

		      if (mode === 'mod') {
		        return {
		          div: null,
		          mod: new BN(this.modn(num.words[0]))
		        };
		      }

		      return {
		        div: this.divn(num.words[0]),
		        mod: new BN(this.modn(num.words[0]))
		      };
		    }

		    return this._wordDiv(num, mode);
		  };

		  // Find `this` / `num`
		  BN.prototype.div = function div (num) {
		    return this.divmod(num, 'div', false).div;
		  };

		  // Find `this` % `num`
		  BN.prototype.mod = function mod (num) {
		    return this.divmod(num, 'mod', false).mod;
		  };

		  BN.prototype.umod = function umod (num) {
		    return this.divmod(num, 'mod', true).mod;
		  };

		  // Find Round(`this` / `num`)
		  BN.prototype.divRound = function divRound (num) {
		    var dm = this.divmod(num);

		    // Fast case - exact division
		    if (dm.mod.isZero()) return dm.div;

		    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

		    var half = num.ushrn(1);
		    var r2 = num.andln(1);
		    var cmp = mod.cmp(half);

		    // Round down
		    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

		    // Round up
		    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
		  };

		  BN.prototype.modn = function modn (num) {
		    assert(num <= 0x3ffffff);
		    var p = (1 << 26) % num;

		    var acc = 0;
		    for (var i = this.length - 1; i >= 0; i--) {
		      acc = (p * acc + (this.words[i] | 0)) % num;
		    }

		    return acc;
		  };

		  // In-place division by number
		  BN.prototype.idivn = function idivn (num) {
		    assert(num <= 0x3ffffff);

		    var carry = 0;
		    for (var i = this.length - 1; i >= 0; i--) {
		      var w = (this.words[i] | 0) + carry * 0x4000000;
		      this.words[i] = (w / num) | 0;
		      carry = w % num;
		    }

		    return this.strip();
		  };

		  BN.prototype.divn = function divn (num) {
		    return this.clone().idivn(num);
		  };

		  BN.prototype.egcd = function egcd (p) {
		    assert(p.negative === 0);
		    assert(!p.isZero());

		    var x = this;
		    var y = p.clone();

		    if (x.negative !== 0) {
		      x = x.umod(p);
		    } else {
		      x = x.clone();
		    }

		    // A * x + B * y = x
		    var A = new BN(1);
		    var B = new BN(0);

		    // C * x + D * y = y
		    var C = new BN(0);
		    var D = new BN(1);

		    var g = 0;

		    while (x.isEven() && y.isEven()) {
		      x.iushrn(1);
		      y.iushrn(1);
		      ++g;
		    }

		    var yp = y.clone();
		    var xp = x.clone();

		    while (!x.isZero()) {
		      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
		      if (i > 0) {
		        x.iushrn(i);
		        while (i-- > 0) {
		          if (A.isOdd() || B.isOdd()) {
		            A.iadd(yp);
		            B.isub(xp);
		          }

		          A.iushrn(1);
		          B.iushrn(1);
		        }
		      }

		      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
		      if (j > 0) {
		        y.iushrn(j);
		        while (j-- > 0) {
		          if (C.isOdd() || D.isOdd()) {
		            C.iadd(yp);
		            D.isub(xp);
		          }

		          C.iushrn(1);
		          D.iushrn(1);
		        }
		      }

		      if (x.cmp(y) >= 0) {
		        x.isub(y);
		        A.isub(C);
		        B.isub(D);
		      } else {
		        y.isub(x);
		        C.isub(A);
		        D.isub(B);
		      }
		    }

		    return {
		      a: C,
		      b: D,
		      gcd: y.iushln(g)
		    };
		  };

		  // This is reduced incarnation of the binary EEA
		  // above, designated to invert members of the
		  // _prime_ fields F(p) at a maximal speed
		  BN.prototype._invmp = function _invmp (p) {
		    assert(p.negative === 0);
		    assert(!p.isZero());

		    var a = this;
		    var b = p.clone();

		    if (a.negative !== 0) {
		      a = a.umod(p);
		    } else {
		      a = a.clone();
		    }

		    var x1 = new BN(1);
		    var x2 = new BN(0);

		    var delta = b.clone();

		    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
		      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
		      if (i > 0) {
		        a.iushrn(i);
		        while (i-- > 0) {
		          if (x1.isOdd()) {
		            x1.iadd(delta);
		          }

		          x1.iushrn(1);
		        }
		      }

		      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
		      if (j > 0) {
		        b.iushrn(j);
		        while (j-- > 0) {
		          if (x2.isOdd()) {
		            x2.iadd(delta);
		          }

		          x2.iushrn(1);
		        }
		      }

		      if (a.cmp(b) >= 0) {
		        a.isub(b);
		        x1.isub(x2);
		      } else {
		        b.isub(a);
		        x2.isub(x1);
		      }
		    }

		    var res;
		    if (a.cmpn(1) === 0) {
		      res = x1;
		    } else {
		      res = x2;
		    }

		    if (res.cmpn(0) < 0) {
		      res.iadd(p);
		    }

		    return res;
		  };

		  BN.prototype.gcd = function gcd (num) {
		    if (this.isZero()) return num.abs();
		    if (num.isZero()) return this.abs();

		    var a = this.clone();
		    var b = num.clone();
		    a.negative = 0;
		    b.negative = 0;

		    // Remove common factor of two
		    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
		      a.iushrn(1);
		      b.iushrn(1);
		    }

		    do {
		      while (a.isEven()) {
		        a.iushrn(1);
		      }
		      while (b.isEven()) {
		        b.iushrn(1);
		      }

		      var r = a.cmp(b);
		      if (r < 0) {
		        // Swap `a` and `b` to make `a` always bigger than `b`
		        var t = a;
		        a = b;
		        b = t;
		      } else if (r === 0 || b.cmpn(1) === 0) {
		        break;
		      }

		      a.isub(b);
		    } while (true);

		    return b.iushln(shift);
		  };

		  // Invert number in the field F(num)
		  BN.prototype.invm = function invm (num) {
		    return this.egcd(num).a.umod(num);
		  };

		  BN.prototype.isEven = function isEven () {
		    return (this.words[0] & 1) === 0;
		  };

		  BN.prototype.isOdd = function isOdd () {
		    return (this.words[0] & 1) === 1;
		  };

		  // And first word and num
		  BN.prototype.andln = function andln (num) {
		    return this.words[0] & num;
		  };

		  // Increment at the bit position in-line
		  BN.prototype.bincn = function bincn (bit) {
		    assert(typeof bit === 'number');
		    var r = bit % 26;
		    var s = (bit - r) / 26;
		    var q = 1 << r;

		    // Fast case: bit is much higher than all existing words
		    if (this.length <= s) {
		      this._expand(s + 1);
		      this.words[s] |= q;
		      return this;
		    }

		    // Add bit and propagate, if needed
		    var carry = q;
		    for (var i = s; carry !== 0 && i < this.length; i++) {
		      var w = this.words[i] | 0;
		      w += carry;
		      carry = w >>> 26;
		      w &= 0x3ffffff;
		      this.words[i] = w;
		    }
		    if (carry !== 0) {
		      this.words[i] = carry;
		      this.length++;
		    }
		    return this;
		  };

		  BN.prototype.isZero = function isZero () {
		    return this.length === 1 && this.words[0] === 0;
		  };

		  BN.prototype.cmpn = function cmpn (num) {
		    var negative = num < 0;

		    if (this.negative !== 0 && !negative) return -1;
		    if (this.negative === 0 && negative) return 1;

		    this.strip();

		    var res;
		    if (this.length > 1) {
		      res = 1;
		    } else {
		      if (negative) {
		        num = -num;
		      }

		      assert(num <= 0x3ffffff, 'Number is too big');

		      var w = this.words[0] | 0;
		      res = w === num ? 0 : w < num ? -1 : 1;
		    }
		    if (this.negative !== 0) return -res | 0;
		    return res;
		  };

		  // Compare two numbers and return:
		  // 1 - if `this` > `num`
		  // 0 - if `this` == `num`
		  // -1 - if `this` < `num`
		  BN.prototype.cmp = function cmp (num) {
		    if (this.negative !== 0 && num.negative === 0) return -1;
		    if (this.negative === 0 && num.negative !== 0) return 1;

		    var res = this.ucmp(num);
		    if (this.negative !== 0) return -res | 0;
		    return res;
		  };

		  // Unsigned comparison
		  BN.prototype.ucmp = function ucmp (num) {
		    // At this point both numbers have the same sign
		    if (this.length > num.length) return 1;
		    if (this.length < num.length) return -1;

		    var res = 0;
		    for (var i = this.length - 1; i >= 0; i--) {
		      var a = this.words[i] | 0;
		      var b = num.words[i] | 0;

		      if (a === b) continue;
		      if (a < b) {
		        res = -1;
		      } else if (a > b) {
		        res = 1;
		      }
		      break;
		    }
		    return res;
		  };

		  BN.prototype.gtn = function gtn (num) {
		    return this.cmpn(num) === 1;
		  };

		  BN.prototype.gt = function gt (num) {
		    return this.cmp(num) === 1;
		  };

		  BN.prototype.gten = function gten (num) {
		    return this.cmpn(num) >= 0;
		  };

		  BN.prototype.gte = function gte (num) {
		    return this.cmp(num) >= 0;
		  };

		  BN.prototype.ltn = function ltn (num) {
		    return this.cmpn(num) === -1;
		  };

		  BN.prototype.lt = function lt (num) {
		    return this.cmp(num) === -1;
		  };

		  BN.prototype.lten = function lten (num) {
		    return this.cmpn(num) <= 0;
		  };

		  BN.prototype.lte = function lte (num) {
		    return this.cmp(num) <= 0;
		  };

		  BN.prototype.eqn = function eqn (num) {
		    return this.cmpn(num) === 0;
		  };

		  BN.prototype.eq = function eq (num) {
		    return this.cmp(num) === 0;
		  };

		  //
		  // A reduce context, could be using montgomery or something better, depending
		  // on the `m` itself.
		  //
		  BN.red = function red (num) {
		    return new Red(num);
		  };

		  BN.prototype.toRed = function toRed (ctx) {
		    assert(!this.red, 'Already a number in reduction context');
		    assert(this.negative === 0, 'red works only with positives');
		    return ctx.convertTo(this)._forceRed(ctx);
		  };

		  BN.prototype.fromRed = function fromRed () {
		    assert(this.red, 'fromRed works only with numbers in reduction context');
		    return this.red.convertFrom(this);
		  };

		  BN.prototype._forceRed = function _forceRed (ctx) {
		    this.red = ctx;
		    return this;
		  };

		  BN.prototype.forceRed = function forceRed (ctx) {
		    assert(!this.red, 'Already a number in reduction context');
		    return this._forceRed(ctx);
		  };

		  BN.prototype.redAdd = function redAdd (num) {
		    assert(this.red, 'redAdd works only with red numbers');
		    return this.red.add(this, num);
		  };

		  BN.prototype.redIAdd = function redIAdd (num) {
		    assert(this.red, 'redIAdd works only with red numbers');
		    return this.red.iadd(this, num);
		  };

		  BN.prototype.redSub = function redSub (num) {
		    assert(this.red, 'redSub works only with red numbers');
		    return this.red.sub(this, num);
		  };

		  BN.prototype.redISub = function redISub (num) {
		    assert(this.red, 'redISub works only with red numbers');
		    return this.red.isub(this, num);
		  };

		  BN.prototype.redShl = function redShl (num) {
		    assert(this.red, 'redShl works only with red numbers');
		    return this.red.shl(this, num);
		  };

		  BN.prototype.redMul = function redMul (num) {
		    assert(this.red, 'redMul works only with red numbers');
		    this.red._verify2(this, num);
		    return this.red.mul(this, num);
		  };

		  BN.prototype.redIMul = function redIMul (num) {
		    assert(this.red, 'redMul works only with red numbers');
		    this.red._verify2(this, num);
		    return this.red.imul(this, num);
		  };

		  BN.prototype.redSqr = function redSqr () {
		    assert(this.red, 'redSqr works only with red numbers');
		    this.red._verify1(this);
		    return this.red.sqr(this);
		  };

		  BN.prototype.redISqr = function redISqr () {
		    assert(this.red, 'redISqr works only with red numbers');
		    this.red._verify1(this);
		    return this.red.isqr(this);
		  };

		  // Square root over p
		  BN.prototype.redSqrt = function redSqrt () {
		    assert(this.red, 'redSqrt works only with red numbers');
		    this.red._verify1(this);
		    return this.red.sqrt(this);
		  };

		  BN.prototype.redInvm = function redInvm () {
		    assert(this.red, 'redInvm works only with red numbers');
		    this.red._verify1(this);
		    return this.red.invm(this);
		  };

		  // Return negative clone of `this` % `red modulo`
		  BN.prototype.redNeg = function redNeg () {
		    assert(this.red, 'redNeg works only with red numbers');
		    this.red._verify1(this);
		    return this.red.neg(this);
		  };

		  BN.prototype.redPow = function redPow (num) {
		    assert(this.red && !num.red, 'redPow(normalNum)');
		    this.red._verify1(this);
		    return this.red.pow(this, num);
		  };

		  // Prime numbers with efficient reduction
		  var primes = {
		    k256: null,
		    p224: null,
		    p192: null,
		    p25519: null
		  };

		  // Pseudo-Mersenne prime
		  function MPrime (name, p) {
		    // P = 2 ^ N - K
		    this.name = name;
		    this.p = new BN(p, 16);
		    this.n = this.p.bitLength();
		    this.k = new BN(1).iushln(this.n).isub(this.p);

		    this.tmp = this._tmp();
		  }

		  MPrime.prototype._tmp = function _tmp () {
		    var tmp = new BN(null);
		    tmp.words = new Array(Math.ceil(this.n / 13));
		    return tmp;
		  };

		  MPrime.prototype.ireduce = function ireduce (num) {
		    // Assumes that `num` is less than `P^2`
		    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
		    var r = num;
		    var rlen;

		    do {
		      this.split(r, this.tmp);
		      r = this.imulK(r);
		      r = r.iadd(this.tmp);
		      rlen = r.bitLength();
		    } while (rlen > this.n);

		    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
		    if (cmp === 0) {
		      r.words[0] = 0;
		      r.length = 1;
		    } else if (cmp > 0) {
		      r.isub(this.p);
		    } else {
		      if (r.strip !== undefined) {
		        // r is BN v4 instance
		        r.strip();
		      } else {
		        // r is BN v5 instance
		        r._strip();
		      }
		    }

		    return r;
		  };

		  MPrime.prototype.split = function split (input, out) {
		    input.iushrn(this.n, 0, out);
		  };

		  MPrime.prototype.imulK = function imulK (num) {
		    return num.imul(this.k);
		  };

		  function K256 () {
		    MPrime.call(
		      this,
		      'k256',
		      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
		  }
		  inherits(K256, MPrime);

		  K256.prototype.split = function split (input, output) {
		    // 256 = 9 * 26 + 22
		    var mask = 0x3fffff;

		    var outLen = Math.min(input.length, 9);
		    for (var i = 0; i < outLen; i++) {
		      output.words[i] = input.words[i];
		    }
		    output.length = outLen;

		    if (input.length <= 9) {
		      input.words[0] = 0;
		      input.length = 1;
		      return;
		    }

		    // Shift by 9 limbs
		    var prev = input.words[9];
		    output.words[output.length++] = prev & mask;

		    for (i = 10; i < input.length; i++) {
		      var next = input.words[i] | 0;
		      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
		      prev = next;
		    }
		    prev >>>= 22;
		    input.words[i - 10] = prev;
		    if (prev === 0 && input.length > 10) {
		      input.length -= 10;
		    } else {
		      input.length -= 9;
		    }
		  };

		  K256.prototype.imulK = function imulK (num) {
		    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
		    num.words[num.length] = 0;
		    num.words[num.length + 1] = 0;
		    num.length += 2;

		    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
		    var lo = 0;
		    for (var i = 0; i < num.length; i++) {
		      var w = num.words[i] | 0;
		      lo += w * 0x3d1;
		      num.words[i] = lo & 0x3ffffff;
		      lo = w * 0x40 + ((lo / 0x4000000) | 0);
		    }

		    // Fast length reduction
		    if (num.words[num.length - 1] === 0) {
		      num.length--;
		      if (num.words[num.length - 1] === 0) {
		        num.length--;
		      }
		    }
		    return num;
		  };

		  function P224 () {
		    MPrime.call(
		      this,
		      'p224',
		      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
		  }
		  inherits(P224, MPrime);

		  function P192 () {
		    MPrime.call(
		      this,
		      'p192',
		      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
		  }
		  inherits(P192, MPrime);

		  function P25519 () {
		    // 2 ^ 255 - 19
		    MPrime.call(
		      this,
		      '25519',
		      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
		  }
		  inherits(P25519, MPrime);

		  P25519.prototype.imulK = function imulK (num) {
		    // K = 0x13
		    var carry = 0;
		    for (var i = 0; i < num.length; i++) {
		      var hi = (num.words[i] | 0) * 0x13 + carry;
		      var lo = hi & 0x3ffffff;
		      hi >>>= 26;

		      num.words[i] = lo;
		      carry = hi;
		    }
		    if (carry !== 0) {
		      num.words[num.length++] = carry;
		    }
		    return num;
		  };

		  // Exported mostly for testing purposes, use plain name instead
		  BN._prime = function prime (name) {
		    // Cached version of prime
		    if (primes[name]) return primes[name];

		    var prime;
		    if (name === 'k256') {
		      prime = new K256();
		    } else if (name === 'p224') {
		      prime = new P224();
		    } else if (name === 'p192') {
		      prime = new P192();
		    } else if (name === 'p25519') {
		      prime = new P25519();
		    } else {
		      throw new Error('Unknown prime ' + name);
		    }
		    primes[name] = prime;

		    return prime;
		  };

		  //
		  // Base reduction engine
		  //
		  function Red (m) {
		    if (typeof m === 'string') {
		      var prime = BN._prime(m);
		      this.m = prime.p;
		      this.prime = prime;
		    } else {
		      assert(m.gtn(1), 'modulus must be greater than 1');
		      this.m = m;
		      this.prime = null;
		    }
		  }

		  Red.prototype._verify1 = function _verify1 (a) {
		    assert(a.negative === 0, 'red works only with positives');
		    assert(a.red, 'red works only with red numbers');
		  };

		  Red.prototype._verify2 = function _verify2 (a, b) {
		    assert((a.negative | b.negative) === 0, 'red works only with positives');
		    assert(a.red && a.red === b.red,
		      'red works only with red numbers');
		  };

		  Red.prototype.imod = function imod (a) {
		    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
		    return a.umod(this.m)._forceRed(this);
		  };

		  Red.prototype.neg = function neg (a) {
		    if (a.isZero()) {
		      return a.clone();
		    }

		    return this.m.sub(a)._forceRed(this);
		  };

		  Red.prototype.add = function add (a, b) {
		    this._verify2(a, b);

		    var res = a.add(b);
		    if (res.cmp(this.m) >= 0) {
		      res.isub(this.m);
		    }
		    return res._forceRed(this);
		  };

		  Red.prototype.iadd = function iadd (a, b) {
		    this._verify2(a, b);

		    var res = a.iadd(b);
		    if (res.cmp(this.m) >= 0) {
		      res.isub(this.m);
		    }
		    return res;
		  };

		  Red.prototype.sub = function sub (a, b) {
		    this._verify2(a, b);

		    var res = a.sub(b);
		    if (res.cmpn(0) < 0) {
		      res.iadd(this.m);
		    }
		    return res._forceRed(this);
		  };

		  Red.prototype.isub = function isub (a, b) {
		    this._verify2(a, b);

		    var res = a.isub(b);
		    if (res.cmpn(0) < 0) {
		      res.iadd(this.m);
		    }
		    return res;
		  };

		  Red.prototype.shl = function shl (a, num) {
		    this._verify1(a);
		    return this.imod(a.ushln(num));
		  };

		  Red.prototype.imul = function imul (a, b) {
		    this._verify2(a, b);
		    return this.imod(a.imul(b));
		  };

		  Red.prototype.mul = function mul (a, b) {
		    this._verify2(a, b);
		    return this.imod(a.mul(b));
		  };

		  Red.prototype.isqr = function isqr (a) {
		    return this.imul(a, a.clone());
		  };

		  Red.prototype.sqr = function sqr (a) {
		    return this.mul(a, a);
		  };

		  Red.prototype.sqrt = function sqrt (a) {
		    if (a.isZero()) return a.clone();

		    var mod3 = this.m.andln(3);
		    assert(mod3 % 2 === 1);

		    // Fast case
		    if (mod3 === 3) {
		      var pow = this.m.add(new BN(1)).iushrn(2);
		      return this.pow(a, pow);
		    }

		    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
		    //
		    // Find Q and S, that Q * 2 ^ S = (P - 1)
		    var q = this.m.subn(1);
		    var s = 0;
		    while (!q.isZero() && q.andln(1) === 0) {
		      s++;
		      q.iushrn(1);
		    }
		    assert(!q.isZero());

		    var one = new BN(1).toRed(this);
		    var nOne = one.redNeg();

		    // Find quadratic non-residue
		    // NOTE: Max is such because of generalized Riemann hypothesis.
		    var lpow = this.m.subn(1).iushrn(1);
		    var z = this.m.bitLength();
		    z = new BN(2 * z * z).toRed(this);

		    while (this.pow(z, lpow).cmp(nOne) !== 0) {
		      z.redIAdd(nOne);
		    }

		    var c = this.pow(z, q);
		    var r = this.pow(a, q.addn(1).iushrn(1));
		    var t = this.pow(a, q);
		    var m = s;
		    while (t.cmp(one) !== 0) {
		      var tmp = t;
		      for (var i = 0; tmp.cmp(one) !== 0; i++) {
		        tmp = tmp.redSqr();
		      }
		      assert(i < m);
		      var b = this.pow(c, new BN(1).iushln(m - i - 1));

		      r = r.redMul(b);
		      c = b.redSqr();
		      t = t.redMul(c);
		      m = i;
		    }

		    return r;
		  };

		  Red.prototype.invm = function invm (a) {
		    var inv = a._invmp(this.m);
		    if (inv.negative !== 0) {
		      inv.negative = 0;
		      return this.imod(inv).redNeg();
		    } else {
		      return this.imod(inv);
		    }
		  };

		  Red.prototype.pow = function pow (a, num) {
		    if (num.isZero()) return new BN(1).toRed(this);
		    if (num.cmpn(1) === 0) return a.clone();

		    var windowSize = 4;
		    var wnd = new Array(1 << windowSize);
		    wnd[0] = new BN(1).toRed(this);
		    wnd[1] = a;
		    for (var i = 2; i < wnd.length; i++) {
		      wnd[i] = this.mul(wnd[i - 1], a);
		    }

		    var res = wnd[0];
		    var current = 0;
		    var currentLen = 0;
		    var start = num.bitLength() % 26;
		    if (start === 0) {
		      start = 26;
		    }

		    for (i = num.length - 1; i >= 0; i--) {
		      var word = num.words[i];
		      for (var j = start - 1; j >= 0; j--) {
		        var bit = (word >> j) & 1;
		        if (res !== wnd[0]) {
		          res = this.sqr(res);
		        }

		        if (bit === 0 && current === 0) {
		          currentLen = 0;
		          continue;
		        }

		        current <<= 1;
		        current |= bit;
		        currentLen++;
		        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

		        res = this.mul(res, wnd[current]);
		        currentLen = 0;
		        current = 0;
		      }
		      start = 26;
		    }

		    return res;
		  };

		  Red.prototype.convertTo = function convertTo (num) {
		    var r = num.umod(this.m);

		    return r === num ? r.clone() : r;
		  };

		  Red.prototype.convertFrom = function convertFrom (num) {
		    var res = num.clone();
		    res.red = null;
		    return res;
		  };

		  //
		  // Montgomery method engine
		  //

		  BN.mont = function mont (num) {
		    return new Mont(num);
		  };

		  function Mont (m) {
		    Red.call(this, m);

		    this.shift = this.m.bitLength();
		    if (this.shift % 26 !== 0) {
		      this.shift += 26 - (this.shift % 26);
		    }

		    this.r = new BN(1).iushln(this.shift);
		    this.r2 = this.imod(this.r.sqr());
		    this.rinv = this.r._invmp(this.m);

		    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
		    this.minv = this.minv.umod(this.r);
		    this.minv = this.r.sub(this.minv);
		  }
		  inherits(Mont, Red);

		  Mont.prototype.convertTo = function convertTo (num) {
		    return this.imod(num.ushln(this.shift));
		  };

		  Mont.prototype.convertFrom = function convertFrom (num) {
		    var r = this.imod(num.mul(this.rinv));
		    r.red = null;
		    return r;
		  };

		  Mont.prototype.imul = function imul (a, b) {
		    if (a.isZero() || b.isZero()) {
		      a.words[0] = 0;
		      a.length = 1;
		      return a;
		    }

		    var t = a.imul(b);
		    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
		    var u = t.isub(c).iushrn(this.shift);
		    var res = u;

		    if (u.cmp(this.m) >= 0) {
		      res = u.isub(this.m);
		    } else if (u.cmpn(0) < 0) {
		      res = u.iadd(this.m);
		    }

		    return res._forceRed(this);
		  };

		  Mont.prototype.mul = function mul (a, b) {
		    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

		    var t = a.mul(b);
		    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
		    var u = t.isub(c).iushrn(this.shift);
		    var res = u;
		    if (u.cmp(this.m) >= 0) {
		      res = u.isub(this.m);
		    } else if (u.cmpn(0) < 0) {
		      res = u.iadd(this.m);
		    }

		    return res._forceRed(this);
		  };

		  Mont.prototype.invm = function invm (a) {
		    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
		    var res = this.imod(a._invmp(this.m).mul(this.r2));
		    return res._forceRed(this);
		  };
		})(module, commonjsGlobal); 
	} (bn));
	return bn.exports;
}

var minimalisticAssert;
var hasRequiredMinimalisticAssert;

function requireMinimalisticAssert () {
	if (hasRequiredMinimalisticAssert) return minimalisticAssert;
	hasRequiredMinimalisticAssert = 1;
	minimalisticAssert = assert;

	function assert(val, msg) {
	  if (!val)
	    throw new Error(msg || 'Assertion failed');
	}

	assert.equal = function assertEqual(l, r, msg) {
	  if (l != r)
	    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
	};
	return minimalisticAssert;
}

var utils$1 = {};

var hasRequiredUtils$2;

function requireUtils$2 () {
	if (hasRequiredUtils$2) return utils$1;
	hasRequiredUtils$2 = 1;
	(function (exports) {

		var utils = exports;

		function toArray(msg, enc) {
		  if (Array.isArray(msg))
		    return msg.slice();
		  if (!msg)
		    return [];
		  var res = [];
		  if (typeof msg !== 'string') {
		    for (var i = 0; i < msg.length; i++)
		      res[i] = msg[i] | 0;
		    return res;
		  }
		  if (enc === 'hex') {
		    msg = msg.replace(/[^a-z0-9]+/ig, '');
		    if (msg.length % 2 !== 0)
		      msg = '0' + msg;
		    for (var i = 0; i < msg.length; i += 2)
		      res.push(parseInt(msg[i] + msg[i + 1], 16));
		  } else {
		    for (var i = 0; i < msg.length; i++) {
		      var c = msg.charCodeAt(i);
		      var hi = c >> 8;
		      var lo = c & 0xff;
		      if (hi)
		        res.push(hi, lo);
		      else
		        res.push(lo);
		    }
		  }
		  return res;
		}
		utils.toArray = toArray;

		function zero2(word) {
		  if (word.length === 1)
		    return '0' + word;
		  else
		    return word;
		}
		utils.zero2 = zero2;

		function toHex(msg) {
		  var res = '';
		  for (var i = 0; i < msg.length; i++)
		    res += zero2(msg[i].toString(16));
		  return res;
		}
		utils.toHex = toHex;

		utils.encode = function encode(arr, enc) {
		  if (enc === 'hex')
		    return toHex(arr);
		  else
		    return arr;
		}; 
	} (utils$1));
	return utils$1;
}

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$2;
	hasRequiredUtils$1 = 1;
	(function (exports) {

		var utils = exports;
		var BN = requireBn();
		var minAssert = requireMinimalisticAssert();
		var minUtils = requireUtils$2();

		utils.assert = minAssert;
		utils.toArray = minUtils.toArray;
		utils.zero2 = minUtils.zero2;
		utils.toHex = minUtils.toHex;
		utils.encode = minUtils.encode;

		// Represent num in a w-NAF form
		function getNAF(num, w, bits) {
		  var naf = new Array(Math.max(num.bitLength(), bits) + 1);
		  var i;
		  for (i = 0; i < naf.length; i += 1) {
		    naf[i] = 0;
		  }

		  var ws = 1 << (w + 1);
		  var k = num.clone();

		  for (i = 0; i < naf.length; i++) {
		    var z;
		    var mod = k.andln(ws - 1);
		    if (k.isOdd()) {
		      if (mod > (ws >> 1) - 1)
		        z = (ws >> 1) - mod;
		      else
		        z = mod;
		      k.isubn(z);
		    } else {
		      z = 0;
		    }

		    naf[i] = z;
		    k.iushrn(1);
		  }

		  return naf;
		}
		utils.getNAF = getNAF;

		// Represent k1, k2 in a Joint Sparse Form
		function getJSF(k1, k2) {
		  var jsf = [
		    [],
		    [],
		  ];

		  k1 = k1.clone();
		  k2 = k2.clone();
		  var d1 = 0;
		  var d2 = 0;
		  var m8;
		  while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
		    // First phase
		    var m14 = (k1.andln(3) + d1) & 3;
		    var m24 = (k2.andln(3) + d2) & 3;
		    if (m14 === 3)
		      m14 = -1;
		    if (m24 === 3)
		      m24 = -1;
		    var u1;
		    if ((m14 & 1) === 0) {
		      u1 = 0;
		    } else {
		      m8 = (k1.andln(7) + d1) & 7;
		      if ((m8 === 3 || m8 === 5) && m24 === 2)
		        u1 = -m14;
		      else
		        u1 = m14;
		    }
		    jsf[0].push(u1);

		    var u2;
		    if ((m24 & 1) === 0) {
		      u2 = 0;
		    } else {
		      m8 = (k2.andln(7) + d2) & 7;
		      if ((m8 === 3 || m8 === 5) && m14 === 2)
		        u2 = -m24;
		      else
		        u2 = m24;
		    }
		    jsf[1].push(u2);

		    // Second phase
		    if (2 * d1 === u1 + 1)
		      d1 = 1 - d1;
		    if (2 * d2 === u2 + 1)
		      d2 = 1 - d2;
		    k1.iushrn(1);
		    k2.iushrn(1);
		  }

		  return jsf;
		}
		utils.getJSF = getJSF;

		function cachedProperty(obj, name, computer) {
		  var key = '_' + name;
		  obj.prototype[name] = function cachedProperty() {
		    return this[key] !== undefined ? this[key] :
		      this[key] = computer.call(this);
		  };
		}
		utils.cachedProperty = cachedProperty;

		function parseBytes(bytes) {
		  return typeof bytes === 'string' ? utils.toArray(bytes, 'hex') :
		    bytes;
		}
		utils.parseBytes = parseBytes;

		function intFromLE(bytes) {
		  return new BN(bytes, 'hex', 'le');
		}
		utils.intFromLE = intFromLE; 
	} (utils$2));
	return utils$2;
}

var brorand = {exports: {}};

var hasRequiredBrorand;

function requireBrorand () {
	if (hasRequiredBrorand) return brorand.exports;
	hasRequiredBrorand = 1;
	var r;

	brorand.exports = function rand(len) {
	  if (!r)
	    r = new Rand(null);

	  return r.generate(len);
	};

	function Rand(rand) {
	  this.rand = rand;
	}
	brorand.exports.Rand = Rand;

	Rand.prototype.generate = function generate(len) {
	  return this._rand(len);
	};

	// Emulate crypto API using randy
	Rand.prototype._rand = function _rand(n) {
	  if (this.rand.getBytes)
	    return this.rand.getBytes(n);

	  var res = new Uint8Array(n);
	  for (var i = 0; i < res.length; i++)
	    res[i] = this.rand.getByte();
	  return res;
	};

	if (typeof self === 'object') {
	  if (self.crypto && self.crypto.getRandomValues) {
	    // Modern browsers
	    Rand.prototype._rand = function _rand(n) {
	      var arr = new Uint8Array(n);
	      self.crypto.getRandomValues(arr);
	      return arr;
	    };
	  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
	    // IE
	    Rand.prototype._rand = function _rand(n) {
	      var arr = new Uint8Array(n);
	      self.msCrypto.getRandomValues(arr);
	      return arr;
	    };

	  // Safari's WebWorkers do not have `crypto`
	  } else if (typeof window === 'object') {
	    // Old junk
	    Rand.prototype._rand = function() {
	      throw new Error('Not implemented yet');
	    };
	  }
	} else {
	  // Node.js or Web worker with no crypto support
	  try {
	    var crypto = require('crypto');
	    if (typeof crypto.randomBytes !== 'function')
	      throw new Error('Not supported');

	    Rand.prototype._rand = function _rand(n) {
	      return crypto.randomBytes(n);
	    };
	  } catch (e) {
	  }
	}
	return brorand.exports;
}

var curve = {};

var base;
var hasRequiredBase;

function requireBase () {
	if (hasRequiredBase) return base;
	hasRequiredBase = 1;

	var BN = requireBn();
	var utils = requireUtils$1();
	var getNAF = utils.getNAF;
	var getJSF = utils.getJSF;
	var assert = utils.assert;

	function BaseCurve(type, conf) {
	  this.type = type;
	  this.p = new BN(conf.p, 16);

	  // Use Montgomery, when there is no fast reduction for the prime
	  this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);

	  // Useful for many curves
	  this.zero = new BN(0).toRed(this.red);
	  this.one = new BN(1).toRed(this.red);
	  this.two = new BN(2).toRed(this.red);

	  // Curve configuration, optional
	  this.n = conf.n && new BN(conf.n, 16);
	  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);

	  // Temporary arrays
	  this._wnafT1 = new Array(4);
	  this._wnafT2 = new Array(4);
	  this._wnafT3 = new Array(4);
	  this._wnafT4 = new Array(4);

	  this._bitLength = this.n ? this.n.bitLength() : 0;

	  // Generalized Greg Maxwell's trick
	  var adjustCount = this.n && this.p.div(this.n);
	  if (!adjustCount || adjustCount.cmpn(100) > 0) {
	    this.redN = null;
	  } else {
	    this._maxwellTrick = true;
	    this.redN = this.n.toRed(this.red);
	  }
	}
	base = BaseCurve;

	BaseCurve.prototype.point = function point() {
	  throw new Error('Not implemented');
	};

	BaseCurve.prototype.validate = function validate() {
	  throw new Error('Not implemented');
	};

	BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
	  assert(p.precomputed);
	  var doubles = p._getDoubles();

	  var naf = getNAF(k, 1, this._bitLength);
	  var I = (1 << (doubles.step + 1)) - (doubles.step % 2 === 0 ? 2 : 1);
	  I /= 3;

	  // Translate into more windowed form
	  var repr = [];
	  var j;
	  var nafW;
	  for (j = 0; j < naf.length; j += doubles.step) {
	    nafW = 0;
	    for (var l = j + doubles.step - 1; l >= j; l--)
	      nafW = (nafW << 1) + naf[l];
	    repr.push(nafW);
	  }

	  var a = this.jpoint(null, null, null);
	  var b = this.jpoint(null, null, null);
	  for (var i = I; i > 0; i--) {
	    for (j = 0; j < repr.length; j++) {
	      nafW = repr[j];
	      if (nafW === i)
	        b = b.mixedAdd(doubles.points[j]);
	      else if (nafW === -i)
	        b = b.mixedAdd(doubles.points[j].neg());
	    }
	    a = a.add(b);
	  }
	  return a.toP();
	};

	BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
	  var w = 4;

	  // Precompute window
	  var nafPoints = p._getNAFPoints(w);
	  w = nafPoints.wnd;
	  var wnd = nafPoints.points;

	  // Get NAF form
	  var naf = getNAF(k, w, this._bitLength);

	  // Add `this`*(N+1) for every w-NAF index
	  var acc = this.jpoint(null, null, null);
	  for (var i = naf.length - 1; i >= 0; i--) {
	    // Count zeroes
	    for (var l = 0; i >= 0 && naf[i] === 0; i--)
	      l++;
	    if (i >= 0)
	      l++;
	    acc = acc.dblp(l);

	    if (i < 0)
	      break;
	    var z = naf[i];
	    assert(z !== 0);
	    if (p.type === 'affine') {
	      // J +- P
	      if (z > 0)
	        acc = acc.mixedAdd(wnd[(z - 1) >> 1]);
	      else
	        acc = acc.mixedAdd(wnd[(-z - 1) >> 1].neg());
	    } else {
	      // J +- J
	      if (z > 0)
	        acc = acc.add(wnd[(z - 1) >> 1]);
	      else
	        acc = acc.add(wnd[(-z - 1) >> 1].neg());
	    }
	  }
	  return p.type === 'affine' ? acc.toP() : acc;
	};

	BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW,
	  points,
	  coeffs,
	  len,
	  jacobianResult) {
	  var wndWidth = this._wnafT1;
	  var wnd = this._wnafT2;
	  var naf = this._wnafT3;

	  // Fill all arrays
	  var max = 0;
	  var i;
	  var j;
	  var p;
	  for (i = 0; i < len; i++) {
	    p = points[i];
	    var nafPoints = p._getNAFPoints(defW);
	    wndWidth[i] = nafPoints.wnd;
	    wnd[i] = nafPoints.points;
	  }

	  // Comb small window NAFs
	  for (i = len - 1; i >= 1; i -= 2) {
	    var a = i - 1;
	    var b = i;
	    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
	      naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
	      naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength);
	      max = Math.max(naf[a].length, max);
	      max = Math.max(naf[b].length, max);
	      continue;
	    }

	    var comb = [
	      points[a], /* 1 */
	      null, /* 3 */
	      null, /* 5 */
	      points[b], /* 7 */
	    ];

	    // Try to avoid Projective points, if possible
	    if (points[a].y.cmp(points[b].y) === 0) {
	      comb[1] = points[a].add(points[b]);
	      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
	    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
	      comb[1] = points[a].toJ().mixedAdd(points[b]);
	      comb[2] = points[a].add(points[b].neg());
	    } else {
	      comb[1] = points[a].toJ().mixedAdd(points[b]);
	      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
	    }

	    var index = [
	      -3, /* -1 -1 */
	      -1, /* -1 0 */
	      -5, /* -1 1 */
	      -7, /* 0 -1 */
	      0, /* 0 0 */
	      7, /* 0 1 */
	      5, /* 1 -1 */
	      1, /* 1 0 */
	      3,  /* 1 1 */
	    ];

	    var jsf = getJSF(coeffs[a], coeffs[b]);
	    max = Math.max(jsf[0].length, max);
	    naf[a] = new Array(max);
	    naf[b] = new Array(max);
	    for (j = 0; j < max; j++) {
	      var ja = jsf[0][j] | 0;
	      var jb = jsf[1][j] | 0;

	      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
	      naf[b][j] = 0;
	      wnd[a] = comb;
	    }
	  }

	  var acc = this.jpoint(null, null, null);
	  var tmp = this._wnafT4;
	  for (i = max; i >= 0; i--) {
	    var k = 0;

	    while (i >= 0) {
	      var zero = true;
	      for (j = 0; j < len; j++) {
	        tmp[j] = naf[j][i] | 0;
	        if (tmp[j] !== 0)
	          zero = false;
	      }
	      if (!zero)
	        break;
	      k++;
	      i--;
	    }
	    if (i >= 0)
	      k++;
	    acc = acc.dblp(k);
	    if (i < 0)
	      break;

	    for (j = 0; j < len; j++) {
	      var z = tmp[j];
	      if (z === 0)
	        continue;
	      else if (z > 0)
	        p = wnd[j][(z - 1) >> 1];
	      else if (z < 0)
	        p = wnd[j][(-z - 1) >> 1].neg();

	      if (p.type === 'affine')
	        acc = acc.mixedAdd(p);
	      else
	        acc = acc.add(p);
	    }
	  }
	  // Zeroify references
	  for (i = 0; i < len; i++)
	    wnd[i] = null;

	  if (jacobianResult)
	    return acc;
	  else
	    return acc.toP();
	};

	function BasePoint(curve, type) {
	  this.curve = curve;
	  this.type = type;
	  this.precomputed = null;
	}
	BaseCurve.BasePoint = BasePoint;

	BasePoint.prototype.eq = function eq(/*other*/) {
	  throw new Error('Not implemented');
	};

	BasePoint.prototype.validate = function validate() {
	  return this.curve.validate(this);
	};

	BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
	  bytes = utils.toArray(bytes, enc);

	  var len = this.p.byteLength();

	  // uncompressed, hybrid-odd, hybrid-even
	  if ((bytes[0] === 0x04 || bytes[0] === 0x06 || bytes[0] === 0x07) &&
	      bytes.length - 1 === 2 * len) {
	    if (bytes[0] === 0x06)
	      assert(bytes[bytes.length - 1] % 2 === 0);
	    else if (bytes[0] === 0x07)
	      assert(bytes[bytes.length - 1] % 2 === 1);

	    var res =  this.point(bytes.slice(1, 1 + len),
	      bytes.slice(1 + len, 1 + 2 * len));

	    return res;
	  } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) &&
	              bytes.length - 1 === len) {
	    return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 0x03);
	  }
	  throw new Error('Unknown point format');
	};

	BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
	  return this.encode(enc, true);
	};

	BasePoint.prototype._encode = function _encode(compact) {
	  var len = this.curve.p.byteLength();
	  var x = this.getX().toArray('be', len);

	  if (compact)
	    return [ this.getY().isEven() ? 0x02 : 0x03 ].concat(x);

	  return [ 0x04 ].concat(x, this.getY().toArray('be', len));
	};

	BasePoint.prototype.encode = function encode(enc, compact) {
	  return utils.encode(this._encode(compact), enc);
	};

	BasePoint.prototype.precompute = function precompute(power) {
	  if (this.precomputed)
	    return this;

	  var precomputed = {
	    doubles: null,
	    naf: null,
	    beta: null,
	  };
	  precomputed.naf = this._getNAFPoints(8);
	  precomputed.doubles = this._getDoubles(4, power);
	  precomputed.beta = this._getBeta();
	  this.precomputed = precomputed;

	  return this;
	};

	BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
	  if (!this.precomputed)
	    return false;

	  var doubles = this.precomputed.doubles;
	  if (!doubles)
	    return false;

	  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
	};

	BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
	  if (this.precomputed && this.precomputed.doubles)
	    return this.precomputed.doubles;

	  var doubles = [ this ];
	  var acc = this;
	  for (var i = 0; i < power; i += step) {
	    for (var j = 0; j < step; j++)
	      acc = acc.dbl();
	    doubles.push(acc);
	  }
	  return {
	    step: step,
	    points: doubles,
	  };
	};

	BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
	  if (this.precomputed && this.precomputed.naf)
	    return this.precomputed.naf;

	  var res = [ this ];
	  var max = (1 << wnd) - 1;
	  var dbl = max === 1 ? null : this.dbl();
	  for (var i = 1; i < max; i++)
	    res[i] = res[i - 1].add(dbl);
	  return {
	    wnd: wnd,
	    points: res,
	  };
	};

	BasePoint.prototype._getBeta = function _getBeta() {
	  return null;
	};

	BasePoint.prototype.dblp = function dblp(k) {
	  var r = this;
	  for (var i = 0; i < k; i++)
	    r = r.dbl();
	  return r;
	};
	return base;
}

var inherits = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

var hasRequiredInherits;

function requireInherits () {
	if (hasRequiredInherits) return inherits.exports;
	hasRequiredInherits = 1;
	try {
	  var util = require('util');
	  /* istanbul ignore next */
	  if (typeof util.inherits !== 'function') throw '';
	  inherits.exports = util.inherits;
	} catch (e) {
	  /* istanbul ignore next */
	  inherits.exports = requireInherits_browser();
	}
	return inherits.exports;
}

var short;
var hasRequiredShort;

function requireShort () {
	if (hasRequiredShort) return short;
	hasRequiredShort = 1;

	var utils = requireUtils$1();
	var BN = requireBn();
	var inherits = requireInherits();
	var Base = requireBase();

	var assert = utils.assert;

	function ShortCurve(conf) {
	  Base.call(this, 'short', conf);

	  this.a = new BN(conf.a, 16).toRed(this.red);
	  this.b = new BN(conf.b, 16).toRed(this.red);
	  this.tinv = this.two.redInvm();

	  this.zeroA = this.a.fromRed().cmpn(0) === 0;
	  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;

	  // If the curve is endomorphic, precalculate beta and lambda
	  this.endo = this._getEndomorphism(conf);
	  this._endoWnafT1 = new Array(4);
	  this._endoWnafT2 = new Array(4);
	}
	inherits(ShortCurve, Base);
	short = ShortCurve;

	ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
	  // No efficient endomorphism
	  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
	    return;

	  // Compute beta and lambda, that lambda * P = (beta * Px; Py)
	  var beta;
	  var lambda;
	  if (conf.beta) {
	    beta = new BN(conf.beta, 16).toRed(this.red);
	  } else {
	    var betas = this._getEndoRoots(this.p);
	    // Choose the smallest beta
	    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
	    beta = beta.toRed(this.red);
	  }
	  if (conf.lambda) {
	    lambda = new BN(conf.lambda, 16);
	  } else {
	    // Choose the lambda that is matching selected beta
	    var lambdas = this._getEndoRoots(this.n);
	    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
	      lambda = lambdas[0];
	    } else {
	      lambda = lambdas[1];
	      assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
	    }
	  }

	  // Get basis vectors, used for balanced length-two representation
	  var basis;
	  if (conf.basis) {
	    basis = conf.basis.map(function(vec) {
	      return {
	        a: new BN(vec.a, 16),
	        b: new BN(vec.b, 16),
	      };
	    });
	  } else {
	    basis = this._getEndoBasis(lambda);
	  }

	  return {
	    beta: beta,
	    lambda: lambda,
	    basis: basis,
	  };
	};

	ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
	  // Find roots of for x^2 + x + 1 in F
	  // Root = (-1 +- Sqrt(-3)) / 2
	  //
	  var red = num === this.p ? this.red : BN.mont(num);
	  var tinv = new BN(2).toRed(red).redInvm();
	  var ntinv = tinv.redNeg();

	  var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);

	  var l1 = ntinv.redAdd(s).fromRed();
	  var l2 = ntinv.redSub(s).fromRed();
	  return [ l1, l2 ];
	};

	ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
	  // aprxSqrt >= sqrt(this.n)
	  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));

	  // 3.74
	  // Run EGCD, until r(L + 1) < aprxSqrt
	  var u = lambda;
	  var v = this.n.clone();
	  var x1 = new BN(1);
	  var y1 = new BN(0);
	  var x2 = new BN(0);
	  var y2 = new BN(1);

	  // NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)
	  var a0;
	  var b0;
	  // First vector
	  var a1;
	  var b1;
	  // Second vector
	  var a2;
	  var b2;

	  var prevR;
	  var i = 0;
	  var r;
	  var x;
	  while (u.cmpn(0) !== 0) {
	    var q = v.div(u);
	    r = v.sub(q.mul(u));
	    x = x2.sub(q.mul(x1));
	    var y = y2.sub(q.mul(y1));

	    if (!a1 && r.cmp(aprxSqrt) < 0) {
	      a0 = prevR.neg();
	      b0 = x1;
	      a1 = r.neg();
	      b1 = x;
	    } else if (a1 && ++i === 2) {
	      break;
	    }
	    prevR = r;

	    v = u;
	    u = r;
	    x2 = x1;
	    x1 = x;
	    y2 = y1;
	    y1 = y;
	  }
	  a2 = r.neg();
	  b2 = x;

	  var len1 = a1.sqr().add(b1.sqr());
	  var len2 = a2.sqr().add(b2.sqr());
	  if (len2.cmp(len1) >= 0) {
	    a2 = a0;
	    b2 = b0;
	  }

	  // Normalize signs
	  if (a1.negative) {
	    a1 = a1.neg();
	    b1 = b1.neg();
	  }
	  if (a2.negative) {
	    a2 = a2.neg();
	    b2 = b2.neg();
	  }

	  return [
	    { a: a1, b: b1 },
	    { a: a2, b: b2 },
	  ];
	};

	ShortCurve.prototype._endoSplit = function _endoSplit(k) {
	  var basis = this.endo.basis;
	  var v1 = basis[0];
	  var v2 = basis[1];

	  var c1 = v2.b.mul(k).divRound(this.n);
	  var c2 = v1.b.neg().mul(k).divRound(this.n);

	  var p1 = c1.mul(v1.a);
	  var p2 = c2.mul(v2.a);
	  var q1 = c1.mul(v1.b);
	  var q2 = c2.mul(v2.b);

	  // Calculate answer
	  var k1 = k.sub(p1).sub(p2);
	  var k2 = q1.add(q2).neg();
	  return { k1: k1, k2: k2 };
	};

	ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
	  x = new BN(x, 16);
	  if (!x.red)
	    x = x.toRed(this.red);

	  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
	  var y = y2.redSqrt();
	  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
	    throw new Error('invalid point');

	  // XXX Is there any way to tell if the number is odd without converting it
	  // to non-red form?
	  var isOdd = y.fromRed().isOdd();
	  if (odd && !isOdd || !odd && isOdd)
	    y = y.redNeg();

	  return this.point(x, y);
	};

	ShortCurve.prototype.validate = function validate(point) {
	  if (point.inf)
	    return true;

	  var x = point.x;
	  var y = point.y;

	  var ax = this.a.redMul(x);
	  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
	  return y.redSqr().redISub(rhs).cmpn(0) === 0;
	};

	ShortCurve.prototype._endoWnafMulAdd =
	    function _endoWnafMulAdd(points, coeffs, jacobianResult) {
	      var npoints = this._endoWnafT1;
	      var ncoeffs = this._endoWnafT2;
	      for (var i = 0; i < points.length; i++) {
	        var split = this._endoSplit(coeffs[i]);
	        var p = points[i];
	        var beta = p._getBeta();

	        if (split.k1.negative) {
	          split.k1.ineg();
	          p = p.neg(true);
	        }
	        if (split.k2.negative) {
	          split.k2.ineg();
	          beta = beta.neg(true);
	        }

	        npoints[i * 2] = p;
	        npoints[i * 2 + 1] = beta;
	        ncoeffs[i * 2] = split.k1;
	        ncoeffs[i * 2 + 1] = split.k2;
	      }
	      var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);

	      // Clean-up references to points and coefficients
	      for (var j = 0; j < i * 2; j++) {
	        npoints[j] = null;
	        ncoeffs[j] = null;
	      }
	      return res;
	    };

	function Point(curve, x, y, isRed) {
	  Base.BasePoint.call(this, curve, 'affine');
	  if (x === null && y === null) {
	    this.x = null;
	    this.y = null;
	    this.inf = true;
	  } else {
	    this.x = new BN(x, 16);
	    this.y = new BN(y, 16);
	    // Force redgomery representation when loading from JSON
	    if (isRed) {
	      this.x.forceRed(this.curve.red);
	      this.y.forceRed(this.curve.red);
	    }
	    if (!this.x.red)
	      this.x = this.x.toRed(this.curve.red);
	    if (!this.y.red)
	      this.y = this.y.toRed(this.curve.red);
	    this.inf = false;
	  }
	}
	inherits(Point, Base.BasePoint);

	ShortCurve.prototype.point = function point(x, y, isRed) {
	  return new Point(this, x, y, isRed);
	};

	ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
	  return Point.fromJSON(this, obj, red);
	};

	Point.prototype._getBeta = function _getBeta() {
	  if (!this.curve.endo)
	    return;

	  var pre = this.precomputed;
	  if (pre && pre.beta)
	    return pre.beta;

	  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
	  if (pre) {
	    var curve = this.curve;
	    var endoMul = function(p) {
	      return curve.point(p.x.redMul(curve.endo.beta), p.y);
	    };
	    pre.beta = beta;
	    beta.precomputed = {
	      beta: null,
	      naf: pre.naf && {
	        wnd: pre.naf.wnd,
	        points: pre.naf.points.map(endoMul),
	      },
	      doubles: pre.doubles && {
	        step: pre.doubles.step,
	        points: pre.doubles.points.map(endoMul),
	      },
	    };
	  }
	  return beta;
	};

	Point.prototype.toJSON = function toJSON() {
	  if (!this.precomputed)
	    return [ this.x, this.y ];

	  return [ this.x, this.y, this.precomputed && {
	    doubles: this.precomputed.doubles && {
	      step: this.precomputed.doubles.step,
	      points: this.precomputed.doubles.points.slice(1),
	    },
	    naf: this.precomputed.naf && {
	      wnd: this.precomputed.naf.wnd,
	      points: this.precomputed.naf.points.slice(1),
	    },
	  } ];
	};

	Point.fromJSON = function fromJSON(curve, obj, red) {
	  if (typeof obj === 'string')
	    obj = JSON.parse(obj);
	  var res = curve.point(obj[0], obj[1], red);
	  if (!obj[2])
	    return res;

	  function obj2point(obj) {
	    return curve.point(obj[0], obj[1], red);
	  }

	  var pre = obj[2];
	  res.precomputed = {
	    beta: null,
	    doubles: pre.doubles && {
	      step: pre.doubles.step,
	      points: [ res ].concat(pre.doubles.points.map(obj2point)),
	    },
	    naf: pre.naf && {
	      wnd: pre.naf.wnd,
	      points: [ res ].concat(pre.naf.points.map(obj2point)),
	    },
	  };
	  return res;
	};

	Point.prototype.inspect = function inspect() {
	  if (this.isInfinity())
	    return '<EC Point Infinity>';
	  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
	      ' y: ' + this.y.fromRed().toString(16, 2) + '>';
	};

	Point.prototype.isInfinity = function isInfinity() {
	  return this.inf;
	};

	Point.prototype.add = function add(p) {
	  // O + P = P
	  if (this.inf)
	    return p;

	  // P + O = P
	  if (p.inf)
	    return this;

	  // P + P = 2P
	  if (this.eq(p))
	    return this.dbl();

	  // P + (-P) = O
	  if (this.neg().eq(p))
	    return this.curve.point(null, null);

	  // P + Q = O
	  if (this.x.cmp(p.x) === 0)
	    return this.curve.point(null, null);

	  var c = this.y.redSub(p.y);
	  if (c.cmpn(0) !== 0)
	    c = c.redMul(this.x.redSub(p.x).redInvm());
	  var nx = c.redSqr().redISub(this.x).redISub(p.x);
	  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
	  return this.curve.point(nx, ny);
	};

	Point.prototype.dbl = function dbl() {
	  if (this.inf)
	    return this;

	  // 2P = O
	  var ys1 = this.y.redAdd(this.y);
	  if (ys1.cmpn(0) === 0)
	    return this.curve.point(null, null);

	  var a = this.curve.a;

	  var x2 = this.x.redSqr();
	  var dyinv = ys1.redInvm();
	  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);

	  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
	  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
	  return this.curve.point(nx, ny);
	};

	Point.prototype.getX = function getX() {
	  return this.x.fromRed();
	};

	Point.prototype.getY = function getY() {
	  return this.y.fromRed();
	};

	Point.prototype.mul = function mul(k) {
	  k = new BN(k, 16);
	  if (this.isInfinity())
	    return this;
	  else if (this._hasDoubles(k))
	    return this.curve._fixedNafMul(this, k);
	  else if (this.curve.endo)
	    return this.curve._endoWnafMulAdd([ this ], [ k ]);
	  else
	    return this.curve._wnafMul(this, k);
	};

	Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
	  var points = [ this, p2 ];
	  var coeffs = [ k1, k2 ];
	  if (this.curve.endo)
	    return this.curve._endoWnafMulAdd(points, coeffs);
	  else
	    return this.curve._wnafMulAdd(1, points, coeffs, 2);
	};

	Point.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
	  var points = [ this, p2 ];
	  var coeffs = [ k1, k2 ];
	  if (this.curve.endo)
	    return this.curve._endoWnafMulAdd(points, coeffs, true);
	  else
	    return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
	};

	Point.prototype.eq = function eq(p) {
	  return this === p ||
	         this.inf === p.inf &&
	             (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
	};

	Point.prototype.neg = function neg(_precompute) {
	  if (this.inf)
	    return this;

	  var res = this.curve.point(this.x, this.y.redNeg());
	  if (_precompute && this.precomputed) {
	    var pre = this.precomputed;
	    var negate = function(p) {
	      return p.neg();
	    };
	    res.precomputed = {
	      naf: pre.naf && {
	        wnd: pre.naf.wnd,
	        points: pre.naf.points.map(negate),
	      },
	      doubles: pre.doubles && {
	        step: pre.doubles.step,
	        points: pre.doubles.points.map(negate),
	      },
	    };
	  }
	  return res;
	};

	Point.prototype.toJ = function toJ() {
	  if (this.inf)
	    return this.curve.jpoint(null, null, null);

	  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
	  return res;
	};

	function JPoint(curve, x, y, z) {
	  Base.BasePoint.call(this, curve, 'jacobian');
	  if (x === null && y === null && z === null) {
	    this.x = this.curve.one;
	    this.y = this.curve.one;
	    this.z = new BN(0);
	  } else {
	    this.x = new BN(x, 16);
	    this.y = new BN(y, 16);
	    this.z = new BN(z, 16);
	  }
	  if (!this.x.red)
	    this.x = this.x.toRed(this.curve.red);
	  if (!this.y.red)
	    this.y = this.y.toRed(this.curve.red);
	  if (!this.z.red)
	    this.z = this.z.toRed(this.curve.red);

	  this.zOne = this.z === this.curve.one;
	}
	inherits(JPoint, Base.BasePoint);

	ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
	  return new JPoint(this, x, y, z);
	};

	JPoint.prototype.toP = function toP() {
	  if (this.isInfinity())
	    return this.curve.point(null, null);

	  var zinv = this.z.redInvm();
	  var zinv2 = zinv.redSqr();
	  var ax = this.x.redMul(zinv2);
	  var ay = this.y.redMul(zinv2).redMul(zinv);

	  return this.curve.point(ax, ay);
	};

	JPoint.prototype.neg = function neg() {
	  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
	};

	JPoint.prototype.add = function add(p) {
	  // O + P = P
	  if (this.isInfinity())
	    return p;

	  // P + O = P
	  if (p.isInfinity())
	    return this;

	  // 12M + 4S + 7A
	  var pz2 = p.z.redSqr();
	  var z2 = this.z.redSqr();
	  var u1 = this.x.redMul(pz2);
	  var u2 = p.x.redMul(z2);
	  var s1 = this.y.redMul(pz2.redMul(p.z));
	  var s2 = p.y.redMul(z2.redMul(this.z));

	  var h = u1.redSub(u2);
	  var r = s1.redSub(s2);
	  if (h.cmpn(0) === 0) {
	    if (r.cmpn(0) !== 0)
	      return this.curve.jpoint(null, null, null);
	    else
	      return this.dbl();
	  }

	  var h2 = h.redSqr();
	  var h3 = h2.redMul(h);
	  var v = u1.redMul(h2);

	  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
	  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
	  var nz = this.z.redMul(p.z).redMul(h);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.mixedAdd = function mixedAdd(p) {
	  // O + P = P
	  if (this.isInfinity())
	    return p.toJ();

	  // P + O = P
	  if (p.isInfinity())
	    return this;

	  // 8M + 3S + 7A
	  var z2 = this.z.redSqr();
	  var u1 = this.x;
	  var u2 = p.x.redMul(z2);
	  var s1 = this.y;
	  var s2 = p.y.redMul(z2).redMul(this.z);

	  var h = u1.redSub(u2);
	  var r = s1.redSub(s2);
	  if (h.cmpn(0) === 0) {
	    if (r.cmpn(0) !== 0)
	      return this.curve.jpoint(null, null, null);
	    else
	      return this.dbl();
	  }

	  var h2 = h.redSqr();
	  var h3 = h2.redMul(h);
	  var v = u1.redMul(h2);

	  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
	  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
	  var nz = this.z.redMul(h);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.dblp = function dblp(pow) {
	  if (pow === 0)
	    return this;
	  if (this.isInfinity())
	    return this;
	  if (!pow)
	    return this.dbl();

	  var i;
	  if (this.curve.zeroA || this.curve.threeA) {
	    var r = this;
	    for (i = 0; i < pow; i++)
	      r = r.dbl();
	    return r;
	  }

	  // 1M + 2S + 1A + N * (4S + 5M + 8A)
	  // N = 1 => 6M + 6S + 9A
	  var a = this.curve.a;
	  var tinv = this.curve.tinv;

	  var jx = this.x;
	  var jy = this.y;
	  var jz = this.z;
	  var jz4 = jz.redSqr().redSqr();

	  // Reuse results
	  var jyd = jy.redAdd(jy);
	  for (i = 0; i < pow; i++) {
	    var jx2 = jx.redSqr();
	    var jyd2 = jyd.redSqr();
	    var jyd4 = jyd2.redSqr();
	    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

	    var t1 = jx.redMul(jyd2);
	    var nx = c.redSqr().redISub(t1.redAdd(t1));
	    var t2 = t1.redISub(nx);
	    var dny = c.redMul(t2);
	    dny = dny.redIAdd(dny).redISub(jyd4);
	    var nz = jyd.redMul(jz);
	    if (i + 1 < pow)
	      jz4 = jz4.redMul(jyd4);

	    jx = nx;
	    jz = nz;
	    jyd = dny;
	  }

	  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
	};

	JPoint.prototype.dbl = function dbl() {
	  if (this.isInfinity())
	    return this;

	  if (this.curve.zeroA)
	    return this._zeroDbl();
	  else if (this.curve.threeA)
	    return this._threeDbl();
	  else
	    return this._dbl();
	};

	JPoint.prototype._zeroDbl = function _zeroDbl() {
	  var nx;
	  var ny;
	  var nz;
	  // Z = 1
	  if (this.zOne) {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
	    //     #doubling-mdbl-2007-bl
	    // 1M + 5S + 14A

	    // XX = X1^2
	    var xx = this.x.redSqr();
	    // YY = Y1^2
	    var yy = this.y.redSqr();
	    // YYYY = YY^2
	    var yyyy = yy.redSqr();
	    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
	    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
	    s = s.redIAdd(s);
	    // M = 3 * XX + a; a = 0
	    var m = xx.redAdd(xx).redIAdd(xx);
	    // T = M ^ 2 - 2*S
	    var t = m.redSqr().redISub(s).redISub(s);

	    // 8 * YYYY
	    var yyyy8 = yyyy.redIAdd(yyyy);
	    yyyy8 = yyyy8.redIAdd(yyyy8);
	    yyyy8 = yyyy8.redIAdd(yyyy8);

	    // X3 = T
	    nx = t;
	    // Y3 = M * (S - T) - 8 * YYYY
	    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
	    // Z3 = 2*Y1
	    nz = this.y.redAdd(this.y);
	  } else {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
	    //     #doubling-dbl-2009-l
	    // 2M + 5S + 13A

	    // A = X1^2
	    var a = this.x.redSqr();
	    // B = Y1^2
	    var b = this.y.redSqr();
	    // C = B^2
	    var c = b.redSqr();
	    // D = 2 * ((X1 + B)^2 - A - C)
	    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
	    d = d.redIAdd(d);
	    // E = 3 * A
	    var e = a.redAdd(a).redIAdd(a);
	    // F = E^2
	    var f = e.redSqr();

	    // 8 * C
	    var c8 = c.redIAdd(c);
	    c8 = c8.redIAdd(c8);
	    c8 = c8.redIAdd(c8);

	    // X3 = F - 2 * D
	    nx = f.redISub(d).redISub(d);
	    // Y3 = E * (D - X3) - 8 * C
	    ny = e.redMul(d.redISub(nx)).redISub(c8);
	    // Z3 = 2 * Y1 * Z1
	    nz = this.y.redMul(this.z);
	    nz = nz.redIAdd(nz);
	  }

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype._threeDbl = function _threeDbl() {
	  var nx;
	  var ny;
	  var nz;
	  // Z = 1
	  if (this.zOne) {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html
	    //     #doubling-mdbl-2007-bl
	    // 1M + 5S + 15A

	    // XX = X1^2
	    var xx = this.x.redSqr();
	    // YY = Y1^2
	    var yy = this.y.redSqr();
	    // YYYY = YY^2
	    var yyyy = yy.redSqr();
	    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
	    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
	    s = s.redIAdd(s);
	    // M = 3 * XX + a
	    var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
	    // T = M^2 - 2 * S
	    var t = m.redSqr().redISub(s).redISub(s);
	    // X3 = T
	    nx = t;
	    // Y3 = M * (S - T) - 8 * YYYY
	    var yyyy8 = yyyy.redIAdd(yyyy);
	    yyyy8 = yyyy8.redIAdd(yyyy8);
	    yyyy8 = yyyy8.redIAdd(yyyy8);
	    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
	    // Z3 = 2 * Y1
	    nz = this.y.redAdd(this.y);
	  } else {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
	    // 3M + 5S

	    // delta = Z1^2
	    var delta = this.z.redSqr();
	    // gamma = Y1^2
	    var gamma = this.y.redSqr();
	    // beta = X1 * gamma
	    var beta = this.x.redMul(gamma);
	    // alpha = 3 * (X1 - delta) * (X1 + delta)
	    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
	    alpha = alpha.redAdd(alpha).redIAdd(alpha);
	    // X3 = alpha^2 - 8 * beta
	    var beta4 = beta.redIAdd(beta);
	    beta4 = beta4.redIAdd(beta4);
	    var beta8 = beta4.redAdd(beta4);
	    nx = alpha.redSqr().redISub(beta8);
	    // Z3 = (Y1 + Z1)^2 - gamma - delta
	    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
	    // Y3 = alpha * (4 * beta - X3) - 8 * gamma^2
	    var ggamma8 = gamma.redSqr();
	    ggamma8 = ggamma8.redIAdd(ggamma8);
	    ggamma8 = ggamma8.redIAdd(ggamma8);
	    ggamma8 = ggamma8.redIAdd(ggamma8);
	    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
	  }

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype._dbl = function _dbl() {
	  var a = this.curve.a;

	  // 4M + 6S + 10A
	  var jx = this.x;
	  var jy = this.y;
	  var jz = this.z;
	  var jz4 = jz.redSqr().redSqr();

	  var jx2 = jx.redSqr();
	  var jy2 = jy.redSqr();

	  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

	  var jxd4 = jx.redAdd(jx);
	  jxd4 = jxd4.redIAdd(jxd4);
	  var t1 = jxd4.redMul(jy2);
	  var nx = c.redSqr().redISub(t1.redAdd(t1));
	  var t2 = t1.redISub(nx);

	  var jyd8 = jy2.redSqr();
	  jyd8 = jyd8.redIAdd(jyd8);
	  jyd8 = jyd8.redIAdd(jyd8);
	  jyd8 = jyd8.redIAdd(jyd8);
	  var ny = c.redMul(t2).redISub(jyd8);
	  var nz = jy.redAdd(jy).redMul(jz);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.trpl = function trpl() {
	  if (!this.curve.zeroA)
	    return this.dbl().add(this);

	  // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html#tripling-tpl-2007-bl
	  // 5M + 10S + ...

	  // XX = X1^2
	  var xx = this.x.redSqr();
	  // YY = Y1^2
	  var yy = this.y.redSqr();
	  // ZZ = Z1^2
	  var zz = this.z.redSqr();
	  // YYYY = YY^2
	  var yyyy = yy.redSqr();
	  // M = 3 * XX + a * ZZ2; a = 0
	  var m = xx.redAdd(xx).redIAdd(xx);
	  // MM = M^2
	  var mm = m.redSqr();
	  // E = 6 * ((X1 + YY)^2 - XX - YYYY) - MM
	  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
	  e = e.redIAdd(e);
	  e = e.redAdd(e).redIAdd(e);
	  e = e.redISub(mm);
	  // EE = E^2
	  var ee = e.redSqr();
	  // T = 16*YYYY
	  var t = yyyy.redIAdd(yyyy);
	  t = t.redIAdd(t);
	  t = t.redIAdd(t);
	  t = t.redIAdd(t);
	  // U = (M + E)^2 - MM - EE - T
	  var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
	  // X3 = 4 * (X1 * EE - 4 * YY * U)
	  var yyu4 = yy.redMul(u);
	  yyu4 = yyu4.redIAdd(yyu4);
	  yyu4 = yyu4.redIAdd(yyu4);
	  var nx = this.x.redMul(ee).redISub(yyu4);
	  nx = nx.redIAdd(nx);
	  nx = nx.redIAdd(nx);
	  // Y3 = 8 * Y1 * (U * (T - U) - E * EE)
	  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
	  ny = ny.redIAdd(ny);
	  ny = ny.redIAdd(ny);
	  ny = ny.redIAdd(ny);
	  // Z3 = (Z1 + E)^2 - ZZ - EE
	  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.mul = function mul(k, kbase) {
	  k = new BN(k, kbase);

	  return this.curve._wnafMul(this, k);
	};

	JPoint.prototype.eq = function eq(p) {
	  if (p.type === 'affine')
	    return this.eq(p.toJ());

	  if (this === p)
	    return true;

	  // x1 * z2^2 == x2 * z1^2
	  var z2 = this.z.redSqr();
	  var pz2 = p.z.redSqr();
	  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
	    return false;

	  // y1 * z2^3 == y2 * z1^3
	  var z3 = z2.redMul(this.z);
	  var pz3 = pz2.redMul(p.z);
	  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
	};

	JPoint.prototype.eqXToP = function eqXToP(x) {
	  var zs = this.z.redSqr();
	  var rx = x.toRed(this.curve.red).redMul(zs);
	  if (this.x.cmp(rx) === 0)
	    return true;

	  var xc = x.clone();
	  var t = this.curve.redN.redMul(zs);
	  for (;;) {
	    xc.iadd(this.curve.n);
	    if (xc.cmp(this.curve.p) >= 0)
	      return false;

	    rx.redIAdd(t);
	    if (this.x.cmp(rx) === 0)
	      return true;
	  }
	};

	JPoint.prototype.inspect = function inspect() {
	  if (this.isInfinity())
	    return '<EC JPoint Infinity>';
	  return '<EC JPoint x: ' + this.x.toString(16, 2) +
	      ' y: ' + this.y.toString(16, 2) +
	      ' z: ' + this.z.toString(16, 2) + '>';
	};

	JPoint.prototype.isInfinity = function isInfinity() {
	  // XXX This code assumes that zero is always zero in red
	  return this.z.cmpn(0) === 0;
	};
	return short;
}

var mont;
var hasRequiredMont;

function requireMont () {
	if (hasRequiredMont) return mont;
	hasRequiredMont = 1;

	var BN = requireBn();
	var inherits = requireInherits();
	var Base = requireBase();

	var utils = requireUtils$1();

	function MontCurve(conf) {
	  Base.call(this, 'mont', conf);

	  this.a = new BN(conf.a, 16).toRed(this.red);
	  this.b = new BN(conf.b, 16).toRed(this.red);
	  this.i4 = new BN(4).toRed(this.red).redInvm();
	  this.two = new BN(2).toRed(this.red);
	  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
	}
	inherits(MontCurve, Base);
	mont = MontCurve;

	MontCurve.prototype.validate = function validate(point) {
	  var x = point.normalize().x;
	  var x2 = x.redSqr();
	  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
	  var y = rhs.redSqrt();

	  return y.redSqr().cmp(rhs) === 0;
	};

	function Point(curve, x, z) {
	  Base.BasePoint.call(this, curve, 'projective');
	  if (x === null && z === null) {
	    this.x = this.curve.one;
	    this.z = this.curve.zero;
	  } else {
	    this.x = new BN(x, 16);
	    this.z = new BN(z, 16);
	    if (!this.x.red)
	      this.x = this.x.toRed(this.curve.red);
	    if (!this.z.red)
	      this.z = this.z.toRed(this.curve.red);
	  }
	}
	inherits(Point, Base.BasePoint);

	MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
	  return this.point(utils.toArray(bytes, enc), 1);
	};

	MontCurve.prototype.point = function point(x, z) {
	  return new Point(this, x, z);
	};

	MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
	  return Point.fromJSON(this, obj);
	};

	Point.prototype.precompute = function precompute() {
	  // No-op
	};

	Point.prototype._encode = function _encode() {
	  return this.getX().toArray('be', this.curve.p.byteLength());
	};

	Point.fromJSON = function fromJSON(curve, obj) {
	  return new Point(curve, obj[0], obj[1] || curve.one);
	};

	Point.prototype.inspect = function inspect() {
	  if (this.isInfinity())
	    return '<EC Point Infinity>';
	  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
	      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
	};

	Point.prototype.isInfinity = function isInfinity() {
	  // XXX This code assumes that zero is always zero in red
	  return this.z.cmpn(0) === 0;
	};

	Point.prototype.dbl = function dbl() {
	  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#doubling-dbl-1987-m-3
	  // 2M + 2S + 4A

	  // A = X1 + Z1
	  var a = this.x.redAdd(this.z);
	  // AA = A^2
	  var aa = a.redSqr();
	  // B = X1 - Z1
	  var b = this.x.redSub(this.z);
	  // BB = B^2
	  var bb = b.redSqr();
	  // C = AA - BB
	  var c = aa.redSub(bb);
	  // X3 = AA * BB
	  var nx = aa.redMul(bb);
	  // Z3 = C * (BB + A24 * C)
	  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
	  return this.curve.point(nx, nz);
	};

	Point.prototype.add = function add() {
	  throw new Error('Not supported on Montgomery curve');
	};

	Point.prototype.diffAdd = function diffAdd(p, diff) {
	  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#diffadd-dadd-1987-m-3
	  // 4M + 2S + 6A

	  // A = X2 + Z2
	  var a = this.x.redAdd(this.z);
	  // B = X2 - Z2
	  var b = this.x.redSub(this.z);
	  // C = X3 + Z3
	  var c = p.x.redAdd(p.z);
	  // D = X3 - Z3
	  var d = p.x.redSub(p.z);
	  // DA = D * A
	  var da = d.redMul(a);
	  // CB = C * B
	  var cb = c.redMul(b);
	  // X5 = Z1 * (DA + CB)^2
	  var nx = diff.z.redMul(da.redAdd(cb).redSqr());
	  // Z5 = X1 * (DA - CB)^2
	  var nz = diff.x.redMul(da.redISub(cb).redSqr());
	  return this.curve.point(nx, nz);
	};

	Point.prototype.mul = function mul(k) {
	  var t = k.clone();
	  var a = this; // (N / 2) * Q + Q
	  var b = this.curve.point(null, null); // (N / 2) * Q
	  var c = this; // Q

	  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
	    bits.push(t.andln(1));

	  for (var i = bits.length - 1; i >= 0; i--) {
	    if (bits[i] === 0) {
	      // N * Q + Q = ((N / 2) * Q + Q)) + (N / 2) * Q
	      a = a.diffAdd(b, c);
	      // N * Q = 2 * ((N / 2) * Q + Q))
	      b = b.dbl();
	    } else {
	      // N * Q = ((N / 2) * Q + Q) + ((N / 2) * Q)
	      b = a.diffAdd(b, c);
	      // N * Q + Q = 2 * ((N / 2) * Q + Q)
	      a = a.dbl();
	    }
	  }
	  return b;
	};

	Point.prototype.mulAdd = function mulAdd() {
	  throw new Error('Not supported on Montgomery curve');
	};

	Point.prototype.jumlAdd = function jumlAdd() {
	  throw new Error('Not supported on Montgomery curve');
	};

	Point.prototype.eq = function eq(other) {
	  return this.getX().cmp(other.getX()) === 0;
	};

	Point.prototype.normalize = function normalize() {
	  this.x = this.x.redMul(this.z.redInvm());
	  this.z = this.curve.one;
	  return this;
	};

	Point.prototype.getX = function getX() {
	  // Normalize coordinates
	  this.normalize();

	  return this.x.fromRed();
	};
	return mont;
}

var edwards;
var hasRequiredEdwards;

function requireEdwards () {
	if (hasRequiredEdwards) return edwards;
	hasRequiredEdwards = 1;

	var utils = requireUtils$1();
	var BN = requireBn();
	var inherits = requireInherits();
	var Base = requireBase();

	var assert = utils.assert;

	function EdwardsCurve(conf) {
	  // NOTE: Important as we are creating point in Base.call()
	  this.twisted = (conf.a | 0) !== 1;
	  this.mOneA = this.twisted && (conf.a | 0) === -1;
	  this.extended = this.mOneA;

	  Base.call(this, 'edwards', conf);

	  this.a = new BN(conf.a, 16).umod(this.red.m);
	  this.a = this.a.toRed(this.red);
	  this.c = new BN(conf.c, 16).toRed(this.red);
	  this.c2 = this.c.redSqr();
	  this.d = new BN(conf.d, 16).toRed(this.red);
	  this.dd = this.d.redAdd(this.d);

	  assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
	  this.oneC = (conf.c | 0) === 1;
	}
	inherits(EdwardsCurve, Base);
	edwards = EdwardsCurve;

	EdwardsCurve.prototype._mulA = function _mulA(num) {
	  if (this.mOneA)
	    return num.redNeg();
	  else
	    return this.a.redMul(num);
	};

	EdwardsCurve.prototype._mulC = function _mulC(num) {
	  if (this.oneC)
	    return num;
	  else
	    return this.c.redMul(num);
	};

	// Just for compatibility with Short curve
	EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
	  return this.point(x, y, z, t);
	};

	EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
	  x = new BN(x, 16);
	  if (!x.red)
	    x = x.toRed(this.red);

	  var x2 = x.redSqr();
	  var rhs = this.c2.redSub(this.a.redMul(x2));
	  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));

	  var y2 = rhs.redMul(lhs.redInvm());
	  var y = y2.redSqrt();
	  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
	    throw new Error('invalid point');

	  var isOdd = y.fromRed().isOdd();
	  if (odd && !isOdd || !odd && isOdd)
	    y = y.redNeg();

	  return this.point(x, y);
	};

	EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
	  y = new BN(y, 16);
	  if (!y.red)
	    y = y.toRed(this.red);

	  // x^2 = (y^2 - c^2) / (c^2 d y^2 - a)
	  var y2 = y.redSqr();
	  var lhs = y2.redSub(this.c2);
	  var rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a);
	  var x2 = lhs.redMul(rhs.redInvm());

	  if (x2.cmp(this.zero) === 0) {
	    if (odd)
	      throw new Error('invalid point');
	    else
	      return this.point(this.zero, y);
	  }

	  var x = x2.redSqrt();
	  if (x.redSqr().redSub(x2).cmp(this.zero) !== 0)
	    throw new Error('invalid point');

	  if (x.fromRed().isOdd() !== odd)
	    x = x.redNeg();

	  return this.point(x, y);
	};

	EdwardsCurve.prototype.validate = function validate(point) {
	  if (point.isInfinity())
	    return true;

	  // Curve: A * X^2 + Y^2 = C^2 * (1 + D * X^2 * Y^2)
	  point.normalize();

	  var x2 = point.x.redSqr();
	  var y2 = point.y.redSqr();
	  var lhs = x2.redMul(this.a).redAdd(y2);
	  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));

	  return lhs.cmp(rhs) === 0;
	};

	function Point(curve, x, y, z, t) {
	  Base.BasePoint.call(this, curve, 'projective');
	  if (x === null && y === null && z === null) {
	    this.x = this.curve.zero;
	    this.y = this.curve.one;
	    this.z = this.curve.one;
	    this.t = this.curve.zero;
	    this.zOne = true;
	  } else {
	    this.x = new BN(x, 16);
	    this.y = new BN(y, 16);
	    this.z = z ? new BN(z, 16) : this.curve.one;
	    this.t = t && new BN(t, 16);
	    if (!this.x.red)
	      this.x = this.x.toRed(this.curve.red);
	    if (!this.y.red)
	      this.y = this.y.toRed(this.curve.red);
	    if (!this.z.red)
	      this.z = this.z.toRed(this.curve.red);
	    if (this.t && !this.t.red)
	      this.t = this.t.toRed(this.curve.red);
	    this.zOne = this.z === this.curve.one;

	    // Use extended coordinates
	    if (this.curve.extended && !this.t) {
	      this.t = this.x.redMul(this.y);
	      if (!this.zOne)
	        this.t = this.t.redMul(this.z.redInvm());
	    }
	  }
	}
	inherits(Point, Base.BasePoint);

	EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
	  return Point.fromJSON(this, obj);
	};

	EdwardsCurve.prototype.point = function point(x, y, z, t) {
	  return new Point(this, x, y, z, t);
	};

	Point.fromJSON = function fromJSON(curve, obj) {
	  return new Point(curve, obj[0], obj[1], obj[2]);
	};

	Point.prototype.inspect = function inspect() {
	  if (this.isInfinity())
	    return '<EC Point Infinity>';
	  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
	      ' y: ' + this.y.fromRed().toString(16, 2) +
	      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
	};

	Point.prototype.isInfinity = function isInfinity() {
	  // XXX This code assumes that zero is always zero in red
	  return this.x.cmpn(0) === 0 &&
	    (this.y.cmp(this.z) === 0 ||
	    (this.zOne && this.y.cmp(this.curve.c) === 0));
	};

	Point.prototype._extDbl = function _extDbl() {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
	  //     #doubling-dbl-2008-hwcd
	  // 4M + 4S

	  // A = X1^2
	  var a = this.x.redSqr();
	  // B = Y1^2
	  var b = this.y.redSqr();
	  // C = 2 * Z1^2
	  var c = this.z.redSqr();
	  c = c.redIAdd(c);
	  // D = a * A
	  var d = this.curve._mulA(a);
	  // E = (X1 + Y1)^2 - A - B
	  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
	  // G = D + B
	  var g = d.redAdd(b);
	  // F = G - C
	  var f = g.redSub(c);
	  // H = D - B
	  var h = d.redSub(b);
	  // X3 = E * F
	  var nx = e.redMul(f);
	  // Y3 = G * H
	  var ny = g.redMul(h);
	  // T3 = E * H
	  var nt = e.redMul(h);
	  // Z3 = F * G
	  var nz = f.redMul(g);
	  return this.curve.point(nx, ny, nz, nt);
	};

	Point.prototype._projDbl = function _projDbl() {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
	  //     #doubling-dbl-2008-bbjlp
	  //     #doubling-dbl-2007-bl
	  // and others
	  // Generally 3M + 4S or 2M + 4S

	  // B = (X1 + Y1)^2
	  var b = this.x.redAdd(this.y).redSqr();
	  // C = X1^2
	  var c = this.x.redSqr();
	  // D = Y1^2
	  var d = this.y.redSqr();

	  var nx;
	  var ny;
	  var nz;
	  var e;
	  var h;
	  var j;
	  if (this.curve.twisted) {
	    // E = a * C
	    e = this.curve._mulA(c);
	    // F = E + D
	    var f = e.redAdd(d);
	    if (this.zOne) {
	      // X3 = (B - C - D) * (F - 2)
	      nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));
	      // Y3 = F * (E - D)
	      ny = f.redMul(e.redSub(d));
	      // Z3 = F^2 - 2 * F
	      nz = f.redSqr().redSub(f).redSub(f);
	    } else {
	      // H = Z1^2
	      h = this.z.redSqr();
	      // J = F - 2 * H
	      j = f.redSub(h).redISub(h);
	      // X3 = (B-C-D)*J
	      nx = b.redSub(c).redISub(d).redMul(j);
	      // Y3 = F * (E - D)
	      ny = f.redMul(e.redSub(d));
	      // Z3 = F * J
	      nz = f.redMul(j);
	    }
	  } else {
	    // E = C + D
	    e = c.redAdd(d);
	    // H = (c * Z1)^2
	    h = this.curve._mulC(this.z).redSqr();
	    // J = E - 2 * H
	    j = e.redSub(h).redSub(h);
	    // X3 = c * (B - E) * J
	    nx = this.curve._mulC(b.redISub(e)).redMul(j);
	    // Y3 = c * E * (C - D)
	    ny = this.curve._mulC(e).redMul(c.redISub(d));
	    // Z3 = E * J
	    nz = e.redMul(j);
	  }
	  return this.curve.point(nx, ny, nz);
	};

	Point.prototype.dbl = function dbl() {
	  if (this.isInfinity())
	    return this;

	  // Double in extended coordinates
	  if (this.curve.extended)
	    return this._extDbl();
	  else
	    return this._projDbl();
	};

	Point.prototype._extAdd = function _extAdd(p) {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
	  //     #addition-add-2008-hwcd-3
	  // 8M

	  // A = (Y1 - X1) * (Y2 - X2)
	  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
	  // B = (Y1 + X1) * (Y2 + X2)
	  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
	  // C = T1 * k * T2
	  var c = this.t.redMul(this.curve.dd).redMul(p.t);
	  // D = Z1 * 2 * Z2
	  var d = this.z.redMul(p.z.redAdd(p.z));
	  // E = B - A
	  var e = b.redSub(a);
	  // F = D - C
	  var f = d.redSub(c);
	  // G = D + C
	  var g = d.redAdd(c);
	  // H = B + A
	  var h = b.redAdd(a);
	  // X3 = E * F
	  var nx = e.redMul(f);
	  // Y3 = G * H
	  var ny = g.redMul(h);
	  // T3 = E * H
	  var nt = e.redMul(h);
	  // Z3 = F * G
	  var nz = f.redMul(g);
	  return this.curve.point(nx, ny, nz, nt);
	};

	Point.prototype._projAdd = function _projAdd(p) {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
	  //     #addition-add-2008-bbjlp
	  //     #addition-add-2007-bl
	  // 10M + 1S

	  // A = Z1 * Z2
	  var a = this.z.redMul(p.z);
	  // B = A^2
	  var b = a.redSqr();
	  // C = X1 * X2
	  var c = this.x.redMul(p.x);
	  // D = Y1 * Y2
	  var d = this.y.redMul(p.y);
	  // E = d * C * D
	  var e = this.curve.d.redMul(c).redMul(d);
	  // F = B - E
	  var f = b.redSub(e);
	  // G = B + E
	  var g = b.redAdd(e);
	  // X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D)
	  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
	  var nx = a.redMul(f).redMul(tmp);
	  var ny;
	  var nz;
	  if (this.curve.twisted) {
	    // Y3 = A * G * (D - a * C)
	    ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
	    // Z3 = F * G
	    nz = f.redMul(g);
	  } else {
	    // Y3 = A * G * (D - C)
	    ny = a.redMul(g).redMul(d.redSub(c));
	    // Z3 = c * F * G
	    nz = this.curve._mulC(f).redMul(g);
	  }
	  return this.curve.point(nx, ny, nz);
	};

	Point.prototype.add = function add(p) {
	  if (this.isInfinity())
	    return p;
	  if (p.isInfinity())
	    return this;

	  if (this.curve.extended)
	    return this._extAdd(p);
	  else
	    return this._projAdd(p);
	};

	Point.prototype.mul = function mul(k) {
	  if (this._hasDoubles(k))
	    return this.curve._fixedNafMul(this, k);
	  else
	    return this.curve._wnafMul(this, k);
	};

	Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
	  return this.curve._wnafMulAdd(1, [ this, p ], [ k1, k2 ], 2, false);
	};

	Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
	  return this.curve._wnafMulAdd(1, [ this, p ], [ k1, k2 ], 2, true);
	};

	Point.prototype.normalize = function normalize() {
	  if (this.zOne)
	    return this;

	  // Normalize coordinates
	  var zi = this.z.redInvm();
	  this.x = this.x.redMul(zi);
	  this.y = this.y.redMul(zi);
	  if (this.t)
	    this.t = this.t.redMul(zi);
	  this.z = this.curve.one;
	  this.zOne = true;
	  return this;
	};

	Point.prototype.neg = function neg() {
	  return this.curve.point(this.x.redNeg(),
	    this.y,
	    this.z,
	    this.t && this.t.redNeg());
	};

	Point.prototype.getX = function getX() {
	  this.normalize();
	  return this.x.fromRed();
	};

	Point.prototype.getY = function getY() {
	  this.normalize();
	  return this.y.fromRed();
	};

	Point.prototype.eq = function eq(other) {
	  return this === other ||
	         this.getX().cmp(other.getX()) === 0 &&
	         this.getY().cmp(other.getY()) === 0;
	};

	Point.prototype.eqXToP = function eqXToP(x) {
	  var rx = x.toRed(this.curve.red).redMul(this.z);
	  if (this.x.cmp(rx) === 0)
	    return true;

	  var xc = x.clone();
	  var t = this.curve.redN.redMul(this.z);
	  for (;;) {
	    xc.iadd(this.curve.n);
	    if (xc.cmp(this.curve.p) >= 0)
	      return false;

	    rx.redIAdd(t);
	    if (this.x.cmp(rx) === 0)
	      return true;
	  }
	};

	// Compatibility with BaseCurve
	Point.prototype.toP = Point.prototype.normalize;
	Point.prototype.mixedAdd = Point.prototype.add;
	return edwards;
}

var hasRequiredCurve;

function requireCurve () {
	if (hasRequiredCurve) return curve;
	hasRequiredCurve = 1;
	(function (exports) {

		var curve = exports;

		curve.base = requireBase();
		curve.short = requireShort();
		curve.mont = requireMont();
		curve.edwards = requireEdwards(); 
	} (curve));
	return curve;
}

var curves = {};

var hash = {};

var utils = {};

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;

	var assert = requireMinimalisticAssert();
	var inherits = requireInherits();

	utils.inherits = inherits;

	function isSurrogatePair(msg, i) {
	  if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {
	    return false;
	  }
	  if (i < 0 || i + 1 >= msg.length) {
	    return false;
	  }
	  return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
	}

	function toArray(msg, enc) {
	  if (Array.isArray(msg))
	    return msg.slice();
	  if (!msg)
	    return [];
	  var res = [];
	  if (typeof msg === 'string') {
	    if (!enc) {
	      // Inspired by stringToUtf8ByteArray() in closure-library by Google
	      // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
	      // Apache License 2.0
	      // https://github.com/google/closure-library/blob/master/LICENSE
	      var p = 0;
	      for (var i = 0; i < msg.length; i++) {
	        var c = msg.charCodeAt(i);
	        if (c < 128) {
	          res[p++] = c;
	        } else if (c < 2048) {
	          res[p++] = (c >> 6) | 192;
	          res[p++] = (c & 63) | 128;
	        } else if (isSurrogatePair(msg, i)) {
	          c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
	          res[p++] = (c >> 18) | 240;
	          res[p++] = ((c >> 12) & 63) | 128;
	          res[p++] = ((c >> 6) & 63) | 128;
	          res[p++] = (c & 63) | 128;
	        } else {
	          res[p++] = (c >> 12) | 224;
	          res[p++] = ((c >> 6) & 63) | 128;
	          res[p++] = (c & 63) | 128;
	        }
	      }
	    } else if (enc === 'hex') {
	      msg = msg.replace(/[^a-z0-9]+/ig, '');
	      if (msg.length % 2 !== 0)
	        msg = '0' + msg;
	      for (i = 0; i < msg.length; i += 2)
	        res.push(parseInt(msg[i] + msg[i + 1], 16));
	    }
	  } else {
	    for (i = 0; i < msg.length; i++)
	      res[i] = msg[i] | 0;
	  }
	  return res;
	}
	utils.toArray = toArray;

	function toHex(msg) {
	  var res = '';
	  for (var i = 0; i < msg.length; i++)
	    res += zero2(msg[i].toString(16));
	  return res;
	}
	utils.toHex = toHex;

	function htonl(w) {
	  var res = (w >>> 24) |
	            ((w >>> 8) & 0xff00) |
	            ((w << 8) & 0xff0000) |
	            ((w & 0xff) << 24);
	  return res >>> 0;
	}
	utils.htonl = htonl;

	function toHex32(msg, endian) {
	  var res = '';
	  for (var i = 0; i < msg.length; i++) {
	    var w = msg[i];
	    if (endian === 'little')
	      w = htonl(w);
	    res += zero8(w.toString(16));
	  }
	  return res;
	}
	utils.toHex32 = toHex32;

	function zero2(word) {
	  if (word.length === 1)
	    return '0' + word;
	  else
	    return word;
	}
	utils.zero2 = zero2;

	function zero8(word) {
	  if (word.length === 7)
	    return '0' + word;
	  else if (word.length === 6)
	    return '00' + word;
	  else if (word.length === 5)
	    return '000' + word;
	  else if (word.length === 4)
	    return '0000' + word;
	  else if (word.length === 3)
	    return '00000' + word;
	  else if (word.length === 2)
	    return '000000' + word;
	  else if (word.length === 1)
	    return '0000000' + word;
	  else
	    return word;
	}
	utils.zero8 = zero8;

	function join32(msg, start, end, endian) {
	  var len = end - start;
	  assert(len % 4 === 0);
	  var res = new Array(len / 4);
	  for (var i = 0, k = start; i < res.length; i++, k += 4) {
	    var w;
	    if (endian === 'big')
	      w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
	    else
	      w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
	    res[i] = w >>> 0;
	  }
	  return res;
	}
	utils.join32 = join32;

	function split32(msg, endian) {
	  var res = new Array(msg.length * 4);
	  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
	    var m = msg[i];
	    if (endian === 'big') {
	      res[k] = m >>> 24;
	      res[k + 1] = (m >>> 16) & 0xff;
	      res[k + 2] = (m >>> 8) & 0xff;
	      res[k + 3] = m & 0xff;
	    } else {
	      res[k + 3] = m >>> 24;
	      res[k + 2] = (m >>> 16) & 0xff;
	      res[k + 1] = (m >>> 8) & 0xff;
	      res[k] = m & 0xff;
	    }
	  }
	  return res;
	}
	utils.split32 = split32;

	function rotr32(w, b) {
	  return (w >>> b) | (w << (32 - b));
	}
	utils.rotr32 = rotr32;

	function rotl32(w, b) {
	  return (w << b) | (w >>> (32 - b));
	}
	utils.rotl32 = rotl32;

	function sum32(a, b) {
	  return (a + b) >>> 0;
	}
	utils.sum32 = sum32;

	function sum32_3(a, b, c) {
	  return (a + b + c) >>> 0;
	}
	utils.sum32_3 = sum32_3;

	function sum32_4(a, b, c, d) {
	  return (a + b + c + d) >>> 0;
	}
	utils.sum32_4 = sum32_4;

	function sum32_5(a, b, c, d, e) {
	  return (a + b + c + d + e) >>> 0;
	}
	utils.sum32_5 = sum32_5;

	function sum64(buf, pos, ah, al) {
	  var bh = buf[pos];
	  var bl = buf[pos + 1];

	  var lo = (al + bl) >>> 0;
	  var hi = (lo < al ? 1 : 0) + ah + bh;
	  buf[pos] = hi >>> 0;
	  buf[pos + 1] = lo;
	}
	utils.sum64 = sum64;

	function sum64_hi(ah, al, bh, bl) {
	  var lo = (al + bl) >>> 0;
	  var hi = (lo < al ? 1 : 0) + ah + bh;
	  return hi >>> 0;
	}
	utils.sum64_hi = sum64_hi;

	function sum64_lo(ah, al, bh, bl) {
	  var lo = al + bl;
	  return lo >>> 0;
	}
	utils.sum64_lo = sum64_lo;

	function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
	  var carry = 0;
	  var lo = al;
	  lo = (lo + bl) >>> 0;
	  carry += lo < al ? 1 : 0;
	  lo = (lo + cl) >>> 0;
	  carry += lo < cl ? 1 : 0;
	  lo = (lo + dl) >>> 0;
	  carry += lo < dl ? 1 : 0;

	  var hi = ah + bh + ch + dh + carry;
	  return hi >>> 0;
	}
	utils.sum64_4_hi = sum64_4_hi;

	function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
	  var lo = al + bl + cl + dl;
	  return lo >>> 0;
	}
	utils.sum64_4_lo = sum64_4_lo;

	function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
	  var carry = 0;
	  var lo = al;
	  lo = (lo + bl) >>> 0;
	  carry += lo < al ? 1 : 0;
	  lo = (lo + cl) >>> 0;
	  carry += lo < cl ? 1 : 0;
	  lo = (lo + dl) >>> 0;
	  carry += lo < dl ? 1 : 0;
	  lo = (lo + el) >>> 0;
	  carry += lo < el ? 1 : 0;

	  var hi = ah + bh + ch + dh + eh + carry;
	  return hi >>> 0;
	}
	utils.sum64_5_hi = sum64_5_hi;

	function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
	  var lo = al + bl + cl + dl + el;

	  return lo >>> 0;
	}
	utils.sum64_5_lo = sum64_5_lo;

	function rotr64_hi(ah, al, num) {
	  var r = (al << (32 - num)) | (ah >>> num);
	  return r >>> 0;
	}
	utils.rotr64_hi = rotr64_hi;

	function rotr64_lo(ah, al, num) {
	  var r = (ah << (32 - num)) | (al >>> num);
	  return r >>> 0;
	}
	utils.rotr64_lo = rotr64_lo;

	function shr64_hi(ah, al, num) {
	  return ah >>> num;
	}
	utils.shr64_hi = shr64_hi;

	function shr64_lo(ah, al, num) {
	  var r = (ah << (32 - num)) | (al >>> num);
	  return r >>> 0;
	}
	utils.shr64_lo = shr64_lo;
	return utils;
}

var common$1 = {};

var hasRequiredCommon$1;

function requireCommon$1 () {
	if (hasRequiredCommon$1) return common$1;
	hasRequiredCommon$1 = 1;

	var utils = requireUtils();
	var assert = requireMinimalisticAssert();

	function BlockHash() {
	  this.pending = null;
	  this.pendingTotal = 0;
	  this.blockSize = this.constructor.blockSize;
	  this.outSize = this.constructor.outSize;
	  this.hmacStrength = this.constructor.hmacStrength;
	  this.padLength = this.constructor.padLength / 8;
	  this.endian = 'big';

	  this._delta8 = this.blockSize / 8;
	  this._delta32 = this.blockSize / 32;
	}
	common$1.BlockHash = BlockHash;

	BlockHash.prototype.update = function update(msg, enc) {
	  // Convert message to array, pad it, and join into 32bit blocks
	  msg = utils.toArray(msg, enc);
	  if (!this.pending)
	    this.pending = msg;
	  else
	    this.pending = this.pending.concat(msg);
	  this.pendingTotal += msg.length;

	  // Enough data, try updating
	  if (this.pending.length >= this._delta8) {
	    msg = this.pending;

	    // Process pending data in blocks
	    var r = msg.length % this._delta8;
	    this.pending = msg.slice(msg.length - r, msg.length);
	    if (this.pending.length === 0)
	      this.pending = null;

	    msg = utils.join32(msg, 0, msg.length - r, this.endian);
	    for (var i = 0; i < msg.length; i += this._delta32)
	      this._update(msg, i, i + this._delta32);
	  }

	  return this;
	};

	BlockHash.prototype.digest = function digest(enc) {
	  this.update(this._pad());
	  assert(this.pending === null);

	  return this._digest(enc);
	};

	BlockHash.prototype._pad = function pad() {
	  var len = this.pendingTotal;
	  var bytes = this._delta8;
	  var k = bytes - ((len + this.padLength) % bytes);
	  var res = new Array(k + this.padLength);
	  res[0] = 0x80;
	  for (var i = 1; i < k; i++)
	    res[i] = 0;

	  // Append length
	  len <<= 3;
	  if (this.endian === 'big') {
	    for (var t = 8; t < this.padLength; t++)
	      res[i++] = 0;

	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = (len >>> 24) & 0xff;
	    res[i++] = (len >>> 16) & 0xff;
	    res[i++] = (len >>> 8) & 0xff;
	    res[i++] = len & 0xff;
	  } else {
	    res[i++] = len & 0xff;
	    res[i++] = (len >>> 8) & 0xff;
	    res[i++] = (len >>> 16) & 0xff;
	    res[i++] = (len >>> 24) & 0xff;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;

	    for (t = 8; t < this.padLength; t++)
	      res[i++] = 0;
	  }

	  return res;
	};
	return common$1;
}

var sha = {};

var common = {};

var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;

	var utils = requireUtils();
	var rotr32 = utils.rotr32;

	function ft_1(s, x, y, z) {
	  if (s === 0)
	    return ch32(x, y, z);
	  if (s === 1 || s === 3)
	    return p32(x, y, z);
	  if (s === 2)
	    return maj32(x, y, z);
	}
	common.ft_1 = ft_1;

	function ch32(x, y, z) {
	  return (x & y) ^ ((~x) & z);
	}
	common.ch32 = ch32;

	function maj32(x, y, z) {
	  return (x & y) ^ (x & z) ^ (y & z);
	}
	common.maj32 = maj32;

	function p32(x, y, z) {
	  return x ^ y ^ z;
	}
	common.p32 = p32;

	function s0_256(x) {
	  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
	}
	common.s0_256 = s0_256;

	function s1_256(x) {
	  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
	}
	common.s1_256 = s1_256;

	function g0_256(x) {
	  return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
	}
	common.g0_256 = g0_256;

	function g1_256(x) {
	  return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
	}
	common.g1_256 = g1_256;
	return common;
}

var _1;
var hasRequired_1;

function require_1 () {
	if (hasRequired_1) return _1;
	hasRequired_1 = 1;

	var utils = requireUtils();
	var common = requireCommon$1();
	var shaCommon = requireCommon();

	var rotl32 = utils.rotl32;
	var sum32 = utils.sum32;
	var sum32_5 = utils.sum32_5;
	var ft_1 = shaCommon.ft_1;
	var BlockHash = common.BlockHash;

	var sha1_K = [
	  0x5A827999, 0x6ED9EBA1,
	  0x8F1BBCDC, 0xCA62C1D6
	];

	function SHA1() {
	  if (!(this instanceof SHA1))
	    return new SHA1();

	  BlockHash.call(this);
	  this.h = [
	    0x67452301, 0xefcdab89, 0x98badcfe,
	    0x10325476, 0xc3d2e1f0 ];
	  this.W = new Array(80);
	}

	utils.inherits(SHA1, BlockHash);
	_1 = SHA1;

	SHA1.blockSize = 512;
	SHA1.outSize = 160;
	SHA1.hmacStrength = 80;
	SHA1.padLength = 64;

	SHA1.prototype._update = function _update(msg, start) {
	  var W = this.W;

	  for (var i = 0; i < 16; i++)
	    W[i] = msg[start + i];

	  for(; i < W.length; i++)
	    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

	  var a = this.h[0];
	  var b = this.h[1];
	  var c = this.h[2];
	  var d = this.h[3];
	  var e = this.h[4];

	  for (i = 0; i < W.length; i++) {
	    var s = ~~(i / 20);
	    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
	    e = d;
	    d = c;
	    c = rotl32(b, 30);
	    b = a;
	    a = t;
	  }

	  this.h[0] = sum32(this.h[0], a);
	  this.h[1] = sum32(this.h[1], b);
	  this.h[2] = sum32(this.h[2], c);
	  this.h[3] = sum32(this.h[3], d);
	  this.h[4] = sum32(this.h[4], e);
	};

	SHA1.prototype._digest = function digest(enc) {
	  if (enc === 'hex')
	    return utils.toHex32(this.h, 'big');
	  else
	    return utils.split32(this.h, 'big');
	};
	return _1;
}

var _256;
var hasRequired_256;

function require_256 () {
	if (hasRequired_256) return _256;
	hasRequired_256 = 1;

	var utils = requireUtils();
	var common = requireCommon$1();
	var shaCommon = requireCommon();
	var assert = requireMinimalisticAssert();

	var sum32 = utils.sum32;
	var sum32_4 = utils.sum32_4;
	var sum32_5 = utils.sum32_5;
	var ch32 = shaCommon.ch32;
	var maj32 = shaCommon.maj32;
	var s0_256 = shaCommon.s0_256;
	var s1_256 = shaCommon.s1_256;
	var g0_256 = shaCommon.g0_256;
	var g1_256 = shaCommon.g1_256;

	var BlockHash = common.BlockHash;

	var sha256_K = [
	  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
	  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
	  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
	  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
	  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
	  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
	  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
	  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
	  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
	  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
	  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
	  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
	  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
	  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
	  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
	  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
	];

	function SHA256() {
	  if (!(this instanceof SHA256))
	    return new SHA256();

	  BlockHash.call(this);
	  this.h = [
	    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
	    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
	  ];
	  this.k = sha256_K;
	  this.W = new Array(64);
	}
	utils.inherits(SHA256, BlockHash);
	_256 = SHA256;

	SHA256.blockSize = 512;
	SHA256.outSize = 256;
	SHA256.hmacStrength = 192;
	SHA256.padLength = 64;

	SHA256.prototype._update = function _update(msg, start) {
	  var W = this.W;

	  for (var i = 0; i < 16; i++)
	    W[i] = msg[start + i];
	  for (; i < W.length; i++)
	    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);

	  var a = this.h[0];
	  var b = this.h[1];
	  var c = this.h[2];
	  var d = this.h[3];
	  var e = this.h[4];
	  var f = this.h[5];
	  var g = this.h[6];
	  var h = this.h[7];

	  assert(this.k.length === W.length);
	  for (i = 0; i < W.length; i++) {
	    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
	    var T2 = sum32(s0_256(a), maj32(a, b, c));
	    h = g;
	    g = f;
	    f = e;
	    e = sum32(d, T1);
	    d = c;
	    c = b;
	    b = a;
	    a = sum32(T1, T2);
	  }

	  this.h[0] = sum32(this.h[0], a);
	  this.h[1] = sum32(this.h[1], b);
	  this.h[2] = sum32(this.h[2], c);
	  this.h[3] = sum32(this.h[3], d);
	  this.h[4] = sum32(this.h[4], e);
	  this.h[5] = sum32(this.h[5], f);
	  this.h[6] = sum32(this.h[6], g);
	  this.h[7] = sum32(this.h[7], h);
	};

	SHA256.prototype._digest = function digest(enc) {
	  if (enc === 'hex')
	    return utils.toHex32(this.h, 'big');
	  else
	    return utils.split32(this.h, 'big');
	};
	return _256;
}

var _224;
var hasRequired_224;

function require_224 () {
	if (hasRequired_224) return _224;
	hasRequired_224 = 1;

	var utils = requireUtils();
	var SHA256 = require_256();

	function SHA224() {
	  if (!(this instanceof SHA224))
	    return new SHA224();

	  SHA256.call(this);
	  this.h = [
	    0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	    0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4 ];
	}
	utils.inherits(SHA224, SHA256);
	_224 = SHA224;

	SHA224.blockSize = 512;
	SHA224.outSize = 224;
	SHA224.hmacStrength = 192;
	SHA224.padLength = 64;

	SHA224.prototype._digest = function digest(enc) {
	  // Just truncate output
	  if (enc === 'hex')
	    return utils.toHex32(this.h.slice(0, 7), 'big');
	  else
	    return utils.split32(this.h.slice(0, 7), 'big');
	};
	return _224;
}

var _512;
var hasRequired_512;

function require_512 () {
	if (hasRequired_512) return _512;
	hasRequired_512 = 1;

	var utils = requireUtils();
	var common = requireCommon$1();
	var assert = requireMinimalisticAssert();

	var rotr64_hi = utils.rotr64_hi;
	var rotr64_lo = utils.rotr64_lo;
	var shr64_hi = utils.shr64_hi;
	var shr64_lo = utils.shr64_lo;
	var sum64 = utils.sum64;
	var sum64_hi = utils.sum64_hi;
	var sum64_lo = utils.sum64_lo;
	var sum64_4_hi = utils.sum64_4_hi;
	var sum64_4_lo = utils.sum64_4_lo;
	var sum64_5_hi = utils.sum64_5_hi;
	var sum64_5_lo = utils.sum64_5_lo;

	var BlockHash = common.BlockHash;

	var sha512_K = [
	  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	];

	function SHA512() {
	  if (!(this instanceof SHA512))
	    return new SHA512();

	  BlockHash.call(this);
	  this.h = [
	    0x6a09e667, 0xf3bcc908,
	    0xbb67ae85, 0x84caa73b,
	    0x3c6ef372, 0xfe94f82b,
	    0xa54ff53a, 0x5f1d36f1,
	    0x510e527f, 0xade682d1,
	    0x9b05688c, 0x2b3e6c1f,
	    0x1f83d9ab, 0xfb41bd6b,
	    0x5be0cd19, 0x137e2179 ];
	  this.k = sha512_K;
	  this.W = new Array(160);
	}
	utils.inherits(SHA512, BlockHash);
	_512 = SHA512;

	SHA512.blockSize = 1024;
	SHA512.outSize = 512;
	SHA512.hmacStrength = 192;
	SHA512.padLength = 128;

	SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
	  var W = this.W;

	  // 32 x 32bit words
	  for (var i = 0; i < 32; i++)
	    W[i] = msg[start + i];
	  for (; i < W.length; i += 2) {
	    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);  // i - 2
	    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
	    var c1_hi = W[i - 14];  // i - 7
	    var c1_lo = W[i - 13];
	    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);  // i - 15
	    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
	    var c3_hi = W[i - 32];  // i - 16
	    var c3_lo = W[i - 31];

	    W[i] = sum64_4_hi(
	      c0_hi, c0_lo,
	      c1_hi, c1_lo,
	      c2_hi, c2_lo,
	      c3_hi, c3_lo);
	    W[i + 1] = sum64_4_lo(
	      c0_hi, c0_lo,
	      c1_hi, c1_lo,
	      c2_hi, c2_lo,
	      c3_hi, c3_lo);
	  }
	};

	SHA512.prototype._update = function _update(msg, start) {
	  this._prepareBlock(msg, start);

	  var W = this.W;

	  var ah = this.h[0];
	  var al = this.h[1];
	  var bh = this.h[2];
	  var bl = this.h[3];
	  var ch = this.h[4];
	  var cl = this.h[5];
	  var dh = this.h[6];
	  var dl = this.h[7];
	  var eh = this.h[8];
	  var el = this.h[9];
	  var fh = this.h[10];
	  var fl = this.h[11];
	  var gh = this.h[12];
	  var gl = this.h[13];
	  var hh = this.h[14];
	  var hl = this.h[15];

	  assert(this.k.length === W.length);
	  for (var i = 0; i < W.length; i += 2) {
	    var c0_hi = hh;
	    var c0_lo = hl;
	    var c1_hi = s1_512_hi(eh, el);
	    var c1_lo = s1_512_lo(eh, el);
	    var c2_hi = ch64_hi(eh, el, fh, fl, gh);
	    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
	    var c3_hi = this.k[i];
	    var c3_lo = this.k[i + 1];
	    var c4_hi = W[i];
	    var c4_lo = W[i + 1];

	    var T1_hi = sum64_5_hi(
	      c0_hi, c0_lo,
	      c1_hi, c1_lo,
	      c2_hi, c2_lo,
	      c3_hi, c3_lo,
	      c4_hi, c4_lo);
	    var T1_lo = sum64_5_lo(
	      c0_hi, c0_lo,
	      c1_hi, c1_lo,
	      c2_hi, c2_lo,
	      c3_hi, c3_lo,
	      c4_hi, c4_lo);

	    c0_hi = s0_512_hi(ah, al);
	    c0_lo = s0_512_lo(ah, al);
	    c1_hi = maj64_hi(ah, al, bh, bl, ch);
	    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

	    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
	    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

	    hh = gh;
	    hl = gl;

	    gh = fh;
	    gl = fl;

	    fh = eh;
	    fl = el;

	    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
	    el = sum64_lo(dl, dl, T1_hi, T1_lo);

	    dh = ch;
	    dl = cl;

	    ch = bh;
	    cl = bl;

	    bh = ah;
	    bl = al;

	    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
	    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
	  }

	  sum64(this.h, 0, ah, al);
	  sum64(this.h, 2, bh, bl);
	  sum64(this.h, 4, ch, cl);
	  sum64(this.h, 6, dh, dl);
	  sum64(this.h, 8, eh, el);
	  sum64(this.h, 10, fh, fl);
	  sum64(this.h, 12, gh, gl);
	  sum64(this.h, 14, hh, hl);
	};

	SHA512.prototype._digest = function digest(enc) {
	  if (enc === 'hex')
	    return utils.toHex32(this.h, 'big');
	  else
	    return utils.split32(this.h, 'big');
	};

	function ch64_hi(xh, xl, yh, yl, zh) {
	  var r = (xh & yh) ^ ((~xh) & zh);
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function ch64_lo(xh, xl, yh, yl, zh, zl) {
	  var r = (xl & yl) ^ ((~xl) & zl);
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function maj64_hi(xh, xl, yh, yl, zh) {
	  var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function maj64_lo(xh, xl, yh, yl, zh, zl) {
	  var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function s0_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 28);
	  var c1_hi = rotr64_hi(xl, xh, 2);  // 34
	  var c2_hi = rotr64_hi(xl, xh, 7);  // 39

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function s0_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 28);
	  var c1_lo = rotr64_lo(xl, xh, 2);  // 34
	  var c2_lo = rotr64_lo(xl, xh, 7);  // 39

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function s1_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 14);
	  var c1_hi = rotr64_hi(xh, xl, 18);
	  var c2_hi = rotr64_hi(xl, xh, 9);  // 41

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function s1_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 14);
	  var c1_lo = rotr64_lo(xh, xl, 18);
	  var c2_lo = rotr64_lo(xl, xh, 9);  // 41

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function g0_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 1);
	  var c1_hi = rotr64_hi(xh, xl, 8);
	  var c2_hi = shr64_hi(xh, xl, 7);

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function g0_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 1);
	  var c1_lo = rotr64_lo(xh, xl, 8);
	  var c2_lo = shr64_lo(xh, xl, 7);

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function g1_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 19);
	  var c1_hi = rotr64_hi(xl, xh, 29);  // 61
	  var c2_hi = shr64_hi(xh, xl, 6);

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}

	function g1_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 19);
	  var c1_lo = rotr64_lo(xl, xh, 29);  // 61
	  var c2_lo = shr64_lo(xh, xl, 6);

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0)
	    r += 0x100000000;
	  return r;
	}
	return _512;
}

var _384;
var hasRequired_384;

function require_384 () {
	if (hasRequired_384) return _384;
	hasRequired_384 = 1;

	var utils = requireUtils();

	var SHA512 = require_512();

	function SHA384() {
	  if (!(this instanceof SHA384))
	    return new SHA384();

	  SHA512.call(this);
	  this.h = [
	    0xcbbb9d5d, 0xc1059ed8,
	    0x629a292a, 0x367cd507,
	    0x9159015a, 0x3070dd17,
	    0x152fecd8, 0xf70e5939,
	    0x67332667, 0xffc00b31,
	    0x8eb44a87, 0x68581511,
	    0xdb0c2e0d, 0x64f98fa7,
	    0x47b5481d, 0xbefa4fa4 ];
	}
	utils.inherits(SHA384, SHA512);
	_384 = SHA384;

	SHA384.blockSize = 1024;
	SHA384.outSize = 384;
	SHA384.hmacStrength = 192;
	SHA384.padLength = 128;

	SHA384.prototype._digest = function digest(enc) {
	  if (enc === 'hex')
	    return utils.toHex32(this.h.slice(0, 12), 'big');
	  else
	    return utils.split32(this.h.slice(0, 12), 'big');
	};
	return _384;
}

var hasRequiredSha;

function requireSha () {
	if (hasRequiredSha) return sha;
	hasRequiredSha = 1;

	sha.sha1 = require_1();
	sha.sha224 = require_224();
	sha.sha256 = require_256();
	sha.sha384 = require_384();
	sha.sha512 = require_512();
	return sha;
}

var ripemd = {};

var hasRequiredRipemd;

function requireRipemd () {
	if (hasRequiredRipemd) return ripemd;
	hasRequiredRipemd = 1;

	var utils = requireUtils();
	var common = requireCommon$1();

	var rotl32 = utils.rotl32;
	var sum32 = utils.sum32;
	var sum32_3 = utils.sum32_3;
	var sum32_4 = utils.sum32_4;
	var BlockHash = common.BlockHash;

	function RIPEMD160() {
	  if (!(this instanceof RIPEMD160))
	    return new RIPEMD160();

	  BlockHash.call(this);

	  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];
	  this.endian = 'little';
	}
	utils.inherits(RIPEMD160, BlockHash);
	ripemd.ripemd160 = RIPEMD160;

	RIPEMD160.blockSize = 512;
	RIPEMD160.outSize = 160;
	RIPEMD160.hmacStrength = 192;
	RIPEMD160.padLength = 64;

	RIPEMD160.prototype._update = function update(msg, start) {
	  var A = this.h[0];
	  var B = this.h[1];
	  var C = this.h[2];
	  var D = this.h[3];
	  var E = this.h[4];
	  var Ah = A;
	  var Bh = B;
	  var Ch = C;
	  var Dh = D;
	  var Eh = E;
	  for (var j = 0; j < 80; j++) {
	    var T = sum32(
	      rotl32(
	        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
	        s[j]),
	      E);
	    A = E;
	    E = D;
	    D = rotl32(C, 10);
	    C = B;
	    B = T;
	    T = sum32(
	      rotl32(
	        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
	        sh[j]),
	      Eh);
	    Ah = Eh;
	    Eh = Dh;
	    Dh = rotl32(Ch, 10);
	    Ch = Bh;
	    Bh = T;
	  }
	  T = sum32_3(this.h[1], C, Dh);
	  this.h[1] = sum32_3(this.h[2], D, Eh);
	  this.h[2] = sum32_3(this.h[3], E, Ah);
	  this.h[3] = sum32_3(this.h[4], A, Bh);
	  this.h[4] = sum32_3(this.h[0], B, Ch);
	  this.h[0] = T;
	};

	RIPEMD160.prototype._digest = function digest(enc) {
	  if (enc === 'hex')
	    return utils.toHex32(this.h, 'little');
	  else
	    return utils.split32(this.h, 'little');
	};

	function f(j, x, y, z) {
	  if (j <= 15)
	    return x ^ y ^ z;
	  else if (j <= 31)
	    return (x & y) | ((~x) & z);
	  else if (j <= 47)
	    return (x | (~y)) ^ z;
	  else if (j <= 63)
	    return (x & z) | (y & (~z));
	  else
	    return x ^ (y | (~z));
	}

	function K(j) {
	  if (j <= 15)
	    return 0x00000000;
	  else if (j <= 31)
	    return 0x5a827999;
	  else if (j <= 47)
	    return 0x6ed9eba1;
	  else if (j <= 63)
	    return 0x8f1bbcdc;
	  else
	    return 0xa953fd4e;
	}

	function Kh(j) {
	  if (j <= 15)
	    return 0x50a28be6;
	  else if (j <= 31)
	    return 0x5c4dd124;
	  else if (j <= 47)
	    return 0x6d703ef3;
	  else if (j <= 63)
	    return 0x7a6d76e9;
	  else
	    return 0x00000000;
	}

	var r = [
	  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
	  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
	  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
	  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
	  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
	];

	var rh = [
	  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
	  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
	  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
	  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
	  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
	];

	var s = [
	  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
	  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
	  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
	  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
	  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
	];

	var sh = [
	  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
	  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
	  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
	  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
	  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
	];
	return ripemd;
}

var hmac;
var hasRequiredHmac;

function requireHmac () {
	if (hasRequiredHmac) return hmac;
	hasRequiredHmac = 1;

	var utils = requireUtils();
	var assert = requireMinimalisticAssert();

	function Hmac(hash, key, enc) {
	  if (!(this instanceof Hmac))
	    return new Hmac(hash, key, enc);
	  this.Hash = hash;
	  this.blockSize = hash.blockSize / 8;
	  this.outSize = hash.outSize / 8;
	  this.inner = null;
	  this.outer = null;

	  this._init(utils.toArray(key, enc));
	}
	hmac = Hmac;

	Hmac.prototype._init = function init(key) {
	  // Shorten key, if needed
	  if (key.length > this.blockSize)
	    key = new this.Hash().update(key).digest();
	  assert(key.length <= this.blockSize);

	  // Add padding to key
	  for (var i = key.length; i < this.blockSize; i++)
	    key.push(0);

	  for (i = 0; i < key.length; i++)
	    key[i] ^= 0x36;
	  this.inner = new this.Hash().update(key);

	  // 0x36 ^ 0x5c = 0x6a
	  for (i = 0; i < key.length; i++)
	    key[i] ^= 0x6a;
	  this.outer = new this.Hash().update(key);
	};

	Hmac.prototype.update = function update(msg, enc) {
	  this.inner.update(msg, enc);
	  return this;
	};

	Hmac.prototype.digest = function digest(enc) {
	  this.outer.update(this.inner.digest());
	  return this.outer.digest(enc);
	};
	return hmac;
}

var hasRequiredHash;

function requireHash () {
	if (hasRequiredHash) return hash;
	hasRequiredHash = 1;
	(function (exports) {
		var hash = exports;

		hash.utils = requireUtils();
		hash.common = requireCommon$1();
		hash.sha = requireSha();
		hash.ripemd = requireRipemd();
		hash.hmac = requireHmac();

		// Proxy hash functions to the main object
		hash.sha1 = hash.sha.sha1;
		hash.sha256 = hash.sha.sha256;
		hash.sha224 = hash.sha.sha224;
		hash.sha384 = hash.sha.sha384;
		hash.sha512 = hash.sha.sha512;
		hash.ripemd160 = hash.ripemd.ripemd160; 
	} (hash));
	return hash;
}

var secp256k1;
var hasRequiredSecp256k1;

function requireSecp256k1 () {
	if (hasRequiredSecp256k1) return secp256k1;
	hasRequiredSecp256k1 = 1;
	secp256k1 = {
	  doubles: {
	    step: 4,
	    points: [
	      [
	        'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
	        'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821',
	      ],
	      [
	        '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
	        '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf',
	      ],
	      [
	        '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
	        'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695',
	      ],
	      [
	        '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
	        '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9',
	      ],
	      [
	        '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
	        '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36',
	      ],
	      [
	        '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
	        '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f',
	      ],
	      [
	        'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
	        '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999',
	      ],
	      [
	        '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
	        'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09',
	      ],
	      [
	        'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
	        '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d',
	      ],
	      [
	        'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
	        'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088',
	      ],
	      [
	        'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
	        '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d',
	      ],
	      [
	        '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
	        '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8',
	      ],
	      [
	        '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
	        '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a',
	      ],
	      [
	        '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
	        '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453',
	      ],
	      [
	        '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
	        '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160',
	      ],
	      [
	        '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
	        '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0',
	      ],
	      [
	        '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
	        '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6',
	      ],
	      [
	        '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
	        '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589',
	      ],
	      [
	        '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
	        'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17',
	      ],
	      [
	        'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
	        '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda',
	      ],
	      [
	        'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
	        '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd',
	      ],
	      [
	        '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
	        '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2',
	      ],
	      [
	        '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
	        '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6',
	      ],
	      [
	        'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
	        '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f',
	      ],
	      [
	        '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
	        'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01',
	      ],
	      [
	        'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
	        '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3',
	      ],
	      [
	        'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
	        'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f',
	      ],
	      [
	        'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
	        '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7',
	      ],
	      [
	        'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
	        'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78',
	      ],
	      [
	        'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
	        '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1',
	      ],
	      [
	        '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
	        'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150',
	      ],
	      [
	        '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
	        '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82',
	      ],
	      [
	        'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
	        '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc',
	      ],
	      [
	        '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
	        'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b',
	      ],
	      [
	        'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
	        '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51',
	      ],
	      [
	        'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
	        '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45',
	      ],
	      [
	        'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
	        'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120',
	      ],
	      [
	        '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
	        '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84',
	      ],
	      [
	        '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
	        '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d',
	      ],
	      [
	        '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
	        'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d',
	      ],
	      [
	        '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
	        '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8',
	      ],
	      [
	        'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
	        '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8',
	      ],
	      [
	        '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
	        '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac',
	      ],
	      [
	        '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
	        'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f',
	      ],
	      [
	        '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
	        '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962',
	      ],
	      [
	        'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
	        '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907',
	      ],
	      [
	        '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
	        'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec',
	      ],
	      [
	        'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
	        'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d',
	      ],
	      [
	        'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
	        '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414',
	      ],
	      [
	        '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
	        'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd',
	      ],
	      [
	        '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
	        'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0',
	      ],
	      [
	        'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
	        '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811',
	      ],
	      [
	        'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
	        '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1',
	      ],
	      [
	        'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
	        '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c',
	      ],
	      [
	        '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
	        'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73',
	      ],
	      [
	        '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
	        '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd',
	      ],
	      [
	        'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
	        'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405',
	      ],
	      [
	        '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
	        'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589',
	      ],
	      [
	        '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
	        '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e',
	      ],
	      [
	        '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
	        '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27',
	      ],
	      [
	        'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
	        'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1',
	      ],
	      [
	        '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
	        '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482',
	      ],
	      [
	        '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
	        '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945',
	      ],
	      [
	        'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
	        '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573',
	      ],
	      [
	        'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
	        'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82',
	      ],
	    ],
	  },
	  naf: {
	    wnd: 7,
	    points: [
	      [
	        'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
	        '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672',
	      ],
	      [
	        '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
	        'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6',
	      ],
	      [
	        '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
	        '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da',
	      ],
	      [
	        'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
	        'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37',
	      ],
	      [
	        '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
	        'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b',
	      ],
	      [
	        'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
	        'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81',
	      ],
	      [
	        'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
	        '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58',
	      ],
	      [
	        'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
	        '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77',
	      ],
	      [
	        '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
	        '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a',
	      ],
	      [
	        '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
	        '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c',
	      ],
	      [
	        '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
	        '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67',
	      ],
	      [
	        '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
	        '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402',
	      ],
	      [
	        'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
	        'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55',
	      ],
	      [
	        'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
	        '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482',
	      ],
	      [
	        '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
	        'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82',
	      ],
	      [
	        '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
	        'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396',
	      ],
	      [
	        '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
	        '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49',
	      ],
	      [
	        '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
	        '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf',
	      ],
	      [
	        '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
	        '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a',
	      ],
	      [
	        '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
	        'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7',
	      ],
	      [
	        'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
	        'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933',
	      ],
	      [
	        '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
	        '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a',
	      ],
	      [
	        '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
	        '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6',
	      ],
	      [
	        'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
	        'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37',
	      ],
	      [
	        '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
	        '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e',
	      ],
	      [
	        'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
	        'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6',
	      ],
	      [
	        'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
	        'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476',
	      ],
	      [
	        '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
	        '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40',
	      ],
	      [
	        '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
	        '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61',
	      ],
	      [
	        '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
	        '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683',
	      ],
	      [
	        'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
	        '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5',
	      ],
	      [
	        '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
	        '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b',
	      ],
	      [
	        'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
	        '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417',
	      ],
	      [
	        '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
	        'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868',
	      ],
	      [
	        '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
	        'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a',
	      ],
	      [
	        'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
	        'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6',
	      ],
	      [
	        '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
	        '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996',
	      ],
	      [
	        '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
	        'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e',
	      ],
	      [
	        'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
	        'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d',
	      ],
	      [
	        '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
	        '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2',
	      ],
	      [
	        '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
	        'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e',
	      ],
	      [
	        '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
	        '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437',
	      ],
	      [
	        '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
	        'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311',
	      ],
	      [
	        'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
	        '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4',
	      ],
	      [
	        '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
	        '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575',
	      ],
	      [
	        '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
	        'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d',
	      ],
	      [
	        '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
	        'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d',
	      ],
	      [
	        'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
	        'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629',
	      ],
	      [
	        'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
	        'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06',
	      ],
	      [
	        '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
	        '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374',
	      ],
	      [
	        '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
	        '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee',
	      ],
	      [
	        'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
	        '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1',
	      ],
	      [
	        'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
	        'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b',
	      ],
	      [
	        '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
	        '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661',
	      ],
	      [
	        '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
	        '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6',
	      ],
	      [
	        'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
	        '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e',
	      ],
	      [
	        '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
	        '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d',
	      ],
	      [
	        'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
	        'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc',
	      ],
	      [
	        '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
	        'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4',
	      ],
	      [
	        '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
	        '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c',
	      ],
	      [
	        'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
	        '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b',
	      ],
	      [
	        'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
	        '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913',
	      ],
	      [
	        '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
	        '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154',
	      ],
	      [
	        '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
	        '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865',
	      ],
	      [
	        '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
	        'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc',
	      ],
	      [
	        '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
	        'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224',
	      ],
	      [
	        '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
	        '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e',
	      ],
	      [
	        '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
	        '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6',
	      ],
	      [
	        '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
	        '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511',
	      ],
	      [
	        '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
	        'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b',
	      ],
	      [
	        'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
	        'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2',
	      ],
	      [
	        '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
	        'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c',
	      ],
	      [
	        'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
	        '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3',
	      ],
	      [
	        'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
	        '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d',
	      ],
	      [
	        'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
	        '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700',
	      ],
	      [
	        'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
	        '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4',
	      ],
	      [
	        '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
	        'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196',
	      ],
	      [
	        '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
	        '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4',
	      ],
	      [
	        '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
	        'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257',
	      ],
	      [
	        'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
	        'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13',
	      ],
	      [
	        'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
	        '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096',
	      ],
	      [
	        'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
	        'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38',
	      ],
	      [
	        'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
	        '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f',
	      ],
	      [
	        '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
	        '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448',
	      ],
	      [
	        'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
	        '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a',
	      ],
	      [
	        'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
	        '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4',
	      ],
	      [
	        '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
	        '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437',
	      ],
	      [
	        '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
	        'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7',
	      ],
	      [
	        'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
	        '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d',
	      ],
	      [
	        'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
	        '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a',
	      ],
	      [
	        'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
	        '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54',
	      ],
	      [
	        '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
	        '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77',
	      ],
	      [
	        'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
	        'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517',
	      ],
	      [
	        '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
	        'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10',
	      ],
	      [
	        'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
	        'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125',
	      ],
	      [
	        'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
	        '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e',
	      ],
	      [
	        '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
	        'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1',
	      ],
	      [
	        'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
	        '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2',
	      ],
	      [
	        'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
	        '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423',
	      ],
	      [
	        'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
	        '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8',
	      ],
	      [
	        '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
	        'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758',
	      ],
	      [
	        '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
	        'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375',
	      ],
	      [
	        'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
	        '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d',
	      ],
	      [
	        '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
	        'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec',
	      ],
	      [
	        '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
	        '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0',
	      ],
	      [
	        '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
	        'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c',
	      ],
	      [
	        'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
	        'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4',
	      ],
	      [
	        '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
	        'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f',
	      ],
	      [
	        '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
	        '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649',
	      ],
	      [
	        '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
	        'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826',
	      ],
	      [
	        '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
	        '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5',
	      ],
	      [
	        'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
	        'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87',
	      ],
	      [
	        '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
	        '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b',
	      ],
	      [
	        'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
	        '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc',
	      ],
	      [
	        '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
	        '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c',
	      ],
	      [
	        'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
	        'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f',
	      ],
	      [
	        'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
	        '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a',
	      ],
	      [
	        'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
	        'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46',
	      ],
	      [
	        '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
	        'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f',
	      ],
	      [
	        '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
	        '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03',
	      ],
	      [
	        '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
	        'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08',
	      ],
	      [
	        '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
	        '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8',
	      ],
	      [
	        '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
	        '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373',
	      ],
	      [
	        '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
	        'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3',
	      ],
	      [
	        '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
	        '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8',
	      ],
	      [
	        '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
	        '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1',
	      ],
	      [
	        '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
	        '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9',
	      ],
	    ],
	  },
	};
	return secp256k1;
}

var hasRequiredCurves;

function requireCurves () {
	if (hasRequiredCurves) return curves;
	hasRequiredCurves = 1;
	(function (exports) {

		var curves = exports;

		var hash = requireHash();
		var curve = requireCurve();
		var utils = requireUtils$1();

		var assert = utils.assert;

		function PresetCurve(options) {
		  if (options.type === 'short')
		    this.curve = new curve.short(options);
		  else if (options.type === 'edwards')
		    this.curve = new curve.edwards(options);
		  else
		    this.curve = new curve.mont(options);
		  this.g = this.curve.g;
		  this.n = this.curve.n;
		  this.hash = options.hash;

		  assert(this.g.validate(), 'Invalid curve');
		  assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
		}
		curves.PresetCurve = PresetCurve;

		function defineCurve(name, options) {
		  Object.defineProperty(curves, name, {
		    configurable: true,
		    enumerable: true,
		    get: function() {
		      var curve = new PresetCurve(options);
		      Object.defineProperty(curves, name, {
		        configurable: true,
		        enumerable: true,
		        value: curve,
		      });
		      return curve;
		    },
		  });
		}

		defineCurve('p192', {
		  type: 'short',
		  prime: 'p192',
		  p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
		  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
		  b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
		  n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
		  hash: hash.sha256,
		  gRed: false,
		  g: [
		    '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
		    '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811',
		  ],
		});

		defineCurve('p224', {
		  type: 'short',
		  prime: 'p224',
		  p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
		  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
		  b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
		  n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
		  hash: hash.sha256,
		  gRed: false,
		  g: [
		    'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
		    'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34',
		  ],
		});

		defineCurve('p256', {
		  type: 'short',
		  prime: null,
		  p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
		  a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
		  b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
		  n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
		  hash: hash.sha256,
		  gRed: false,
		  g: [
		    '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
		    '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5',
		  ],
		});

		defineCurve('p384', {
		  type: 'short',
		  prime: null,
		  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
		     'fffffffe ffffffff 00000000 00000000 ffffffff',
		  a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
		     'fffffffe ffffffff 00000000 00000000 fffffffc',
		  b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ' +
		     '5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
		  n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 ' +
		     'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
		  hash: hash.sha384,
		  gRed: false,
		  g: [
		    'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ' +
		    '5502f25d bf55296c 3a545e38 72760ab7',
		    '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 ' +
		    '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f',
		  ],
		});

		defineCurve('p521', {
		  type: 'short',
		  prime: null,
		  p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
		     'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
		     'ffffffff ffffffff ffffffff ffffffff ffffffff',
		  a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
		     'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
		     'ffffffff ffffffff ffffffff ffffffff fffffffc',
		  b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b ' +
		     '99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ' +
		     '3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
		  n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
		     'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ' +
		     'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
		  hash: hash.sha512,
		  gRed: false,
		  g: [
		    '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ' +
		    '053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ' +
		    'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
		    '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ' +
		    '579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ' +
		    '3fad0761 353c7086 a272c240 88be9476 9fd16650',
		  ],
		});

		defineCurve('curve25519', {
		  type: 'mont',
		  prime: 'p25519',
		  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
		  a: '76d06',
		  b: '1',
		  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
		  hash: hash.sha256,
		  gRed: false,
		  g: [
		    '9',
		  ],
		});

		defineCurve('ed25519', {
		  type: 'edwards',
		  prime: 'p25519',
		  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
		  a: '-1',
		  c: '1',
		  // -121665 * (121666^(-1)) (mod P)
		  d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
		  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
		  hash: hash.sha256,
		  gRed: false,
		  g: [
		    '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',

		    // 4/5
		    '6666666666666666666666666666666666666666666666666666666666666658',
		  ],
		});

		var pre;
		try {
		  pre = requireSecp256k1();
		} catch (e) {
		  pre = undefined;
		}

		defineCurve('secp256k1', {
		  type: 'short',
		  prime: 'k256',
		  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
		  a: '0',
		  b: '7',
		  n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
		  h: '1',
		  hash: hash.sha256,

		  // Precomputed endomorphism
		  beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
		  lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
		  basis: [
		    {
		      a: '3086d221a7d46bcde86c90e49284eb15',
		      b: '-e4437ed6010e88286f547fa90abfe4c3',
		    },
		    {
		      a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
		      b: '3086d221a7d46bcde86c90e49284eb15',
		    },
		  ],

		  gRed: false,
		  g: [
		    '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
		    '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
		    pre,
		  ],
		}); 
	} (curves));
	return curves;
}

var hmacDrbg;
var hasRequiredHmacDrbg;

function requireHmacDrbg () {
	if (hasRequiredHmacDrbg) return hmacDrbg;
	hasRequiredHmacDrbg = 1;

	var hash = requireHash();
	var utils = requireUtils$2();
	var assert = requireMinimalisticAssert();

	function HmacDRBG(options) {
	  if (!(this instanceof HmacDRBG))
	    return new HmacDRBG(options);
	  this.hash = options.hash;
	  this.predResist = !!options.predResist;

	  this.outLen = this.hash.outSize;
	  this.minEntropy = options.minEntropy || this.hash.hmacStrength;

	  this._reseed = null;
	  this.reseedInterval = null;
	  this.K = null;
	  this.V = null;

	  var entropy = utils.toArray(options.entropy, options.entropyEnc || 'hex');
	  var nonce = utils.toArray(options.nonce, options.nonceEnc || 'hex');
	  var pers = utils.toArray(options.pers, options.persEnc || 'hex');
	  assert(entropy.length >= (this.minEntropy / 8),
	         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');
	  this._init(entropy, nonce, pers);
	}
	hmacDrbg = HmacDRBG;

	HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
	  var seed = entropy.concat(nonce).concat(pers);

	  this.K = new Array(this.outLen / 8);
	  this.V = new Array(this.outLen / 8);
	  for (var i = 0; i < this.V.length; i++) {
	    this.K[i] = 0x00;
	    this.V[i] = 0x01;
	  }

	  this._update(seed);
	  this._reseed = 1;
	  this.reseedInterval = 0x1000000000000;  // 2^48
	};

	HmacDRBG.prototype._hmac = function hmac() {
	  return new hash.hmac(this.hash, this.K);
	};

	HmacDRBG.prototype._update = function update(seed) {
	  var kmac = this._hmac()
	                 .update(this.V)
	                 .update([ 0x00 ]);
	  if (seed)
	    kmac = kmac.update(seed);
	  this.K = kmac.digest();
	  this.V = this._hmac().update(this.V).digest();
	  if (!seed)
	    return;

	  this.K = this._hmac()
	               .update(this.V)
	               .update([ 0x01 ])
	               .update(seed)
	               .digest();
	  this.V = this._hmac().update(this.V).digest();
	};

	HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
	  // Optional entropy enc
	  if (typeof entropyEnc !== 'string') {
	    addEnc = add;
	    add = entropyEnc;
	    entropyEnc = null;
	  }

	  entropy = utils.toArray(entropy, entropyEnc);
	  add = utils.toArray(add, addEnc);

	  assert(entropy.length >= (this.minEntropy / 8),
	         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

	  this._update(entropy.concat(add || []));
	  this._reseed = 1;
	};

	HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
	  if (this._reseed > this.reseedInterval)
	    throw new Error('Reseed is required');

	  // Optional encoding
	  if (typeof enc !== 'string') {
	    addEnc = add;
	    add = enc;
	    enc = null;
	  }

	  // Optional additional data
	  if (add) {
	    add = utils.toArray(add, addEnc || 'hex');
	    this._update(add);
	  }

	  var temp = [];
	  while (temp.length < len) {
	    this.V = this._hmac().update(this.V).digest();
	    temp = temp.concat(this.V);
	  }

	  var res = temp.slice(0, len);
	  this._update(add);
	  this._reseed++;
	  return utils.encode(res, enc);
	};
	return hmacDrbg;
}

var key$1;
var hasRequiredKey$1;

function requireKey$1 () {
	if (hasRequiredKey$1) return key$1;
	hasRequiredKey$1 = 1;

	var BN = requireBn();
	var utils = requireUtils$1();
	var assert = utils.assert;

	function KeyPair(ec, options) {
	  this.ec = ec;
	  this.priv = null;
	  this.pub = null;

	  // KeyPair(ec, { priv: ..., pub: ... })
	  if (options.priv)
	    this._importPrivate(options.priv, options.privEnc);
	  if (options.pub)
	    this._importPublic(options.pub, options.pubEnc);
	}
	key$1 = KeyPair;

	KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
	  if (pub instanceof KeyPair)
	    return pub;

	  return new KeyPair(ec, {
	    pub: pub,
	    pubEnc: enc,
	  });
	};

	KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
	  if (priv instanceof KeyPair)
	    return priv;

	  return new KeyPair(ec, {
	    priv: priv,
	    privEnc: enc,
	  });
	};

	KeyPair.prototype.validate = function validate() {
	  var pub = this.getPublic();

	  if (pub.isInfinity())
	    return { result: false, reason: 'Invalid public key' };
	  if (!pub.validate())
	    return { result: false, reason: 'Public key is not a point' };
	  if (!pub.mul(this.ec.curve.n).isInfinity())
	    return { result: false, reason: 'Public key * N != O' };

	  return { result: true, reason: null };
	};

	KeyPair.prototype.getPublic = function getPublic(compact, enc) {
	  // compact is optional argument
	  if (typeof compact === 'string') {
	    enc = compact;
	    compact = null;
	  }

	  if (!this.pub)
	    this.pub = this.ec.g.mul(this.priv);

	  if (!enc)
	    return this.pub;

	  return this.pub.encode(enc, compact);
	};

	KeyPair.prototype.getPrivate = function getPrivate(enc) {
	  if (enc === 'hex')
	    return this.priv.toString(16, 2);
	  else
	    return this.priv;
	};

	KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
	  this.priv = new BN(key, enc || 16);

	  // Ensure that the priv won't be bigger than n, otherwise we may fail
	  // in fixed multiplication method
	  this.priv = this.priv.umod(this.ec.curve.n);
	};

	KeyPair.prototype._importPublic = function _importPublic(key, enc) {
	  if (key.x || key.y) {
	    // Montgomery points only have an `x` coordinate.
	    // Weierstrass/Edwards points on the other hand have both `x` and
	    // `y` coordinates.
	    if (this.ec.curve.type === 'mont') {
	      assert(key.x, 'Need x coordinate');
	    } else if (this.ec.curve.type === 'short' ||
	               this.ec.curve.type === 'edwards') {
	      assert(key.x && key.y, 'Need both x and y coordinate');
	    }
	    this.pub = this.ec.curve.point(key.x, key.y);
	    return;
	  }
	  this.pub = this.ec.curve.decodePoint(key, enc);
	};

	// ECDH
	KeyPair.prototype.derive = function derive(pub) {
	  if(!pub.validate()) {
	    assert(pub.validate(), 'public point not validated');
	  }
	  return pub.mul(this.priv).getX();
	};

	// ECDSA
	KeyPair.prototype.sign = function sign(msg, enc, options) {
	  return this.ec.sign(msg, this, enc, options);
	};

	KeyPair.prototype.verify = function verify(msg, signature, options) {
	  return this.ec.verify(msg, signature, this, undefined, options);
	};

	KeyPair.prototype.inspect = function inspect() {
	  return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) +
	         ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
	};
	return key$1;
}

var signature$1;
var hasRequiredSignature$1;

function requireSignature$1 () {
	if (hasRequiredSignature$1) return signature$1;
	hasRequiredSignature$1 = 1;

	var BN = requireBn();

	var utils = requireUtils$1();
	var assert = utils.assert;

	function Signature(options, enc) {
	  if (options instanceof Signature)
	    return options;

	  if (this._importDER(options, enc))
	    return;

	  assert(options.r && options.s, 'Signature without r or s');
	  this.r = new BN(options.r, 16);
	  this.s = new BN(options.s, 16);
	  if (options.recoveryParam === undefined)
	    this.recoveryParam = null;
	  else
	    this.recoveryParam = options.recoveryParam;
	}
	signature$1 = Signature;

	function Position() {
	  this.place = 0;
	}

	function getLength(buf, p) {
	  var initial = buf[p.place++];
	  if (!(initial & 0x80)) {
	    return initial;
	  }
	  var octetLen = initial & 0xf;

	  // Indefinite length or overflow
	  if (octetLen === 0 || octetLen > 4) {
	    return false;
	  }

	  if(buf[p.place] === 0x00) {
	    return false;
	  }

	  var val = 0;
	  for (var i = 0, off = p.place; i < octetLen; i++, off++) {
	    val <<= 8;
	    val |= buf[off];
	    val >>>= 0;
	  }

	  // Leading zeroes
	  if (val <= 0x7f) {
	    return false;
	  }

	  p.place = off;
	  return val;
	}

	function rmPadding(buf) {
	  var i = 0;
	  var len = buf.length - 1;
	  while (!buf[i] && !(buf[i + 1] & 0x80) && i < len) {
	    i++;
	  }
	  if (i === 0) {
	    return buf;
	  }
	  return buf.slice(i);
	}

	Signature.prototype._importDER = function _importDER(data, enc) {
	  data = utils.toArray(data, enc);
	  var p = new Position();
	  if (data[p.place++] !== 0x30) {
	    return false;
	  }
	  var len = getLength(data, p);
	  if (len === false) {
	    return false;
	  }
	  if ((len + p.place) !== data.length) {
	    return false;
	  }
	  if (data[p.place++] !== 0x02) {
	    return false;
	  }
	  var rlen = getLength(data, p);
	  if (rlen === false) {
	    return false;
	  }
	  if ((data[p.place] & 128) !== 0) {
	    return false;
	  }
	  var r = data.slice(p.place, rlen + p.place);
	  p.place += rlen;
	  if (data[p.place++] !== 0x02) {
	    return false;
	  }
	  var slen = getLength(data, p);
	  if (slen === false) {
	    return false;
	  }
	  if (data.length !== slen + p.place) {
	    return false;
	  }
	  if ((data[p.place] & 128) !== 0) {
	    return false;
	  }
	  var s = data.slice(p.place, slen + p.place);
	  if (r[0] === 0) {
	    if (r[1] & 0x80) {
	      r = r.slice(1);
	    } else {
	      // Leading zeroes
	      return false;
	    }
	  }
	  if (s[0] === 0) {
	    if (s[1] & 0x80) {
	      s = s.slice(1);
	    } else {
	      // Leading zeroes
	      return false;
	    }
	  }

	  this.r = new BN(r);
	  this.s = new BN(s);
	  this.recoveryParam = null;

	  return true;
	};

	function constructLength(arr, len) {
	  if (len < 0x80) {
	    arr.push(len);
	    return;
	  }
	  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
	  arr.push(octets | 0x80);
	  while (--octets) {
	    arr.push((len >>> (octets << 3)) & 0xff);
	  }
	  arr.push(len);
	}

	Signature.prototype.toDER = function toDER(enc) {
	  var r = this.r.toArray();
	  var s = this.s.toArray();

	  // Pad values
	  if (r[0] & 0x80)
	    r = [ 0 ].concat(r);
	  // Pad values
	  if (s[0] & 0x80)
	    s = [ 0 ].concat(s);

	  r = rmPadding(r);
	  s = rmPadding(s);

	  while (!s[0] && !(s[1] & 0x80)) {
	    s = s.slice(1);
	  }
	  var arr = [ 0x02 ];
	  constructLength(arr, r.length);
	  arr = arr.concat(r);
	  arr.push(0x02);
	  constructLength(arr, s.length);
	  var backHalf = arr.concat(s);
	  var res = [ 0x30 ];
	  constructLength(res, backHalf.length);
	  res = res.concat(backHalf);
	  return utils.encode(res, enc);
	};
	return signature$1;
}

var ec;
var hasRequiredEc;

function requireEc () {
	if (hasRequiredEc) return ec;
	hasRequiredEc = 1;

	var BN = requireBn();
	var HmacDRBG = requireHmacDrbg();
	var utils = requireUtils$1();
	var curves = requireCurves();
	var rand = requireBrorand();
	var assert = utils.assert;

	var KeyPair = requireKey$1();
	var Signature = requireSignature$1();

	function EC(options) {
	  if (!(this instanceof EC))
	    return new EC(options);

	  // Shortcut `elliptic.ec(curve-name)`
	  if (typeof options === 'string') {
	    assert(Object.prototype.hasOwnProperty.call(curves, options),
	      'Unknown curve ' + options);

	    options = curves[options];
	  }

	  // Shortcut for `elliptic.ec(elliptic.curves.curveName)`
	  if (options instanceof curves.PresetCurve)
	    options = { curve: options };

	  this.curve = options.curve.curve;
	  this.n = this.curve.n;
	  this.nh = this.n.ushrn(1);
	  this.g = this.curve.g;

	  // Point on curve
	  this.g = options.curve.g;
	  this.g.precompute(options.curve.n.bitLength() + 1);

	  // Hash for function for DRBG
	  this.hash = options.hash || options.curve.hash;
	}
	ec = EC;

	EC.prototype.keyPair = function keyPair(options) {
	  return new KeyPair(this, options);
	};

	EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
	  return KeyPair.fromPrivate(this, priv, enc);
	};

	EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
	  return KeyPair.fromPublic(this, pub, enc);
	};

	EC.prototype.genKeyPair = function genKeyPair(options) {
	  if (!options)
	    options = {};

	  // Instantiate Hmac_DRBG
	  var drbg = new HmacDRBG({
	    hash: this.hash,
	    pers: options.pers,
	    persEnc: options.persEnc || 'utf8',
	    entropy: options.entropy || rand(this.hash.hmacStrength),
	    entropyEnc: options.entropy && options.entropyEnc || 'utf8',
	    nonce: this.n.toArray(),
	  });

	  var bytes = this.n.byteLength();
	  var ns2 = this.n.sub(new BN(2));
	  for (;;) {
	    var priv = new BN(drbg.generate(bytes));
	    if (priv.cmp(ns2) > 0)
	      continue;

	    priv.iaddn(1);
	    return this.keyFromPrivate(priv);
	  }
	};

	EC.prototype._truncateToN = function _truncateToN(msg, truncOnly, bitLength) {
	  var byteLength;
	  if (BN.isBN(msg) || typeof msg === 'number') {
	    msg = new BN(msg, 16);
	    byteLength = msg.byteLength();
	  } else if (typeof msg === 'object') {
	    // BN assumes an array-like input and asserts length
	    byteLength = msg.length;
	    msg = new BN(msg, 16);
	  } else {
	    // BN converts the value to string
	    var str = msg.toString();
	    // HEX encoding
	    byteLength = (str.length + 1) >>> 1;
	    msg = new BN(str, 16);
	  }
	  // Allow overriding
	  if (typeof bitLength !== 'number') {
	    bitLength = byteLength * 8;
	  }
	  var delta = bitLength - this.n.bitLength();
	  if (delta > 0)
	    msg = msg.ushrn(delta);
	  if (!truncOnly && msg.cmp(this.n) >= 0)
	    return msg.sub(this.n);
	  else
	    return msg;
	};

	EC.prototype.sign = function sign(msg, key, enc, options) {
	  if (typeof enc === 'object') {
	    options = enc;
	    enc = null;
	  }
	  if (!options)
	    options = {};

	  if (typeof msg !== 'string' && typeof msg !== 'number' && !BN.isBN(msg)) {
	    assert(typeof msg === 'object' && msg && typeof msg.length === 'number',
	      'Expected message to be an array-like, a hex string, or a BN instance');
	    assert((msg.length >>> 0) === msg.length); // non-negative 32-bit integer
	    for (var i = 0; i < msg.length; i++) assert((msg[i] & 255) === msg[i]);
	  }

	  key = this.keyFromPrivate(key, enc);
	  msg = this._truncateToN(msg, false, options.msgBitLength);

	  // Would fail further checks, but let's make the error message clear
	  assert(!msg.isNeg(), 'Can not sign a negative message');

	  // Zero-extend key to provide enough entropy
	  var bytes = this.n.byteLength();
	  var bkey = key.getPrivate().toArray('be', bytes);

	  // Zero-extend nonce to have the same byte size as N
	  var nonce = msg.toArray('be', bytes);

	  // Recheck nonce to be bijective to msg
	  assert((new BN(nonce)).eq(msg), 'Can not sign message');

	  // Instantiate Hmac_DRBG
	  var drbg = new HmacDRBG({
	    hash: this.hash,
	    entropy: bkey,
	    nonce: nonce,
	    pers: options.pers,
	    persEnc: options.persEnc || 'utf8',
	  });

	  // Number of bytes to generate
	  var ns1 = this.n.sub(new BN(1));

	  for (var iter = 0; ; iter++) {
	    var k = options.k ?
	      options.k(iter) :
	      new BN(drbg.generate(this.n.byteLength()));
	    k = this._truncateToN(k, true);
	    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
	      continue;

	    var kp = this.g.mul(k);
	    if (kp.isInfinity())
	      continue;

	    var kpX = kp.getX();
	    var r = kpX.umod(this.n);
	    if (r.cmpn(0) === 0)
	      continue;

	    var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
	    s = s.umod(this.n);
	    if (s.cmpn(0) === 0)
	      continue;

	    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) |
	                        (kpX.cmp(r) !== 0 ? 2 : 0);

	    // Use complement of `s`, if it is > `n / 2`
	    if (options.canonical && s.cmp(this.nh) > 0) {
	      s = this.n.sub(s);
	      recoveryParam ^= 1;
	    }

	    return new Signature({ r: r, s: s, recoveryParam: recoveryParam });
	  }
	};

	EC.prototype.verify = function verify(msg, signature, key, enc, options) {
	  if (!options)
	    options = {};

	  msg = this._truncateToN(msg, false, options.msgBitLength);
	  key = this.keyFromPublic(key, enc);
	  signature = new Signature(signature, 'hex');

	  // Perform primitive values validation
	  var r = signature.r;
	  var s = signature.s;
	  if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
	    return false;
	  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
	    return false;

	  // Validate signature
	  var sinv = s.invm(this.n);
	  var u1 = sinv.mul(msg).umod(this.n);
	  var u2 = sinv.mul(r).umod(this.n);
	  var p;

	  if (!this.curve._maxwellTrick) {
	    p = this.g.mulAdd(u1, key.getPublic(), u2);
	    if (p.isInfinity())
	      return false;

	    return p.getX().umod(this.n).cmp(r) === 0;
	  }

	  // NOTE: Greg Maxwell's trick, inspired by:
	  // https://git.io/vad3K

	  p = this.g.jmulAdd(u1, key.getPublic(), u2);
	  if (p.isInfinity())
	    return false;

	  // Compare `p.x` of Jacobian point with `r`,
	  // this will do `p.x == r * p.z^2` instead of multiplying `p.x` by the
	  // inverse of `p.z^2`
	  return p.eqXToP(r);
	};

	EC.prototype.recoverPubKey = function(msg, signature, j, enc) {
	  assert((3 & j) === j, 'The recovery param is more than two bits');
	  signature = new Signature(signature, enc);

	  var n = this.n;
	  var e = new BN(msg);
	  var r = signature.r;
	  var s = signature.s;

	  // A set LSB signifies that the y-coordinate is odd
	  var isYOdd = j & 1;
	  var isSecondKey = j >> 1;
	  if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
	    throw new Error('Unable to find sencond key candinate');

	  // 1.1. Let x = r + jn.
	  if (isSecondKey)
	    r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
	  else
	    r = this.curve.pointFromX(r, isYOdd);

	  var rInv = signature.r.invm(n);
	  var s1 = n.sub(e).mul(rInv).umod(n);
	  var s2 = s.mul(rInv).umod(n);

	  // 1.6.1 Compute Q = r^-1 (sR -  eG)
	  //               Q = r^-1 (sR + -eG)
	  return this.g.mulAdd(s1, r, s2);
	};

	EC.prototype.getKeyRecoveryParam = function(e, signature, Q, enc) {
	  signature = new Signature(signature, enc);
	  if (signature.recoveryParam !== null)
	    return signature.recoveryParam;

	  for (var i = 0; i < 4; i++) {
	    var Qprime;
	    try {
	      Qprime = this.recoverPubKey(e, signature, i);
	    } catch (e) {
	      continue;
	    }

	    if (Qprime.eq(Q))
	      return i;
	  }
	  throw new Error('Unable to find valid recovery factor');
	};
	return ec;
}

var key;
var hasRequiredKey;

function requireKey () {
	if (hasRequiredKey) return key;
	hasRequiredKey = 1;

	var utils = requireUtils$1();
	var assert = utils.assert;
	var parseBytes = utils.parseBytes;
	var cachedProperty = utils.cachedProperty;

	/**
	* @param {EDDSA} eddsa - instance
	* @param {Object} params - public/private key parameters
	*
	* @param {Array<Byte>} [params.secret] - secret seed bytes
	* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
	* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
	*
	*/
	function KeyPair(eddsa, params) {
	  this.eddsa = eddsa;
	  this._secret = parseBytes(params.secret);
	  if (eddsa.isPoint(params.pub))
	    this._pub = params.pub;
	  else
	    this._pubBytes = parseBytes(params.pub);
	}

	KeyPair.fromPublic = function fromPublic(eddsa, pub) {
	  if (pub instanceof KeyPair)
	    return pub;
	  return new KeyPair(eddsa, { pub: pub });
	};

	KeyPair.fromSecret = function fromSecret(eddsa, secret) {
	  if (secret instanceof KeyPair)
	    return secret;
	  return new KeyPair(eddsa, { secret: secret });
	};

	KeyPair.prototype.secret = function secret() {
	  return this._secret;
	};

	cachedProperty(KeyPair, 'pubBytes', function pubBytes() {
	  return this.eddsa.encodePoint(this.pub());
	});

	cachedProperty(KeyPair, 'pub', function pub() {
	  if (this._pubBytes)
	    return this.eddsa.decodePoint(this._pubBytes);
	  return this.eddsa.g.mul(this.priv());
	});

	cachedProperty(KeyPair, 'privBytes', function privBytes() {
	  var eddsa = this.eddsa;
	  var hash = this.hash();
	  var lastIx = eddsa.encodingLength - 1;

	  var a = hash.slice(0, eddsa.encodingLength);
	  a[0] &= 248;
	  a[lastIx] &= 127;
	  a[lastIx] |= 64;

	  return a;
	});

	cachedProperty(KeyPair, 'priv', function priv() {
	  return this.eddsa.decodeInt(this.privBytes());
	});

	cachedProperty(KeyPair, 'hash', function hash() {
	  return this.eddsa.hash().update(this.secret()).digest();
	});

	cachedProperty(KeyPair, 'messagePrefix', function messagePrefix() {
	  return this.hash().slice(this.eddsa.encodingLength);
	});

	KeyPair.prototype.sign = function sign(message) {
	  assert(this._secret, 'KeyPair can only verify');
	  return this.eddsa.sign(message, this);
	};

	KeyPair.prototype.verify = function verify(message, sig) {
	  return this.eddsa.verify(message, sig, this);
	};

	KeyPair.prototype.getSecret = function getSecret(enc) {
	  assert(this._secret, 'KeyPair is public only');
	  return utils.encode(this.secret(), enc);
	};

	KeyPair.prototype.getPublic = function getPublic(enc) {
	  return utils.encode(this.pubBytes(), enc);
	};

	key = KeyPair;
	return key;
}

var signature;
var hasRequiredSignature;

function requireSignature () {
	if (hasRequiredSignature) return signature;
	hasRequiredSignature = 1;

	var BN = requireBn();
	var utils = requireUtils$1();
	var assert = utils.assert;
	var cachedProperty = utils.cachedProperty;
	var parseBytes = utils.parseBytes;

	/**
	* @param {EDDSA} eddsa - eddsa instance
	* @param {Array<Bytes>|Object} sig -
	* @param {Array<Bytes>|Point} [sig.R] - R point as Point or bytes
	* @param {Array<Bytes>|bn} [sig.S] - S scalar as bn or bytes
	* @param {Array<Bytes>} [sig.Rencoded] - R point encoded
	* @param {Array<Bytes>} [sig.Sencoded] - S scalar encoded
	*/
	function Signature(eddsa, sig) {
	  this.eddsa = eddsa;

	  if (typeof sig !== 'object')
	    sig = parseBytes(sig);

	  if (Array.isArray(sig)) {
	    assert(sig.length === eddsa.encodingLength * 2, 'Signature has invalid size');
	    sig = {
	      R: sig.slice(0, eddsa.encodingLength),
	      S: sig.slice(eddsa.encodingLength),
	    };
	  }

	  assert(sig.R && sig.S, 'Signature without R or S');

	  if (eddsa.isPoint(sig.R))
	    this._R = sig.R;
	  if (sig.S instanceof BN)
	    this._S = sig.S;

	  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
	  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
	}

	cachedProperty(Signature, 'S', function S() {
	  return this.eddsa.decodeInt(this.Sencoded());
	});

	cachedProperty(Signature, 'R', function R() {
	  return this.eddsa.decodePoint(this.Rencoded());
	});

	cachedProperty(Signature, 'Rencoded', function Rencoded() {
	  return this.eddsa.encodePoint(this.R());
	});

	cachedProperty(Signature, 'Sencoded', function Sencoded() {
	  return this.eddsa.encodeInt(this.S());
	});

	Signature.prototype.toBytes = function toBytes() {
	  return this.Rencoded().concat(this.Sencoded());
	};

	Signature.prototype.toHex = function toHex() {
	  return utils.encode(this.toBytes(), 'hex').toUpperCase();
	};

	signature = Signature;
	return signature;
}

var eddsa;
var hasRequiredEddsa;

function requireEddsa () {
	if (hasRequiredEddsa) return eddsa;
	hasRequiredEddsa = 1;

	var hash = requireHash();
	var curves = requireCurves();
	var utils = requireUtils$1();
	var assert = utils.assert;
	var parseBytes = utils.parseBytes;
	var KeyPair = requireKey();
	var Signature = requireSignature();

	function EDDSA(curve) {
	  assert(curve === 'ed25519', 'only tested with ed25519 so far');

	  if (!(this instanceof EDDSA))
	    return new EDDSA(curve);

	  curve = curves[curve].curve;
	  this.curve = curve;
	  this.g = curve.g;
	  this.g.precompute(curve.n.bitLength() + 1);

	  this.pointClass = curve.point().constructor;
	  this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
	  this.hash = hash.sha512;
	}

	eddsa = EDDSA;

	/**
	* @param {Array|String} message - message bytes
	* @param {Array|String|KeyPair} secret - secret bytes or a keypair
	* @returns {Signature} - signature
	*/
	EDDSA.prototype.sign = function sign(message, secret) {
	  message = parseBytes(message);
	  var key = this.keyFromSecret(secret);
	  var r = this.hashInt(key.messagePrefix(), message);
	  var R = this.g.mul(r);
	  var Rencoded = this.encodePoint(R);
	  var s_ = this.hashInt(Rencoded, key.pubBytes(), message)
	    .mul(key.priv());
	  var S = r.add(s_).umod(this.curve.n);
	  return this.makeSignature({ R: R, S: S, Rencoded: Rencoded });
	};

	/**
	* @param {Array} message - message bytes
	* @param {Array|String|Signature} sig - sig bytes
	* @param {Array|String|Point|KeyPair} pub - public key
	* @returns {Boolean} - true if public key matches sig of message
	*/
	EDDSA.prototype.verify = function verify(message, sig, pub) {
	  message = parseBytes(message);
	  sig = this.makeSignature(sig);
	  if (sig.S().gte(sig.eddsa.curve.n) || sig.S().isNeg()) {
	    return false;
	  }
	  var key = this.keyFromPublic(pub);
	  var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
	  var SG = this.g.mul(sig.S());
	  var RplusAh = sig.R().add(key.pub().mul(h));
	  return RplusAh.eq(SG);
	};

	EDDSA.prototype.hashInt = function hashInt() {
	  var hash = this.hash();
	  for (var i = 0; i < arguments.length; i++)
	    hash.update(arguments[i]);
	  return utils.intFromLE(hash.digest()).umod(this.curve.n);
	};

	EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
	  return KeyPair.fromPublic(this, pub);
	};

	EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
	  return KeyPair.fromSecret(this, secret);
	};

	EDDSA.prototype.makeSignature = function makeSignature(sig) {
	  if (sig instanceof Signature)
	    return sig;
	  return new Signature(this, sig);
	};

	/**
	* * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
	*
	* EDDSA defines methods for encoding and decoding points and integers. These are
	* helper convenience methods, that pass along to utility functions implied
	* parameters.
	*
	*/
	EDDSA.prototype.encodePoint = function encodePoint(point) {
	  var enc = point.getY().toArray('le', this.encodingLength);
	  enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
	  return enc;
	};

	EDDSA.prototype.decodePoint = function decodePoint(bytes) {
	  bytes = utils.parseBytes(bytes);

	  var lastIx = bytes.length - 1;
	  var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
	  var xIsOdd = (bytes[lastIx] & 0x80) !== 0;

	  var y = utils.intFromLE(normed);
	  return this.curve.pointFromY(y, xIsOdd);
	};

	EDDSA.prototype.encodeInt = function encodeInt(num) {
	  return num.toArray('le', this.encodingLength);
	};

	EDDSA.prototype.decodeInt = function decodeInt(bytes) {
	  return utils.intFromLE(bytes);
	};

	EDDSA.prototype.isPoint = function isPoint(val) {
	  return val instanceof this.pointClass;
	};
	return eddsa;
}

var hasRequiredElliptic$2;

function requireElliptic$2 () {
	if (hasRequiredElliptic$2) return elliptic$2;
	hasRequiredElliptic$2 = 1;
	(function (exports) {

		var elliptic = exports;

		elliptic.version = require$$0$1.version;
		elliptic.utils = requireUtils$1();
		elliptic.rand = requireBrorand();
		elliptic.curve = requireCurve();
		elliptic.curves = requireCurves();

		// Protocols
		elliptic.ec = requireEc();
		elliptic.eddsa = requireEddsa(); 
	} (elliptic$2));
	return elliptic$2;
}

var elliptic$1;
var hasRequiredElliptic$1;

function requireElliptic$1 () {
	if (hasRequiredElliptic$1) return elliptic$1;
	hasRequiredElliptic$1 = 1;
	const EC = requireElliptic$2().ec;

	const ec = new EC('secp256k1');
	const ecparams = ec.curve;

	// Hack, we can not use bn.js@5, while elliptic uses bn.js@4
	// See https://github.com/indutny/elliptic/issues/191#issuecomment-569888758
	const BN = ecparams.n.constructor;

	function loadCompressedPublicKey (first, xbuf) {
	  let x = new BN(xbuf);

	  // overflow
	  if (x.cmp(ecparams.p) >= 0) return null
	  x = x.toRed(ecparams.red);

	  // compute corresponding Y
	  let y = x.redSqr().redIMul(x).redIAdd(ecparams.b).redSqrt();
	  if ((first === 0x03) !== y.isOdd()) y = y.redNeg();

	  // x*x*x + b = y*y
	  const x3 = x.redSqr().redIMul(x);
	  if (!y.redSqr().redISub(x3.redIAdd(ecparams.b)).isZero()) return null

	  return ec.keyPair({ pub: { x: x, y: y } })
	}

	function loadUncompressedPublicKey (first, xbuf, ybuf) {
	  let x = new BN(xbuf);
	  let y = new BN(ybuf);

	  // overflow
	  if (x.cmp(ecparams.p) >= 0 || y.cmp(ecparams.p) >= 0) return null

	  x = x.toRed(ecparams.red);
	  y = y.toRed(ecparams.red);

	  // is odd flag
	  if ((first === 0x06 || first === 0x07) && y.isOdd() !== (first === 0x07)) return null

	  // x*x*x + b = y*y
	  const x3 = x.redSqr().redIMul(x);
	  if (!y.redSqr().redISub(x3.redIAdd(ecparams.b)).isZero()) return null

	  return ec.keyPair({ pub: { x: x, y: y } })
	}

	function loadPublicKey (pubkey) {
	  // length should be validated in interface
	  const first = pubkey[0];
	  switch (first) {
	    case 0x02:
	    case 0x03:
	      if (pubkey.length !== 33) return null
	      return loadCompressedPublicKey(first, pubkey.subarray(1, 33))
	    case 0x04:
	    case 0x06:
	    case 0x07:
	      if (pubkey.length !== 65) return null
	      return loadUncompressedPublicKey(first, pubkey.subarray(1, 33), pubkey.subarray(33, 65))
	    default:
	      return null
	  }
	}

	function savePublicKey (output, point) {
	  const pubkey = point.encode(null, output.length === 33);
	  // Loop should be faster because we do not need create extra Uint8Array
	  // output.set(new Uint8Array(pubkey))
	  for (let i = 0; i < output.length; ++i) output[i] = pubkey[i];
	}

	elliptic$1 = {
	  contextRandomize () {
	    return 0
	  },

	  privateKeyVerify (seckey) {
	    const bn = new BN(seckey);
	    return bn.cmp(ecparams.n) < 0 && !bn.isZero() ? 0 : 1
	  },

	  privateKeyNegate (seckey) {
	    const bn = new BN(seckey);
	    const negate = ecparams.n.sub(bn).umod(ecparams.n).toArrayLike(Uint8Array, 'be', 32);
	    seckey.set(negate);
	    return 0
	  },

	  privateKeyTweakAdd (seckey, tweak) {
	    const bn = new BN(tweak);
	    if (bn.cmp(ecparams.n) >= 0) return 1

	    bn.iadd(new BN(seckey));
	    if (bn.cmp(ecparams.n) >= 0) bn.isub(ecparams.n);
	    if (bn.isZero()) return 1

	    const tweaked = bn.toArrayLike(Uint8Array, 'be', 32);
	    seckey.set(tweaked);

	    return 0
	  },

	  privateKeyTweakMul (seckey, tweak) {
	    let bn = new BN(tweak);
	    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1

	    bn.imul(new BN(seckey));
	    if (bn.cmp(ecparams.n) >= 0) bn = bn.umod(ecparams.n);

	    const tweaked = bn.toArrayLike(Uint8Array, 'be', 32);
	    seckey.set(tweaked);

	    return 0
	  },

	  publicKeyVerify (pubkey) {
	    const pair = loadPublicKey(pubkey);
	    return pair === null ? 1 : 0
	  },

	  publicKeyCreate (output, seckey) {
	    const bn = new BN(seckey);
	    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1

	    const point = ec.keyFromPrivate(seckey).getPublic();
	    savePublicKey(output, point);

	    return 0
	  },

	  publicKeyConvert (output, pubkey) {
	    const pair = loadPublicKey(pubkey);
	    if (pair === null) return 1

	    const point = pair.getPublic();
	    savePublicKey(output, point);

	    return 0
	  },

	  publicKeyNegate (output, pubkey) {
	    const pair = loadPublicKey(pubkey);
	    if (pair === null) return 1

	    const point = pair.getPublic();
	    point.y = point.y.redNeg();
	    savePublicKey(output, point);

	    return 0
	  },

	  publicKeyCombine (output, pubkeys) {
	    const pairs = new Array(pubkeys.length);
	    for (let i = 0; i < pubkeys.length; ++i) {
	      pairs[i] = loadPublicKey(pubkeys[i]);
	      if (pairs[i] === null) return 1
	    }

	    let point = pairs[0].getPublic();
	    for (let i = 1; i < pairs.length; ++i) point = point.add(pairs[i].pub);
	    if (point.isInfinity()) return 2

	    savePublicKey(output, point);

	    return 0
	  },

	  publicKeyTweakAdd (output, pubkey, tweak) {
	    const pair = loadPublicKey(pubkey);
	    if (pair === null) return 1

	    tweak = new BN(tweak);
	    if (tweak.cmp(ecparams.n) >= 0) return 2

	    const point = pair.getPublic().add(ecparams.g.mul(tweak));
	    if (point.isInfinity()) return 2

	    savePublicKey(output, point);

	    return 0
	  },

	  publicKeyTweakMul (output, pubkey, tweak) {
	    const pair = loadPublicKey(pubkey);
	    if (pair === null) return 1

	    tweak = new BN(tweak);
	    if (tweak.cmp(ecparams.n) >= 0 || tweak.isZero()) return 2

	    const point = pair.getPublic().mul(tweak);
	    savePublicKey(output, point);

	    return 0
	  },

	  signatureNormalize (sig) {
	    const r = new BN(sig.subarray(0, 32));
	    const s = new BN(sig.subarray(32, 64));
	    if (r.cmp(ecparams.n) >= 0 || s.cmp(ecparams.n) >= 0) return 1

	    if (s.cmp(ec.nh) === 1) {
	      sig.set(ecparams.n.sub(s).toArrayLike(Uint8Array, 'be', 32), 32);
	    }

	    return 0
	  },

	  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
	  // Adapted for Uint8Array instead Buffer
	  signatureExport (obj, sig) {
	    const sigR = sig.subarray(0, 32);
	    const sigS = sig.subarray(32, 64);
	    if (new BN(sigR).cmp(ecparams.n) >= 0) return 1
	    if (new BN(sigS).cmp(ecparams.n) >= 0) return 1

	    const { output } = obj;

	    // Prepare R
	    let r = output.subarray(4, 4 + 33);
	    r[0] = 0x00;
	    r.set(sigR, 1);

	    let lenR = 33;
	    let posR = 0;
	    for (; lenR > 1 && r[posR] === 0x00 && !(r[posR + 1] & 0x80); --lenR, ++posR);

	    r = r.subarray(posR);
	    if (r[0] & 0x80) return 1
	    if (lenR > 1 && (r[0] === 0x00) && !(r[1] & 0x80)) return 1

	    // Prepare S
	    let s = output.subarray(6 + 33, 6 + 33 + 33);
	    s[0] = 0x00;
	    s.set(sigS, 1);

	    let lenS = 33;
	    let posS = 0;
	    for (; lenS > 1 && s[posS] === 0x00 && !(s[posS + 1] & 0x80); --lenS, ++posS);

	    s = s.subarray(posS);
	    if (s[0] & 0x80) return 1
	    if (lenS > 1 && (s[0] === 0x00) && !(s[1] & 0x80)) return 1

	    // Set output length for return
	    obj.outputlen = 6 + lenR + lenS;

	    // Output in specified format
	    // 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
	    output[0] = 0x30;
	    output[1] = obj.outputlen - 2;
	    output[2] = 0x02;
	    output[3] = r.length;
	    output.set(r, 4);
	    output[4 + lenR] = 0x02;
	    output[5 + lenR] = s.length;
	    output.set(s, 6 + lenR);

	    return 0
	  },

	  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
	  // Adapted for Uint8Array instead Buffer
	  signatureImport (output, sig) {
	    if (sig.length < 8) return 1
	    if (sig.length > 72) return 1
	    if (sig[0] !== 0x30) return 1
	    if (sig[1] !== sig.length - 2) return 1
	    if (sig[2] !== 0x02) return 1

	    const lenR = sig[3];
	    if (lenR === 0) return 1
	    if (5 + lenR >= sig.length) return 1
	    if (sig[4 + lenR] !== 0x02) return 1

	    const lenS = sig[5 + lenR];
	    if (lenS === 0) return 1
	    if ((6 + lenR + lenS) !== sig.length) return 1

	    if (sig[4] & 0x80) return 1
	    if (lenR > 1 && (sig[4] === 0x00) && !(sig[5] & 0x80)) return 1

	    if (sig[lenR + 6] & 0x80) return 1
	    if (lenS > 1 && (sig[lenR + 6] === 0x00) && !(sig[lenR + 7] & 0x80)) return 1

	    let sigR = sig.subarray(4, 4 + lenR);
	    if (sigR.length === 33 && sigR[0] === 0x00) sigR = sigR.subarray(1);
	    if (sigR.length > 32) return 1

	    let sigS = sig.subarray(6 + lenR);
	    if (sigS.length === 33 && sigS[0] === 0x00) sigS = sigS.slice(1);
	    if (sigS.length > 32) throw new Error('S length is too long')

	    let r = new BN(sigR);
	    if (r.cmp(ecparams.n) >= 0) r = new BN(0);

	    let s = new BN(sig.subarray(6 + lenR));
	    if (s.cmp(ecparams.n) >= 0) s = new BN(0);

	    output.set(r.toArrayLike(Uint8Array, 'be', 32), 0);
	    output.set(s.toArrayLike(Uint8Array, 'be', 32), 32);

	    return 0
	  },

	  ecdsaSign (obj, message, seckey, data, noncefn) {
	    if (noncefn) {
	      const _noncefn = noncefn;
	      noncefn = (counter) => {
	        const nonce = _noncefn(message, seckey, null, data, counter);

	        const isValid = nonce instanceof Uint8Array && nonce.length === 32;
	        if (!isValid) throw new Error('This is the way')

	        return new BN(nonce)
	      };
	    }

	    const d = new BN(seckey);
	    if (d.cmp(ecparams.n) >= 0 || d.isZero()) return 1

	    let sig;
	    try {
	      sig = ec.sign(message, seckey, { canonical: true, k: noncefn, pers: data });
	    } catch (err) {
	      return 1
	    }

	    obj.signature.set(sig.r.toArrayLike(Uint8Array, 'be', 32), 0);
	    obj.signature.set(sig.s.toArrayLike(Uint8Array, 'be', 32), 32);
	    obj.recid = sig.recoveryParam;

	    return 0
	  },

	  ecdsaVerify (sig, msg32, pubkey) {
	    const sigObj = { r: sig.subarray(0, 32), s: sig.subarray(32, 64) };

	    const sigr = new BN(sigObj.r);
	    const sigs = new BN(sigObj.s);
	    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1
	    if (sigs.cmp(ec.nh) === 1 || sigr.isZero() || sigs.isZero()) return 3

	    const pair = loadPublicKey(pubkey);
	    if (pair === null) return 2

	    const point = pair.getPublic();
	    const isValid = ec.verify(msg32, sigObj, point);
	    return isValid ? 0 : 3
	  },

	  ecdsaRecover (output, sig, recid, msg32) {
	    const sigObj = { r: sig.slice(0, 32), s: sig.slice(32, 64) };

	    const sigr = new BN(sigObj.r);
	    const sigs = new BN(sigObj.s);
	    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1

	    if (sigr.isZero() || sigs.isZero()) return 2

	    // Can throw `throw new Error('Unable to find sencond key candinate');`
	    let point;
	    try {
	      point = ec.recoverPubKey(msg32, sigObj, recid);
	    } catch (err) {
	      return 2
	    }

	    savePublicKey(output, point);

	    return 0
	  },

	  ecdh (output, pubkey, seckey, data, hashfn, xbuf, ybuf) {
	    const pair = loadPublicKey(pubkey);
	    if (pair === null) return 1

	    const scalar = new BN(seckey);
	    if (scalar.cmp(ecparams.n) >= 0 || scalar.isZero()) return 2

	    const point = pair.getPublic().mul(scalar);

	    if (hashfn === undefined) {
	      const data = point.encode(null, true);
	      const sha256 = ec.hash().update(data).digest();
	      for (let i = 0; i < 32; ++i) output[i] = sha256[i];
	    } else {
	      if (!xbuf) xbuf = new Uint8Array(32);
	      const x = point.getX().toArray('be', 32);
	      for (let i = 0; i < 32; ++i) xbuf[i] = x[i];

	      if (!ybuf) ybuf = new Uint8Array(32);
	      const y = point.getY().toArray('be', 32);
	      for (let i = 0; i < 32; ++i) ybuf[i] = y[i];

	      const hash = hashfn(xbuf, ybuf, data);

	      const isValid = hash instanceof Uint8Array && hash.length === output.length;
	      if (!isValid) return 2

	      output.set(hash);
	    }

	    return 0
	  }
	};
	return elliptic$1;
}

var elliptic;
var hasRequiredElliptic;

function requireElliptic () {
	if (hasRequiredElliptic) return elliptic;
	hasRequiredElliptic = 1;
	elliptic = requireLib()(requireElliptic$1());
	return elliptic;
}

try {
  secp256k1$1.exports = requireBindings();
} catch (err) {
  secp256k1$1.exports = requireElliptic();
}

var secp256k1Exports = secp256k1$1.exports;

var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(public_key, "__esModule", { value: true });
public_key.PublicKey = void 0;
const utils_1$2 = commonjs$1;
const ed25519_1$1 = ed25519;
const secp256k1_1$1 = __importDefault$2(secp256k1Exports);
const constants_1$2 = constants$1;
function key_type_to_str(keyType) {
    switch (keyType) {
        case constants_1$2.KeyType.ED25519: return 'ed25519';
        case constants_1$2.KeyType.SECP256K1: return 'secp256k1';
        default: throw new Error(`Unknown key type ${keyType}`);
    }
}
function str_to_key_type(keyType) {
    switch (keyType.toLowerCase()) {
        case 'ed25519': return constants_1$2.KeyType.ED25519;
        case 'secp256k1': return constants_1$2.KeyType.SECP256K1;
        default: throw new Error(`Unknown key type ${keyType}`);
    }
}
function resolveEnumKeyName(keyType) {
    switch (keyType) {
        case constants_1$2.KeyType.ED25519: {
            return 'ed25519Key';
        }
        case constants_1$2.KeyType.SECP256K1: {
            return 'secp256k1Key';
        }
        default: {
            throw Error(`unknown type ${keyType}`);
        }
    }
}
/**
 * DUPLICATED FROM @near-js/types - REPLACE WITH IMPORTED REFERENCE AND DELETE
 * This ends up being necessary for Wallet Selector dependencies with
 * outdated peer dependencies and should only be temporary
 */
class Enum {
    constructor(properties) {
        if (Object.keys(properties).length !== 1) {
            throw new Error('Enum can only take single value');
        }
        Object.keys(properties).map((key) => {
            this[key] = properties[key];
        });
    }
}
/**
 * PublicKey representation that has type and bytes of the key.
 */
class PublicKey extends Enum {
    enum;
    ed25519Key;
    secp256k1Key;
    constructor(publicKey) {
        const keyName = resolveEnumKeyName(publicKey.keyType);
        super({ [keyName]: publicKey });
        this[keyName] = publicKey;
        this.enum = keyName;
    }
    /**
     * Creates a PublicKey instance from a string or an existing PublicKey instance.
     * @param value The string or PublicKey instance to create a PublicKey from.
     * @returns {PublicKey} The PublicKey instance.
     */
    static from(value) {
        if (typeof value === 'string') {
            return PublicKey.fromString(value);
        }
        return value;
    }
    /**
     * Creates a PublicKey instance from an encoded key string.
     * @param encodedKey The encoded key string.
     * @returns {PublicKey} The PublicKey instance created from the encoded key string.
     */
    static fromString(encodedKey) {
        const parts = encodedKey.split(':');
        let publicKey;
        let keyType;
        if (parts.length === 1) {
            publicKey = parts[0];
        }
        else if (parts.length === 2) {
            publicKey = parts[1];
            keyType = str_to_key_type(parts[0]);
        }
        else {
            throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
        }
        const decodedPublicKey = (0, utils_1$2.baseDecode)(publicKey);
        if (!keyType) {
            keyType = decodedPublicKey.length === constants_1$2.KeySize.SECP256k1_PUBLIC_KEY ? constants_1$2.KeyType.SECP256K1 : constants_1$2.KeyType.ED25519;
        }
        const keySize = keyType === constants_1$2.KeyType.ED25519 ? constants_1$2.KeySize.ED25519_PUBLIC_KEY : constants_1$2.KeySize.SECP256k1_PUBLIC_KEY;
        if (decodedPublicKey.length !== keySize) {
            throw new Error(`Invalid public key size (${decodedPublicKey.length}), must be ${keySize}`);
        }
        return new PublicKey({ keyType, data: decodedPublicKey });
    }
    /**
     * Returns a string representation of the public key.
     * @returns {string} The string representation of the public key.
     */
    toString() {
        const encodedKey = (0, utils_1$2.baseEncode)(this.data);
        return `${key_type_to_str(this.keyType)}:${encodedKey}`;
    }
    /**
     * Verifies a message signature using the public key.
     * @param message The message to be verified.
     * @param signature The signature to be verified.
     * @returns {boolean} `true` if the signature is valid, otherwise `false`.
     */
    verify(message, signature) {
        const keyType = this.keyType;
        const data = this.data;
        switch (keyType) {
            case constants_1$2.KeyType.ED25519:
                return ed25519_1$1.ed25519.verify(signature, message, data);
            case constants_1$2.KeyType.SECP256K1:
                return secp256k1_1$1.default.ecdsaVerify(signature.subarray(0, 64), message, new Uint8Array([0x04, ...data]));
            default:
                throw new Error(`Unknown key type: ${keyType}`);
        }
    }
    get keyPair() {
        return this.ed25519Key || this.secp256k1Key;
    }
    get keyType() {
        return this.keyPair.keyType;
    }
    get data() {
        return this.keyPair.data;
    }
}
public_key.PublicKey = PublicKey;

var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(key_pair_ed25519, "__esModule", { value: true });
key_pair_ed25519.KeyPairEd25519 = void 0;
const utils_1$1 = commonjs$1;
const ed25519_1 = ed25519;
const randombytes_1$1 = __importDefault$1(randombytes);
const constants_1$1 = constants$1;
const key_pair_base_1$2 = key_pair_base;
const public_key_1$1 = public_key;
/**
 * This class provides key pair functionality for Ed25519 curve:
 * generating key pairs, encoding key pairs, signing and verifying.
 */
class KeyPairEd25519 extends key_pair_base_1$2.KeyPairBase {
    publicKey;
    secretKey;
    extendedSecretKey;
    /**
     * Construct an instance of key pair given a secret key.
     * It's generally assumed that these are encoded in base58.
     * @param extendedSecretKey
     */
    constructor(extendedSecretKey) {
        super();
        const decoded = (0, utils_1$1.baseDecode)(extendedSecretKey);
        const secretKey = new Uint8Array(decoded.slice(0, constants_1$1.KeySize.SECRET_KEY));
        const publicKey = ed25519_1.ed25519.getPublicKey(new Uint8Array(secretKey));
        this.publicKey = new public_key_1$1.PublicKey({ keyType: constants_1$1.KeyType.ED25519, data: publicKey });
        this.secretKey = (0, utils_1$1.baseEncode)(secretKey);
        this.extendedSecretKey = extendedSecretKey;
    }
    /**
     * Generate a new random keypair.
     * @example
     * const keyRandom = KeyPair.fromRandom();
     * keyRandom.publicKey
     * // returns [PUBLIC_KEY]
     *
     * keyRandom.secretKey
     * // returns [SECRET_KEY]
     */
    static fromRandom() {
        const secretKey = (0, randombytes_1$1.default)(constants_1$1.KeySize.SECRET_KEY);
        const publicKey = ed25519_1.ed25519.getPublicKey(new Uint8Array(secretKey));
        const extendedSecretKey = new Uint8Array([...secretKey, ...publicKey]);
        return new KeyPairEd25519((0, utils_1$1.baseEncode)(extendedSecretKey));
    }
    /**
     * Signs a message using the key pair's secret key.
     * @param message The message to be signed.
     * @returns {Signature} The signature object containing the signature and the public key.
     */
    sign(message) {
        const signature = ed25519_1.ed25519.sign(message, (0, utils_1$1.baseDecode)(this.secretKey));
        return { signature, publicKey: this.publicKey };
    }
    /**
     * Verifies the signature of a message using the key pair's public key.
     * @param message The message to be verified.
     * @param signature The signature to be verified.
     * @returns {boolean} `true` if the signature is valid, otherwise `false`.
     */
    verify(message, signature) {
        return this.publicKey.verify(message, signature);
    }
    /**
     * Returns a string representation of the key pair in the format 'ed25519:[extendedSecretKey]'.
     * @returns {string} The string representation of the key pair.
     */
    toString() {
        return `ed25519:${this.extendedSecretKey}`;
    }
    /**
     * Retrieves the public key associated with the key pair.
     * @returns {PublicKey} The public key.
     */
    getPublicKey() {
        return this.publicKey;
    }
}
key_pair_ed25519.KeyPairEd25519 = KeyPairEd25519;

var key_pair_secp256k1 = {};

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(key_pair_secp256k1, "__esModule", { value: true });
key_pair_secp256k1.KeyPairSecp256k1 = void 0;
const utils_1 = commonjs$1;
const randombytes_1 = __importDefault(randombytes);
const secp256k1_1 = __importDefault(secp256k1Exports);
const constants_1 = constants$1;
const key_pair_base_1$1 = key_pair_base;
const public_key_1 = public_key;
/**
 * This class provides key pair functionality for secp256k1 curve:
 * generating key pairs, encoding key pairs, signing and verifying.
 * nearcore expects secp256k1 public keys to be 64 bytes at all times,
 * even when string encoded the secp256k1 library returns 65 byte keys
 * (including a 1 byte header that indicates how the pubkey was encoded).
 * We'll force the secp256k1 library to always encode uncompressed
 * keys with the corresponding 0x04 header byte, then manually
 * insert/remove that byte as needed.
 */
class KeyPairSecp256k1 extends key_pair_base_1$1.KeyPairBase {
    publicKey;
    secretKey;
    extendedSecretKey;
    /**
     * Construct an instance of key pair given a secret key.
     * It's generally assumed that these are encoded in base58.
     * @param {string} extendedSecretKey
     */
    constructor(extendedSecretKey) {
        super();
        const decoded = (0, utils_1.baseDecode)(extendedSecretKey);
        const secretKey = new Uint8Array(decoded.slice(0, constants_1.KeySize.SECRET_KEY));
        const withHeader = secp256k1_1.default.publicKeyCreate(new Uint8Array(secretKey), false);
        const data = withHeader.subarray(1, withHeader.length); // remove the 0x04 header byte
        this.publicKey = new public_key_1.PublicKey({
            keyType: constants_1.KeyType.SECP256K1,
            data
        });
        this.secretKey = (0, utils_1.baseEncode)(secretKey);
        this.extendedSecretKey = extendedSecretKey;
    }
    /**
     * Generate a new random keypair.
     * @example
     * const keyRandom = KeyPair.fromRandom();
     * keyRandom.publicKey
     * // returns [PUBLIC_KEY]
     *
     * keyRandom.secretKey
     * // returns [SECRET_KEY]
     */
    static fromRandom() {
        // TODO: find better way to generate PK
        const secretKey = (0, randombytes_1.default)(constants_1.KeySize.SECRET_KEY);
        const withHeader = secp256k1_1.default.publicKeyCreate(new Uint8Array(secretKey), false);
        const publicKey = withHeader.subarray(1, withHeader.length);
        const extendedSecretKey = new Uint8Array([...secretKey, ...publicKey]);
        return new KeyPairSecp256k1((0, utils_1.baseEncode)(extendedSecretKey));
    }
    sign(message) {
        // nearcore expects 65 byte signatures formed by appending the recovery id to the 64 byte signature
        const { signature, recid } = secp256k1_1.default.ecdsaSign(message, (0, utils_1.baseDecode)(this.secretKey));
        return { signature: new Uint8Array([...signature, recid]), publicKey: this.publicKey };
    }
    verify(message, signature) {
        return this.publicKey.verify(message, signature);
    }
    toString() {
        return `secp256k1:${this.extendedSecretKey}`;
    }
    getPublicKey() {
        return this.publicKey;
    }
}
key_pair_secp256k1.KeyPairSecp256k1 = KeyPairSecp256k1;

Object.defineProperty(key_pair, "__esModule", { value: true });
key_pair.KeyPair = void 0;
const key_pair_base_1 = key_pair_base;
const key_pair_ed25519_1 = key_pair_ed25519;
const key_pair_secp256k1_1 = key_pair_secp256k1;
class KeyPair extends key_pair_base_1.KeyPairBase {
    /**
     * @param curve Name of elliptical curve, case-insensitive
     * @returns Random KeyPair based on the curve
     */
    static fromRandom(curve) {
        switch (curve.toUpperCase()) {
            case 'ED25519': return key_pair_ed25519_1.KeyPairEd25519.fromRandom();
            case 'SECP256K1': return key_pair_secp256k1_1.KeyPairSecp256k1.fromRandom();
            default: throw new Error(`Unknown curve ${curve}`);
        }
    }
    /**
     * Creates a key pair from an encoded key string.
     * @param encodedKey The encoded key string.
     * @returns {KeyPair} The key pair created from the encoded key string.
     */
    static fromString(encodedKey) {
        const parts = encodedKey.split(':');
        if (parts.length === 2) {
            switch (parts[0].toUpperCase()) {
                case 'ED25519': return new key_pair_ed25519_1.KeyPairEd25519(parts[1]);
                case 'SECP256K1': return new key_pair_secp256k1_1.KeyPairSecp256k1(parts[1]);
                default: throw new Error(`Unknown curve: ${parts[0]}`);
            }
        }
        else {
            throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
        }
    }
}
key_pair.KeyPair = KeyPair;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PublicKey = exports.KeyPairSecp256k1 = exports.KeyPairEd25519 = exports.KeyPair = exports.KeyType = void 0;
	var constants_1 = constants$1;
	Object.defineProperty(exports, "KeyType", { enumerable: true, get: function () { return constants_1.KeyType; } });
	var key_pair_1 = key_pair;
	Object.defineProperty(exports, "KeyPair", { enumerable: true, get: function () { return key_pair_1.KeyPair; } });
	var key_pair_ed25519_1 = key_pair_ed25519;
	Object.defineProperty(exports, "KeyPairEd25519", { enumerable: true, get: function () { return key_pair_ed25519_1.KeyPairEd25519; } });
	var key_pair_secp256k1_1 = key_pair_secp256k1;
	Object.defineProperty(exports, "KeyPairSecp256k1", { enumerable: true, get: function () { return key_pair_secp256k1_1.KeyPairSecp256k1; } });
	var public_key_1 = public_key;
	Object.defineProperty(exports, "PublicKey", { enumerable: true, get: function () { return public_key_1.PublicKey; } }); 
} (commonjs$2));

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.authPayloadSchema = exports.AuthPayload = void 0;
	exports.verifySignature = verifySignature;
	const borsh = __importStar(cjs);
	const js_sha256_1 = __importDefault(sha256Exports);
	const crypto_1 = commonjs$2;
	class AuthPayload {
	    message;
	    recipient;
	    nonce;
	    callbackUrl;
	    tag;
	    constructor({ message, nonce, recipient }) {
	        this.tag = 2147484061;
	        this.message = message;
	        this.nonce = nonce;
	        this.recipient = recipient;
	    }
	}
	exports.AuthPayload = AuthPayload;
	exports.authPayloadSchema = {
	    struct: {
	        tag: "u32",
	        message: "string",
	        nonce: { array: { type: "u8", len: 32 } },
	        recipient: "string",
	        callbackUrl: { option: "string" },
	    },
	};
	function verifySignature(request, result) {
	    // Reconstruct the payload that was **actually signed**
	    const payload = new AuthPayload(request);
	    const borsh_payload = borsh.serialize(exports.authPayloadSchema, payload);
	    const to_sign = Uint8Array.from(js_sha256_1.default.sha256.array(borsh_payload));
	    // Reconstruct the signature from the parameter given in the URL
	    let real_signature = new Uint8Array(Buffer.from(result.signature, "base64"));
	    // Use the public Key to verify that the private-counterpart signed the message
	    const myPK = crypto_1.PublicKey.from(result.publicKey);
	    return myPK.verify(to_sign, real_signature);
	}
	
} (nep0314));

var hot = {};

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function valid(uuid) {
  return uuidPattern.test(uuid);
}

function uuid4() {
  var rnd = require$$0$3.randomBytes(16);
  rnd[6] = (rnd[6] & 0x0f) | 0x40;
  rnd[8] = (rnd[8] & 0x3f) | 0x80;
  rnd = rnd.toString("hex").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
  rnd.shift();
  return rnd.join("-");
}
uuid4.valid = valid;

var uuid4$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: uuid4,
    uuid4: uuid4,
    valid: valid
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(uuid4$1);

var proxy = {};

var sha1 = {exports: {}};

var crypt = {exports: {}};

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt$1 = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt$1.rotl(n, 8) & 0x00FF00FF | crypt$1.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt$1.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  crypt.exports = crypt$1;
})();

var cryptExports = crypt.exports;

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

var charenc_1 = charenc;

(function() {
  var crypt = cryptExports,
      utf8 = charenc_1.utf8,
      bin = charenc_1.bin,

  // The core
  sha1$1 = function (message) {
    // Convert to byte array
    if (message.constructor == String)
      message = utf8.stringToBytes(message);
    else if (typeof Buffer !== 'undefined' && typeof Buffer.isBuffer == 'function' && Buffer.isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();

    // otherwise assume byte array

    var m  = crypt.bytesToWords(message),
        l  = message.length * 8,
        w  = [],
        H0 =  1732584193,
        H1 = -271733879,
        H2 = -1732584194,
        H3 =  271733878,
        H4 = -1009589776;

    // Padding
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >>> 9) << 4) + 15] = l;

    for (var i = 0; i < m.length; i += 16) {
      var a = H0,
          b = H1,
          c = H2,
          d = H3,
          e = H4;

      for (var j = 0; j < 80; j++) {

        if (j < 16)
          w[j] = m[i + j];
        else {
          var n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
          w[j] = (n << 1) | (n >>> 31);
        }

        var t = ((H0 << 5) | (H0 >>> 27)) + H4 + (w[j] >>> 0) + (
                j < 20 ? (H1 & H2 | ~H1 & H3) + 1518500249 :
                j < 40 ? (H1 ^ H2 ^ H3) + 1859775393 :
                j < 60 ? (H1 & H2 | H1 & H3 | H2 & H3) - 1894007588 :
                         (H1 ^ H2 ^ H3) - 899497514);

        H4 = H3;
        H3 = H2;
        H2 = (H1 << 30) | (H1 >>> 2);
        H1 = H0;
        H0 = t;
      }

      H0 += a;
      H1 += b;
      H2 += c;
      H3 += d;
      H4 += e;
    }

    return [H0, H1, H2, H3, H4];
  },

  // Public API
  api = function (message, options) {
    var digestbytes = crypt.wordsToBytes(sha1$1(message));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

  api._blocksize = 16;
  api._digestsize = 20;

  sha1.exports = api;
})();

var sha1Exports = sha1.exports;

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createRequest = exports.computeRequestId = exports.deleteRequest = exports.getResponse = exports.proxyApi = void 0;
	const sha1_1 = __importDefault(sha1Exports);
	const uuid4_1 = __importDefault(require$$0);
	const utils_1 = commonjs$1;
	exports.proxyApi = "https://h4n.app";
	const getResponse = async (id) => {
	    const res = await fetch(`${exports.proxyApi}/${id}/response`, {
	        headers: { "content-type": "application/json" },
	        method: "GET",
	    });
	    if (res.ok === false) {
	        throw Error(await res.text());
	    }
	    const { data } = await res.json();
	    return JSON.parse(data);
	};
	exports.getResponse = getResponse;
	const deleteRequest = async (id) => {
	    const res = await fetch(`${exports.proxyApi}/${id}`, {
	        headers: { "content-type": "application/json" },
	        method: "DELETE",
	    });
	    if (res.ok === false) {
	        throw Error(await res.text());
	    }
	};
	exports.deleteRequest = deleteRequest;
	const computeRequestId = async (request) => {
	    const query = (0, utils_1.baseEncode)(JSON.stringify({ ...request, _id: (0, uuid4_1.default)() }));
	    const hashsum = (0, sha1_1.default)(query);
	    const id = Buffer.from(hashsum, "hex").toString("base64");
	    const requestId = id.replaceAll("/", "_").replaceAll("-", "+").slice(0, 13);
	    return { requestId, query };
	};
	exports.computeRequestId = computeRequestId;
	const createRequest = async (request, signal) => {
	    const { query, requestId } = await (0, exports.computeRequestId)(request);
	    const res = await fetch(`${exports.proxyApi}/${requestId}/request`, {
	        body: JSON.stringify({ data: query }),
	        headers: { "content-type": "application/json" },
	        method: "POST",
	        signal,
	    });
	    if (res.ok === false) {
	        throw Error(await res.text());
	    }
	    return requestId;
	};
	exports.createRequest = createRequest;
	
} (proxy));

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getExtension = exports.RequestFailed = exports.wait = void 0;
	const uuid4_1 = __importDefault(require$$0);
	const utils_1 = commonjs$1;
	const proxy_1 = proxy;
	const wait = (timeout) => {
	    return new Promise((resolve) => setTimeout(resolve, timeout));
	};
	exports.wait = wait;
	class RequestFailed extends Error {
	    payload;
	    name = "RequestFailed";
	    constructor(payload) {
	        super();
	        this.payload = payload;
	    }
	}
	exports.RequestFailed = RequestFailed;
	const getExtension = () => {
	    if (typeof window === "undefined")
	        return null;
	    return window.hotExtension;
	};
	exports.getExtension = getExtension;
	let connector;
	if (typeof window !== "undefined") {
	    window.addEventListener("message", (e) => {
	        if (e.data === "hot-close") {
	            connector?.remove();
	            connector = undefined;
	        }
	    });
	}
	const createIframe = (widget) => {
	    connector?.remove();
	    connector = document.createElement("div");
	    const iframe = document.createElement("iframe");
	    connector?.appendChild(iframe);
	    iframe.src = widget;
	    iframe.allow = "usb";
	    iframe.style.border = "none";
	    iframe.style.borderRadius = "16px";
	    iframe.style.background = "#fff";
	    iframe.style.overflow = "hidden";
	    iframe.style.background = "#1D1F20";
	    iframe.style.border = "1px solid #2C3034";
	    iframe.style.width = "375px";
	    iframe.style.height = "560px";
	    iframe.onclick = (e) => e.stopPropagation();
	    connector.style.padding = "16px";
	    connector.style.zIndex = "100000000000000";
	    connector.style.position = "fixed";
	    connector.style.display = "flex";
	    connector.style.justifyContent = "center";
	    connector.style.alignItems = "center";
	    connector.style.top = "0";
	    connector.style.left = "0";
	    connector.style.width = "100%";
	    connector.style.height = "100%";
	    connector.style.background = "rgba(0, 0, 0, 0.1)";
	    connector.style.backdropFilter = "blur(24px)";
	    connector.onclick = () => {
	        connector?.remove();
	        connector = undefined;
	    };
	    document.body.appendChild(connector);
	    return connector;
	};
	class HOT {
	    walletId = "https://t.me/herewalletbot/app";
	    ancestorOrigins = [
	        "http://localhost:1234",
	        "https://my.herewallet.app",
	        "https://tgapp-dev.herewallet.app",
	        "https://tgapp.herewallet.app",
	        "https://beta.herewallet.app",
	    ];
	    connection = new Promise((resolve) => {
	        if (typeof window === "undefined")
	            return resolve(null);
	        if (window?.self === window?.top)
	            return resolve(null);
	        this.injectedRequest("initialized", {})
	            .then(resolve)
	            .catch(() => resolve(null));
	    });
	    get isInjected() {
	        if (typeof window === "undefined")
	            return false;
	        if (window.hotExtension != null)
	            return window.hotExtension.autoRun;
	        return this.ancestorOrigins.includes(window.location.ancestorOrigins?.[0]);
	    }
	    openInHotBrowserUrl = null;
	    toggleOpenInHotBrowser(url) {
	        this.openInHotBrowserUrl = url;
	    }
	    customProvider;
	    setupEthProvider(provider) {
	        this.customProvider = provider;
	    }
	    async injectedRequest(method, request) {
	        const id = (0, uuid4_1.default)();
	        return new Promise((resolve, reject) => {
	            const handler = (e) => {
	                if (e.data.id !== id)
	                    return;
	                window?.removeEventListener("message", handler);
	                if (e.data.success)
	                    return resolve(e.data.payload);
	                else
	                    return reject(e.data.payload);
	            };
	            window?.parent.postMessage({ $hot: true, method, request, id }, "*");
	            window?.addEventListener("message", handler);
	        });
	    }
	    subscribe(event, cb) {
	        if (!window.hotExtension)
	            return () => { };
	        return window.hotExtension.subscribe(event, cb);
	    }
	    async request(method, request) {
	        if (window.hotExtension != null)
	            return window.hotExtension.request(method, request);
	        if (this.isInjected)
	            return this.injectedRequest(method, request);
	        const id = (0, uuid4_1.default)();
	        const WebApp = window?.Telegram?.WebApp;
	        const requestId = await (0, proxy_1.createRequest)({
	            inside: !!this.openInHotBrowserUrl || (method === "ethereum" && this.customProvider == null),
	            origin: typeof this.openInHotBrowserUrl === "string" ? this.openInHotBrowserUrl : location.href,
	            $hot: true,
	            method,
	            request,
	            id,
	        });
	        const link = `${this.walletId}?startapp=hotconnect-${(0, utils_1.baseEncode)(requestId)}`;
	        if (WebApp)
	            WebApp?.openTelegramLink(link);
	        else {
	            const origin = `https://hot-labs.org/hot-widget/index.html`;
	            createIframe(`${origin}?hotconnect-${(0, utils_1.baseEncode)(requestId)}`);
	        }
	        const poolResponse = async () => {
	            await (0, exports.wait)(3000);
	            const data = await (0, proxy_1.getResponse)(requestId).catch(() => null);
	            if (data == null)
	                return await poolResponse();
	            if (data.success)
	                return data.payload;
	            throw new RequestFailed(data.payload);
	        };
	        const result = await poolResponse();
	        connector?.remove();
	        return result;
	    }
	}
	exports.default = new HOT();
	
} (hot));

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RequestFailed = exports.HOT = exports.authPayloadSchema = exports.AuthPayload = exports.verifySignature = void 0;
	var nep0314_1 = nep0314;
	Object.defineProperty(exports, "verifySignature", { enumerable: true, get: function () { return nep0314_1.verifySignature; } });
	Object.defineProperty(exports, "AuthPayload", { enumerable: true, get: function () { return nep0314_1.AuthPayload; } });
	Object.defineProperty(exports, "authPayloadSchema", { enumerable: true, get: function () { return nep0314_1.authPayloadSchema; } });
	var hot_1 = hot;
	Object.defineProperty(exports, "HOT", { enumerable: true, get: function () { return __importDefault(hot_1).default; } });
	Object.defineProperty(exports, "RequestFailed", { enumerable: true, get: function () { return hot_1.RequestFailed; } });
	
} (build));

const HOTWALLET_ID = "hot-wallet";
class HotWalletModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = HOTWALLET_ID;
    this.productName = "HOT Wallet";
    this.productUrl = "https://hot-labs.org/wallet";
    this.productIcon = "https://storage.herewallet.app/logo.png";
  }
  async isAvailable() {
    return true;
  }
  async getAddress() {
    return await build.HOT.request("stellar:getAddress", {});
  }
  async signTransaction(xdr, opts) {
    return await build.HOT.request("stellar:signTransaction", { xdr, accountToSign: opts?.address });
  }
  async signAuthEntry(authEntry, opts) {
    return await build.HOT.request("stellar:signAuthEntry", { authEntry, accountToSign: opts?.address });
  }
  async signMessage(message, opts) {
    return await build.HOT.request("stellar:signMessage", { message, accountToSign: opts?.address });
  }
  async getNetwork() {
    return { network: "mainnet", networkPassphrase: WalletNetwork.PUBLIC };
  }
}

const HANA_ID = "hana";
class HanaModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = HANA_ID;
    this.productName = "Hana Wallet";
    this.productUrl = "https://hanawallet.io/";
    this.productIcon = "https://stellar.creit.tech/wallet-icons/hana.png";
  }
  async runChecks() {
    if (!await this.isAvailable()) {
      throw new Error("Hana Wallet is not installed");
    }
  }
  isAvailable() {
    return new Promise((resolve) => resolve(typeof window !== "undefined" && !!window.hanaWallet?.stellar));
  }
  async getAddress() {
    return this.runChecks().then(() => window.hanaWallet.stellar.getPublicKey()).then((address) => ({ address })).catch((e) => {
      throw parseError(e);
    });
  }
  async signTransaction(xdr, opts) {
    return this.runChecks().then(
      () => window.hanaWallet.stellar.signTransaction({
        xdr,
        accountToSign: opts?.address,
        networkPassphrase: opts?.networkPassphrase
      })
    ).then((signedTxXdr) => ({ signedTxXdr, signerAddress: opts?.address })).catch((e) => {
      throw parseError(e);
    });
  }
  async signAuthEntry(authEntry, opts) {
    return this.runChecks().then(
      () => window.hanaWallet.stellar.signAuthEntry({
        xdr: authEntry,
        accountToSign: opts?.address
      })
    ).then((signedAuthEntry) => ({ signedAuthEntry, signerAddress: opts?.address })).catch((e) => {
      throw parseError(e);
    });
  }
  async signMessage(message, opts) {
    return this.runChecks().then(
      () => window.hanaWallet.stellar.signMessage({
        message,
        accountToSign: opts?.address
      })
    ).then((signedMessage) => ({ signedMessage, signerAddress: opts?.address })).catch((e) => {
      throw parseError(e);
    });
  }
  async getNetwork() {
    throw {
      code: -3,
      message: 'Hana does not support the "getNetwork" function'
    };
  }
}

const KLEVER_ID = "klever";
class KleverModule {
  constructor() {
    this.moduleType = ModuleType.HOT_WALLET;
    this.productId = KLEVER_ID;
    this.productName = "Klever Wallet";
    this.productUrl = "https://klever.io/";
    this.productIcon = "https://stellar.creit.tech/wallet-icons/klever.png";
  }
  async runChecks() {
    if (!await this.isAvailable()) {
      throw new Error("Klever Wallet is not installed");
    }
  }
  isAvailable() {
    return new Promise((resolve) => resolve(typeof window !== "undefined" && !!window.kleverWallet?.stellar));
  }
  async getAddress() {
    return this.runChecks().then(() => window.kleverWallet.stellar.getAddress()).catch((e) => {
      throw parseError(e);
    });
  }
  async signTransaction(xdr, opts) {
    return this.runChecks().then(() => window.kleverWallet.stellar.signTransaction(xdr, opts)).catch((e) => {
      throw parseError(e);
    });
  }
  async signAuthEntry(authEntry, opts) {
    return this.runChecks().then(() => window.kleverWallet.stellar.signAuthEntry(authEntry, opts)).catch((e) => {
      throw parseError(e);
    });
  }
  async signMessage(message, opts) {
    return this.runChecks().then(() => window.kleverWallet.stellar.signMessage(message, opts)).catch((e) => {
      throw parseError(e);
    });
  }
  async getNetwork() {
    return this.runChecks().then(() => window.kleverWallet.stellar.getNetwork()).catch((e) => {
      throw parseError(e);
    });
  }
}

function allowAllModules(opts) {
  const modules = [
    new AlbedoModule(),
    new FreighterModule(),
    new RabetModule(),
    new xBullModule(),
    new LobstrModule(),
    new HanaModule(),
    new HotWalletModule(),
    new KleverModule()
  ];
  return opts?.filterBy ? modules.filter(opts.filterBy) : modules;
}
function sep43Modules(opts) {
  const modules = [new FreighterModule(), new HotWalletModule()];
  return opts?.filterBy ? modules.filter(opts.filterBy) : modules;
}
function parseError(e) {
  return {
    code: e?.error?.code || e?.code || -1,
    message: e?.error?.message || e?.message || typeof e === "string" && e || "Unhandled error from the wallet",
    ext: e?.error?.ext || e?.ext
  };
}

exports.ALBEDO_ID = ALBEDO_ID;
exports.AlbedoModule = AlbedoModule;
exports.AlbedoNetwork = AlbedoNetwork;
exports.ButtonThemes = ButtonThemes;
exports.FREIGHTER_ID = FREIGHTER_ID;
exports.FreighterModule = FreighterModule;
exports.HANA_ID = HANA_ID;
exports.HOTWALLET_ID = HOTWALLET_ID;
exports.HanaModule = HanaModule;
exports.HotWalletModule = HotWalletModule;
exports.KLEVER_ID = KLEVER_ID;
exports.KleverModule = KleverModule;
exports.LOBSTR_ID = LOBSTR_ID;
exports.LobstrModule = LobstrModule;
exports.ModalThemes = ModalThemes;
exports.ModuleType = ModuleType;
exports.RABET_ID = RABET_ID;
exports.RabetModule = RabetModule;
exports.RabetNetwork = RabetNetwork;
exports.StellarWalletsKit = StellarWalletsKit;
exports.WalletNetwork = WalletNetwork;
exports.XBULL_ID = XBULL_ID;
exports.allowAllModules = allowAllModules;
exports.parseError = parseError;
exports.sep43Modules = sep43Modules;
exports.xBullModule = xBullModule;
//# sourceMappingURL=stellar-wallets-kit.cjs.js.map
