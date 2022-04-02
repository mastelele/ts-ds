import { IQueue } from '../interfaces'

export class Queue<T> implements IQueue<T> {
	private items: T[];

	constructor(items?: Iterable<T>) {
		this.items = items ? [...items] : [];
	}

	public size(): number {
		return this.items.length;
	}

	public isEmpty(): boolean {
		return this.size() === 0;
	}

	public contains(item: T): boolean {
		return this.items.includes(item);
	}

	public clear(): void {
		this.items = [];
	}

	public peek(): T {
		return this.items[0];
	}

	public enqueue(item: T): void {
		this.items.push(item);
	}

	public dequeue(): T | null {
		return this.size() === 0 ? null : this.items.shift() as T;
	}

	public toArray(): T[] {
		return this.items.slice();
	}

	[Symbol.iterator](): Iterator<T> {
		return this.items[Symbol.iterator]();
    }
}
