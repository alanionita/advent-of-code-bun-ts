import { file } from 'bun'


export async function read(path: string) {
    const f = file(path);
    return await f.text();
}

export async function initWriter(path: string) {
    const f = file(path);
    const writer = f.writer();
    return writer;
}