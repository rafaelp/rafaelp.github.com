$(document).ready(()=>{$('[type=submit][name=submit]').on('click',(event)=>{$(event.currentTarget).addClass('disabled');let text=$(event.currentTarget).text();let loader='<div class="spinner-grow spinner-grow-sm"><span class="sr-only">Loading...</span></div>';$(event.currentTarget).html(loader);setTimeout(()=>{$(event.currentTarget).removeClass('disabled');$(event.currentTarget).text(text);},3000);});$('body').on('click','[data-confirm]',(event)=>{let message=$(event.currentTarget).attr('data-confirm');if(!confirm(message))return false;});$('[data-href]').on('click',event=>{let url=$(event.currentTarget).data('href');fade_out_redirect({url,full:true});});$('[data-toggle="tooltip"]').tooltip();$('.popover-dismiss').popover({trigger:'focus'})});