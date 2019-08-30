/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvatarConfigService } from './avatar-config.service';
import { AvatarSource } from './sources/avatar-source.enum';
/**
 * list of Supported avatar sources
 * @type {?}
 */
export const defaultSources = [
    AvatarSource.FACEBOOK,
    AvatarSource.GOOGLE,
    AvatarSource.TWITTER,
    AvatarSource.VKONTAKTE,
    AvatarSource.SKYPE,
    AvatarSource.GRAVATAR,
    AvatarSource.GITHUB,
    AvatarSource.CUSTOM,
    AvatarSource.INITIALS,
    AvatarSource.VALUE
];
/**
 * list of default colors
 * @type {?}
 */
export const defaultColors = [
    '#1abc9c',
    '#3498db',
    '#f1c40f',
    '#8e44ad',
    '#e74c3c',
    '#d35400',
    '#2c3e50',
    '#7f8c8d'
];
/**
 * Provides utilities methods related to Avatar component
 */
export class AvatarService {
    /**
     * @param {?} http
     * @param {?} avatarConfigService
     */
    constructor(http, avatarConfigService) {
        this.http = http;
        this.avatarConfigService = avatarConfigService;
        this.avatarSources = defaultSources;
        this.avatarColors = defaultColors;
        this.overrideAvatarSources();
        this.overrideAvatarColors();
    }
    /**
     * @param {?} avatarUrl
     * @return {?}
     */
    fetchAvatar(avatarUrl) {
        return this.http.get(avatarUrl);
    }
    /**
     * @param {?} avatarText
     * @return {?}
     */
    getRandomColor(avatarText) {
        if (!avatarText) {
            return 'transparent';
        }
        /** @type {?} */
        const asciiCodeSum = this.calculateAsciiCode(avatarText);
        return this.avatarColors[asciiCodeSum % this.avatarColors.length];
    }
    /**
     * @param {?} sourceType1
     * @param {?} sourceType2
     * @return {?}
     */
    copmareSources(sourceType1, sourceType2) {
        return (this.getSourcePriority(sourceType1) - this.getSourcePriority(sourceType2));
    }
    /**
     * @param {?} source
     * @return {?}
     */
    isSource(source) {
        return this.avatarSources.includes((/** @type {?} */ (source)));
    }
    /**
     * @param {?} sourceType
     * @return {?}
     */
    isTextAvatar(sourceType) {
        return [AvatarSource.INITIALS, AvatarSource.VALUE].includes(sourceType);
    }
    /**
     * @private
     * @return {?}
     */
    overrideAvatarSources() {
        this.avatarSources = this.avatarConfigService.getAvatarSources(defaultSources);
    }
    /**
     * @private
     * @return {?}
     */
    overrideAvatarColors() {
        this.avatarColors = this.avatarConfigService.getAvatarColors(defaultColors);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    calculateAsciiCode(value) {
        return value
            .split('')
            .map((/**
         * @param {?} letter
         * @return {?}
         */
        letter => letter.charCodeAt(0)))
            .reduce((/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        (previous, current) => previous + current));
    }
    /**
     * @private
     * @param {?} sourceType
     * @return {?}
     */
    getSourcePriority(sourceType) {
        return this.avatarSources.indexOf(sourceType);
    }
}
AvatarService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AvatarService.ctorParameters = () => [
    { type: HttpClient },
    { type: AvatarConfigService }
];
if (false) {
    /** @type {?} */
    AvatarService.prototype.avatarSources;
    /** @type {?} */
    AvatarService.prototype.avatarColors;
    /**
     * @type {?}
     * @private
     */
    AvatarService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AvatarService.prototype.avatarConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXZhdGFyLyIsInNvdXJjZXMiOlsibGliL2F2YXRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUlsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBSzVELE1BQU0sT0FBTyxjQUFjLEdBQUc7SUFDNUIsWUFBWSxDQUFDLFFBQVE7SUFDckIsWUFBWSxDQUFDLE1BQU07SUFDbkIsWUFBWSxDQUFDLE9BQU87SUFDcEIsWUFBWSxDQUFDLFNBQVM7SUFDdEIsWUFBWSxDQUFDLEtBQUs7SUFDbEIsWUFBWSxDQUFDLFFBQVE7SUFDckIsWUFBWSxDQUFDLE1BQU07SUFDbkIsWUFBWSxDQUFDLE1BQU07SUFDbkIsWUFBWSxDQUFDLFFBQVE7SUFDckIsWUFBWSxDQUFDLEtBQUs7Q0FDbkI7Ozs7O0FBS0QsTUFBTSxPQUFPLGFBQWEsR0FBRztJQUMzQixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztDQUNWOzs7O0FBTUQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBSXhCLFlBQ1UsSUFBZ0IsRUFDaEIsbUJBQXdDO1FBRHhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUwzQyxrQkFBYSxHQUFtQixjQUFjLENBQUM7UUFDL0MsaUJBQVksR0FBYSxhQUFhLENBQUM7UUFNNUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsU0FBaUI7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxVQUFrQjtRQUN0QyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxhQUFhLENBQUM7U0FDdEI7O2NBQ0ssWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7OztJQUVNLGNBQWMsQ0FDbkIsV0FBeUIsRUFDekIsV0FBeUI7UUFFekIsT0FBTyxDQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQzFFLENBQUM7SUFDSixDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxNQUFjO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFnQixDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsVUFBd0I7UUFDMUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FDNUQsY0FBYyxDQUNmLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBYTtRQUN0QyxPQUFPLEtBQUs7YUFDVCxLQUFLLENBQUMsRUFBRSxDQUFDO2FBQ1QsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQzthQUNuQyxNQUFNOzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsUUFBUSxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLFVBQXdCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBN0RGLFVBQVU7Ozs7WUF4Q0YsVUFBVTtZQUlWLG1CQUFtQjs7OztJQXNDMUIsc0NBQXNEOztJQUN0RCxxQ0FBOEM7Ozs7O0lBRzVDLDZCQUF3Qjs7Ozs7SUFDeEIsNENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdmF0YXJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9hdmF0YXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXZhdGFyU291cmNlIH0gZnJvbSAnLi9zb3VyY2VzL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogbGlzdCBvZiBTdXBwb3J0ZWQgYXZhdGFyIHNvdXJjZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRTb3VyY2VzID0gW1xuICBBdmF0YXJTb3VyY2UuRkFDRUJPT0ssXG4gIEF2YXRhclNvdXJjZS5HT09HTEUsXG4gIEF2YXRhclNvdXJjZS5UV0lUVEVSLFxuICBBdmF0YXJTb3VyY2UuVktPTlRBS1RFLFxuICBBdmF0YXJTb3VyY2UuU0tZUEUsXG4gIEF2YXRhclNvdXJjZS5HUkFWQVRBUixcbiAgQXZhdGFyU291cmNlLkdJVEhVQixcbiAgQXZhdGFyU291cmNlLkNVU1RPTSxcbiAgQXZhdGFyU291cmNlLklOSVRJQUxTLFxuICBBdmF0YXJTb3VyY2UuVkFMVUVcbl07XG5cbi8qKlxuICogbGlzdCBvZiBkZWZhdWx0IGNvbG9yc1xuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbG9ycyA9IFtcbiAgJyMxYWJjOWMnLFxuICAnIzM0OThkYicsXG4gICcjZjFjNDBmJyxcbiAgJyM4ZTQ0YWQnLFxuICAnI2U3NGMzYycsXG4gICcjZDM1NDAwJyxcbiAgJyMyYzNlNTAnLFxuICAnIzdmOGM4ZCdcbl07XG5cbi8qKlxuICogUHJvdmlkZXMgdXRpbGl0aWVzIG1ldGhvZHMgcmVsYXRlZCB0byBBdmF0YXIgY29tcG9uZW50XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdmF0YXJTZXJ2aWNlIHtcbiAgcHVibGljIGF2YXRhclNvdXJjZXM6IEF2YXRhclNvdXJjZVtdID0gZGVmYXVsdFNvdXJjZXM7XG4gIHB1YmxpYyBhdmF0YXJDb2xvcnM6IHN0cmluZ1tdID0gZGVmYXVsdENvbG9ycztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBhdmF0YXJDb25maWdTZXJ2aWNlOiBBdmF0YXJDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMub3ZlcnJpZGVBdmF0YXJTb3VyY2VzKCk7XG4gICAgdGhpcy5vdmVycmlkZUF2YXRhckNvbG9ycygpO1xuICB9XG5cbiAgcHVibGljIGZldGNoQXZhdGFyKGF2YXRhclVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChhdmF0YXJVcmwpO1xuICB9XG5cbiAgcHVibGljIGdldFJhbmRvbUNvbG9yKGF2YXRhclRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFhdmF0YXJUZXh0KSB7XG4gICAgICByZXR1cm4gJ3RyYW5zcGFyZW50JztcbiAgICB9XG4gICAgY29uc3QgYXNjaWlDb2RlU3VtID0gdGhpcy5jYWxjdWxhdGVBc2NpaUNvZGUoYXZhdGFyVGV4dCk7XG4gICAgcmV0dXJuIHRoaXMuYXZhdGFyQ29sb3JzW2FzY2lpQ29kZVN1bSAlIHRoaXMuYXZhdGFyQ29sb3JzLmxlbmd0aF07XG4gIH1cblxuICBwdWJsaWMgY29wbWFyZVNvdXJjZXMoXG4gICAgc291cmNlVHlwZTE6IEF2YXRhclNvdXJjZSxcbiAgICBzb3VyY2VUeXBlMjogQXZhdGFyU291cmNlXG4gICk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZ2V0U291cmNlUHJpb3JpdHkoc291cmNlVHlwZTEpIC0gdGhpcy5nZXRTb3VyY2VQcmlvcml0eShzb3VyY2VUeXBlMilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGlzU291cmNlKHNvdXJjZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXZhdGFyU291cmNlcy5pbmNsdWRlcyhzb3VyY2UgYXMgQXZhdGFyU291cmNlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1RleHRBdmF0YXIoc291cmNlVHlwZTogQXZhdGFyU291cmNlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFtBdmF0YXJTb3VyY2UuSU5JVElBTFMsIEF2YXRhclNvdXJjZS5WQUxVRV0uaW5jbHVkZXMoc291cmNlVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlQXZhdGFyU291cmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLmF2YXRhclNvdXJjZXMgPSB0aGlzLmF2YXRhckNvbmZpZ1NlcnZpY2UuZ2V0QXZhdGFyU291cmNlcyhcbiAgICAgIGRlZmF1bHRTb3VyY2VzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVBdmF0YXJDb2xvcnMoKTogdm9pZCB7XG4gICAgdGhpcy5hdmF0YXJDb2xvcnMgPSB0aGlzLmF2YXRhckNvbmZpZ1NlcnZpY2UuZ2V0QXZhdGFyQ29sb3JzKGRlZmF1bHRDb2xvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBc2NpaUNvZGUodmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICAuc3BsaXQoJycpXG4gICAgICAubWFwKGxldHRlciA9PiBsZXR0ZXIuY2hhckNvZGVBdCgwKSlcbiAgICAgIC5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIGN1cnJlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3VyY2VQcmlvcml0eShzb3VyY2VUeXBlOiBBdmF0YXJTb3VyY2UpIHtcbiAgICByZXR1cm4gdGhpcy5hdmF0YXJTb3VyY2VzLmluZGV4T2Yoc291cmNlVHlwZSk7XG4gIH1cbn1cbiJdfQ==