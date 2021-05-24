(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{579:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"优美的运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优美的运算符"}},[s._v("#")]),s._v(" 优美的运算符")]),s._v(" "),a("h2",{attrs:{id:"链判断运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链判断运算符"}},[s._v("#")]),s._v(" 链判断运算符（?.）")]),s._v(" "),a("blockquote",[a("p",[s._v("非常好用、常用，搭配"),a("code",[s._v("Null 判断运算符")]),s._v("使用，效果更佳，完美！")])]),s._v(" "),a("p",[s._v("来，上代码：")]),s._v(" "),a("p",[s._v("我们通常获取一个对象多层的属性值时，需要进行多次的判断。如不判断，一个为空则报错，导致后面无法继续下去。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v("  firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ok")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("也可以用三元运算符"),a("code",[s._v("?:")]),s._v("来判断单个值，下面例子中，必须先判断"),a("code",[s._v("fooInput")]),s._v("是否存在，才能读取"),a("code",[s._v("fooInput.value")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fooInput "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input[name=foo]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fooValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fooInput "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" fooInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("\n")])])]),a("p",[s._v("接着，我们来使用 "),a("code",[s._v("?.")]),s._v(" 运算符看看有多神奇：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fooValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input[name=foo]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("value\n")])])]),a("p",[s._v("一气呵成，直接在链式调用的时候判断，左侧的对象是否为"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("。如果是，就不再往下运算，直接返回"),a("code",[s._v("undefined")])]),s._v(" "),a("p",[s._v("链判断运算符有三种用法。")]),s._v(" "),a("ul",[a("li",[s._v("obj?.prop // 对象属性")]),s._v(" "),a("li",[s._v("obj?.[expr] // 同上")]),s._v(" "),a("li",[s._v("func?.(...args) // 函数或对象方法的调用")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#C0FFEE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("#([A-Z]+)")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无匹配返回null，匹配则返回一个数组")]),s._v("\n\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("b\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b\n\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("上面代码中，特别注意后两种形式，如果"),a("code",[s._v("a?.b()")]),s._v("里面的"),a("code",[s._v("a.b")]),s._v("不是函数，那么"),a("code",[s._v("a?.b()")]),s._v("是会报错的。"),a("code",[s._v("a?.()")]),s._v("也是如此，如果"),a("code",[s._v("a")]),s._v("不是"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("，但也不是函数，那么"),a("code",[s._v("a?.()")]),s._v("会报错。")]),s._v(" "),a("p",[s._v("使用这个运算符，有几个注意点。")]),s._v(" "),a("h3",{attrs:{id:"_1-短路机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-短路机制"}},[s._v("#")]),s._v(" （1）短路机制")]),s._v(" "),a("p",[a("code",[s._v("?.")]),s._v("运算符相当于一种短路机制，只要不满足条件，就不再往下执行。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("上面代码中，如果"),a("code",[s._v("a")]),s._v("是"),a("code",[s._v("undefined")]),s._v("或"),a("code",[s._v("null")]),s._v("，那么x不会进行递增运算。也就是说，链判断运算符一旦为真，右侧的表达式就不再求值。")]),s._v(" "),a("h3",{attrs:{id:"_2-delete-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-delete-运算符"}},[s._v("#")]),s._v(" （2）delete 运算符")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("b\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b\n")])])]),a("p",[s._v("上面代码中，如果"),a("code",[s._v("a")]),s._v("是"),a("code",[s._v("undefined")]),s._v("或"),a("code",[s._v("null")]),s._v("，会直接返回"),a("code",[s._v("undefined")]),s._v("，而不会进行"),a("code",[s._v("delete")]),s._v("运算。")]),s._v(" "),a("h3",{attrs:{id:"_3-括号的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-括号的影响"}},[s._v("#")]),s._v(" （3）括号的影响")]),s._v(" "),a("p",[s._v("如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等价于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c\n")])])]),a("p",[s._v("上面代码中，"),a("code",[s._v("?.")]),s._v("对圆括号外部没有影响，不管"),a("code",[s._v("a")]),s._v("对象是否存在，圆括号后面的"),a("code",[s._v(".c")]),s._v("总是会执行。")]),s._v(" "),a("p",[s._v("一般来说，使用"),a("code",[s._v("?.")]),s._v("运算符的场合，不应该使用圆括号。")]),s._v(" "),a("h3",{attrs:{id:"_4-报错场合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-报错场合"}},[s._v("#")]),s._v(" （4）报错场合")]),s._v(" "),a("p",[s._v("以下写法是禁止的，会报错。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构造函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 链判断运算符的右侧有模板字符串")]),s._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("{b}")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("{c}")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 链判断运算符的左侧是 super")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("foo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 链运算符用于赋值运算符左侧")]),s._v("\na"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c\n")])])]),a("h3",{attrs:{id:"_5-右侧不得为十进制数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-右侧不得为十进制数值"}},[s._v("#")]),s._v(" （5）右侧不得为十进制数值")]),s._v(" "),a("p",[s._v("为了保证兼容以前的代码，允许"),a("code",[s._v("foo?.3:0")]),s._v("被解析成"),a("code",[s._v("foo ? .3 : 0")]),s._v("，因此规定如果?.后面紧跟一个十进制数字，那么?.不再被看成是一个完整的运算符，而会按照三元运算符进行处理，也就是说，那个小数点会归属于后面的十进制数字，形成一个小数。")]),s._v(" "),a("h2",{attrs:{id:"null-判断运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-判断运算符"}},[s._v("#")]),s._v(" Null 判断运算符（??）")]),s._v(" "),a("p",[s._v("读取对象属性的时候，如果某个属性的值是"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("，有时候需要为它们指定默认值。常见做法是通过"),a("code",[s._v("||")]),s._v("运算符指定默认值。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" headerText "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headerText "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" animationDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("animationDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" showSplashScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("showSplashScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("上面的三行代码都通过"),a("code",[s._v("||")]),s._v("运算符指定默认值，属性的值如果为"),a("code",[s._v("''")]),s._v("或"),a("code",[s._v("false")]),s._v("或"),a("code",[s._v("0")]),s._v("，默认值也会生效。")]),s._v(" "),a("p",[s._v("为了避免这种情况，ES2020 引入了一个新的 Null 判断运算符"),a("code",[s._v("??")]),s._v("。它的行为类似"),a("code",[s._v("||")]),s._v("，但是只有运算符左侧的值为"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("时，才会返回右侧的值。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" headerText "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headerText "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" animationDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("animationDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" showSplashScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("showSplashScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("上面代码中，默认值只有在左侧属性值为"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("时，才会生效。")]),s._v(" "),a("p",[s._v("这个运算符的一个目的，就是跟链判断运算符"),a("code",[s._v("?.")]),s._v("配合使用，为"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("的值设置默认值。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" animationDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("settings"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("animationDuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("上面代码中，如果"),a("code",[s._v("response.settings")]),s._v("是"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("，或者"),a("code",[s._v("response.settings.animationDuration")]),s._v("是"),a("code",[s._v("null")]),s._v("或"),a("code",[s._v("undefined")]),s._v("，就会返回默认值300。也就是说，这一行代码包括了两级属性的判断。")]),s._v(" "),a("p",[s._v("这个运算符很适合判断函数参数是否赋值:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" enable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?.")]),s._v("enable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// …")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上面代码等同于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    enable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" enable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// …")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("code",[s._v("??")]),s._v("有一个运算优先级问题，它与"),a("code",[s._v("&&")]),s._v("和"),a("code",[s._v("||")]),s._v("的优先级孰高孰低。现在的规则是，如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" rhs\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" rhs\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" rhs\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" rhs\n")])])]),a("p",[s._v("上面四个表达式都会报错，必须加入表明优先级的括号。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlhs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("??")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("middle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" rhs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"es版本更新的福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es版本更新的福利"}},[s._v("#")]),s._v(" ES版本更新的福利")]),s._v(" "),a("p",[s._v("在几个月前的腾讯开发者大会上，有位热心市民向ES开发者请教了这个问题，刚好借这篇文章的话题，在这里分享给大家！")]),s._v(" "),a("p",[s._v("关于ES版本更新，为什么ES5到ES6是大幅度书籍式的更新，此后版本更新只新增稀少的几个新技术？")]),s._v(" "),a("p",[s._v("原因：“怕你们学不动！”")]),s._v(" "),a("p",[s._v("其实，前者的更新方式，要学那么多东西，那么厚的一本天书，会给人一种望而却步的感觉，还没进门就先跪了。")]),s._v(" "),a("p",[s._v("后者来说，只是几个新技术，可能半天一天的，就能完全掌握并大结局了，收获的成就感会更多更快！")]),s._v(" "),a("p",[s._v("所以，学习是一辈子的事情，要么接受要么改变，愿好运！！！")])])}),[],!1,null,null,null);t.default=e.exports}}]);