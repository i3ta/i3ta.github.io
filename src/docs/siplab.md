With PhD candidate Kyle Johnsen, I am working on closed-loop optogenetic control
in computer models that can help us understand the brain in a way we never could
before.

---

# NNMPC

I am helping develop an approximation of optimal model predictive control using
neural networks. While the model was originally built using a multilayer
perceptron model, we expanded it to be able to use transformers as well to
capture more complex patterns.

# LQMPC

I helped develop a version of our linear-quadratic model predictive control
script (originally in Python) in C++ to improve the performance of the control
in actual experiments. Not only could the model achieve optimal control of a
linear system, the modified program was able to perform 25 times faster and able
to perform control on not just the latent states, but the output values.
