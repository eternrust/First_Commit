try:
    x = int(input("3의 배수를 입력하세요: "))
    if x % 3 != 0:
        raise Exception("3의 배수가 아닙니다.");
    print(x)
except Exception as e:
    print(e)