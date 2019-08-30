/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AvatarSource } from './avatar-source.enum';
/**
 *  Facebook source impelementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
var /**
 *  Facebook source impelementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
Facebook = /** @class */ (function () {
    function Facebook(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.FACEBOOK;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    Facebook.prototype.getAvatar = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return ('https://graph.facebook.com/' +
            (this.sourceId + "/picture?width=" + size + "&height=" + size));
    };
    return Facebook;
}());
/**
 *  Facebook source impelementation.
 *  Fetch avatar source based on facebook identifier
 *  and image size
 */
export { Facebook };
if (false) {
    /** @type {?} */
    Facebook.prototype.sourceType;
    /** @type {?} */
    Facebook.prototype.sourceId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXZhdGFyLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvZmFjZWJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBTXBEOzs7Ozs7SUFHRSxrQkFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUYxQixlQUFVLEdBQWlCLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFFcEIsQ0FBQzs7Ozs7SUFFaEMsNEJBQVM7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixPQUFPLENBQ0wsNkJBQTZCO2FBQzFCLElBQUksQ0FBQyxRQUFRLHVCQUFrQixJQUFJLGdCQUFXLElBQU0sQ0FBQSxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQzs7Ozs7Ozs7O0lBVkMsOEJBQTBEOztJQUU5Qyw0QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3VyY2UgfSBmcm9tICcuL3NvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG4vKipcbiAqICBGYWNlYm9vayBzb3VyY2UgaW1wZWxlbWVudGF0aW9uLlxuICogIEZldGNoIGF2YXRhciBzb3VyY2UgYmFzZWQgb24gZmFjZWJvb2sgaWRlbnRpZmllclxuICogIGFuZCBpbWFnZSBzaXplXG4gKi9cbmV4cG9ydCBjbGFzcyBGYWNlYm9vayBpbXBsZW1lbnRzIFNvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5GQUNFQk9PSztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlSWQ6IHN0cmluZykge31cblxuICBwdWJsaWMgZ2V0QXZhdGFyKHNpemU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8nICtcbiAgICAgIGAke3RoaXMuc291cmNlSWR9L3BpY3R1cmU/d2lkdGg9JHtzaXplfSZoZWlnaHQ9JHtzaXplfWBcbiAgICApO1xuICB9XG59XG4iXX0=