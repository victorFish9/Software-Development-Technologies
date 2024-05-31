def quicksort(s):

    if len(s) <= 1:
        return s

    pivot = s[0]

    left = list(filter(lambda x: x < pivot, s))
    center = [i for i in s if i == pivot]
    right = list(filter(lambda x: x > pivot, s))

    return quicksort(left) + center + quicksort(right)


if __name__ == "__main__":
    print(quicksort([7,6,5,3,1,4,9,10]))