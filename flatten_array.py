input = ['aa', ['bb', 'cc'], ['dd', ['ee', 'ff', ['gg']]]]

def flatten(arr):
    flatten_array = []
    """ Flatten the given list into a single list of strings
    """
    for x in arr:
        # Call the function recursively if not string
        if isinstance(x, list):
            flatten_array.extend(flatten(x))
        # Append only if it is a string
        else:
            flatten_array.append(x)
    return flatten_array

# Result
print(flatten(input))
