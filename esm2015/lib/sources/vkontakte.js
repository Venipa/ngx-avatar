/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AsyncSource } from './async-source';
import { AvatarSource } from './avatar-source.enum';
/**
 *  Vkontakte source impelementation.
 *  Fetch avatar source based on vkontakte identifier
 *  and image size
 * @type {?}
 */
const apiVersion = 5.8;
export class Vkontakte extends AsyncSource {
    /**
     * @param {?} sourceId
     */
    constructor(sourceId) {
        super(sourceId);
        this.sourceType = AvatarSource.VKONTAKTE;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    getAvatar(size) {
        /** @type {?} */
        const imgSize = this.getImageSize(size);
        return `https://api.vk.com/method/users.get?user_id=${this.sourceId}&v=${apiVersion}&fields=${imgSize}`;
    }
    /**
     * extract vkontakte avatar from json data
     * @param {?} data
     * @return {?}
     */
    processResponse(data) {
        // avatar key property is the size used to generate avatar url
        // size property is always the last key in the response object
        /** @type {?} */
        const sizeProperty = Object.keys(data['response'][0]).pop();
        // return avatar src
        return data['response'][0][sizeProperty];
    }
    /**
     * Returns image size related to vkontakte API
     * @private
     * @param {?} size
     * @return {?}
     */
    getImageSize(size) {
        if (size <= 50) {
            return 'photo_50';
        }
        if (size <= 100) {
            return 'photo_100';
        }
        if (size <= 200) {
            return 'photo_200';
        }
        return 'photo_max';
    }
}
if (false) {
    /** @type {?} */
    Vkontakte.prototype.sourceType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmtvbnRha3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF2YXRhci8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3Zrb250YWt0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztNQU85QyxVQUFVLEdBQUcsR0FBRztBQUN0QixNQUFNLE9BQU8sU0FBVSxTQUFRLFdBQVc7Ozs7SUFHeEMsWUFBWSxRQUFnQjtRQUMxQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIVCxlQUFVLEdBQWlCLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFJM0QsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsSUFBWTs7Y0FDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLE9BQU8sK0NBQ0wsSUFBSSxDQUFDLFFBQ1AsTUFBTSxVQUFVLFdBQVcsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBS00sZUFBZSxDQUFDLElBQVM7Ozs7Y0FHeEIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQzNELG9CQUFvQjtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBS08sWUFBWSxDQUFDLElBQVk7UUFDL0IsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ2QsT0FBTyxVQUFVLENBQUM7U0FDbkI7UUFFRCxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDZixPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVELElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNmLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGOzs7SUExQ0MsK0JBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNTb3VyY2UgfSBmcm9tICcuL2FzeW5jLXNvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogIFZrb250YWt0ZSBzb3VyY2UgaW1wZWxlbWVudGF0aW9uLlxuICogIEZldGNoIGF2YXRhciBzb3VyY2UgYmFzZWQgb24gdmtvbnRha3RlIGlkZW50aWZpZXJcbiAqICBhbmQgaW1hZ2Ugc2l6ZVxuICovXG5jb25zdCBhcGlWZXJzaW9uID0gNS44O1xuZXhwb3J0IGNsYXNzIFZrb250YWt0ZSBleHRlbmRzIEFzeW5jU291cmNlIHtcbiAgcmVhZG9ubHkgc291cmNlVHlwZTogQXZhdGFyU291cmNlID0gQXZhdGFyU291cmNlLlZLT05UQUtURTtcblxuICBjb25zdHJ1Y3Rvcihzb3VyY2VJZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoc291cmNlSWQpO1xuICB9XG5cbiAgcHVibGljIGdldEF2YXRhcihzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGltZ1NpemUgPSB0aGlzLmdldEltYWdlU2l6ZShzaXplKTtcbiAgICByZXR1cm4gYGh0dHBzOi8vYXBpLnZrLmNvbS9tZXRob2QvdXNlcnMuZ2V0P3VzZXJfaWQ9JHtcbiAgICAgIHRoaXMuc291cmNlSWRcbiAgICB9JnY9JHthcGlWZXJzaW9ufSZmaWVsZHM9JHtpbWdTaXplfWA7XG4gIH1cblxuICAvKipcbiAgICogZXh0cmFjdCB2a29udGFrdGUgYXZhdGFyIGZyb20ganNvbiBkYXRhXG4gICAqL1xuICBwdWJsaWMgcHJvY2Vzc1Jlc3BvbnNlKGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgLy8gYXZhdGFyIGtleSBwcm9wZXJ0eSBpcyB0aGUgc2l6ZSB1c2VkIHRvIGdlbmVyYXRlIGF2YXRhciB1cmxcbiAgICAvLyBzaXplIHByb3BlcnR5IGlzIGFsd2F5cyB0aGUgbGFzdCBrZXkgaW4gdGhlIHJlc3BvbnNlIG9iamVjdFxuICAgIGNvbnN0IHNpemVQcm9wZXJ0eSA9IE9iamVjdC5rZXlzKGRhdGFbJ3Jlc3BvbnNlJ11bMF0pLnBvcCgpO1xuICAgIC8vIHJldHVybiBhdmF0YXIgc3JjXG4gICAgcmV0dXJuIGRhdGFbJ3Jlc3BvbnNlJ11bMF1bc2l6ZVByb3BlcnR5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGltYWdlIHNpemUgcmVsYXRlZCB0byB2a29udGFrdGUgQVBJXG4gICAqL1xuICBwcml2YXRlIGdldEltYWdlU2l6ZShzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChzaXplIDw9IDUwKSB7XG4gICAgICByZXR1cm4gJ3Bob3RvXzUwJztcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8PSAxMDApIHtcbiAgICAgIHJldHVybiAncGhvdG9fMTAwJztcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8PSAyMDApIHtcbiAgICAgIHJldHVybiAncGhvdG9fMjAwJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3Bob3RvX21heCc7XG4gIH1cbn1cbiJdfQ==