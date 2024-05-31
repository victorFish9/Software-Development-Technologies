def laske_summa(a, b):
    sum = a + b
    return sum

def parillinen_pariton(luku):
    if luku % 2 == 0:
        return 'Luku on parillinen.'
    else:
        return 'Luku on pariton'

if __name__ =="__main__":
    print("Summa on", laske_summa(1, 1))
    print("Luku 3 on", parillinen_pariton(3))