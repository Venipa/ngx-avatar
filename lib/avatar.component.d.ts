import { EventEmitter, ElementRef, OnChanges, SimpleChange, OnDestroy } from '@angular/core';
import { SourceFactory } from './sources/source.factory';
import { AvatarService } from './avatar.service';
/**
 * Universal avatar component that
 * generates avatar from different sources
 *
 * export
 * class AvatarComponent
 * implements {OnChanges}
 */
export declare class AvatarComponent implements OnChanges, OnDestroy {
    elementRef: ElementRef;
    sourceFactory: SourceFactory;
    private avatarService;
    round: boolean;
    size: number;
    textSizeRatio: number;
    bgColor: string;
    fgColor: string;
    borderColor: string;
    style: any;
    cornerRadius: number;
    facebook: string;
    twitter: string;
    google: string;
    vkontakte: string;
    skype: string;
    gravatar: string;
    github: string;
    custom: string;
    initials: string;
    value: string;
    placeholder: string;
    initialsSize: number;
    clickOnAvatar: EventEmitter<any>;
    isAlive: boolean;
    avatarSrc: string;
    avatarText: string;
    avatarStyle: any;
    hostStyle: any;
    private currentSource;
    private sources;
    constructor(elementRef: ElementRef, sourceFactory: SourceFactory, avatarService: AvatarService);
    onAvatarClicked(): void;
    /**
     * Detect inputs change
     *
     * param {{ [propKey: string]: SimpleChange }} changes
     *
     * memberof AvatarComponent
     */
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    /**
     * Fetch avatar source
     *
     * param {any} event
     *
     * memberOf AvatarComponent
     */
    fetchAvatarSource(event?: any): void;
    ngOnDestroy(): void;
    /**
     * Initialize the avatar component and its fallback system
     */
    private initializeAvatar;
    private sortAvatarSources;
    private buildTextAvatar;
    private buildImageAvatar;
    /**
     *
     * returns initials style
     *
     * memberOf AvatarComponent
     */
    private getInitialsStyle;
    /**
     *
     * returns image style
     *
     * memberOf AvatarComponent
     */
    private getImageStyle;
    /**
     * Fetch avatar image asynchrounsly.
     *
     * param {Source} source represents avatar source
     * memberof AvatarComponent
     */
    private fetchAndProcessAsyncAvatar;
    /**
     * Add avatar source
     *
     * param sourceType avatar source type e.g facebook,twitter, etc.
     * param sourceValue  source value e.g facebookId value, etc.
     */
    private addSource;
    private isSourceExist;
}
