
dec = {"a": 22, "b": 44}

def objToArray():
    res = []

    for key in dec:
        res.append([key, dec[key]])

    return res


print(objToArray())