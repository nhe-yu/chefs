$(document).ready(function () {
    $('.comment-form').each(function () {
        const commentForm = $(this);
        const usernameInput = commentForm.find('.username');
        const reviewInput = commentForm.find('.review');
        const submitButton = commentForm.find('.submit');
        const clearButton = commentForm.find('.clearReviews');
        const commentList = commentForm.find('.comment-list');

        submitButton.click(function () {
            const username = usernameInput.val();
            const newReview = reviewInput.val();

            if (username.trim() !== '' && newReview.trim() !== '') {
                console.log('Submitting review:', username, newReview); // Debug log username and review recieved
                $.post('/reviews', { username: username, review: newReview }, function () {
                    commentList.append(`<li>${username}: ${newReview}</li>`);
                    usernameInput.val('');
                    reviewInput.val('');
                });
            }
        });

        clearButton.click(function () {
            $.post('/clear-reviews', function () {
                commentList.empty();
            });
        });

        function loadReviews() {
            console.log('Received reviews:', data); // Debug log review
            $.get('/reviews', function (data) {
                commentList.empty();
                data.forEach(function (review) {
                    commentList.append(`<li>${review.username}: ${review.review}</li>`);
                });
            });
        }

        loadReviews();
    });
});
