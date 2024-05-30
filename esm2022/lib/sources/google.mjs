import { AsyncSource } from './async-source';
import { AvatarSource } from './avatar-source.enum';
/**
 *  Google source implementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
export class Google extends AsyncSource {
    constructor(sourceId) {
        super(sourceId);
        this.sourceType = AvatarSource.GOOGLE;
    }
    getAvatar() {
        return `https://picasaweb.google.com/data/entry/api/user/${this.sourceId}?alt=json`;
    }
    /**
     * Extract google avatar from json data
     */
    processResponse(data, size) {
        const avatarSrc = data.entry.gphoto$thumbnail.$t;
        if (avatarSrc) {
            return avatarSrc.replace('s64', 's' + size);
        }
        return null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF2YXRhci9zcmMvbGliL3NvdXJjZXMvZ29vZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQ7Ozs7R0FJRztBQUNILE1BQU0sT0FBTyxNQUFPLFNBQVEsV0FBVztJQUdyQyxZQUFZLFFBQWdCO1FBQzFCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUhULGVBQVUsR0FBaUIsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUl4RCxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sb0RBQ0wsSUFBSSxDQUFDLFFBQ1AsV0FBVyxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZSxDQUFDLElBQXFELEVBQUUsSUFBYTtRQUN6RixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNqRCxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ2QsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNTb3VyY2UgfSBmcm9tICcuL2FzeW5jLXNvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogIEdvb2dsZSBzb3VyY2UgaW1wbGVtZW50YXRpb24uXG4gKiAgRmV0Y2ggYXZhdGFyIHNvdXJjZSBiYXNlZCBvbiBnb29nbGUgaWRlbnRpZmllclxuICogIGFuZCBpbWFnZSBzaXplXG4gKi9cbmV4cG9ydCBjbGFzcyBHb29nbGUgZXh0ZW5kcyBBc3luY1NvdXJjZSB7XG4gIHJlYWRvbmx5IHNvdXJjZVR5cGU6IEF2YXRhclNvdXJjZSA9IEF2YXRhclNvdXJjZS5HT09HTEU7XG5cbiAgY29uc3RydWN0b3Ioc291cmNlSWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNvdXJjZUlkKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmF0YXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vcGljYXNhd2ViLmdvb2dsZS5jb20vZGF0YS9lbnRyeS9hcGkvdXNlci8ke1xuICAgICAgdGhpcy5zb3VyY2VJZFxuICAgIH0/YWx0PWpzb25gO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgZ29vZ2xlIGF2YXRhciBmcm9tIGpzb24gZGF0YVxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NSZXNwb25zZShkYXRhOiB7IGVudHJ5OiB7IGdwaG90byR0aHVtYm5haWw6IHsgJHQ6IHN0cmluZyB9IH0gfSwgc2l6ZT86IG51bWJlcik6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGF2YXRhclNyYyA9IGRhdGEuZW50cnkuZ3Bob3RvJHRodW1ibmFpbC4kdDtcbiAgICBpZiAoYXZhdGFyU3JjKSB7XG4gICAgICByZXR1cm4gYXZhdGFyU3JjLnJlcGxhY2UoJ3M2NCcsICdzJyArIHNpemUpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=