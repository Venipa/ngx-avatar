/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { AsyncSource } from './sources/async-source';
import { SourceFactory } from './sources/source.factory';
import { AvatarService } from './avatar.service';
import { AvatarSource } from './sources/avatar-source.enum';
import { takeWhile, map } from 'rxjs/operators';
/**
 * Universal avatar component that
 * generates avatar from different sources
 *
 * export
 * class AvatarComponent
 * implements {OnChanges}
 */
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(elementRef, sourceFactory, avatarService) {
        this.elementRef = elementRef;
        this.sourceFactory = sourceFactory;
        this.avatarService = avatarService;
        this.round = true;
        this.size = 50;
        this.textSizeRatio = 3;
        this.fgColor = '#FFF';
        this.style = {};
        this.cornerRadius = 0;
        this.clickOnAvatar = new EventEmitter();
        this.isAlive = true;
        this.avatarStyle = {};
        this.hostStyle = {};
        this.currentSource = 0;
        this.sources = Array();
    }
    /**
     * @return {?}
     */
    AvatarComponent.prototype.onAvatarClicked = /**
     * @return {?}
     */
    function () {
        this.clickOnAvatar.emit(this.sources[this.currentSource - 1]);
    };
    /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     */
    /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     * @param {?} changes
     * @return {?}
     */
    AvatarComponent.prototype.ngOnChanges = /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var propName in changes) {
            if (this.avatarService.isSource(propName) &&
                changes[propName].currentValue) {
                /** @type {?} */
                var currentValue = changes[propName].currentValue;
                this.addSource(AvatarSource[propName.toUpperCase()], currentValue);
            }
        }
        // reintialize the avatar component when a source property value has changed
        // the fallback system must be re-invoked with the new values.
        this.initializeAvatar();
    };
    /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     */
    /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     * @param {?=} event
     * @return {?}
     */
    AvatarComponent.prototype.fetchAvatarSource = /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var avatarSource = this.sources[this.currentSource];
        if (!avatarSource) {
            return;
        }
        if (this.avatarService.isTextAvatar(avatarSource.sourceType)) {
            this.buildTextAvatar(avatarSource);
            // TODO: check if this is needed
            this.avatarSrc = undefined;
        }
        else {
            this.buildImageAvatar(avatarSource);
        }
        this.currentSource++;
    };
    /**
     * @return {?}
     */
    AvatarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isAlive = false;
    };
    /**
     * Initialize the avatar component and its fallback system
     */
    /**
     * Initialize the avatar component and its fallback system
     * @private
     * @return {?}
     */
    AvatarComponent.prototype.initializeAvatar = /**
     * Initialize the avatar component and its fallback system
     * @private
     * @return {?}
     */
    function () {
        this.currentSource = 0;
        if (this.sources.length > 0 && this.sources[this.currentSource]) {
            this.sortAvatarSources();
            this.fetchAvatarSource();
            this.hostStyle = {
                width: this.size + 'px',
                height: this.size + 'px'
            };
        }
    };
    /**
     * @private
     * @return {?}
     */
    AvatarComponent.prototype.sortAvatarSources = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.sources.sort((/**
         * @param {?} source1
         * @param {?} source2
         * @return {?}
         */
        function (source1, source2) {
            return _this.avatarService.copmareSources(source1.sourceType, source2.sourceType);
        }));
    };
    /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    AvatarComponent.prototype.buildTextAvatar = /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    function (avatarSource) {
        this.avatarText = avatarSource.getAvatar(this.initialsSize);
        this.avatarStyle = this.getInitialsStyle(avatarSource.sourceId);
    };
    /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    AvatarComponent.prototype.buildImageAvatar = /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    function (avatarSource) {
        this.avatarStyle = this.getImageStyle();
        if (avatarSource instanceof AsyncSource) {
            this.fetchAndProcessAsyncAvatar(avatarSource);
        }
        else {
            this.avatarSrc = avatarSource.getAvatar(this.size);
        }
    };
    /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     */
    /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     * @private
     * @param {?} avatarValue
     * @return {?}
     */
    AvatarComponent.prototype.getInitialsStyle = /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     * @private
     * @param {?} avatarValue
     * @return {?}
     */
    function (avatarValue) {
        return tslib_1.__assign({ textAlign: 'center', borderRadius: this.round ? '100%' : this.cornerRadius + 'px', border: this.borderColor ? '1px solid ' + this.borderColor : '', textTransform: 'uppercase', color: this.fgColor, backgroundColor: this.bgColor
                ? this.bgColor
                : this.avatarService.getRandomColor(avatarValue), font: Math.floor(this.size / this.textSizeRatio) +
                'px Helvetica, Arial, sans-serif', lineHeight: this.size + 'px' }, this.style);
    };
    /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     */
    /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     * @private
     * @return {?}
     */
    AvatarComponent.prototype.getImageStyle = /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__assign({ maxWidth: '100%', borderRadius: this.round ? '50%' : this.cornerRadius + 'px', border: this.borderColor ? '1px solid ' + this.borderColor : '', width: this.size, height: this.size }, this.style);
    };
    /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     */
    /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     * @private
     * @param {?} source
     * @return {?}
     */
    AvatarComponent.prototype.fetchAndProcessAsyncAvatar = /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     * @private
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var _this = this;
        this.avatarService
            .fetchAvatar(source.getAvatar())
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.isAlive; })), map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return source.processResponse(response, _this.size); })))
            .subscribe((/**
         * @param {?} avatarSrc
         * @return {?}
         */
        function (avatarSrc) { return (_this.avatarSrc = avatarSrc); }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.error("ngx-avatar: error while fetching " + source.sourceType + " avatar ");
        }));
    };
    /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     */
    /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     * @private
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    AvatarComponent.prototype.addSource = /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     * @private
     * @param {?} sourceType
     * @param {?} sourceValue
     * @return {?}
     */
    function (sourceType, sourceValue) {
        if (!this.isSourceExist(sourceType)) {
            this.sources.push(this.sourceFactory.newInstance(sourceType, sourceValue));
        }
        else {
            /** @type {?} */
            var index = this.sources.findIndex((/**
             * @param {?} source
             * @return {?}
             */
            function (source) { return source.sourceType === sourceType; }));
            this.sources[index].sourceId = sourceValue;
        }
    };
    /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    AvatarComponent.prototype.isSourceExist = /**
     * @private
     * @param {?} avatarSource
     * @return {?}
     */
    function (avatarSource) {
        return this.sources.map((/**
         * @param {?} source
         * @return {?}
         */
        function (source) { return source.sourceType; })).includes(avatarSource);
    };
    AvatarComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-avatar',
                    template: "\n    <div\n      (click)=\"onAvatarClicked()\"\n      class=\"avatar-container\"\n      [ngStyle]=\"hostStyle\"\n    >\n      <img\n        *ngIf=\"avatarSrc; else textAvatar\"\n        [src]=\"avatarSrc\"\n        [width]=\"size\"\n        [height]=\"size\"\n        [ngStyle]=\"avatarStyle\"\n        (error)=\"fetchAvatarSource($event)\"\n        class=\"avatar-content\"\n      />\n      <ng-template #textAvatar>\n        <div *ngIf=\"avatarText\" class=\"avatar-content\" [ngStyle]=\"avatarStyle\">\n          {{ avatarText }}\n        </div>\n      </ng-template>\n    </div>\n  ",
                    styles: ["\n      :host {\n        border-radius: '50%';\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    AvatarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SourceFactory },
        { type: AvatarService }
    ]; };
    AvatarComponent.propDecorators = {
        round: [{ type: Input }],
        size: [{ type: Input }],
        textSizeRatio: [{ type: Input }],
        bgColor: [{ type: Input }],
        fgColor: [{ type: Input }],
        borderColor: [{ type: Input }],
        style: [{ type: Input }],
        cornerRadius: [{ type: Input }],
        facebook: [{ type: Input, args: ['facebookId',] }],
        twitter: [{ type: Input, args: ['twitterId',] }],
        google: [{ type: Input, args: ['googleId',] }],
        vkontakte: [{ type: Input, args: ['vkontakteId',] }],
        skype: [{ type: Input, args: ['skypeId',] }],
        gravatar: [{ type: Input, args: ['gravatarId',] }],
        github: [{ type: Input, args: ['githubId',] }],
        custom: [{ type: Input, args: ['src',] }],
        initials: [{ type: Input, args: ['name',] }],
        value: [{ type: Input, args: ['value',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        initialsSize: [{ type: Input, args: ['initialsSize',] }],
        clickOnAvatar: [{ type: Output }]
    };
    return AvatarComponent;
}());
export { AvatarComponent };
if (false) {
    /** @type {?} */
    AvatarComponent.prototype.round;
    /** @type {?} */
    AvatarComponent.prototype.size;
    /** @type {?} */
    AvatarComponent.prototype.textSizeRatio;
    /** @type {?} */
    AvatarComponent.prototype.bgColor;
    /** @type {?} */
    AvatarComponent.prototype.fgColor;
    /** @type {?} */
    AvatarComponent.prototype.borderColor;
    /** @type {?} */
    AvatarComponent.prototype.style;
    /** @type {?} */
    AvatarComponent.prototype.cornerRadius;
    /** @type {?} */
    AvatarComponent.prototype.facebook;
    /** @type {?} */
    AvatarComponent.prototype.twitter;
    /** @type {?} */
    AvatarComponent.prototype.google;
    /** @type {?} */
    AvatarComponent.prototype.vkontakte;
    /** @type {?} */
    AvatarComponent.prototype.skype;
    /** @type {?} */
    AvatarComponent.prototype.gravatar;
    /** @type {?} */
    AvatarComponent.prototype.github;
    /** @type {?} */
    AvatarComponent.prototype.custom;
    /** @type {?} */
    AvatarComponent.prototype.initials;
    /** @type {?} */
    AvatarComponent.prototype.value;
    /** @type {?} */
    AvatarComponent.prototype.placeholder;
    /** @type {?} */
    AvatarComponent.prototype.initialsSize;
    /** @type {?} */
    AvatarComponent.prototype.clickOnAvatar;
    /** @type {?} */
    AvatarComponent.prototype.isAlive;
    /** @type {?} */
    AvatarComponent.prototype.avatarSrc;
    /** @type {?} */
    AvatarComponent.prototype.avatarText;
    /** @type {?} */
    AvatarComponent.prototype.avatarStyle;
    /** @type {?} */
    AvatarComponent.prototype.hostStyle;
    /**
     * @type {?}
     * @private
     */
    AvatarComponent.prototype.currentSource;
    /**
     * @type {?}
     * @private
     */
    AvatarComponent.prototype.sources;
    /** @type {?} */
    AvatarComponent.prototype.elementRef;
    /** @type {?} */
    AvatarComponent.prototype.sourceFactory;
    /**
     * @type {?}
     * @private
     */
    AvatarComponent.prototype.avatarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hdmF0YXIvIiwic291cmNlcyI6WyJsaWIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUlYLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFXaEQ7SUF1RkUseUJBQ1MsVUFBc0IsRUFDdEIsYUFBNEIsRUFDM0IsYUFBNEI7UUFGN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXZEL0IsVUFBSyxHQUFHLElBQUksQ0FBQztRQUViLFNBQUksR0FBRyxFQUFFLENBQUM7UUFFVixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUlsQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBSWpCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFFaEIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUEyQmpCLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFM0QsWUFBTyxHQUFHLElBQUksQ0FBQztRQUdmLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFFbkIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsWUFBTyxHQUFhLEtBQUssRUFBRSxDQUFDO0lBTWpDLENBQUM7Ozs7SUFFRyx5Q0FBZTs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7OztJQUNJLHFDQUFXOzs7Ozs7Ozs7SUFBbEIsVUFBbUIsT0FBNEM7UUFDN0QsS0FBSyxJQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDOUIsSUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQzlCOztvQkFDTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVk7Z0JBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3BFO1NBQ0Y7UUFDRCw0RUFBNEU7UUFDNUUsOERBQThEO1FBQzlELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDSSwyQ0FBaUI7Ozs7Ozs7OztJQUF4QixVQUF5QixLQUFXOztZQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuQyxnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU0scUNBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ssMENBQWdCOzs7OztJQUF4QjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTthQUN6QixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVPLDJDQUFpQjs7OztJQUF6QjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLE9BQU87WUFDakMsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFBekUsQ0FBeUUsRUFDMUUsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHlDQUFlOzs7OztJQUF2QixVQUF3QixZQUFvQjtRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFTywwQ0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLFlBQW9CO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQUksWUFBWSxZQUFZLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7Ozs7SUFDSywwQ0FBZ0I7Ozs7Ozs7OztJQUF4QixVQUF5QixXQUFtQjtRQUMxQywwQkFDRSxTQUFTLEVBQUUsUUFBUSxFQUNuQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFDNUQsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQy9ELGFBQWEsRUFBRSxXQUFXLEVBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQ2xELElBQUksRUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDMUMsaUNBQWlDLEVBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFDekIsSUFBSSxDQUFDLEtBQUssRUFDYjtJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0ssdUNBQWE7Ozs7Ozs7O0lBQXJCO1FBQ0UsMEJBQ0UsUUFBUSxFQUFFLE1BQU0sRUFDaEIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQzNELE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUMvRCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQ2QsSUFBSSxDQUFDLEtBQUssRUFDYjtJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRzs7Ozs7Ozs7OztJQUNLLG9EQUEwQjs7Ozs7Ozs7O0lBQWxDLFVBQW1DLE1BQW1CO1FBQXRELGlCQWVDO1FBZEMsSUFBSSxDQUFDLGFBQWE7YUFDZixXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQy9CLElBQUksQ0FDSCxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBWixDQUFZLEVBQUMsRUFDN0IsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUEzQyxDQUEyQyxFQUFDLENBQzdEO2FBQ0EsU0FBUzs7OztRQUNSLFVBQUEsU0FBUyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxFQUE1QixDQUE0Qjs7OztRQUN6QyxVQUFBLEdBQUc7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUNYLHNDQUFvQyxNQUFNLENBQUMsVUFBVSxhQUFVLENBQ2hFLENBQUM7UUFDSixDQUFDLEVBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7Ozs7SUFDSyxtQ0FBUzs7Ozs7Ozs7OztJQUFqQixVQUFrQixVQUF3QixFQUFFLFdBQW1CO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FDeEQsQ0FBQztTQUNIO2FBQU07O2dCQUNDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7WUFDbEMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBaEMsQ0FBZ0MsRUFDM0M7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7U0FDNUM7SUFDSCxDQUFDOzs7Ozs7SUFFTyx1Q0FBYTs7Ozs7SUFBckIsVUFBc0IsWUFBMEI7UUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxVQUFVLEVBQWpCLENBQWlCLEVBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Z0JBeFFGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLFlBQVk7b0JBUXRCLFFBQVEsRUFBRSw2a0JBcUJUOzZCQTNCQywrREFJQztpQkF3Qko7Ozs7Z0JBdERDLFVBQVU7Z0JBUUgsYUFBYTtnQkFDYixhQUFhOzs7d0JBK0NuQixLQUFLO3VCQUVMLEtBQUs7Z0NBRUwsS0FBSzswQkFFTCxLQUFLOzBCQUVMLEtBQUs7OEJBRUwsS0FBSzt3QkFFTCxLQUFLOytCQUVMLEtBQUs7MkJBRUwsS0FBSyxTQUFDLFlBQVk7MEJBRWxCLEtBQUssU0FBQyxXQUFXO3lCQUVqQixLQUFLLFNBQUMsVUFBVTs0QkFFaEIsS0FBSyxTQUFDLGFBQWE7d0JBRW5CLEtBQUssU0FBQyxTQUFTOzJCQUVmLEtBQUssU0FBQyxZQUFZO3lCQUVsQixLQUFLLFNBQUMsVUFBVTt5QkFFaEIsS0FBSyxTQUFDLEtBQUs7MkJBRVgsS0FBSyxTQUFDLE1BQU07d0JBRVosS0FBSyxTQUFDLE9BQU87OEJBRWIsS0FBSyxTQUFDLGFBQWE7K0JBRW5CLEtBQUssU0FBQyxjQUFjO2dDQUdwQixNQUFNOztJQThMVCxzQkFBQztDQUFBLEFBelFELElBeVFDO1NBeE9ZLGVBQWU7OztJQUMxQixnQ0FDb0I7O0lBQ3BCLCtCQUNpQjs7SUFDakIsd0NBQ3lCOztJQUN6QixrQ0FDdUI7O0lBQ3ZCLGtDQUN3Qjs7SUFDeEIsc0NBQzJCOztJQUMzQixnQ0FDdUI7O0lBQ3ZCLHVDQUN3Qjs7SUFDeEIsbUNBQ3dCOztJQUN4QixrQ0FDdUI7O0lBQ3ZCLGlDQUNzQjs7SUFDdEIsb0NBQ3lCOztJQUN6QixnQ0FDcUI7O0lBQ3JCLG1DQUN3Qjs7SUFDeEIsaUNBQ3NCOztJQUN0QixpQ0FDc0I7O0lBQ3RCLG1DQUN3Qjs7SUFDeEIsZ0NBQ3FCOztJQUNyQixzQ0FDMkI7O0lBQzNCLHVDQUM0Qjs7SUFFNUIsd0NBQ2tFOztJQUVsRSxrQ0FBc0I7O0lBQ3RCLG9DQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQixzQ0FBNkI7O0lBQzdCLG9DQUEyQjs7Ozs7SUFFM0Isd0NBQTBCOzs7OztJQUMxQixrQ0FBb0M7O0lBR2xDLHFDQUE2Qjs7SUFDN0Isd0NBQW1DOzs7OztJQUNuQyx3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZSc7XG5pbXBvcnQgeyBBc3luY1NvdXJjZSB9IGZyb20gJy4vc291cmNlcy9hc3luYy1zb3VyY2UnO1xuaW1wb3J0IHsgU291cmNlRmFjdG9yeSB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBBdmF0YXJTZXJ2aWNlIH0gZnJvbSAnLi9hdmF0YXIuc2VydmljZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL3NvdXJjZXMvYXZhdGFyLXNvdXJjZS5lbnVtJztcbmltcG9ydCB7IHRha2VXaGlsZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFVuaXZlcnNhbCBhdmF0YXIgY29tcG9uZW50IHRoYXRcbiAqIGdlbmVyYXRlcyBhdmF0YXIgZnJvbSBkaWZmZXJlbnQgc291cmNlc1xuICpcbiAqIGV4cG9ydFxuICogY2xhc3MgQXZhdGFyQ29tcG9uZW50XG4gKiBpbXBsZW1lbnRzIHtPbkNoYW5nZXN9XG4gKi9cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtYXZhdGFyJyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAnNTAlJztcbiAgICAgIH1cbiAgICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgKGNsaWNrKT1cIm9uQXZhdGFyQ2xpY2tlZCgpXCJcbiAgICAgIGNsYXNzPVwiYXZhdGFyLWNvbnRhaW5lclwiXG4gICAgICBbbmdTdHlsZV09XCJob3N0U3R5bGVcIlxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgKm5nSWY9XCJhdmF0YXJTcmM7IGVsc2UgdGV4dEF2YXRhclwiXG4gICAgICAgIFtzcmNdPVwiYXZhdGFyU3JjXCJcbiAgICAgICAgW3dpZHRoXT1cInNpemVcIlxuICAgICAgICBbaGVpZ2h0XT1cInNpemVcIlxuICAgICAgICBbbmdTdHlsZV09XCJhdmF0YXJTdHlsZVwiXG4gICAgICAgIChlcnJvcik9XCJmZXRjaEF2YXRhclNvdXJjZSgkZXZlbnQpXCJcbiAgICAgICAgY2xhc3M9XCJhdmF0YXItY29udGVudFwiXG4gICAgICAvPlxuICAgICAgPG5nLXRlbXBsYXRlICN0ZXh0QXZhdGFyPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiYXZhdGFyVGV4dFwiIGNsYXNzPVwiYXZhdGFyLWNvbnRlbnRcIiBbbmdTdHlsZV09XCJhdmF0YXJTdHlsZVwiPlxuICAgICAgICAgIHt7IGF2YXRhclRleHQgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcHVibGljIHJvdW5kID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNpemUgPSA1MDtcbiAgQElucHV0KClcbiAgcHVibGljIHRleHRTaXplUmF0aW8gPSAzO1xuICBASW5wdXQoKVxuICBwdWJsaWMgYmdDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmdDb2xvciA9ICcjRkZGJztcbiAgQElucHV0KClcbiAgcHVibGljIGJvcmRlckNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdHlsZTogYW55ID0ge307XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb3JuZXJSYWRpdXMgPSAwO1xuICBASW5wdXQoJ2ZhY2Vib29rSWQnKVxuICBwdWJsaWMgZmFjZWJvb2s6IHN0cmluZztcbiAgQElucHV0KCd0d2l0dGVySWQnKVxuICBwdWJsaWMgdHdpdHRlcjogc3RyaW5nO1xuICBASW5wdXQoJ2dvb2dsZUlkJylcbiAgcHVibGljIGdvb2dsZTogc3RyaW5nO1xuICBASW5wdXQoJ3Zrb250YWt0ZUlkJylcbiAgcHVibGljIHZrb250YWt0ZTogc3RyaW5nO1xuICBASW5wdXQoJ3NreXBlSWQnKVxuICBwdWJsaWMgc2t5cGU6IHN0cmluZztcbiAgQElucHV0KCdncmF2YXRhcklkJylcbiAgcHVibGljIGdyYXZhdGFyOiBzdHJpbmc7XG4gIEBJbnB1dCgnZ2l0aHViSWQnKVxuICBwdWJsaWMgZ2l0aHViOiBzdHJpbmc7XG4gIEBJbnB1dCgnc3JjJylcbiAgcHVibGljIGN1c3RvbTogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKVxuICBwdWJsaWMgaW5pdGlhbHM6IHN0cmluZztcbiAgQElucHV0KCd2YWx1ZScpXG4gIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJylcbiAgcHVibGljIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnaW5pdGlhbHNTaXplJylcbiAgcHVibGljIGluaXRpYWxzU2l6ZTogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY2xpY2tPbkF2YXRhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgaXNBbGl2ZSA9IHRydWU7XG4gIHB1YmxpYyBhdmF0YXJTcmM6IHN0cmluZztcbiAgcHVibGljIGF2YXRhclRleHQ6IHN0cmluZztcbiAgcHVibGljIGF2YXRhclN0eWxlOiBhbnkgPSB7fTtcbiAgcHVibGljIGhvc3RTdHlsZTogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBjdXJyZW50U291cmNlID0gMDtcbiAgcHJpdmF0ZSBzb3VyY2VzOiBTb3VyY2VbXSA9IEFycmF5KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHNvdXJjZUZhY3Rvcnk6IFNvdXJjZUZhY3RvcnksXG4gICAgcHJpdmF0ZSBhdmF0YXJTZXJ2aWNlOiBBdmF0YXJTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgb25BdmF0YXJDbGlja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2tPbkF2YXRhci5lbWl0KHRoaXMuc291cmNlc1t0aGlzLmN1cnJlbnRTb3VyY2UgLSAxXSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZWN0IGlucHV0cyBjaGFuZ2VcbiAgICpcbiAgICogcGFyYW0ge3sgW3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9fSBjaGFuZ2VzXG4gICAqXG4gICAqIG1lbWJlcm9mIEF2YXRhckNvbXBvbmVudFxuICAgKi9cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYXZhdGFyU2VydmljZS5pc1NvdXJjZShwcm9wTmFtZSkgJiZcbiAgICAgICAgY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuICAgICAgICB0aGlzLmFkZFNvdXJjZShBdmF0YXJTb3VyY2VbcHJvcE5hbWUudG9VcHBlckNhc2UoKV0sIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJlaW50aWFsaXplIHRoZSBhdmF0YXIgY29tcG9uZW50IHdoZW4gYSBzb3VyY2UgcHJvcGVydHkgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAvLyB0aGUgZmFsbGJhY2sgc3lzdGVtIG11c3QgYmUgcmUtaW52b2tlZCB3aXRoIHRoZSBuZXcgdmFsdWVzLlxuICAgIHRoaXMuaW5pdGlhbGl6ZUF2YXRhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIGF2YXRhciBzb3VyY2VcbiAgICpcbiAgICogcGFyYW0ge2FueX0gZXZlbnRcbiAgICpcbiAgICogbWVtYmVyT2YgQXZhdGFyQ29tcG9uZW50XG4gICAqL1xuICBwdWJsaWMgZmV0Y2hBdmF0YXJTb3VyY2UoZXZlbnQ/OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBhdmF0YXJTb3VyY2UgPSB0aGlzLnNvdXJjZXNbdGhpcy5jdXJyZW50U291cmNlXTtcbiAgICBpZiAoIWF2YXRhclNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdmF0YXJTZXJ2aWNlLmlzVGV4dEF2YXRhcihhdmF0YXJTb3VyY2Uuc291cmNlVHlwZSkpIHtcbiAgICAgIHRoaXMuYnVpbGRUZXh0QXZhdGFyKGF2YXRhclNvdXJjZSk7XG4gICAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGlzIGlzIG5lZWRlZFxuICAgICAgdGhpcy5hdmF0YXJTcmMgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGRJbWFnZUF2YXRhcihhdmF0YXJTb3VyY2UpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRTb3VyY2UrKztcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBhdmF0YXIgY29tcG9uZW50IGFuZCBpdHMgZmFsbGJhY2sgc3lzdGVtXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVBdmF0YXIoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50U291cmNlID0gMDtcbiAgICBpZiAodGhpcy5zb3VyY2VzLmxlbmd0aCA+IDAgJiYgdGhpcy5zb3VyY2VzW3RoaXMuY3VycmVudFNvdXJjZV0pIHtcbiAgICAgIHRoaXMuc29ydEF2YXRhclNvdXJjZXMoKTtcbiAgICAgIHRoaXMuZmV0Y2hBdmF0YXJTb3VyY2UoKTtcbiAgICAgIHRoaXMuaG9zdFN0eWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5zaXplICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnNpemUgKyAncHgnXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc29ydEF2YXRhclNvdXJjZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2VzLnNvcnQoKHNvdXJjZTEsIHNvdXJjZTIpID0+XG4gICAgICB0aGlzLmF2YXRhclNlcnZpY2UuY29wbWFyZVNvdXJjZXMoc291cmNlMS5zb3VyY2VUeXBlLCBzb3VyY2UyLnNvdXJjZVR5cGUpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRUZXh0QXZhdGFyKGF2YXRhclNvdXJjZTogU291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5hdmF0YXJUZXh0ID0gYXZhdGFyU291cmNlLmdldEF2YXRhcih0aGlzLmluaXRpYWxzU2l6ZSk7XG4gICAgdGhpcy5hdmF0YXJTdHlsZSA9IHRoaXMuZ2V0SW5pdGlhbHNTdHlsZShhdmF0YXJTb3VyY2Uuc291cmNlSWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZEltYWdlQXZhdGFyKGF2YXRhclNvdXJjZTogU291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5hdmF0YXJTdHlsZSA9IHRoaXMuZ2V0SW1hZ2VTdHlsZSgpO1xuICAgIGlmIChhdmF0YXJTb3VyY2UgaW5zdGFuY2VvZiBBc3luY1NvdXJjZSkge1xuICAgICAgdGhpcy5mZXRjaEFuZFByb2Nlc3NBc3luY0F2YXRhcihhdmF0YXJTb3VyY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF2YXRhclNyYyA9IGF2YXRhclNvdXJjZS5nZXRBdmF0YXIodGhpcy5zaXplKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogcmV0dXJucyBpbml0aWFscyBzdHlsZVxuICAgKlxuICAgKiBtZW1iZXJPZiBBdmF0YXJDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SW5pdGlhbHNTdHlsZShhdmF0YXJWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMucm91bmQgPyAnMTAwJScgOiB0aGlzLmNvcm5lclJhZGl1cyArICdweCcsXG4gICAgICBib3JkZXI6IHRoaXMuYm9yZGVyQ29sb3IgPyAnMXB4IHNvbGlkICcgKyB0aGlzLmJvcmRlckNvbG9yIDogJycsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIGNvbG9yOiB0aGlzLmZnQ29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmdDb2xvclxuICAgICAgICA/IHRoaXMuYmdDb2xvclxuICAgICAgICA6IHRoaXMuYXZhdGFyU2VydmljZS5nZXRSYW5kb21Db2xvcihhdmF0YXJWYWx1ZSksXG4gICAgICBmb250OlxuICAgICAgICBNYXRoLmZsb29yKHRoaXMuc2l6ZSAvIHRoaXMudGV4dFNpemVSYXRpbykgK1xuICAgICAgICAncHggSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnNpemUgKyAncHgnLFxuICAgICAgLi4udGhpcy5zdHlsZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogcmV0dXJucyBpbWFnZSBzdHlsZVxuICAgKlxuICAgKiBtZW1iZXJPZiBBdmF0YXJDb21wb25lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SW1hZ2VTdHlsZSgpOiB2b2lkIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5yb3VuZCA/ICc1MCUnIDogdGhpcy5jb3JuZXJSYWRpdXMgKyAncHgnLFxuICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlckNvbG9yID8gJzFweCBzb2xpZCAnICsgdGhpcy5ib3JkZXJDb2xvciA6ICcnLFxuICAgICAgd2lkdGg6IHRoaXMuc2l6ZSxcbiAgICAgIGhlaWdodDogdGhpcy5zaXplLFxuICAgICAgLi4udGhpcy5zdHlsZVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEZldGNoIGF2YXRhciBpbWFnZSBhc3luY2hyb3Vuc2x5LlxuICAgKlxuICAgKiBwYXJhbSB7U291cmNlfSBzb3VyY2UgcmVwcmVzZW50cyBhdmF0YXIgc291cmNlXG4gICAqIG1lbWJlcm9mIEF2YXRhckNvbXBvbmVudFxuICAgKi9cbiAgcHJpdmF0ZSBmZXRjaEFuZFByb2Nlc3NBc3luY0F2YXRhcihzb3VyY2U6IEFzeW5jU291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5hdmF0YXJTZXJ2aWNlXG4gICAgICAuZmV0Y2hBdmF0YXIoc291cmNlLmdldEF2YXRhcigpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpLFxuICAgICAgICBtYXAocmVzcG9uc2UgPT4gc291cmNlLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSwgdGhpcy5zaXplKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGF2YXRhclNyYyA9PiAodGhpcy5hdmF0YXJTcmMgPSBhdmF0YXJTcmMpLFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgbmd4LWF2YXRhcjogZXJyb3Igd2hpbGUgZmV0Y2hpbmcgJHtzb3VyY2Uuc291cmNlVHlwZX0gYXZhdGFyIGBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhdmF0YXIgc291cmNlXG4gICAqXG4gICAqIHBhcmFtIHNvdXJjZVR5cGUgYXZhdGFyIHNvdXJjZSB0eXBlIGUuZyBmYWNlYm9vayx0d2l0dGVyLCBldGMuXG4gICAqIHBhcmFtIHNvdXJjZVZhbHVlICBzb3VyY2UgdmFsdWUgZS5nIGZhY2Vib29rSWQgdmFsdWUsIGV0Yy5cbiAgICovXG4gIHByaXZhdGUgYWRkU291cmNlKHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSwgc291cmNlVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1NvdXJjZUV4aXN0KHNvdXJjZVR5cGUpKSB7XG4gICAgICB0aGlzLnNvdXJjZXMucHVzaChcbiAgICAgICAgdGhpcy5zb3VyY2VGYWN0b3J5Lm5ld0luc3RhbmNlKHNvdXJjZVR5cGUsIHNvdXJjZVZhbHVlKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNvdXJjZXMuZmluZEluZGV4KFxuICAgICAgICBzb3VyY2UgPT4gc291cmNlLnNvdXJjZVR5cGUgPT09IHNvdXJjZVR5cGVcbiAgICAgICk7XG4gICAgICB0aGlzLnNvdXJjZXNbaW5kZXhdLnNvdXJjZUlkID0gc291cmNlVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1NvdXJjZUV4aXN0KGF2YXRhclNvdXJjZTogQXZhdGFyU291cmNlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlcy5tYXAoc291cmNlID0+IHNvdXJjZS5zb3VyY2VUeXBlKS5pbmNsdWRlcyhhdmF0YXJTb3VyY2UpO1xuICB9XG59XG4iXX0=