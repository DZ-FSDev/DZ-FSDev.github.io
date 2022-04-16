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
    let inputs = ['name', 'phone', 'email', 'message'];
    for (let elementId of inputs) {
        $(`#${elementId}`).on('input', () => $(`.contact-${elementId}-error`).animate(
            {opacity:"0%"},
            300
        ));
    }

    $('#contacter').on('reset',
    e => {
        $('.contact-error').animate(
            {opacity:0},
            200
        );
    });

    $('#contacter').on('submit',
        e => {
            let hasErrors = false;

            let formValidators = {
                name: /^.{1,100}$/,
                phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: /^.{1,255}$/,
            };

            for (let key in formValidators) {
                let acceptable = formValidators[key].test(
                    // Test n' Trim! (User shouldn't be able to submit spaces as a name.)
                    $(`#${key}`).val($(`#${key}`).val().trim()).val()
                );
                $(`.contact-${key}-error`).animate(
                    {opacity:`${acceptable ? '0' : '100'}%`},
                    200
                );
                //css({ 'display': acceptable ? 'none' : 'inline' });
                if (!acceptable && !hasErrors) {
                    document.getElementById(`${key}`).focus();
                }
                hasErrors ||= !acceptable;
            }

            if(hasErrors){
                e.preventDefault();
            }
        });
});