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

/**
 * Enables Popover functionality to any elements which belong to the
 * class 'popover-dismiss-btn'.
 * 
 * @author DZ-FSDev
 * @version 0.0.8
 */
$().ready(() => {
    $('.popover-dismiss-btn').popover({
        container: 'body',
        trigger: 'focus',
        customClass: 'bg-smoke-success text-success'
    });
    $(document).bind("contextmenu", function (e) {
        e.preventDefault();
    });
    $(document).keydown(function(e){
        if(e.which === 123){
           return false;
        }
    });
});