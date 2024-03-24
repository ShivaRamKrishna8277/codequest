$(document).ready(function() {
    $('body').prepend(`
    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
                <p class="h5 text-center">Are you sure you want to logout?</p>
                <p class="h6 text-center opacity-50">You can login back again</p>
            </div>
            <div class="modal-footer d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-success w-25" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger w-25">Logout</button>
            </div>
            </div>
        </div>
    </div>
    `);
});