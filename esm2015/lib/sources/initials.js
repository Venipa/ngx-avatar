/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AvatarSource } from './avatar-source.enum';
/**
 * Initials source impelementation.
 * return the initals of the given value
 */
export class Initials {
    /**
     * @param {?} sourceId
     */
    constructor(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.INITIALS;
    }
    /**
     * @param {?} initialsSize
     * @return {?}
     */
    getAvatar(initialsSize) {
        return this.getInitials(this.sourceId, initialsSize);
    }
    /**
     * Returns the initial letters of a name in a string.
     * @private
     * @param {?} name
     * @param {?} size
     * @return {?}
     */
    getInitials(name, size) {
        name = name ? name.trim() : null;
        if (!name) {
            return '';
        }
        /** @type {?} */
        const initials = name.split(' ');
        if (size && size < initials.length) {
            return this.constructInitials(initials.slice(0, size));
        }
        else {
            return this.constructInitials(initials);
        }
    }
    /**
     * Iterates a person's name string to get the initials of each word in uppercase.
     * @private
     * @param {?} elements
     * @return {?}
     */
    constructInitials(elements) {
        if (!elements || !elements.length) {
            return '';
        }
        return elements
            .filter((/**
         * @param {?} element
         * @return {?}
         */
        element => element && element.length > 0))
            .map((/**
         * @param {?} element
         * @return {?}
         */
        element => element[0].toUpperCase()))
            .join('');
    }
}
if (false) {
    /** @type {?} */
    Initials.prototype.sourceType;
    /** @type {?} */
    Initials.prototype.sourceId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXZhdGFyLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvaW5pdGlhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLFFBQVE7Ozs7SUFHbkIsWUFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUYxQixlQUFVLEdBQWlCLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFFcEIsQ0FBQzs7Ozs7SUFFaEMsU0FBUyxDQUFDLFlBQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7O0lBS08sV0FBVyxDQUFDLElBQVksRUFBRSxJQUFZO1FBQzVDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNYOztjQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUVoQyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7Ozs7SUFLTyxpQkFBaUIsQ0FBQyxRQUFrQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxRQUFRO2FBQ1osTUFBTTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO2FBQ2hELEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQzthQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0Y7OztJQXhDQyw4QkFBMEQ7O0lBRTlDLDRCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4vc291cmNlJztcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gJy4vYXZhdGFyLXNvdXJjZS5lbnVtJztcblxuLyoqXG4gKiBJbml0aWFscyBzb3VyY2UgaW1wZWxlbWVudGF0aW9uLlxuICogcmV0dXJuIHRoZSBpbml0YWxzIG9mIHRoZSBnaXZlbiB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgSW5pdGlhbHMgaW1wbGVtZW50cyBTb3VyY2Uge1xuICByZWFkb25seSBzb3VyY2VUeXBlOiBBdmF0YXJTb3VyY2UgPSBBdmF0YXJTb3VyY2UuSU5JVElBTFM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNvdXJjZUlkOiBzdHJpbmcpIHt9XG5cbiAgcHVibGljIGdldEF2YXRhcihpbml0aWFsc1NpemU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbHModGhpcy5zb3VyY2VJZCwgaW5pdGlhbHNTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpbml0aWFsIGxldHRlcnMgb2YgYSBuYW1lIGluIGEgc3RyaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRJbml0aWFscyhuYW1lOiBzdHJpbmcsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbmFtZSA9IG5hbWUgPyBuYW1lLnRyaW0oKSA6IG51bGw7XG5cbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFscyA9IG5hbWUuc3BsaXQoJyAnKTtcblxuICAgIGlmIChzaXplICYmIHNpemUgPCBpbml0aWFscy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdEluaXRpYWxzKGluaXRpYWxzLnNsaWNlKDAsIHNpemUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0SW5pdGlhbHMoaW5pdGlhbHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyBhIHBlcnNvbidzIG5hbWUgc3RyaW5nIHRvIGdldCB0aGUgaW5pdGlhbHMgb2YgZWFjaCB3b3JkIGluIHVwcGVyY2FzZS5cbiAgICovXG4gIHByaXZhdGUgY29uc3RydWN0SW5pdGlhbHMoZWxlbWVudHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBpZiAoIWVsZW1lbnRzIHx8ICFlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbiAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50WzBdLnRvVXBwZXJDYXNlKCkpXG4gICAgICAuam9pbignJyk7XG4gIH1cbn1cbiJdfQ==