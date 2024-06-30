import {
    makeObservable,
    observable,
    computed,
    action
} from 'mobx';

class Counter {
    // data members whose changes needs to be tracked are marked with @observable decorator
    @observable
    value: number;

    constructor( value : number ) {
        // this asks Mobx to track changes to the object being created
        makeObservable( this/*, {
            value: observable,
            increment: action,
            decrement: action
        }*/);

        // makeAutoObservable()

        this.value = value;
    }

    // Reference: https://github.com/mobxjs/mobx-react/issues/505 : Why it is better to use @action (performance improves by enforcing single render even when multiple state changes occur in the function)
    // action annotation is better to be applied on methods that change the observable state
    @action
    increment() {
        console.log( 'increment' );
        this.value++;
    }
    
    @action
    decrement() {
        console.log( 'decrement' );
        this.value--;
    }

    // Getters are accessed like normal properties - appCounter.square, and NOT appCounter.square()
    @computed get square() {
        return this.value * this.value;
    }
}

export default Counter;