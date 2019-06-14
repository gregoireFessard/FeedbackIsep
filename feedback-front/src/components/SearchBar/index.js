import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './index.css';


function no_accent(my_string)
{
// tableau accents
    var pattern_accent = new Array(/À/g, /Á/g, /Â/g, /Ã/g, /Ä/g, /Å/g, /Æ/g, /Ç/g, /È/g, /É/g, /Ê/g, /Ë/g,
        /Ì/g, /Í/g, /Î/g, /Ï/g, /Ð/g, /Ñ/g, /Ò/g, /Ó/g, /Ô/g, /Õ/g, /Ö/g, /Ø/g, /Ù/g, /Ú/g, /Û/g, /Ü/g, /Ý/g,
        /Þ/g, /ß/g, /à/g, /á/g, /â/g, /ã/g, /ä/g, /å/g, /æ/g, /ç/g, /è/g, /é/g, /ê/g, /ë/g, /ì/g, /í/g, /î/g,
        /ï/g, /ð/g, /ñ/g, /ò/g, /ó/g, /ô/g, /õ/g, /ö/g, /ø/g, /ù/g, /ú/g, /û/g, /ü/g, /ý/g, /ý/g, /þ/g, /ÿ/g);

    // tableau sans accents
    var pattern_replace_accent = new Array("A","A","A","A","A","A","A","C","E","E","E","E",
        "I","I","I","I","D","N","O","O","O","O","O","O","U","U","U","U","Y",
        "b","s","a","a","a","a","a","a","a","c","e","e","e","e","i","i","i",
        "i","d","n","o","o","o","o","o","o","u","u","u","u","y","y","b","y");

    //pour chaque caractere si accentué le remplacer par un non accentué
    for(var i=0;i<pattern_accent.length;i++)
    {
        my_string = my_string.replace(pattern_accent[i],pattern_replace_accent[i]);
    }
    return my_string;
}

class SearchAppBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            query : '',
            result : [],
            data : []
        }
    }
    getInfo = () => {
        const infos = [];
        this.props.data.map((info) => {
                if(no_accent(info.firstName).toLowerCase().match(no_accent(this.state.query).toLowerCase()) || no_accent(info.lastName).toLowerCase().match(no_accent(this.state.query).toLowerCase())){
                    infos.push(info)

                }
            }
        )
        this.props.handler(infos)
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        },
            () => {
            if (this.state.query ) {

                    this.getInfo()

            } else if (!this.state.query) {
                this.props.handler([])
            }
        })
    }
    render() {
        return (
            <div className={'root'}>
                <div className={'search'}>
                    <label className={"searchIcon"}>
                        <SearchIcon />
                    </label>
                    <label className={"searchText"}>
                        <InputBase
                            placeholder="Search…"
                            inputRef={value =>this.search = value}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </div>
            </div>
        );
    }

}

export default SearchAppBar;