from pet import Pet


class dog(Pet):
    def __init__(self, name, triks):
        super().__init__(name, "dog", triks)

dog1 = dog ("Loo",["swim","sleep"])

dog1.noise()
