import * as vue from 'vue';
import { Ref, EffectScope, ComponentPropsOptions, ExtractPropTypes, nextTick } from 'vue';

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    targetEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
type ScrollStrategyFn = (data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps$1 {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFn;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope): void;

declare class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    });
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
}

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    target: Ref<HTMLElement | [x: number, y: number] | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
type LocationStrategyFn = (data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFn;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
    } | undefined;
};

declare const VSnackbar: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
        text?: string | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        timer?: string | boolean | undefined;
        theme?: string | undefined;
        contentClass?: any;
        rounded?: string | number | boolean | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }> & Omit<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, "absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: vue.Ref<HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: vue.Ref<HTMLElement | undefined>;
            globalTop: Readonly<vue.Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: vue.Ref<((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            afterLeave: () => true;
        }, string, {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Omit<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        contentClass?: any;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "target" | "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
        activatorEl: vue.Ref<HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: vue.Ref<HTMLElement | undefined>;
        globalTop: Readonly<vue.Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: vue.Ref<((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {}, "offset" | "key" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "target" | "class" | "ref" | "onAfterLeave" | "$children" | "theme" | "v-slot:default" | "v-slots" | "contentClass" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (v: boolean) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
        text?: string | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        timer?: string | boolean | undefined;
        theme?: string | undefined;
        contentClass?: any;
        rounded?: string | number | boolean | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        rounded: string | number | boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
        text?: string | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        timer?: string | boolean | undefined;
        theme?: string | undefined;
        contentClass?: any;
        rounded?: string | number | boolean | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }> & Omit<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, "absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: vue.Ref<HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: vue.Ref<HTMLElement | undefined>;
            globalTop: Readonly<vue.Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: vue.Ref<((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            afterLeave: () => true;
        }, string, {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Omit<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        contentClass?: any;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "target" | "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
        activatorEl: vue.Ref<HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: vue.Ref<HTMLElement | undefined>;
        globalTop: Readonly<vue.Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: vue.Ref<((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {}, "offset" | "key" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "target" | "class" | "ref" | "onAfterLeave" | "$children" | "theme" | "v-slot:default" | "v-slots" | "contentClass" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, {}, {}, {}, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        rounded: string | number | boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    timeout: string | number;
    vertical: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
} & {
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "static" | "sticky" | "relative" | undefined;
    text?: string | undefined;
    target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
    class?: any;
    timer?: string | boolean | undefined;
    theme?: string | undefined;
    contentClass?: any;
    rounded?: string | number | boolean | undefined;
    activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
        text?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
        text?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}, Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }> & Omit<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        contentClass?: any;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        contentClass?: any;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
    $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
    $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
    $el: any;
    $options: vue.ComponentOptionsBase<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        contentClass?: any;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, {
        activatorEl: vue.Ref<HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: vue.Ref<HTMLElement | undefined>;
        globalTop: Readonly<vue.Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: vue.Ref<((e: Event) => void) | undefined>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:outside': (e: MouseEvent) => true;
        'update:modelValue': (value: boolean) => true;
        afterLeave: () => true;
    }, string, {
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }, {}, string, vue.SlotsType<Partial<{
        default: (arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & Omit<{
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    });
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    _disableGlobalStack: boolean;
} & {
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
    class?: any;
    theme?: string | undefined;
    contentClass?: any;
    activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
} & {
    onAfterLeave?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
}, "target" | "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
    activatorEl: vue.Ref<HTMLElement | undefined>;
    target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
    animateClick: () => void;
    contentEl: vue.Ref<HTMLElement | undefined>;
    globalTop: Readonly<vue.Ref<boolean>>;
    localTop: vue.ComputedRef<boolean>;
    updateLocation: vue.Ref<((e: Event) => void) | undefined>;
}> & {} & vue.ComponentCustomProperties & {}, "offset" | "key" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "target" | "class" | "ref" | "onAfterLeave" | "$children" | "theme" | "v-slot:default" | "v-slots" | "contentClass" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: boolean) => boolean;
}, string, {
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    timeout: string | number;
    vertical: boolean;
    rounded: string | number | boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
}, {}, string, vue.SlotsType<Partial<{
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    offset: vue.PropType<string | number | number[] | undefined>;
    absolute: BooleanConstructor;
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: {
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    target: vue.PropType<Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: vue.PropType<any>;
    theme: StringConstructor;
    contentClass: null;
    modelValue: BooleanConstructor;
    activator: vue.PropType<Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined>;
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    attach: vue.PropType<string | boolean | Element>;
    color: StringConstructor;
    variant: {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "sticky" | "relative">;
        validator: (v: any) => boolean;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}, vue.ExtractPropTypes<{
    offset: vue.PropType<string | number | number[] | undefined>;
    absolute: BooleanConstructor;
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: {
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    target: vue.PropType<Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: vue.PropType<any>;
    theme: StringConstructor;
    contentClass: null;
    modelValue: BooleanConstructor;
    activator: vue.PropType<Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined>;
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    attach: vue.PropType<string | boolean | Element>;
    color: StringConstructor;
    variant: {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "sticky" | "relative">;
        validator: (v: any) => boolean;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}>>;
type VSnackbar = InstanceType<typeof VSnackbar>;

export { VSnackbar };
