export default {
    computed: {
        filteredOptions() {
            if (this.articals) {
                return this.articals.filter((option) => {
                    return option.status == 'published';
                });
            }
        },
    }
}
