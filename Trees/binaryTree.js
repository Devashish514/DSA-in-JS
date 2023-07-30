/**
 * Tree is a data structure , which has Node and Child Nodes. The first/Topmost is the root Node.
 * there are multiple tree Data Structure such as < Binary Search Trees, Binary Trees, self-balancing Binary search trees...
 */

// Tree Node..

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

// Binary Tree..
// binary tree has only two children nodes: left and right;

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

// A binary tree has a root value , which is initialized to null before any element is inserted..

// Tree Traversal..
// To traverse the tree, the left and right pointers have to be followed in order to go through every element in the tree.

/**
 * Pre-order Tree traversal  == root => left => right;
 * post-order  => left => right => root(currentNode);
 * in-order =>  left => root (current Node) => right;
 * level-order => it visists each node , level by level instead of going deep into left or right; also known as BFS;
*/

class BinaryTree {
    constructor() {
        this._root = null;
    }
    // traverse Recursively... base case is when the node is null..
    traversePreOrder() {
        traversePreOrderHelper(this._root);

        function traversePreOrderHelper(node) {
            if (!node) return;
            console.log(node.value);
            traversePreOrderHelper(node.left);
            traversePreOrderHelper(node.right);
        }
    }

    traverseInOrder() {
        traverseInOrderHelper(this._root);

        function traverseInOrderHelper(node) {
            if (!node) return;

            traverseInOrderHelper(node.left);
            console.log(node.value);
            traverseInOrderHelper(node.right);
        }
    }
    traversePostOrder() {
        traversePostOrderHelper(this._root);

        function traversePostOrderHelper(node) {
            if (node.left) {
                traversePostOrderHelper(node.left);
            }
            if (node.right) {
                traversePostOrderHelper(node.right);
            }
            console.log(node.value);
        }
    }
    traverseLevelOrder() {
        //  Breadth first search...
        let root = this._root;
        let queue = [];

        if (!root) return;
        queue.push(root);

        while (queue.length) {
            let temp = queue.shift();
            console.log(temp.value);
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }
    }
};

const bt = new BinaryTree();
bt._root = new BinaryTreeNode(42);
console.log("binary tree with root Node ", bt);
// filling left side of Root Node (42);
bt._root.left = new BinaryTreeNode(41);
bt._root.left.left = new BinaryTreeNode(10);
bt._root.left.right = new BinaryTreeNode(40);

console.log("binary tree with Nodes on left Side ", JSON.stringify(bt));

// filling right side of Root Node;
bt._root.right = new BinaryTreeNode(50);
bt._root.right.left = new BinaryTreeNode(45);
bt._root.right.right = new BinaryTreeNode(75);

console.log("complete binary tree ", JSON.stringify(bt));

bt.traversePreOrder(); // 42 41 10 40 50 45 75

/**
 * Actual Binary Tree ..
 * 
 * {"_root":{"value":42,"left":{"value":41,"left":{"value":10,"left":null,"right":null},"right":{"value":40,"left":null,"right":null}},"right":{"value":50,"left":{"value":45,"left":null,"right":null},"right":{"value":75,"left":null,"right":null}}}}
 */

bt.traverseInOrder();  // 10 41 40 42 45 50 75;

bt.traversePostOrder(); // 10 40 41 45 75 50 42;

bt.traverseLevelOrder(); // 42 41 50 10 40 45 75;




