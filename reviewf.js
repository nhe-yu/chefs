$(document).ready(function () {
    const reviewList = $('#reviewList');
    const reviewInput = $('#reviewInput');
    const submitButton = $('#submitReview');

    function loadReviews() {
        // Fetch reviews from the server
        $.get('/reviews', function (data) {
            reviewList.empty();

            for (const review of data) {
                reviewList.append(`<li>${review}</li>`);
            }
        });
    }

    submitButton.click(function () {
        const newReview = reviewInput.val();

        if (newReview.trim() !== '') {
            // Send the new review to the server
            $.post('/reviews', { review: newReview }, function () {
                reviewList.append(`<li>${newReview}</li>`);
                reviewInput.val('');
            });
        }
    });

    loadReviews();
});
