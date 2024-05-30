import { AvatarSource } from './avatar-source.enum';
/**
 *  Twitter source implementation.
 *  Fetch avatar source based on google identifier
 *  and image size
 */
export class Twitter {
    constructor(sourceId) {
        this.sourceId = sourceId;
        this.sourceType = AvatarSource.TWITTER;
    }
    getAvatar(size) {
        const twitterImgSize = this.getImageSize(size);
        return `https://twitter.com/${this.sourceId}/profile_image?size=${twitterImgSize}`;
    }
    getImageSize(size) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdmF0YXIvc3JjL2xpYi9zb3VyY2VzL3R3aXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBEOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sT0FBTztJQUdsQixZQUFtQixRQUFnQjtRQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBRjFCLGVBQVUsR0FBaUIsWUFBWSxDQUFDLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBRWhDLFNBQVMsQ0FBQyxJQUFZO1FBQzNCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsT0FBTyx1QkFDTCxJQUFJLENBQUMsUUFDUCx1QkFBdUIsY0FBYyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFZO1FBQy9CLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2YsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUVELElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2YsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUVELElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2YsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdXJjZSB9IGZyb20gJy4vc291cmNlJztcbmltcG9ydCB7IEF2YXRhclNvdXJjZSB9IGZyb20gJy4vYXZhdGFyLXNvdXJjZS5lbnVtJztcblxuLyoqXG4gKiAgVHdpdHRlciBzb3VyY2UgaW1wbGVtZW50YXRpb24uXG4gKiAgRmV0Y2ggYXZhdGFyIHNvdXJjZSBiYXNlZCBvbiBnb29nbGUgaWRlbnRpZmllclxuICogIGFuZCBpbWFnZSBzaXplXG4gKi9cbmV4cG9ydCBjbGFzcyBUd2l0dGVyIGltcGxlbWVudHMgU291cmNlIHtcbiAgcmVhZG9ubHkgc291cmNlVHlwZTogQXZhdGFyU291cmNlID0gQXZhdGFyU291cmNlLlRXSVRURVI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNvdXJjZUlkOiBzdHJpbmcpIHt9XG5cbiAgcHVibGljIGdldEF2YXRhcihzaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHR3aXR0ZXJJbWdTaXplID0gdGhpcy5nZXRJbWFnZVNpemUoc2l6ZSk7XG4gICAgcmV0dXJuIGBodHRwczovL3R3aXR0ZXIuY29tLyR7XG4gICAgICB0aGlzLnNvdXJjZUlkXG4gICAgfS9wcm9maWxlX2ltYWdlP3NpemU9JHt0d2l0dGVySW1nU2l6ZX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbWFnZVNpemUoc2l6ZTogbnVtYmVyKSB7XG4gICAgaWYgKHNpemUgPD0gMjQpIHtcbiAgICAgIHJldHVybiAnbWluaSc7XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPD0gNDgpIHtcbiAgICAgIHJldHVybiAnbm9ybWFsJztcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8PSA3Mykge1xuICAgICAgcmV0dXJuICdiaWdnZXInO1xuICAgIH1cblxuICAgIHJldHVybiAnb3JpZ2luYWwnO1xuICB9XG59XG4iXX0=