# How can you make this more scalable and reusable later?
from code import interact


def find_armstrong_numbers(numbers):
    finalArray = []
    for i in range(len(numbers)):
        num = list(str(numbers[i]))
        sum = 0
        for j in num:
            sum += pow(int(j), len(num))
        if sum == int(i):
            finalArray.append(sum)
    return finalArray

# print(find_armstrong_numbers(list(range(0,999))))