export interface IStack<T> extends Iterable<T> {
	size(): number;
	isEmpty(): boolean;
	contains(item: T): boolean;
	push(item: T): void;
	peek(): T | null;
	pop(): T | null;
	clear(): void;
	toArray(): T[];
}
