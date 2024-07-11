def solution(cards1, cards2, goal):
    l = len(goal)
    for _ in range(l):
        tmp = goal[0]
        if len(cards1) and cards1[0] == tmp:
            del goal[0]
            del cards1[0]
        elif len(cards2) and cards2[0] == tmp:
            del goal[0]
            del cards2[0]
        else: break

    return ['No' if len(goal) else 'Yes'][0] 

a = solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"])
print(a)

# ["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"]
# answer: Yes

# ["i", "water", "drink"],["want", "to"],["i", "want", "to", "drink", "water"]
# answer: No