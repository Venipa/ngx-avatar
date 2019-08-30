import { Source } from './source';
import { AvatarSource } from './avatar-source.enum';
/**
 *  Value source impelementation.
 *  return the value as avatar
 */
export declare class Value implements Source {
    sourceId: string;
    readonly sourceType: AvatarSource;
    constructor(sourceId: string);
    getAvatar(): string;
}
