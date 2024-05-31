import random
import time

def quicksort(s):
    #jos listan pituus on yksi tai pienempi palautetaan lista suoraan
    if len(s) <= 1:
        return s

    #asetetaan pivottia (listan ensimmäinen alkio)
    pivot = s[0]

    #filteröidään vasen puolen alkiot, mikäli ne ovat pivottia pienempi
    left = list(filter(lambda x: x < pivot, s))

    #filteröidään keskipuolen alkiot, mikäli ne ovat pivottia yhtäsuuret
    center = [ i for i in s if i == pivot]
    
    #filteröidään oikean puolen alkiot, mikäli ne ovat pivottia suurempria
    right = list(filter(lambda x: x > pivot, s))

    #palautetaan järjestelty lista 
    return quicksort(left) + center + quicksort(right)

# print(quicksort([7,6,10,5,9,8,3,4]))



def test_quicksort():
    #luodaan satunnainen lista
    s = [random.randint(0, 10000) for _ in range(1000)]

    s_copy = s[:]

    start_time = time.time()
    #lajitelaan kopioitua listaa Quicksort-algoritmilla
    sorted_list = quicksort(s_copy)
    end_time = time.time()

    #pika tarkistus, että lista on järjestetty
    assert sorted_list == sorted(s), "Quicksort-algoritmi ei lajittele listaa oikein!"

    #lopuksi tulostetaan suoritusaika
    print('Quicksort-algoritmin suoritusaika: ', end_time - start_time, "sekuntia")

test_quicksort()