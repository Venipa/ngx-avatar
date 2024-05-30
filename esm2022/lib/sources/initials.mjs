import { AvatarSource } from './avatar-source.enum';
/**
 * Initials source implementation.
 * return the initials of the given value
 */
export class Initials {
    constructor(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.INITIALS;
    }
    getAvatar(size) {
        return this.getInitials(this.sourceId, size);
    }
    /**
     * Returns the initial letters of a name in a string.
     */
    getInitials(name, size) {
        name = name.trim();
        if (!name) {
            return '';
        }
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
     */
    constructInitials(elements) {
        if (!elements || !elements.length) {
            return '';
        }
        return elements
            .filter(element => element && element.length > 0)
            .map(element => element[0].toUpperCase())
            .join('');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXZhdGFyL3NyYy9saWIvc291cmNlcy9pbml0aWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQ7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLFFBQVE7SUFHbkIsWUFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUYxQixlQUFVLEdBQWlCLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFFcEIsQ0FBQztJQUVoQyxTQUFTLENBQUMsSUFBWTtRQUMzQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxXQUFXLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDNUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxpQkFBaUIsQ0FBQyxRQUFrQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELE9BQU8sUUFBUTthQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNoRCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnLi9zb3VyY2UnO1xuaW1wb3J0IHsgQXZhdGFyU291cmNlIH0gZnJvbSAnLi9hdmF0YXItc291cmNlLmVudW0nO1xuXG4vKipcbiAqIEluaXRpYWxzIHNvdXJjZSBpbXBsZW1lbnRhdGlvbi5cbiAqIHJldHVybiB0aGUgaW5pdGlhbHMgb2YgdGhlIGdpdmVuIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbml0aWFscyBpbXBsZW1lbnRzIFNvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5JTklUSUFMUztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc291cmNlSWQ6IHN0cmluZykge31cblxuICBwdWJsaWMgZ2V0QXZhdGFyKHNpemU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5pdGlhbHModGhpcy5zb3VyY2VJZCwgc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5pdGlhbCBsZXR0ZXJzIG9mIGEgbmFtZSBpbiBhIHN0cmluZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0SW5pdGlhbHMobmFtZTogc3RyaW5nLCBzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIG5hbWUgPSBuYW1lLnRyaW0oKTtcblxuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxzID0gbmFtZS5zcGxpdCgnICcpO1xuXG4gICAgaWYgKHNpemUgJiYgc2l6ZSA8IGluaXRpYWxzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0SW5pdGlhbHMoaW5pdGlhbHMuc2xpY2UoMCwgc2l6ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RJbml0aWFscyhpbml0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIGEgcGVyc29uJ3MgbmFtZSBzdHJpbmcgdG8gZ2V0IHRoZSBpbml0aWFscyBvZiBlYWNoIHdvcmQgaW4gdXBwZXJjYXNlLlxuICAgKi9cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RJbml0aWFscyhlbGVtZW50czogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGlmICghZWxlbWVudHMgfHwgIWVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xuICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgJiYgZWxlbWVudC5sZW5ndGggPiAwKVxuICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnRbMF0udG9VcHBlckNhc2UoKSlcbiAgICAgIC5qb2luKCcnKTtcbiAgfVxufVxuIl19