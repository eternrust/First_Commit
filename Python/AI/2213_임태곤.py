from sklearn.datasets import load_iris  #0
from sklearn.model_selection import train_test_split    #1
from sklearn.neighbors import KNeighborsClassifier  #13

data = load_iris()  #2
print(data)   #3

print(data['feature_names'])  #4
print(data['data'])   #5
print(data['target_names'])   #6
print(data['target']) #7

feature = data['data'] #8
print(feature) #9

target = data['target'] #10
print(target)   #11

train_input, test_input, train_target, test_target = train_test_split(feature, target, stratify=target, random_state=42, train_size=int(len(feature) * 0.7), test_size=int(len(feature) * 0.3)) #12

kn = KNeighborsClassifier() #14
kn.fit(train_input, train_target)   #15

print(kn.score(test_input, test_target))    #16
print(kn.score(train_input, train_target))  #17

print(kn.predict([[6, 3, 5, 2]]))   #18
print(data['target_names'][kn.predict([[6, 3, 5, 2]])]) #19

#20
# 과소적합이다.
# 이유는 훈련 케이스의 적합률보다 테스트 케이스의 적합률이 더 높기 때문이다.