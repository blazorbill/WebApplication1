window.jsfunction =
{
    focuselement: function (id) {
        const element = document.getElementById(id);
        if (!element)
            return;
        element.focus();
    },

    selectelement: function (id) {
        const element = document.getElementById(id);
        if (element) {
            element.select();
        }
    },
    blurelement: function (id) {
        const element = document.getElementById(id);
        if (element) {
            element.blur();
        }
    },
    getFocusedElement: function () {
        return document.activeElement.id;
    },
    SetPageTitle: function (title) {
        document.title = title;
    }
}