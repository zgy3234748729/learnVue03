<div>
  123456
  <p>123456</p>
  <p>123456</p>
  <p>123456</p>
</div>;

const vNode = {
  type: "div",
  text: "123456",
  child: [
    { type: "p", text: "123456" },
    { type: "p", text: "123456" },
    { type: "p", text: "123456" },
  ],
};

function rendger(vNode, container) {
    // TODO:根据vNode创建DOM
    // 1.多叉树的遍历
    // 2.怎么创建节点
}
