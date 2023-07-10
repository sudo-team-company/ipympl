interface ClipboardItem {
    readonly types: string[];
    readonly presentationStyle: 'unspecified' | 'inline' | 'attachment';
    getType(): Promise<Blob>;
}

interface ClipboardItemData {
    [mimeType: string]: Blob | string | Promise<Blob | string>;
}

declare class ClipboardItem {
    constructor(data: ClipboardItemData): ClipboardItem;
}

interface Clipboard {
    read(): Promise<DataTransfer>;
    write(data: ClipboardItem[]): Promise<void>;
}
