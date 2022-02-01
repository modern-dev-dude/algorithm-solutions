// Copied from  AlgoExpert LLC
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
		if(this.value > value  ){
			if(this.left === null){
				this.left = new BST(value);
			}else {
				this.left.insert(value)
			}
		} else{ 
			if(this.right === null){
					this.right = new BST(value);
				}else {
					this.right.insert(value)
				}
		}			
    return this;
  }

  contains(value) {
    // Write your code here.
		if( value < this.value ){
			if(this.left !== null ){
				return this.left.contains(value)				
			} 
		} else if( value > this.value  ){
			if(this.right !== null ){
				return this.right.contains(value)				
			} 
		} else if(value === this.value ){
			return true;
		}
		return false;
  }

  remove(value, parent = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
		if( value < this.value ){
			if(this.left !== null ){
				this.left.remove(value, this)		
			}
		} else if( value > this.value  ){
			if(this.right !== null ){
				this.right.remove(value, this)		
			}
		} else {
			// either it doesnt exsist or it is equal 
				if(this.left !== null && this.right !== null){
					this.value = this.right.getMinValFromRightTree();
					this.right.remove(this.value, this);
				} else if(parent === null ){
					if(this.left !== null){
						this.value = this.left.value;
						this.right = this.left.right;
						this.left = this.left.left;
					} else if(this.right !== null){
						this.value = this.right.value;
						this.left = this.right.left;
						this.right = this.right.right;
					} else {}
				} else if(parent.left === this){
					parent.left = (this.left !== null) ? this.left : this.right;
				} else if(parent.right === this){
					parent.right = (this.left !== null) ? this.left : this.right
				}
		}
    return this;
  }

	getMinValFromRightTree(){
		if(this.left === null){
			return this.value;
		}else{
			return this.left.getMinValFromRightTree();
		}
	}
}
