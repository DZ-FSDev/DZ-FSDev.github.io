/*  Original Licensing Copyright
 * 
 *  Copyright (C) 2022  DZ-FSDev
 *  
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

$().ready(() => {
    $('#newsLetterSubmit').on('click', e => {
        // #newsLetterForm
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test($('#newsLetterForm').val())) {
            $('#newsLetterLabel').text('Thank you for subscribing!');
            $('#newsLetterForm').val('');
        } else {
            $('#newsLetterLabel').text('Email address is invalid.');
        }

        // Sorry, not taking any subscriptions at the moment :)
        e.preventDefault();
    });

    $('#newsLetterForm').on('input',
        e => {
            $('#newsLetterLabel').text('Email address');
        }
    );

    $('input').attr('autocomplete', 'off');
});