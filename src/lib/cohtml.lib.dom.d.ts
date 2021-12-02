interface ANGLEInstancedArrays {
    drawArraysInstancedANGLE(mode:number, first:number, count:number, primcount:number):void;
    drawElementsInstancedANGLE(mode:number, count:number, type:number, offset:number, primcount:number):void;
    vertexAttribDivisorANGLE(index:number, divisor:number):void;
}

interface Animation {
    currentTime:number;
    playbackRate:number;
    pause():void;
    play():void;
    playFromTo(playTime:number, pauseTime:number, callback?: Function):void;
    reverse():void;
	onfinish: ((this: any, event: Event) => any) | null;
}

interface Attr extends Node {
    readonly namespaceURI:string;
    readonly prefix:string;
    readonly localName:string;
    readonly name:string;
    value:string;
}

interface Blob {
    readonly size:number;
    readonly type:string;
    slice(start?: number, end?: number, contentType?: string):Blob;
}

interface BlobPropertyBag {
    type:string;
}

interface CanvasGradient {
    addColorStop(offset:number, color:string):void;
}

interface CanvasPattern {
}

interface CanvasRenderingContext2D {
    readonly canvas:HTMLCanvasElement;
    globalAlpha:number;
    globalCompositeOperation:string;
    fillStyle:string;
    strokeStyle:string;
    lineWidth:number;
    lineCap:string;
    lineJoin:string;
    miterLimit:number;
    font:string;
    textAlign:string;
    textBaseline:string;
    shadowOffsetX:number;
    shadowOffsetY:number;
    shadowBlur:number;
    shadowColor:string;
    enableFastLineSegmentDrawing:boolean;
    arc(x:number, y:number, radius:number, startAngle:number, endAngle:number, counterclockwise?: boolean):void;
    arcTo(x1:number, y1:number, x2:number, y2:number, radius:number):void;
    beginPath():void;
    bezierCurveTo(cp1x:number, cp1y:number, cp2x:number, cp2y:number, x:number, y:number):void;
    clearRect(x:number, y:number, w:number, h:number):void;
    clip():void;
    closePath():void;
    createLinearGradient(x0:number, y0:number, x1:number, y1:number):CanvasGradient;
    createRadialGradient(x0:number, y0:number, r0:number, x1:number, y1:number, r1:number):CanvasGradient;
    drawFocusIfNeeded(element:Element):void;
    fill():void;
    fillRect(x:number, y:number, w:number, h:number):void;
    fillText(text:string, x:number, y:number, maxWidth?: number):void;
    lineTo(x:number, y:number):void;
    moveTo(x:number, y:number):void;
    quadraticCurveTo(cpx:number, cpy:number, x:number, y:number):void;
    rect(x:number, y:number, w:number, h:number):void;
    restore():void;
    rotate(angle:number):void;
    save():void;
    scale(x:number, y:number):void;
    setTransform(a:number, b:number, c:number, d:number, e:number, f:number):void;
    stroke():void;
    strokeRect(x:number, y:number, w:number, h:number):void;
    strokeText(text:string, x:number, y:number, maxWidth?: number):void;
    transform(a:number, b:number, c:number, d:number, e:number, f:number):void;
    translate(x:number, y:number):void;
}

interface CaretPosition {
    readonly offsetNode:Node;
    readonly offset:number;
}

interface CharacterData extends Node {
    data:string;
    readonly length:number;
    readonly previousElementSibling:Element;
    readonly nextElementSibling:Element;
    appendData(data:string):void;
    deleteData(offset:number, count:number):void;
    insertData(offset:number, data:string):void;
    replaceData(offset:number, count:number, data:string):void;
    substringData(offset:number, count:number):string;
}

interface Chrome {
    readonly identity:ChromeIdentity;
    readonly instanceID:ChromeInstanceId;
    readonly tabs:ChromeTabs;
}

interface ChromeIdentity {
    getProfileUserInfo(callback:Function):void;
}

interface ChromeInstanceId {
    getID(callback:Function):void;
}

interface ChromeTabs {
    create(properties:any, callback:Function):void;
    getCurrent(callback:Function):void;
    query(queryInfo:any, callback:Function):void;
    reload(tabId:any, reloadProperties:any, callback:Function):void;
    update(tabId:any, updateProperties:any, callback:Function):void;
}

interface Comment extends CharacterData {
    comment(data?: string):Comment;
}

interface Console {
    assert(...optionalParams: any[]):void;
    debug(...optionalParams: any[]):void;
    error(...optionalParams: any[]):void;
    info(...optionalParams: any[]):void;
    log(...optionalParams: any[]):void;
    time(...optionalParams: any[]):void;
    timeEnd(...optionalParams: any[]):void;
    warn(...optionalParams: any[]):void;
}

interface CSSRuleList {
    readonly length:number;
}

interface CSSStyleDeclaration {
    cssText:string;
    borderBottomWidth:string;
    borderLeftWidth:string;
    borderRightWidth:string;
    borderTopWidth:string;
    borderWidth:string;
    borderBottomColor:string;
    borderLeftColor:string;
    borderRightColor:string;
    borderTopColor:string;
    borderColor:string;
    borderBottomStyle:string;
    borderLeftStyle:string;
    borderRightStyle:string;
    borderTopStyle:string;
    borderStyle:string;
    borderBottom:string;
    borderLeft:string;
    borderRight:string;
    borderTop:string;
    border:string;
    display:string;
    position:string;
    color:string;
    backgroundColor:string;
    cursor:string;
    marginBottom:string;
    marginLeft:string;
    marginRight:string;
    marginTop:string;
    margin:string;
    paddingBottom:string;
    paddingLeft:string;
    paddingRight:string;
    paddingTop:string;
    padding:string;
    clipPath:string;
    top:string;
    left:string;
    bottom:string;
    right:string;
    topPX:number;
    leftPX:number;
    bottomPX:number;
    rightPX:number;
    topVW:number;
    leftVW:number;
    bottomVW:number;
    rightVW:number;
    topVH:number;
    leftVH:number;
    bottomVH:number;
    rightVH:number;
    width:string;
    height:string;
    minWidth:string;
    minHeight:string;
    maxWidth:string;
    maxHeight:string;
    widthPX:number;
    heightPX:number;
    minWidthPX:number;
    minHeightPX:number;
    maxWidthPX:number;
    maxHeightPX:number;
    widthVW:number;
    heightVW:number;
    minWidthVW:number;
    minHeightVW:number;
    maxWidthVW:number;
    maxHeightVW:number;
    widthVH:number;
    heightVH:number;
    minWidthVH:number;
    minHeightVH:number;
    maxWidthVH:number;
    maxHeightVH:number;
    backgroundSize:string;
    backgroundImage:string;
    backgroundPositionX:string;
    backgroundPositionY:string;
    backgroundPosition:string;
    backgroundRepeat:string;
    borderTopLeftRadius:string;
    borderTopRightRadius:string;
    borderBottomLeftRadius:string;
    borderBottomRightRadius:string;
    borderRadius:string;
    borderImageSource:string;
    borderImageSlice:string;
    borderImageWidth:string;
    borderImageOutset:string;
    borderImageRepeat:string;
    borderImage:string;
    boxShadow:string;
    textShadow:string;
    textStrokeWidth:string;
    textStrokeColor:string;
    textStroke:string;
    textAlign:string;
    letterSpacing:string;
    lineHeight:string;
    filter:string;
    flexDirection:string;
    justifyContent:string;
    alignSelf:string;
    alignItems:string;
    alignContent:string;
    flexWrap:string;
    flex:string;
    zIndex:string;
    opacity:string;
    visibility:string;
    font:string;
    fontFamily:string;
    fontSize:string;
    fontWeight:string;
    fontStyle:string;
    fontFitMode:string;
    textTransform:string;
    overflowWrap:string;
    whiteSpace:string;
    textOverflow:string;
    cohSdf:string;
    transform:string;
    transformOrigin:string;
    animation:string;
    animationName:string;
    animationDuration:string;
    animationIterationCount:string;
    animationTimingFunction:string;
    animationPlayState:string;
    animationFillMode:string;
    animationDelay:string;
    animationDirection:string;
    contain:string;
    content:string;
    overflowX:string;
    overflowY:string;
    overflow:string;
    maskPosition:string;
    maskSize:string;
    background:string;
    maskImage:string;
    maskMode:string;
    maskClip:string;
    maskRepeat:string;
    mask:string;
    perspective:string;
    perspectiveOrigin:string;
    isolation:string;
    mixBlendMode:string;
    transitionProperty:string;
    transitionDuration:string;
    transitionDelay:string;
    transitionTimingFunction:string;
    transition:string;
    userSelect:string;
    pointerEvents:string;
    cohCustomEffectName:string;
    cohCustomEffectFloatParam1:string;
    cohCustomEffectFloatParam2:string;
    cohCustomEffectFloatParam3:string;
    cohCustomEffectFloatParam4:string;
    cohCustomEffectStringParam1:string;
    cohCustomEffectStringParam2:string;
    cohCompositionId:string;
    getPropertyValue(prop:string):string;
    setProperty(propName:string, value?: string, priority?: string):void;
}

interface CSSStyleSheet extends StyleSheet {
    readonly cssRules:CSSRuleList;
    deleteRule(index:number):void;
    insertRule(rule:string, index?: number):number;
}

interface CustomElementRegistry {
    define(name:string, constructor:Function, options?: ElementDefinitionOptions):void;
}

interface CustomEvent extends Event {
    readonly detail:any;
    customEvent(type:string, eventInitDict?: CustomEventInit):CustomEvent;
    initCustomEvent(type:string, bubbles?: boolean, cancelable?: boolean, detail?: any):void;
}

interface CustomEventInit<T = any> extends EventInit {
	detail?: T;
}

declare var CustomEvent: {
	prototype: CustomEvent;
	new<T>(typeArg: string, eventInitDict?: CustomEventInit): CustomEvent;
};
interface Document extends Node {
    readonly uRL:string;
    readonly documentURI:string;
    readonly origin:string;
    readonly compatMode:string;
    readonly characterSet:string;
    readonly charset:string;
    readonly inputEncoding:string;
    readonly contentType:string;
    readonly doctype:DocumentType;
    readonly body:Element;
    readonly documentElement:Element;
    readonly defaultView:Window;
    readonly head:Element;
    readonly readyState:string;
    readonly activeElement:Element;
    readonly currentScript:HTMLScriptElement;
    readonly styleSheets:StyleSheetList;
    caretPositionFromPoint(x:number, y:number):CaretPosition;
    createAttribute(localName:string):Attr;
    createAttributeNS(namespace:string, qualifiedName:string):Attr;
    createComment(data:string):Comment;
    createDocumentFragment():DocumentFragment;
    createElement(tagName:string):Node;
    createElementNS(ns:string, tagName:string):Node;
    createEvent(eventType:string):Event;
    createNodeIterator(root:Node, whatToShow?: number, filter?: NodeFilter):NodeIterator;
    createTextNode(data?: string):Node;
    elementFromPoint(x:number, y:number):Element;
    elementsFromPoint(x:number, y:number):Array<Element>;
    getElementById(elementId:string):Element;
    getElementsByClassName(classNames:string):NodeList;
    getElementsByName(elementName?: string):NodeList;
    getElementsByTagName(localName:string):NodeList;
    getSelection():Selection;
    hasFocus():boolean;
    importNode(node:Node, deep?: boolean):Node;
    querySelector(selectors:string):Element;
    querySelectorAll(selectors:string):NodeList;
    registerElement(type:string, options?: ElementRegistrationOptions):Function;
    write(markup:string):void;
	onabort: ((this: any, event: Event) => any) | null;
	onblur: ((this: any, event: Event) => any) | null;
	onclick: ((this: any, event: Event) => any) | null;
	ondblclick: ((this: any, event: Event) => any) | null;
	onerror: ((this: any, event: Event) => any) | null;
	onfocus: ((this: any, event: Event) => any) | null;
	onkeydown: ((this: any, event: Event) => any) | null;
	onkeypress: ((this: any, event: Event) => any) | null;
	onkeyup: ((this: any, event: Event) => any) | null;
	onload: ((this: any, event: Event) => any) | null;
	onmousedown: ((this: any, event: Event) => any) | null;
	onmouseover: ((this: any, event: Event) => any) | null;
	onmouseout: ((this: any, event: Event) => any) | null;
	onmouseenter: ((this: any, event: Event) => any) | null;
	onmouseleave: ((this: any, event: Event) => any) | null;
	onmousemove: ((this: any, event: Event) => any) | null;
	onmouseup: ((this: any, event: Event) => any) | null;
	oninput: ((this: any, event: Event) => any) | null;
	onscroll: ((this: any, event: Event) => any) | null;
	onwheel: ((this: any, event: Event) => any) | null;
	ontouchstart: ((this: any, event: Event) => any) | null;
	ontouchend: ((this: any, event: Event) => any) | null;
	ontouchmove: ((this: any, event: Event) => any) | null;
}

interface DocumentFragment extends Node {
    documentFragment():DocumentFragment;
}

interface DocumentType extends Node {
    readonly name:string;
    readonly publicId:string;
    readonly systemId:string;
}

interface DOMRect extends DOMRectReadOnly {
    x:number;
    y:number;
    width:number;
    height:number;
}

interface DOMRectReadOnly {
    readonly x:number;
    readonly y:number;
    readonly width:number;
    readonly height:number;
    readonly top:number;
    readonly right:number;
    readonly bottom:number;
    readonly left:number;
}

interface DOMStringMap {
    itemDeleter(name:string):void;
    itemGetter(name:string):string;
    itemSetter(name:string, value:string):void;
}

interface DOMTokenList {
    readonly length:number;
    value:string;
    add(tokens:string):void;
    contains(token:string):boolean;
    item(index:number):string;
    remove(tokens:string):void;
    replace(token:string, newToken:string):void;
    supports(token:string):boolean;
    toggle(token:string, force?: boolean):boolean;
}

interface Element extends Node {
    readonly tagName:string;
    readonly prefix:string;
    readonly namespaceURI:string;
    readonly localName:string;
    slot:string;
    readonly style:CSSStyleDeclaration;
    id:string;
    readonly attributes:NamedNodeMap;
    readonly children:NodeList;
    readonly firstElementChild:Element;
    readonly lastElementChild:Element;
    readonly previousElementSibling:Element;
    readonly nextElementSibling:Element;
    readonly childElementCount:number;
    scrollLeft:number;
    scrollLeftVW:number;
    scrollLeftVH:number;
    scrollTop:number;
    scrollTopVW:number;
    scrollTopVH:number;
    readonly scrollWidth:number;
    readonly scrollWidthVW:number;
    readonly scrollWidthVH:number;
    readonly scrollHeight:number;
    readonly scrollHeightVW:number;
    readonly scrollHeightVH:number;
    className:string;
    readonly classList:DOMTokenList;
    innerHTML:string;
    blur():void;
    closest(selectors:string):Element;
    focus():void;
    getAnimations(options?: GetAnimationsOptions):Array<Animation>;
    getAttribute(qualifiedName:string):string;
    getAttributeNS(ns:string, qualifiedName:string):string;
    getAttributeNames():Array<string>;
    getAttributeNode(qualifiedName:string):Attr;
    getAttributeNodeNS(namespace:string, localName:string):Attr;
    getBackgroundSVGAnimation():MorphAnimation;
    getBorderSVGAnimation():MorphAnimation;
    getBoundingClientRect():DOMRect;
    getElementsByClassName(classNames:string):HTMLCollection;
    getElementsByTagName(qualifiedName:string):HTMLCollection;
    getElementsByTagNameNS(namespace:string, localName:string):HTMLCollection;
    getMaskSVGAnimation():MorphAnimation;
    hasAttribute(qualifiedName:string):boolean;
    hasAttributeNS(ns:string, qualifiedName:string):boolean;
    hasAttributes():boolean;
    insertAdjacentElement(where:string, element:Element):Element;
    insertAdjacentHTML(position:string, text:string):void;
    insertAdjacentText(where:string, data:string):void;
    matches(selectors:string):boolean;
    querySelector(selectors:string):Element;
    querySelectorAll(selectors:string):NodeList;
    removeAttribute(qualifiedName:string):void;
    removeAttributeNS(ns:string, qualifiedName:string):void;
    removeAttributeNode(attr:Attr):Attr;
    setAttribute(qualifiedName:string, value:string):void;
    setAttributeNS(ns:string, qualifiedName:string, value:string):void;
    setAttributeNode(attr:Attr):Attr;
    setAttributeNodeNS(attr:Attr):Attr;
	onfocusin: ((this: any, event: Event) => any) | null;
	onfocusout: ((this: any, event: Event) => any) | null;
	onabort: ((this: any, event: Event) => any) | null;
	onblur: ((this: any, event: Event) => any) | null;
	onclick: ((this: any, event: Event) => any) | null;
	ondblclick: ((this: any, event: Event) => any) | null;
	onerror: ((this: any, event: Event) => any) | null;
	onfocus: ((this: any, event: Event) => any) | null;
	onkeydown: ((this: any, event: Event) => any) | null;
	onkeypress: ((this: any, event: Event) => any) | null;
	onkeyup: ((this: any, event: Event) => any) | null;
	onload: ((this: any, event: Event) => any) | null;
	onmousedown: ((this: any, event: Event) => any) | null;
	onmouseover: ((this: any, event: Event) => any) | null;
	onmouseout: ((this: any, event: Event) => any) | null;
	onmouseenter: ((this: any, event: Event) => any) | null;
	onmouseleave: ((this: any, event: Event) => any) | null;
	onmousemove: ((this: any, event: Event) => any) | null;
	onmouseup: ((this: any, event: Event) => any) | null;
	oninput: ((this: any, event: Event) => any) | null;
	onchange: ((this: any, event: Event) => any) | null;
	onscroll: ((this: any, event: Event) => any) | null;
	onwheel: ((this: any, event: Event) => any) | null;
	ontouchstart: ((this: any, event: Event) => any) | null;
	ontouchend: ((this: any, event: Event) => any) | null;
	ontouchmove: ((this: any, event: Event) => any) | null;
	onanimationend: ((this: any, event: Event) => any) | null;
	ontransitionend: ((this: any, event: Event) => any) | null;
}

interface ElementDefinitionOptions {
    readonly extends:string;
}

interface ElementRegistrationOptions {
    readonly prototype:object;
    readonly extends:string;
}

interface Event {
    readonly type:string;
    readonly target:EventTarget;
    readonly currentTarget:EventTarget;
    readonly eventPhase:number;
    readonly bubbles:boolean;
    readonly cancelable:boolean;
    readonly defaultPrevented:boolean;
    event(type:string, initEvent?: EventInit):Event;
    initEvent(eventTypeArg?: string, canBubbleArg?: boolean, cancelableArg?: boolean):void;
    preventDefault():void;
    stopImmediatePropagation():void;
    stopPropagation():void;
}

interface EventInit {
	bubbles?: boolean;
	cancelable?: boolean;
	composed?: boolean;
}

declare var Event: {
	prototype: Event;
	new(type: string, eventInitDict?: EventInit): Event;
	readonly AT_TARGET: number;
	readonly BUBBLING_PHASE: number;
	readonly CAPTURING_PHASE: number;
	readonly NONE: number;
};
interface EventListener {
    handleEvent(event:Event):void;
}

interface EventTarget {
    addEventListener(type:string, listener:Function, useCapture?: boolean):void;
    dispatchEvent(event:Event):boolean;
    removeEventListener(type:string, listener:Function, useCapture?: boolean):void;
}

interface FocusEvent extends UIEvent {
    readonly relatedTarget:EventTarget;
    focusEvent(type:string, eventInitDict?: FocusEventInit):FocusEvent;
}

interface FocusEventInit extends UIEventInit {
	relatedTarget?: EventTarget | null;
}

declare var FocusEvent: {
	prototype: FocusEvent;
	new(type: string, eventInitDict?: FocusEventInit): FocusEvent;
};
interface Gamepad {
    readonly id:string;
    readonly index:number;
    readonly connected:boolean;
    readonly timestamp:number;
    readonly mapping:string;
    readonly axes:Array<number>;
    readonly buttons:Array<GamepadButton>;
    readonly displayId:number;
    readonly hand:any;
    readonly pose:GamepadPose;
}

interface GamepadButton {
    readonly pressed:boolean;
    readonly touched:boolean;
    readonly value:number;
}

interface GamepadEvent extends UIEvent {
    readonly gamepad:Gamepad;
    gamepadEvent(type:string, eventInitDict?: GamepadEventInit):GamepadEvent;
}

interface GamepadEventInit extends EventInit {
	gamepad: Gamepad;
}

declare var GamepadEvent: {
	prototype: GamepadEvent;
	new(type: string, eventInitDict: GamepadEventInit): GamepadEvent;
};
interface GamepadPose {
    readonly hasOrientation:boolean;
    readonly hasPosition:boolean;
    readonly position:Array<number>;
    readonly linearVelocity:Array<number>;
    readonly linearAcceleration:Array<number>;
    readonly orientation:Array<number>;
    readonly angularVelocity:Array<number>;
    readonly angularAcceleration:Array<number>;
}

interface GetAnimationsOptions {
    readonly forceStylesResolving:boolean;
}

interface History {
    readonly index:number;
    readonly length:number;
    readonly state:any;
    back():void;
    forward():void;
    go(delta?: number):void;
    pushState(data:any, title:string, url?: string):void;
    replaceState(data:any, title:string, url?: string):void;
}

interface HTMLBodyElement extends HTMLElement {
}

interface HTMLButtonElement extends HTMLElement {
}

interface HTMLCanvasElement extends HTMLElement {
    width:number;
    height:number;
    getContext(type:string, attr?: WebGLContextAttributes):any;
    getContext2D():CanvasRenderingContext2D;
    getContextWebGL(attr?: WebGLContextAttributes):WebGLRenderingContext;
}

interface HTMLCollection extends NodeList {
}

interface HTMLDivElement extends HTMLElement {
}

interface HTMLDocument extends Document {
}

interface HTMLElement extends Element {
    readonly dataset:DOMStringMap;
    readonly offsetParent:Element;
    readonly offsetTop:number;
    readonly offsetLeft:number;
    readonly offsetWidth:number;
    readonly offsetHeight:number;
    hTMLElement():HTMLElement;
}

interface HTMLHeadElement extends HTMLElement {
}

interface HTMLHtmlElement extends HTMLElement {
}

interface HTMLIFrameElement extends HTMLElement {
}

interface HTMLImageElement extends HTMLElement {
    src:string;
    width:number;
    height:number;
    hTMLImageElement(width?: number, height?: number):HTMLImageElement;
    getSrcSVGAnimation():MorphAnimation;
}

interface HTMLInputElement extends HTMLElement {
    value:string;
    type:string;
    maxLength:number;
    minLength:number;
    size:number;
    selectionStart:number;
    selectionEnd:number;
    selectionDirection:string;
    select():void;
}

interface HTMLLinkElement extends HTMLElement {
    href:string;
    rel:string;
    type:string;
}

interface HTMLMediaElement extends HTMLElement {
    cohFastSeek:boolean;
    readonly error:MediaError;
    src:string;
    srcObject:MediaSource;
    readonly currentSrc:string;
    crossOrigin:string;
    readonly networkState:number;
    preload:string;
    readonly buffered:TimeRanges;
    readonly readyState:number;
    readonly seeking:boolean;
    currentTime:number;
    readonly duration:number;
    readonly paused:boolean;
    defaultPlaybackRate:number;
    playbackRate:number;
    readonly played:TimeRanges;
    readonly seekable:TimeRanges;
    readonly ended:boolean;
    autoplay:boolean;
    loop:boolean;
    volume:number;
    muted:boolean;
    canPlayType(type:string):object;
    cohGetKeyframeTimestamps():Array<number>;
    cohPrebufferKeyframe(timestamp:number):number;
    load():void;
    pause():void;
    play():void;
	ondurationchange: ((this: any, event: Event) => any) | null;
	onemptied: ((this: any, event: Event) => any) | null;
	onended: ((this: any, event: Event) => any) | null;
	onerror: ((this: any, event: Event) => any) | null;
	onloadstart: ((this: any, event: Event) => any) | null;
	onseeked: ((this: any, event: Event) => any) | null;
	onseeking: ((this: any, event: Event) => any) | null;
	ontimeupdate: ((this: any, event: Event) => any) | null;
	onvolumechange: ((this: any, event: Event) => any) | null;
	onresize: ((this: any, event: Event) => any) | null;
}

interface HTMLParagraphElement extends HTMLElement {
}

interface HTMLPreElement extends HTMLElement {
}

interface HTMLScriptElement extends HTMLElement {
    async:boolean;
    defer:boolean;
    src:string;
    text:string;
    type:string;
}

interface HTMLSourceElement extends HTMLElement {
    src:string;
    type:string;
    media:string;
}

interface HTMLSpanElement extends HTMLElement {
}

interface HTMLStyleElement extends HTMLElement {
}

interface HTMLTextAreaElement extends HTMLElement {
    value:string;
    maxLength:number;
    minLength:number;
    cols:number;
    rows:number;
    readonly textLength:number;
    wrap:string;
    selectionStart:number;
    selectionEnd:number;
    selectionDirection:string;
    select():void;
}

interface HTMLTitleElement extends HTMLElement {
}

interface HTMLUnknownElement extends HTMLElement {
}

interface HTMLVideoElement extends HTMLMediaElement {
    width:number;
    height:number;
    readonly videoWidth:number;
    readonly videoHeight:number;
    poster:string;
}

interface KeyboardEvent extends UIEvent {
    readonly charCode:number;
    readonly keyCode:number;
    readonly which:number;
    readonly location:number;
    readonly repeat:boolean;
    readonly ctrlKey:boolean;
    readonly shiftKey:boolean;
    readonly altKey:boolean;
    readonly metaKey:boolean;
    keyboardEvent(type:string, eventInitDict?: KeyboardEventInit):KeyboardEvent;
    getModifierState(keyIdentifier:string):boolean;
    initKeyboardEvent(typeArg?: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: Window, keyIdentifier?: string, locationArg?: number, ctrlKey?: boolean, altKey?: boolean, shiftKey?: boolean, metaKey?: boolean, altGraphKey?: boolean):void;
}

interface KeyboardEventInit extends EventModifierInit {
	code?: string;
	isComposing?: boolean;
	key?: string;
	location?: number;
	repeat?: boolean;
}

declare var KeyboardEvent: {
	prototype: KeyboardEvent;
	new(type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
	readonly DOM_KEY_LOCATION_LEFT: number;
	readonly DOM_KEY_LOCATION_NUMPAD: number;
	readonly DOM_KEY_LOCATION_RIGHT: number;
	readonly DOM_KEY_LOCATION_STANDARD: number;
};
interface Location {
    href:string;
    readonly origin:string;
    protocol:string;
    host:string;
    hostname:string;
    port:string;
    pathname:string;
    search:string;
    hash:string;
    readonly ancestorOrigins:Array<string>;
    assign(url:string):void;
    reload(forceReload?: boolean):void;
    replace(url:string):void;
}

interface MediaError {
    readonly code:number;
    readonly message:string;
}

interface MediaSource extends EventTarget {
    readonly sourceBuffers:SourceBufferList;
    readonly activeSourceBuffers:SourceBufferList;
    readonly readyState:string;
    duration:number;
    mediaSource():MediaSource;
    addSourceBuffer(type:string):SourceBuffer;
    endOfStream(error?: string):void;
    isTypeSupported(type:string):boolean;
    removeSourceBuffer(buffer:SourceBuffer):void;
}

interface MessageEvent extends Event {
    readonly data:any;
    readonly origin:string;
    readonly lastEventId:string;
}

interface MorphAnimation {
    currentTime:number;
    playbackRate:number;
    pause():void;
    play():void;
    playFromTo(playTime:number, pauseTime:number, callback?: Function):void;
    reverse():void;
	onfinish: ((this: any, event: Event) => any) | null;
}

interface MouseEvent extends UIEvent {
    readonly screenX:number;
    readonly screenY:number;
    readonly clientX:number;
    readonly clientY:number;
    readonly x:number;
    readonly y:number;
    readonly ctrlKey:boolean;
    readonly shiftKey:boolean;
    readonly altKey:boolean;
    readonly metaKey:boolean;
    readonly button:number;
    readonly buttons:number;
    readonly deltaX:number;
    readonly deltaY:number;
    readonly deltaMode:number;
    readonly relatedTarget:EventTarget;
    mouseEvent(type:string, eventInitDict?: MouseEventInit):MouseEvent;
    getModifierState(keyIdentifier:string):boolean;
    initMouseEvent(typeArg?: string, canBubbleArg?: boolean, cancelableArg?: boolean, viewArg?: Window, detailArg?: number, screenXArg?: number, screenYArg?: number, clientXArg?: number, clientYArg?: number, ctrlKeyArg?: boolean, altKeyArg?: boolean, shiftKeyArg?: boolean, metaKeyArg?: boolean, buttonArg?: number, relatedTargetArg?: Node):void;
}

interface MouseEventInit extends EventModifierInit {
	button?: number;
	buttons?: number;
	clientX?: number;
	clientY?: number;
	relatedTarget?: EventTarget | null;
	screenX?: number;
	screenY?: number;
}

declare var MouseEvent: {
	prototype: MouseEvent;
	new(type: string, eventInitDict?: MouseEventInit): MouseEvent;
};
interface MutationObserver {
    mutationObserver(callback:Function):MutationObserver;
    disconnect():void;
    observe(target:Node, options?: MutationObserverInit):void;
    takeRecords():Array<MutationRecord>;
}

interface MutationObserverInit {
    childList:boolean;
    attributes:boolean;
    characterData:boolean;
    subtree:boolean;
    attributeOldValue:boolean;
    characterDataOldValue:boolean;
    attributeFilter:Array<string>;
}

interface MutationRecord {
    readonly type:string;
    readonly target:Node;
    readonly addedNodes:NodeList;
    readonly removedNodes:NodeList;
    readonly previousSibling:Node;
    readonly nextSibling:Node;
    readonly attributeName:string;
    readonly attributeNamespace:string;
    readonly oldValue:string;
}

interface NamedNodeMap {
    readonly length:number;
    item(index:number):Attr;
}

interface Navigator {
    readonly userAgent:string;
    getGamepads():Array<Gamepad>;
    getVRDisplays():Promise<any>;
}

interface Node extends EventTarget {
    readonly nodeName:string;
    nodeValue:string;
    textContent:string;
    readonly nodeType:number;
    readonly parentNode:Node;
    readonly parentElement:Element;
    readonly childNodes:NodeList;
    readonly firstChild:Node;
    readonly lastChild:Node;
    readonly previousSibling:Node;
    readonly nextSibling:Node;
    readonly ownerDocument:Document;
    readonly baseURI:string;
    readonly isConnected:boolean;
    appendChild(newChild:Node):Node;
    cloneNode(deep?: boolean):Node;
    compareDocumentPosition(other:Node):number;
    contains(other:Node):boolean;
    getRootNode(options?: any):Node;
    hasChildNodes():boolean;
    insertBefore(node:Node, referenceNode:Node):Node;
    isDefaultNamespace(namespace:string):boolean;
    isEqualNode(otherNode:Node):boolean;
    isSameNode(otherNode:Node):boolean;
    lookupNamespaceURI(prefix:string):string;
    lookupPrefix(namespace:string):string;
    normalize():void;
    removeChild(oldChild:Node):Node;
    replaceChild(newChild:Node, oldChild:Node):Node;
}

interface NodeFilter {
    acceptNode(node:Node):number;
}

interface NodeIterator {
    readonly root:Node;
    readonly referenceNode:Node;
    readonly pointerBeforeReferenceNode:boolean;
    readonly whatToShow:number;
    readonly filter:NodeFilter;
    nextNode():Node;
    previousNode():Node;
}

interface NodeList {
    readonly length:number;
    item(index:number):Node;
}

interface OESElementIndexUint {
}

interface OESStandardDerivatives {
}

interface Performance extends EventTarget {
    now():number;
}

interface PopStateEvent extends Event {
    readonly state:any;
    popStateEvent(type:string, eventInitDict?: EventInit):PopStateEvent;
}

interface PopStateEventInit extends EventInit {
	state?: any;
}

declare var PopStateEvent: {
	prototype: PopStateEvent;
	new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
};
interface ProgressEvent extends Event {
    readonly lengthComputable:boolean;
    readonly loaded:number;
    readonly total:number;
}

interface Screen {
    readonly availWidth:number;
    readonly availHeight:number;
    readonly width:number;
    readonly height:number;
    readonly colorDepth:number;
    readonly pixelDepth:number;
}

interface Selection {
    readonly anchorNode:Node;
    readonly anchorOffset:number;
    readonly focusNode:Node;
    readonly focusOffset:number;
    empty():void;
    removeAllRanges():void;
    setBaseAndExtent(anchorNode:Node, anchorOffset:number, focusNode:Node, focusOffset:number):void;
    toString():string;
}

interface SourceBuffer extends EventTarget {
    mode:string;
    readonly updating:boolean;
    readonly buffered:TimeRanges;
    timestampOffset:number;
    appendWindowStart:number;
    appendWindowEnd:number;
    abort():void;
    remove(start:number, end:number):void;
}

interface SourceBufferList extends EventTarget {
    readonly length:number;
    item(index:number):SourceBuffer;
}

interface Storage {
    readonly length:number;
    clear():void;
    getItem(key:string):string;
    key(index:number):string;
    removeItem(key:string):void;
    setItem(key:string, value:string):void;
}

interface StyleSheet {
    readonly ownerNode:Element;
}

interface StyleSheetList {
    readonly length:number;
    item(index:number):CSSStyleSheet;
}

interface SVGElement extends Element {
}

interface Tab {
    readonly id:number;
}

interface Text extends CharacterData {
    readonly wholeText:string;
    text(data?: string):Text;
    splitText(offset:number):Text;
}

interface TimeRanges {
    readonly length:number;
    end(index:number):number;
    start(index:number):number;
}

interface Touch {
    readonly identifier:number;
    readonly target:Node;
    readonly screenX:number;
    readonly screenY:number;
    readonly clientX:number;
    readonly clientY:number;
    readonly pageX:number;
    readonly pageY:number;
}

interface TouchEvent extends UIEvent {
    readonly touches:TouchList;
    readonly ctrlKey:boolean;
    readonly shiftKey:boolean;
    readonly altKey:boolean;
    readonly metaKey:boolean;
    touchEvent(type:string, eventInitDict?: TouchEventInit):TouchEvent;
}

interface TouchEventInit extends EventModifierInit {}

declare var TouchEvent: {
	prototype: TouchEvent;
	new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
};
interface TouchList {
    readonly length:number;
    item(index:number):Touch;
}

interface UIEvent extends Event {
    uIEvent(type:string, initEvent?: UIEventInit):UIEvent;
    initUIEvent(type?: string, canBubble?: boolean, cancelable?: boolean, view?: Window, detail?: number):void;
}

interface UIEventInit extends EventInit {
	detail?: number;
	view?: Window | null;
}

declare var UIEvent: {
	prototype: UIEvent;
	new(type: string, eventInitDict?: UIEventInit): UIEvent;
};

interface EventModifierInit extends UIEventInit {
	altKey?: boolean;
	ctrlKey?: boolean;
	metaKey?: boolean;
	modifierAltGraph?: boolean;
	modifierCapsLock?: boolean;
	modifierFn?: boolean;
	modifierFnLock?: boolean;
	modifierHyper?: boolean;
	modifierNumLock?: boolean;
	modifierScrollLock?: boolean;
	modifierSuper?: boolean;
	modifierSymbol?: boolean;
	modifierSymbolLock?: boolean;
	shiftKey?: boolean;
}
interface URL {
    uRL():void;
    revokeObjectURL(url:string):void;
}

interface VirtualList {
    startIndex:number;
    pageSize:number;
}

interface WebGLActiveInfo {
    readonly size:any;
    readonly type:any;
    readonly name:string;
}

interface WebGLBuffer extends WebGLObject {
}

interface WebGLContextAttributes {
    alpha:boolean;
    depth:boolean;
    stencil:boolean;
    antialias:boolean;
    premultipliedAlpha:boolean;
    preserveDrawingBuffer:boolean;
    preferLowPowerToHighPerformance:boolean;
    failIfMajorPerformanceCaveat:boolean;
}

interface WebGLFramebuffer extends WebGLObject {
}

interface WebGLObject {
}

interface WebGLProgram extends WebGLObject {
}

interface WebGLRenderbuffer extends WebGLObject {
}

interface WebGLRenderingContext extends WebGLRenderingContextBase {
}

interface WebGLRenderingContextBase {
    readonly canvas:HTMLCanvasElement;
    activeTexture(texture:number):void;
    attachShader(program:WebGLProgram, shader:WebGLShader):void;
    bindAttribLocation(program:WebGLProgram, index:number, name:string):void;
    bindBuffer(target:number, buffer:WebGLBuffer):void;
    bindFramebuffer(target:number, framebuffer:WebGLFramebuffer):void;
    bindRenderbuffer(target:number, renderbuffer:WebGLRenderbuffer):void;
    bindTexture(target:number, texture:WebGLTexture):void;
    blendColor(red:number, green:number, blue:number, alpha:number):void;
    blendEquation(mode:number):void;
    blendEquationSeparate(modeRGB:number, modeAlpha:number):void;
    blendFunc(sfactor:number, dfactor:number):void;
    blendFuncSeparate(srcRGB:number, dstRGB:number, srcAlpha:number, dstAlpha:number):void;
    checkFramebufferStatus(target:number):number;
    clear(mask:number):void;
    clearColor(red:number, green:number, blue:number, alpha:number):void;
    clearDepth(depth:number):void;
    clearStencil(s:number):void;
    colorMask(red:boolean, green:boolean, blue:boolean, alpha:boolean):void;
    compileShader(shader:WebGLShader):void;
    copyTexImage2D(target:number, level:number, internalformat:number, x:number, y:number, width:number, height:number, border:number):void;
    copyTexSubImage2D(target:number, level:number, xoffset:number, yoffset:number, x:number, y:number, width:number, height:number):void;
    createBuffer():WebGLBuffer;
    createFramebuffer():WebGLFramebuffer;
    createProgram():WebGLProgram;
    createRenderbuffer():WebGLRenderbuffer;
    createShader(type:number):WebGLShader;
    createTexture():WebGLTexture;
    cullFace(mode:number):void;
    deleteBuffer(buffer:WebGLBuffer):void;
    deleteFramebuffer(framebuffer:WebGLFramebuffer):void;
    deleteProgram(program:WebGLProgram):void;
    deleteRenderbuffer(renderbuffer:WebGLRenderbuffer):void;
    deleteShader(shader:WebGLShader):void;
    deleteTexture(texture:WebGLTexture):void;
    depthFunc(func:number):void;
    depthMask(flag:boolean):void;
    depthRange(zNear:number, zFar:number):void;
    disable(cap:number):void;
    disableVertexAttribArray(index:number):void;
    drawArrays(mode:number, first:number, count:number):void;
    drawElements(mode:number, count:number, type:number, offset:number):void;
    enable(cap:number):void;
    enableVertexAttribArray(index:number):void;
    framebufferRenderbuffer(target:number, attachment:number, renderbuffertarget:number, renderbuffer:WebGLRenderbuffer):void;
    framebufferTexture2D(target:number, attachment:number, textarget:number, texture:WebGLTexture, level:number):void;
    frontFace(mode:number):void;
    generateMipmap(target:number):void;
    getActiveAttrib(program:WebGLProgram, index:number):WebGLActiveInfo;
    getActiveUniform(program:WebGLProgram, index:number):WebGLActiveInfo;
    getAttribLocation(program:WebGLProgram, name:string):number;
    getBufferParameter(target:number, pname:number):any;
    getBufferParameterGLenum(target:number, pname:number):number;
    getBufferParameterGLint(target:number, pname:number):number;
    getContextAttributes():WebGLContextAttributes;
    getError():number;
    getExtension(name:string):object;
    getMaxCubeMapTextureSize():number;
    getMaxFragmentUniformVectors():number;
    getMaxTextureImageUnits():number;
    getMaxTextureSize():number;
    getMaxVaryingVectors():number;
    getMaxVertexAttribs():number;
    getMaxVertexTextureImageUnits():number;
    getMaxVertexUniformVectors():number;
    getParameter(pname:number):any;
    getParameterWebGLFramebuffer():WebGLFramebuffer;
    getProgramInfoLog(program:WebGLProgram):string;
    getProgramParameter(program:WebGLProgram, pname:number):number;
    getShaderInfoLog(shader:WebGLShader):string;
    getShaderParameter(shader:WebGLShader, pname:number):boolean;
    getSupportedExtensions():Array<string>;
    getUniformLocation(program:WebGLProgram, name:string):WebGLUniformLocation;
    isFramebuffer(framebuffer:WebGLFramebuffer):boolean;
    isRenderbuffer(renderbuffer:WebGLRenderbuffer):boolean;
    isTexture(texture:WebGLTexture):boolean;
    lineWidth(width:number):void;
    linkProgram(program:WebGLProgram):void;
    pixelStorei(pname:number, param:number):void;
    polygonOffset(factor:number, units:number):void;
    readPixels(x:number, y:number, width:number, height:number, format:number, type:number, pixels:ArrayBufferView):void;
    renderbufferStorage(target:number, internalformat:number, width:number, height:number):void;
    scissor(x:number, y:number, width:number, height:number):void;
    shaderSource(shader:WebGLShader, source:string):void;
    stencilFunc(func:number, ref:number, mask:number):void;
    stencilFuncSeparate(face:number, func:number, ref:number, mask:number):void;
    stencilMask(mask:number):void;
    stencilMaskSeparate(face:number, mask:number):void;
    stencilOp(fail:number, zfail:number, zpass:number):void;
    stencilOpSeparate(face:number, fail:number, zfail:number, zpass:number):void;
    texParameteri(target:number, pname:number, param:number):void;
    uniform1f(location:WebGLUniformLocation, x:number):void;
    uniform1i(location:WebGLUniformLocation, x:number):void;
    uniform2f(location:WebGLUniformLocation, x:number, y:number):void;
    uniform2i(location:WebGLUniformLocation, x:number, y:number):void;
    uniform3f(location:WebGLUniformLocation, x:number, y:number, z:number):void;
    uniform3i(location:WebGLUniformLocation, x:number, y:number, z:number):void;
    uniform4f(location:WebGLUniformLocation, x:number, y:number, z:number, w:number):void;
    uniform4i(location:WebGLUniformLocation, x:number, y:number, z:number, w:number):void;
    useProgram(program:WebGLProgram):void;
    vertexAttribPointer(indx:number, size:number, type:number, normalized:boolean, stride:number, offset:number):void;
    viewport(x:number, y:number, width:number, height:number):void;
}

interface WebGLShader extends WebGLObject {
}

interface WebGLTexture extends WebGLObject {
}

interface WebGLUniformLocation {
}

interface WebSocket extends EventTarget {
    readonly readyState:number;
    readonly bufferedAmount:number;
    readonly binaryType:string;
    readonly url:string;
    readonly extensions:string;
    readonly protocol:string;
    webSocket(url:string, protocols?: Array<string>):WebSocket;
    close(code?: number, reason?: string):void;
    send(data:string):void;
	onopen: ((this: any, event: Event) => any) | null;
	onerror: ((this: any, event: Event) => any) | null;
	onclose: ((this: any, event: Event) => any) | null;
	onmessage: ((this: any, event: Event) => any) | null;
}

interface Window extends EventTarget {
    readonly document:Document;
    readonly console:Console;
    readonly performance:Performance;
    readonly location:Location;
    readonly navigator:Navigator;
    readonly self:Window;
    readonly localStorage:Storage;
    readonly history:History;
    readonly parent:Window;
    readonly screen:Screen;
    readonly customElements:CustomElementRegistry;
    readonly outerHeight:number;
    readonly outerWidth:number;
    readonly innerHeight:number;
    readonly innerWidth:number;
    readonly screenX:number;
    readonly screenY:number;
    readonly screenLeft:number;
    readonly screenTop:number;
    readonly scrollX:number;
    readonly scrollY:number;
    readonly pageXOffset:number;
    readonly pageYOffset:number;
    readonly devicePixelRatio:number;
    readonly chrome:Chrome;
    addEventListener(type:string, listener:Function, useCapture?: boolean):void;
    cancelAnimationFrame(id:number):void;
    clearInterval(handle:number):void;
    clearTimeout(handle:number):void;
    dispatchEvent(event:Event):boolean;
    getComputedStyle(element:Element):CSSStyleDeclaration;
    getSelection():Selection;
    removeEventListener(type:string, listener:Function, useCapture?: boolean):void;
    requestAnimationFrame(callback:Function):number;
    scrollBy(x?: number, y?: number):void;
    scrollTo(x?: number, y?: number):void;
    setInterval(handler:Function, interval:number):number;
    setTimeout(handler:Function, timeout?: number):number;
	ongamepadconnected: ((this: any, event: Event) => any) | null;
	ongamepaddisconnected: ((this: any, event: Event) => any) | null;
	onpopstate: ((this: any, event: Event) => any) | null;
	onresize: ((this: any, event: Event) => any) | null;
	onvrdisplayactivate: ((this: any, event: Event) => any) | null;
	onvrdisplayblur: ((this: any, event: Event) => any) | null;
	onvrdisplayconnect: ((this: any, event: Event) => any) | null;
	onvrdisplaydeactivate: ((this: any, event: Event) => any) | null;
	onvrdisplaydisconnect: ((this: any, event: Event) => any) | null;
	onvrdisplayfocus: ((this: any, event: Event) => any) | null;
	onvrdisplaypresentchange: ((this: any, event: Event) => any) | null;
	onabort: ((this: any, event: Event) => any) | null;
	onblur: ((this: any, event: Event) => any) | null;
	onclick: ((this: any, event: Event) => any) | null;
	ondblclick: ((this: any, event: Event) => any) | null;
	onerror: ((this: any, event: Event) => any) | null;
	onfocus: ((this: any, event: Event) => any) | null;
	onkeydown: ((this: any, event: Event) => any) | null;
	onkeypress: ((this: any, event: Event) => any) | null;
	onkeyup: ((this: any, event: Event) => any) | null;
	onload: ((this: any, event: Event) => any) | null;
	onmousedown: ((this: any, event: Event) => any) | null;
	onmouseover: ((this: any, event: Event) => any) | null;
	onmouseout: ((this: any, event: Event) => any) | null;
	onmouseenter: ((this: any, event: Event) => any) | null;
	onmouseleave: ((this: any, event: Event) => any) | null;
	onmousemove: ((this: any, event: Event) => any) | null;
	onmouseup: ((this: any, event: Event) => any) | null;
	oninput: ((this: any, event: Event) => any) | null;
	onscroll: ((this: any, event: Event) => any) | null;
	onwheel: ((this: any, event: Event) => any) | null;
	ontouchstart: ((this: any, event: Event) => any) | null;
	ontouchend: ((this: any, event: Event) => any) | null;
	ontouchmove: ((this: any, event: Event) => any) | null;
}

declare var document: Document;
declare var console: Console;
declare var performance: Performance;
declare var location: Location;
declare var navigator: Navigator;
declare var self: Window;
declare var localStorage: Storage;
declare var history: History;
declare var parent: Window;
declare var screen: Screen;
declare var customElements: CustomElementRegistry;
declare var outerHeight: number;
declare var outerWidth: number;
declare var innerHeight: number;
declare var innerWidth: number;
declare var screenX: number;
declare var screenY: number;
declare var screenLeft: number;
declare var screenTop: number;
declare var scrollX: number;
declare var scrollY: number;
declare var pageXOffset: number;
declare var pageYOffset: number;
declare var devicePixelRatio: number;
declare var chrome: Chrome;
declare function addEventListener( type:string, listener:Function, useCapture?: boolean): void;
declare function cancelAnimationFrame( id:number): void;
declare function clearInterval( handle:number): void;
declare function clearTimeout( handle:number): void;
declare function dispatchEvent( event:Event): boolean;
declare function getComputedStyle( element:Element): CSSStyleDeclaration;
declare function getSelection( ): Selection;
declare function removeEventListener( type:string, listener:Function, useCapture?: boolean): void;
declare function requestAnimationFrame( callback:Function): number;
declare function scrollBy( x?: number, y?: number): void;
declare function scrollTo( x?: number, y?: number): void;
declare function setInterval( handler:Function, interval:number): number;
declare function setTimeout( handler:Function, timeout?: number): number;
declare var ongamepadconnected: ((this: Window, event: Event) => any) | null;
declare var ongamepaddisconnected: ((this: Window, event: Event) => any) | null;
declare var onpopstate: ((this: Window, event: Event) => any) | null;
declare var onresize: ((this: Window, event: Event) => any) | null;
declare var onvrdisplayactivate: ((this: Window, event: Event) => any) | null;
declare var onvrdisplayblur: ((this: Window, event: Event) => any) | null;
declare var onvrdisplayconnect: ((this: Window, event: Event) => any) | null;
declare var onvrdisplaydeactivate: ((this: Window, event: Event) => any) | null;
declare var onvrdisplaydisconnect: ((this: Window, event: Event) => any) | null;
declare var onvrdisplayfocus: ((this: Window, event: Event) => any) | null;
declare var onvrdisplaypresentchange: ((this: Window, event: Event) => any) | null;
declare var onabort: ((this: Window, event: Event) => any) | null;
declare var onblur: ((this: Window, event: Event) => any) | null;
declare var onclick: ((this: Window, event: Event) => any) | null;
declare var ondblclick: ((this: Window, event: Event) => any) | null;
declare var onerror: ((this: Window, event: Event) => any) | null;
declare var onfocus: ((this: Window, event: Event) => any) | null;
declare var onkeydown: ((this: Window, event: Event) => any) | null;
declare var onkeypress: ((this: Window, event: Event) => any) | null;
declare var onkeyup: ((this: Window, event: Event) => any) | null;
declare var onload: ((this: Window, event: Event) => any) | null;
declare var onmousedown: ((this: Window, event: Event) => any) | null;
declare var onmouseover: ((this: Window, event: Event) => any) | null;
declare var onmouseout: ((this: Window, event: Event) => any) | null;
declare var onmouseenter: ((this: Window, event: Event) => any) | null;
declare var onmouseleave: ((this: Window, event: Event) => any) | null;
declare var onmousemove: ((this: Window, event: Event) => any) | null;
declare var onmouseup: ((this: Window, event: Event) => any) | null;
declare var oninput: ((this: Window, event: Event) => any) | null;
declare var onscroll: ((this: Window, event: Event) => any) | null;
declare var onwheel: ((this: Window, event: Event) => any) | null;
declare var ontouchstart: ((this: Window, event: Event) => any) | null;
declare var ontouchend: ((this: Window, event: Event) => any) | null;
declare var ontouchmove: ((this: Window, event: Event) => any) | null;

declare var Window: {
	prototype: Window;
	new(): Window;
}

declare var window:Window;

interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    readonly readyState:number;
    timeout:number;
    withCredentials:boolean;
    readonly responseURL:string;
    readonly status:number;
    readonly statusText:string;
    responseType:string;
    readonly responseText:string;
    readonly response:any;
    xMLHttpRequest():XMLHttpRequest;
    abort():void;
    getAllResponseHeaders():string;
    getResponseHeader(name:string):string;
    open(method:string, url:string, async?: boolean, username?: string, password?: string):void;
    overrideMimeType(mime:string):void;
    responseArrayBuffer():ArrayBuffer;
    responseBlob():Blob;
    send(data?: string):void;
    setRequestHeader(name:string, value:string):void;
	onreadystatechange: ((this: any, event: Event) => any) | null;
	onloadstart: ((this: any, event: Event) => any) | null;
	onprogress: ((this: any, event: Event) => any) | null;
	onabort: ((this: any, event: Event) => any) | null;
	onerror: ((this: any, event: Event) => any) | null;
	onload: ((this: any, event: Event) => any) | null;
	ontimeout: ((this: any, event: Event) => any) | null;
	onloadend: ((this: any, event: Event) => any) | null;
}

interface XMLHttpRequestEventTarget extends EventTarget {
}

