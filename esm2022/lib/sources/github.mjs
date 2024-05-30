import { AsyncSource } from './async-source';
import { AvatarSource } from './avatar-source.enum';
/**
 *  GitHub source implementation.
 *  Fetch avatar source based on github identifier
 */
export class Github extends AsyncSource {
    constructor(sourceId) {
        super(sourceId);
        this.sourceType = AvatarSource.GITHUB;
    }
    getAvatar() {
        return `https://api.github.com/users/${this.sourceId}`;
    }
    /**
     * extract github avatar from json data
     */
    processResponse(data, size) {
        if (size) {
            return `${data.avatar_url}&s=${size}`;
        }
        return data.avatar_url;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF2YXRhci9zcmMvbGliL3NvdXJjZXMvZ2l0aHViLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQ7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLE1BQU8sU0FBUSxXQUFXO0lBR3JDLFlBQVksUUFBZ0I7UUFDMUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBSFQsZUFBVSxHQUFpQixZQUFZLENBQUMsTUFBTSxDQUFDO0lBSXhELENBQUM7SUFFTSxTQUFTO1FBQ2QsT0FBTyxnQ0FBZ0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWUsQ0FBQyxJQUE0QixFQUFFLElBQWE7UUFDaEUsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNTb3VyY2UgfSBmcm9tICcuL2FzeW5jLXNvdXJjZSc7XG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL2F2YXRhci1zb3VyY2UuZW51bSc7XG5cbi8qKlxuICogIEdpdEh1YiBzb3VyY2UgaW1wbGVtZW50YXRpb24uXG4gKiAgRmV0Y2ggYXZhdGFyIHNvdXJjZSBiYXNlZCBvbiBnaXRodWIgaWRlbnRpZmllclxuICovXG5leHBvcnQgY2xhc3MgR2l0aHViIGV4dGVuZHMgQXN5bmNTb3VyY2Uge1xuICByZWFkb25seSBzb3VyY2VUeXBlOiBBdmF0YXJTb3VyY2UgPSBBdmF0YXJTb3VyY2UuR0lUSFVCO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXJjZUlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzb3VyY2VJZCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXZhdGFyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dGhpcy5zb3VyY2VJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIGV4dHJhY3QgZ2l0aHViIGF2YXRhciBmcm9tIGpzb24gZGF0YVxuICAgKi9cbiAgcHVibGljIHByb2Nlc3NSZXNwb25zZShkYXRhOiB7IGF2YXRhcl91cmw6IHN0cmluZyB9LCBzaXplPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoc2l6ZSkge1xuICAgICAgcmV0dXJuIGAke2RhdGEuYXZhdGFyX3VybH0mcz0ke3NpemV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuYXZhdGFyX3VybDtcbiAgfVxufVxuIl19