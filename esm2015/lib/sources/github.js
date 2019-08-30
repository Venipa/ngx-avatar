/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AsyncSource } from './async-source';
import { AvatarSource } from './avatar-source.enum';
/**
 *  Github source impelementation.
 *  Fetch avatar source based on github identifier
 */
export class Github extends AsyncSource {
    /**
     * @param {?} sourceId
     */
    constructor(sourceId) {
        super(sourceId);
        this.sourceType = AvatarSource.GITHUB;
    }
    /**
     * @return {?}
     */
    getAvatar() {
        return `https://api.github.com/users/${this.sourceId}`;
    }
    /**
     * extract github avatar from json data
     * @param {?} data
     * @param {?=} size
     * @return {?}
     */
    processResponse(data, size) {
        if (size) {
            return `${data.avatar_url}&s=${size}`;
        }
        return data.avatar_url;
    }
}
if (false) {
    /** @type {?} */
    Github.prototype.sourceType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF2YXRhci8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2dpdGh1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLE1BQU8sU0FBUSxXQUFXOzs7O0lBR3JDLFlBQVksUUFBZ0I7UUFDMUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSFQsZUFBVSxHQUFpQixZQUFZLENBQUMsTUFBTSxDQUFDO0lBSXhELENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsT0FBTyxnQ0FBZ0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pELENBQUM7Ozs7Ozs7SUFLTSxlQUFlLENBQUMsSUFBUyxFQUFFLElBQWE7UUFDN0MsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7OztJQW5CQyw0QkFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1NvdXJjZSB9IGZyb20gJy4vYXN5bmMtc291cmNlJztcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gJy4vYXZhdGFyLXNvdXJjZS5lbnVtJztcblxuLyoqXG4gKiAgR2l0aHViIHNvdXJjZSBpbXBlbGVtZW50YXRpb24uXG4gKiAgRmV0Y2ggYXZhdGFyIHNvdXJjZSBiYXNlZCBvbiBnaXRodWIgaWRlbnRpZmllclxuICovXG5leHBvcnQgY2xhc3MgR2l0aHViIGV4dGVuZHMgQXN5bmNTb3VyY2Uge1xuICByZWFkb25seSBzb3VyY2VUeXBlOiBBdmF0YXJTb3VyY2UgPSBBdmF0YXJTb3VyY2UuR0lUSFVCO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZUlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzb3VyY2VJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXZhdGFyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dGhpcy5zb3VyY2VJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIGV4dHJhY3QgZ2l0aHViIGF2YXRhciBmcm9tIGpzb24gZGF0YVxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NSZXNwb25zZShkYXRhOiBhbnksIHNpemU/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChzaXplKSB7XG4gICAgICByZXR1cm4gYCR7ZGF0YS5hdmF0YXJfdXJsfSZzPSR7c2l6ZX1gO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5hdmF0YXJfdXJsO1xuICB9XG59XG4iXX0=