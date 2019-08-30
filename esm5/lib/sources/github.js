/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AsyncSource } from './async-source';
import { AvatarSource } from './avatar-source.enum';
/**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
var /**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
Github = /** @class */ (function (_super) {
    tslib_1.__extends(Github, _super);
    function Github(sourceId) {
        var _this = _super.call(this, sourceId) || this;
        _this.sourceType = AvatarSource.GITHUB;
        return _this;
    }
    /**
     * @return {?}
     */
    Github.prototype.getAvatar = /**
     * @return {?}
     */
    function () {
        return "https://api.github.com/users/" + this.sourceId;
    };
    /**
     * extract github avatar from json data
     */
    /**
     * extract github avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    Github.prototype.processResponse = /**
     * extract github avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    function (data, size) {
        if (size) {
            return data.avatar_url + "&s=" + size;
        }
        return data.avatar_url;
    };
    return Github;
}(AsyncSource));
/**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
export { Github };
if (false) {
    /** @type {?} */
    Github.prototype.sourceType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF2YXRhci8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBTXBEOzs7OztJQUE0QixrQ0FBVztJQUdyQyxnQkFBWSxRQUFnQjtRQUE1QixZQUNFLGtCQUFNLFFBQVEsQ0FBQyxTQUNoQjtRQUpRLGdCQUFVLEdBQWlCLFlBQVksQ0FBQyxNQUFNLENBQUM7O0lBSXhELENBQUM7Ozs7SUFFTSwwQkFBUzs7O0lBQWhCO1FBQ0UsT0FBTyxrQ0FBZ0MsSUFBSSxDQUFDLFFBQVUsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSSxnQ0FBZTs7Ozs7O0lBQXRCLFVBQXVCLElBQVMsRUFBRSxJQUFhO1FBQzdDLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBVSxJQUFJLENBQUMsVUFBVSxXQUFNLElBQU0sQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFwQkQsQ0FBNEIsV0FBVyxHQW9CdEM7Ozs7Ozs7O0lBbkJDLDRCQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jU291cmNlIH0gZnJvbSAnLi9hc3luYy1zb3VyY2UnO1xuaW1wb3J0IHsgQXZhdGFyU291cmNlIH0gZnJvbSAnLi9hdmF0YXItc291cmNlLmVudW0nO1xuXG4vKipcbiAqICBHaXRodWIgc291cmNlIGltcGVsZW1lbnRhdGlvbi5cbiAqICBGZXRjaCBhdmF0YXIgc291cmNlIGJhc2VkIG9uIGdpdGh1YiBpZGVudGlmaWVyXG4gKi9cbmV4cG9ydCBjbGFzcyBHaXRodWIgZXh0ZW5kcyBBc3luY1NvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5HSVRIVUI7XG5cbiAgY29uc3RydWN0b3Ioc291cmNlSWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNvdXJjZUlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmF0YXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt0aGlzLnNvdXJjZUlkfWA7XG4gIH1cblxuICAvKipcbiAgICogZXh0cmFjdCBnaXRodWIgYXZhdGFyIGZyb20ganNvbiBkYXRhXG4gICAqL1xuICBwdWJsaWMgcHJvY2Vzc1Jlc3BvbnNlKGRhdGE6IGFueSwgc2l6ZT86IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHNpemUpIHtcbiAgICAgIHJldHVybiBgJHtkYXRhLmF2YXRhcl91cmx9JnM9JHtzaXplfWA7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmF2YXRhcl91cmw7XG4gIH1cbn1cbiJdfQ==