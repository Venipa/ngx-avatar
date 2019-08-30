/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AvatarSource } from './avatar-source.enum';
/**
 *  Twitter source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
var /**
 *  Twitter source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
Twitter = /** @class */ (function () {
    function Twitter(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.TWITTER;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Twitter.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        /** @type {?} */
        var twitterImgSize = this.getImageSize(size);
        return "https://twitter.com/" + this.sourceId + "/profile_image?size=" + twitterImgSize;
    };
    /**
     * @private
     * @param {?} size
     * @return {?}
     */
    Twitter.prototype.getImageSize = /**
     * @private
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (size <= 24) {
            return 'mini';
        }
        if (size <= 48) {
            return 'normal';
        }
        if (size <= 73) {
            return 'bigger';
        }
        return 'original';
    };
    return Twitter;
}());
/**
 *  Twitter source impelementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
export { Twitter };
if (false) {
    /** @type {?} */
    Twitter.prototype.sourceType;
    /** @type {?} */
    Twitter.prototype.sourceId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hdmF0YXIvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy90d2l0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQU9wRDs7Ozs7O0lBR0UsaUJBQW1CLFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFGMUIsZUFBVSxHQUFpQixZQUFZLENBQUMsT0FBTyxDQUFDO0lBRW5CLENBQUM7Ozs7O0lBRWhDLDJCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVk7O1lBQ3JCLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUM5QyxPQUFPLHlCQUNMLElBQUksQ0FBQyxRQUFRLDRCQUNRLGNBQWdCLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU8sOEJBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQVk7UUFDL0IsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ2QsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtZQUNkLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ2QsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7Ozs7Ozs7OztJQTFCQyw2QkFBeUQ7O0lBRTdDLDJCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4vc291cmNlJztcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gJy4vYXZhdGFyLXNvdXJjZS5lbnVtJztcblxuLyoqXG4gKiAgVHdpdHRlciBzb3VyY2UgaW1wZWxlbWVudGF0aW9uLlxuICogIEZldGNoIGF2YXRhciBzb3VyY2UgYmFzZWQgb24gZ29vZ2xlIGlkZW50aWZpZXJcbiAqICBhbmQgaW1hZ2Ugc2l6ZVxuICovXG5leHBvcnQgY2xhc3MgVHdpdHRlciBpbXBsZW1lbnRzIFNvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5UV0lUVEVSO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzb3VyY2VJZDogc3RyaW5nKSB7fVxuXG4gIHB1YmxpYyBnZXRBdmF0YXIoc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCB0d2l0dGVySW1nU2l6ZSA9IHRoaXMuZ2V0SW1hZ2VTaXplKHNpemUpO1xuICAgIHJldHVybiBgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke1xuICAgICAgdGhpcy5zb3VyY2VJZFxuICAgIH0vcHJvZmlsZV9pbWFnZT9zaXplPSR7dHdpdHRlckltZ1NpemV9YDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SW1hZ2VTaXplKHNpemU6IG51bWJlcikge1xuICAgIGlmIChzaXplIDw9IDI0KSB7XG4gICAgICByZXR1cm4gJ21pbmknO1xuICAgIH1cblxuICAgIGlmIChzaXplIDw9IDQ4KSB7XG4gICAgICByZXR1cm4gJ25vcm1hbCc7XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPD0gNzMpIHtcbiAgICAgIHJldHVybiAnYmlnZ2VyJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ29yaWdpbmFsJztcbiAgfVxufVxuIl19