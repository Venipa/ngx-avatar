import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvatarConfigService } from './avatar-config.service';
import { AvatarSource } from './sources/avatar-source.enum';
/**
 * list of Supported avatar sources
 */
export declare const defaultSources: AvatarSource[];
/**
 * list of default colors
 */
export declare const defaultColors: string[];
/**
 * Provides utilities methods related to Avatar component
 */
export declare class AvatarService {
    private http;
    private avatarConfigService;
    avatarSources: AvatarSource[];
    avatarColors: string[];
    constructor(http: HttpClient, avatarConfigService: AvatarConfigService);
    fetchAvatar(avatarUrl: string): Observable<any>;
    getRandomColor(avatarText: string): string;
    copmareSources(sourceType1: AvatarSource, sourceType2: AvatarSource): number;
    isSource(source: string): boolean;
    isTextAvatar(sourceType: AvatarSource): boolean;
    private overrideAvatarSources;
    private overrideAvatarColors;
    private calculateAsciiCode;
    private getSourcePriority;
}
