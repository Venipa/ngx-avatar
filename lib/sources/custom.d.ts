import { Source } from './source';
import { AvatarSource } from './avatar-source.enum';
/**
 *  Custom source impelementation.
 *  return custom image as an avatar
 *
 */
export declare class Custom implements Source {
    sourceId: string;
    readonly sourceType: AvatarSource;
    constructor(sourceId: string);
    getAvatar(): string;
}
