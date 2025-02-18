import { merge } from './merge';

test('merges three sorted arrays correctly', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 7, 0];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
});
