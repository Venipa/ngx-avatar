import { Injectable, Inject, Optional } from '@angular/core';
import { AVATAR_CONFIG } from './avatar-config.token';
import * as i0 from "@angular/core";
export class AvatarConfigService {
    constructor(userConfig) {
        this.userConfig = userConfig;
    }
    getAvatarSources(defaultSources) {
        if (this.userConfig &&
            this.userConfig.sourcePriorityOrder &&
            this.userConfig.sourcePriorityOrder.length) {
            const uniqueSources = [...new Set(this.userConfig.sourcePriorityOrder)];
            const validSources = uniqueSources.filter(source => defaultSources.includes(source));
            return [
                ...validSources,
                ...defaultSources.filter(source => !validSources.includes(source))
            ];
        }
        return defaultSources;
    }
    getAvatarColors(defaultColors) {
        return ((this.userConfig &&
            this.userConfig.colors &&
            this.userConfig.colors.length &&
            this.userConfig.colors) ||
            defaultColors);
    }
    static { this.ɵfac = function AvatarConfigService_Factory(t) { return new (t || AvatarConfigService)(i0.ɵɵinject(AVATAR_CONFIG, 8)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AvatarConfigService, factory: AvatarConfigService.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AvatarConfigService, [{
        type: Injectable
    }], () => [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [AVATAR_CONFIG]
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF2YXRhci9zcmMvbGliL2F2YXRhci1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUl0RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBR1MsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUM5QixDQUFDO0lBRUcsZ0JBQWdCLENBQUMsY0FBOEI7UUFDcEQsSUFDRSxJQUFJLENBQUMsVUFBVTtZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUMxQyxDQUFDO1lBQ0QsTUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDakQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQztZQUNGLE9BQU87Z0JBQ0wsR0FBRyxZQUFZO2dCQUNmLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuRSxDQUFDO1FBQ0osQ0FBQztRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxlQUFlLENBQUMsYUFBdUI7UUFDNUMsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU07WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUN6QixhQUFhLENBQ2QsQ0FBQztJQUNKLENBQUM7b0ZBakNVLG1CQUFtQixjQUdwQixhQUFhO3VFQUhaLG1CQUFtQixXQUFuQixtQkFBbUI7O2lGQUFuQixtQkFBbUI7Y0FEL0IsVUFBVTs7c0JBR04sUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdmF0YXJTb3VyY2UgfSBmcm9tICcuL3NvdXJjZXMvYXZhdGFyLXNvdXJjZS5lbnVtJztcbmltcG9ydCB7IEFWQVRBUl9DT05GSUcgfSBmcm9tICcuL2F2YXRhci1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgQXZhdGFyQ29uZmlnIH0gZnJvbSAnLi9hdmF0YXItY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQVZBVEFSX0NPTkZJRylcbiAgICBwdWJsaWMgdXNlckNvbmZpZzogQXZhdGFyQ29uZmlnXG4gICkge31cblxuICBwdWJsaWMgZ2V0QXZhdGFyU291cmNlcyhkZWZhdWx0U291cmNlczogQXZhdGFyU291cmNlW10pOiBBdmF0YXJTb3VyY2VbXSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy51c2VyQ29uZmlnICYmXG4gICAgICB0aGlzLnVzZXJDb25maWcuc291cmNlUHJpb3JpdHlPcmRlciAmJlxuICAgICAgdGhpcy51c2VyQ29uZmlnLnNvdXJjZVByaW9yaXR5T3JkZXIubGVuZ3RoXG4gICAgKSB7XG4gICAgICBjb25zdCB1bmlxdWVTb3VyY2VzID0gWy4uLm5ldyBTZXQodGhpcy51c2VyQ29uZmlnLnNvdXJjZVByaW9yaXR5T3JkZXIpXTtcbiAgICAgIGNvbnN0IHZhbGlkU291cmNlcyA9IHVuaXF1ZVNvdXJjZXMuZmlsdGVyKHNvdXJjZSA9PlxuICAgICAgICBkZWZhdWx0U291cmNlcy5pbmNsdWRlcyhzb3VyY2UpXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4udmFsaWRTb3VyY2VzLFxuICAgICAgICAuLi5kZWZhdWx0U291cmNlcy5maWx0ZXIoc291cmNlID0+ICF2YWxpZFNvdXJjZXMuaW5jbHVkZXMoc291cmNlKSlcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0U291cmNlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmF0YXJDb2xvcnMoZGVmYXVsdENvbG9yczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLnVzZXJDb25maWcgJiZcbiAgICAgICAgdGhpcy51c2VyQ29uZmlnLmNvbG9ycyAmJlxuICAgICAgICB0aGlzLnVzZXJDb25maWcuY29sb3JzLmxlbmd0aCAmJlxuICAgICAgICB0aGlzLnVzZXJDb25maWcuY29sb3JzKSB8fFxuICAgICAgZGVmYXVsdENvbG9yc1xuICAgICk7XG4gIH1cbn1cbiJdfQ==