export default function* Counter() {
    let count = 0;

    const increment = () => {
        count++;
        this.refresh();
    };

    while (true) {
        yield (
            <div>
                <p>Count: {count}</p>
                <button onclick={increment}>
                    Increment
                </button>
            </div>
        );
    }
}