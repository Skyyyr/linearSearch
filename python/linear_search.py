array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
        for i in range(len(array_to_search_through)):
            current_index = array_to_search_through[i]
            if value_to_find == current_index:
                return i

def linear_search_global(value_to_find, array_to_search_through):
    output_array = []
    for i in range(len(array_to_search_through)):
        current_index = array_to_search_through[i]
        if value_to_find == current_index:
            output_array.append(i)
    return output_array